// pages/contact.js
import { FaInstagram, FaPinterest, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-8">
      <div className="bg-white shadow-2xl rounded-lg p-10 max-w-3xl w-full space-y-8">
        
        {/* Welcome Message */}
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-4">
          Get in Touch with Us!
        </h2>
        <p className="text-center text-gray-700 text-lg">
          Were here to help! Whether you have questions, need assistance, or want a custom piece, we’d love to hear from you.
        </p>
        
        {/* Contact Form */}
        <form className="space-y-4 animate-fade-in">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600 font-semibold mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-600 font-semibold mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Custom Order Section */}
        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-lg p-6 text-center text-gray-700 animate-fade-in">
          <h3 className="text-2xl font-semibold text-blue-700">Looking for Custom Designs?</h3>
          <p className="mt-2">
            We specialize in crafting unique, personalized designs just for you. Whether you’re looking for something specific or need guidance, reach out, and let’s make it happen!
          </p>
          <p className="mt-2">
            Get in touch with us, and we’ll have your custom design ready within 6-12 hours!
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-8 border-t pt-6 text-center text-gray-600">
          <p><span className="font-semibold">Email:</span> support@yourwebsite.com</p>
          <p><span className="font-semibold">Phone:</span> +1 (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="text-gray-600 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest size={24} className="text-gray-600 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="text-gray-600 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="text-gray-600 hover:text-blue-500 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}

