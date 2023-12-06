import Link from "next/link";
import React from "react";
import { HiLocationMarker, HiPhone, HiMiniGlobeAmericas } from "react-icons/hi";

const footerContent = {
  footerLinks: [
    {
      heading: "Company",
      links: [
        {
          href: "/",
          label: "Home",
        },
        {
          href: "/service",
          label: "Our Services",
        },
        {
          href: "/team",
          label: "The Team",
        },
        {
          href: "/contact",
          label: "Contact",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    desc: "Please feel free to reach out to us with any inquiries, questions, or assistance you may need.",
    address: {
      street: "23 Main Street, Cityville, State, Zip Code",
      phone: "(555) 123-4567",
      website: "https://InLife.com",
    },
  },
  copyright: {
    labelOne: "©2023 In Motion. All rights reserved.",
  },
};
const Footer = () => {
  return (
    <footer role="contentinfo" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href="/">
              <h1 className="font-bold text-3xl">In Life</h1>
            </Link>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, idx) => (
                <div>
                  <h3 className="font-semibold text-heading mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, idx) => (
                      <li className="mb-3">
                        <Link
                          href={link.href}
                          className="group-flex items-center duration-300 transition-all ease-in-out hover:text-[#1D5B79]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-heading mb-5">
              {footerContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-7">{footerContent.contact.desc}</p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <HiLocationMarker className="text-xl text-[#1D5B79]" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <HiPhone className="text-xl text-[#1D5B79]" />
                <span>{footerContent.contact.address.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-10 border-t border-gray-200">
          <p>{footerContent.copyright.labelOne}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
