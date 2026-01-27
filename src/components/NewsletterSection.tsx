import { Mail, CheckCircle, Linkedin } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Newsletter subscription:", { name, email });
      setIsSubscribed(true);
      setIsLoading(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail("");
        setName("");
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-[#CFB991] rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Stay Updated
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300 mb-6">
            Subscribe to our newsletter to receive the latest research updates, 
            upcoming events, and water science news delivered to your inbox.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <Linkedin className="w-5 h-5 text-[#CFB991]" />
            <p className="text-sm">
              Follow us on{" "}
              <a 
                href="https://www.linkedin.com/company/water-institute-pnw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#CFB991] hover:underline"
              >
                LinkedIn
              </a>
              {" "}for real-time updates and announcements
            </p>
          </div>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#CFB991]"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="w-full px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#CFB991]"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 bg-[#CFB991] text-white rounded-lg hover:bg-[#b8a67d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Subscribing...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Subscribe to Newsletter
                </>
              )}
            </button>
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-500 bg-opacity-20 border-2 border-green-500 rounded-lg p-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Successfully Subscribed!</h3>
              <p className="text-gray-300">
                Thank you for subscribing, {name}! Check your inbox for a confirmation email.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}