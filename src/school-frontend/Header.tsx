import React from 'react';
import bannerImg from '../assets/img/banner.jpg'; // Use your actual image path

const Header = () => {
  return (
    <header
      className="bg-cover bg-center h-screen text-white relative"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <nav className="relative z-10 flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/4a/Placeholder_school_logo.png"
            alt="School Logo"
            className="w-12 h-12"
          />
        </div>
        <ul className="flex space-x-6 text-sm uppercase font-medium">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Portfolio</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">Galley</a></li>
          <li><a href="/login" className="hover:text-blue-400">Login</a></li>
         
        </ul>
      </nav>

      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 max-w-3xl">
        <h4 className="text-sm tracking-widest mb-2">MOTTO</h4>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
          SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati,<br />
          Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman,<br />
          Konsiste, Amanah.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;
