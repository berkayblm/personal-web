import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function SocialMediaLinks() {
    return (
        <div className="flex space-x-4 justify-center mt-4">
            <a href="https://github.com/yourusername" className="text-teal-500 hover:text-teal-600 transition">
                <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-teal-500 hover:text-teal-600 transition">
                <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" className="text-teal-500 hover:text-teal-600 transition">
                <FaTwitter size={24} />
            </a>
        </div>
    );
}

export default SocialMediaLinks;
