import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/profile",
      text: "Profile",
    },
  ];

  return (
    <header className="bg-gray-800 text-gray-100 py-2">
      <section className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            APPLOGO
          </Link>

          <nav>
            <ul className="flex items-center gap-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <Link href="/login">Login</Link>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
