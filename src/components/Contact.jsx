import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGoogle, SiInstagram } from 'react-icons/si';

function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-teal-600">Contact Me</h2>
                <form className="mt-8 max-w-md mx-auto">
                    <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg mb-4" required />
                    <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg mb-4" required />
                    <textarea name="message" rows="5" placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg mb-4" required></textarea>
                    <button type="submit" className="bg-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition">Send Message</button>
                </form>
                <div className="mt-8 flex justify-center space-x-6">
                <a href="https://github.com/yourusername" className="text-teal-500 hover:text-teal-600 transition">
                <FaGithub size={48} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-teal-500 hover:text-teal-600 transition">
                <FaLinkedin size={48} />
            </a>
            <a href="https://twitter.com/yourusername" className="text-teal-500 hover:text-teal-600 transition">
                <SiInstagram size={48} />
            </a>
            <a href="https://twitter.com/yourusername" className="text-teal-500 hover:text-teal-600 transition">
                <SiGoogle size={48} />
            </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
