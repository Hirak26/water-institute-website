import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json({ limit: "200kb" }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

app.get("/api/health", (_, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "All fields are required." });
  }

  try {
    await transporter.sendMail({
      from: `"Water Institute Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `[Water Institute] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Email failed to send." });
  }
});

app.listen(PORT, () => {
  console.log(`Mail API running at http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import db from "./db.js";

dotenv.config();
const app = express();

app.use(cors({ origin: true }));
app.use(express.json({ limit: "200kb" }));

const PORT = process.env.PORT || 5050;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || "").trim());

// health
app.get("/api/health", (_, res) => res.json({ ok: true }));

// subscribe endpoint
app.post("/api/newsletter/subscribe", (req, res) => {
  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim().toLowerCase();

  if (!name || !email) return res.status(400).json({ ok: false, error: "Name and email required." });
  if (!isEmail(email)) return res.status(400).json({ ok: false, error: "Invalid email." });

  const createdAt = new Date().toISOString();

  db.run(
    `INSERT OR IGNORE INTO subscribers (name, email, created_at) VALUES (?, ?, ?)`,
    [name, email, createdAt],
    function (err) {
      if (err) return res.status(500).json({ ok: false, error: "DB error." });

      // if ignored => already exists
      if (this.changes === 0) {
        return res.json({ ok: true, message: "Already subscribed." });
      }

      return res.json({ ok: true, message: "Subscribed." });
    }
  );
});

// admin send newsletter
app.post("/api/admin/newsletter/send", (req, res) => {
  const token = req.headers["x-admin-token"];
  if (!ADMIN_TOKEN || token !== ADMIN_TOKEN) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }

  const title = String(req.body?.title || "").trim();
  const postUrl = String(req.body?.postUrl || "").trim();
  const note = String(req.body?.note || "").trim();

  if (!title || !postUrl) {
    return res.status(400).json({ ok: false, error: "Title and LinkedIn post URL are required." });
  }

  db.all(`SELECT name, email FROM subscribers ORDER BY id DESC`, [], async (err, rows) => {
    if (err) return res.status(500).json({ ok: false, error: "DB query failed." });
    if (!rows?.length) return res.status(400).json({ ok: false, error: "No subscribers yet." });

    try {
      // Send one-by-one (simple). For large lists, you’d use a bulk email provider.
      for (const r of rows) {
        await transporter.sendMail({
          from: `"PNW Water Institute" <${process.env.MAIL_USER}>`,
          to: r.email,
          subject: `[Water Institute] ${title}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
              <h2 style="margin:0 0 10px;">${title}</h2>
              ${note ? `<p style="margin:0 0 12px;">${note.replace(/\n/g, "<br/>")}</p>` : ""}
              <p style="margin:0 0 12px;">
                View the full update on LinkedIn:
                <br/>
                <a href="${postUrl}" target="_blank" rel="noreferrer">${postUrl}</a>
              </p>
              <hr style="border:none; border-top:1px solid #ddd; margin:16px 0;" />
              <p style="margin:0; font-size: 12px; color:#555;">
                You are receiving this because you subscribed to PNW Water Institute updates.
              </p>
            </div>
          `,
        });
      }

      res.json({ ok: true, sent: rows.length });
    } catch (e) {
      console.error(e);
      res.status(500).json({ ok: false, error: "Sending failed." });
    }
  });
});

app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
