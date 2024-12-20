"use client";

import useCart from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { items } = useCart();
  const navItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/catogories">Categories</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <header className="navbar bg-primary h-16 max-h-16 top-0 sticky left-0 right-0 z-50">
      <nav className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl">
          Organic-Oasis
        </Link>
      </nav>

      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </nav>

      <nav className="navbar-end gap-5">
        <Link href="/cart" className="relative">
          <ShoppingCart className="text-accent" />
          <span className="absoulute -top-2 -right-3 w-4 aspect-square bg-accent-content rounded-full text-accent flex-items-center text-xs font-semibold">
            {items.length}
          </span>
        </Link>
        <Link href="/sign-in" className="btn btn-accent">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
