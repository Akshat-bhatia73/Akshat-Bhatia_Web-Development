import React from "react";
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  return (
    <nav className="flex justify-end tex-sm pr-4 pt-3 text-neutral-800 space-x-4 items-center tracking-tight">
      <a href="https://mail.google.com" className="hover:underline text-sm">
        Gmail
      </a>
      <a href="https://image.google.com" className="hover:underline text-sm">
        Images
      </a>
      <TbGridDots
        size={37}
        className="text-gray-700 hover:bg-gray-200/60 p-2 cursor-pointer rounded-full"
      />
      <img
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt="dp"
        className="rounded-full object-cover"
        width={30}
        height={100}
        style={{ height: 30 }}
      />
    </nav>
  );
};

export default Header;
