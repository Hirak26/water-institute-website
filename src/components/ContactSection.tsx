// ContactSection.tsx
// ✅ Frontend contact section that sends form data to your backend endpoint:
// POST http://localhost:5050/api/contact
// Backend will email: hirakmodi26@gmail.com (per your Node/Nodemailer setup)

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch(import.meta.env.VITE_API_URL + "/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!data.ok) {
      alert("Failed to send. Please try again.");
      return;
    }

    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (err) {
    alert("Network error. Please try again.");
  }
};


  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-[#CFB991] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
            Get in touch with our team to learn more about our research, programs, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Address</h4>
                  <p className="text-gray-700">
                    Water Institute
                    <br />
                    Purdue University Northwest
                    <br />
                    2540 169th St. Schneider Avenue Building
                    <br />
                    Hammond, Indiana 46323
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Phone</h4>
                  <p className="text-gray-700">(219) 989-8373</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Email</h4>
                  <p className="text-gray-700">vgude@purdue.edu</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFB991]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFB991]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFB991]"
                  placeholder="Research Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CFB991]"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  isSending
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]"
                }`}
              >
                <Send className="w-5 h-5" />
                {isSending ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                This form sends your message to our team via a secure server endpoint.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
