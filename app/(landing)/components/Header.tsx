import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/">
          Home
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/search" className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out">
              Search
            </Link>
          </li>
          {/* You can add more links here later */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
