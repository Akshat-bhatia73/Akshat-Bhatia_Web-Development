import React from "react";
import { footerLinksLeft, footerLinksRight } from "../../../data/footerLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-100 fixed bottom-0 w-full text-neutral-800 tracking-normal">
      <p className="py-3 px-8 text-[15px]">India</p>
      <hr className="border-gray-300" />
      <div className="py-3 px-8 mx-auto text-[14px] flex flex-col md:flex-row justify-around gap-6">
        <ul className="flex items-center mx-auto md:mr-6 justify-between flex-wrap gap-6">
          {footerLinksRight.map((link) => {
            return (
              <li key={link.label} className="mx-auto">
                <a className="hover:underline" href={link.href}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center gap-6 justify-bwteen mx-auto">
          {footerLinksLeft.map((link) => {
            return (
              <li key={link.label}>
                <a className="hover:underline" href={link.href}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
