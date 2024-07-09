function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-gray-700 sticky top-0 z-10">
      <div className="wrapper flex justify-between items-center py-4">
        <div className="logo">
          <a href="/" className="text-orange text-4xl font-bold font-roboto">MyTrip MyTravel</a>
        </div>
        <div className="menu">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-black font-bold hover:underline">Home</a>
            </li>
            <li>
              <a href="#courses" className="text-black font-bold hover:underline">Lodging</a>
            </li>
            <li>
              <a href="#tutors" className="text-black font-bold hover:underline">Destination</a>
            </li>
            <li>
              <a href="#partners" className="text-black font-bold hover:underline">Ulasan</a>
            </li>
            <li>
              <a href="#contact" className="text-black font-bold hover:underline">Contact</a>
            </li>
            <li>
              <a href="/" className="text-white bg-blue-900 py-2 px-4 rounded-full font-bold">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
