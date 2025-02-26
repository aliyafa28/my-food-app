import Link from "next/link";

export default function navbar() {
  return (
    <nav className="">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <img src="/images/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Menu */}
        <ul className="sm:flex space-x-6 hidden">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/promotions"
              className="text-gray-600 hover:text-gray-800"
            >
              Promotions
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="text-gray-600 hover:text-gray-800">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Call-to-Action */}
        <div className="flex items-center space-x-4">
          <Link href="/masuk" className="text-black hidden sm:block">
            Masuk
          </Link>
          <Link
            href="/daftar"
            className="bg-primary text-white px-4 py-2 rounded-full flex items-center hover:bg-primary"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
}
