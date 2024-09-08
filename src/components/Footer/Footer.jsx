import React from "react";
import logo from "../../../public/Images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-custom-blue-dark text-custom-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          {/* Logo and Description */}
          <div className="ml-16 mr-2">
            <img src={logo} className="h-20" alt="Logo" />
            <h3 className="text-2xl font-bold mb-2">ReZen</h3>
            <p className="text-gray-300 text-lg">
              Offering support and care to improve your well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div className="ml-20">
            <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-lg">
              <li>
                <a href="/about" className="hover:text-pink-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-pink-600">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-pink-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-pink-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media and Location */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center text-lg">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Bangalore, Karnataka, India
              </li>
            </ul>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-pink-600"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-pink-600"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-pink-600"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-pink-700"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </div>

          {/* Get in touch and Subscribe */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
            <form className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter email address"
                className="px-4 py-2 rounded-l-lg bg-gray-100 text-black"
              />
              <button className="bg-pink-600 text-white px-4 py-2 rounded-r-lg hover:bg-pink-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-pink-600 pt-4 text-gray-400 text-center">
          <p>&copy; 2024 ReZen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
