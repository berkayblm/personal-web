import React from 'react';


function Footer() {
    return (
        <footer className="bg-gray-800 py-6 mt-20">
            <div className="container mx-auto text-center text-white">
                <p>&copy; {new Date().getFullYear()} Berkay Bilimli. All rights reserved.</p>
                <p>For business, contact berkayant4@gmail.com</p>
            </div>
        </footer>
    );
}

export default Footer;
