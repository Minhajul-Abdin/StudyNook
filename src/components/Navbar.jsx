"use client";
import { Avatar } from "@heroui/react";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button, Dropdown, Label } from "@heroui/react";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/rooms"}>Rooms</Link>
              </li>
            </ul>
          </div>
          <a className="md:px-3 font-bold text-2xl">
            Study<i>Nook</i>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/rooms"}>Rooms</Link>
            </li>
          </ul>
        </div>
        {!isPending && !session ? (
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 flex justify-end gap-2">
              <li>
                <Link href={"/login"} className="btn btn-accent">
                  Login
                </Link>
              </li>
              <li>
                <Link href={"/register"} className="btn btn-accent btn-outline">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 flex justify-end gap-2">
              <Dropdown>
                <Button className="p-0">
                  <Avatar>
                    <Avatar.Image
                      alt="John Doe"
                      src={
                        session?.user?.image ||
                        "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                      }
                    />
                    <Avatar.Fallback>
                      {session?.user?.name.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu
                    onAction={(key) => console.log(`Selected: ${key}`)}
                  >
                    <Dropdown.Item id="new-file">
                      <Label>{session?.user?.name}</Label>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={handleLogout}
                      id="delete-file"
                      variant="danger"
                    >
                      <Label>
                        <li>
                          <Link href={"/register"}>Logout</Link>
                        </li>
                      </Label>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
