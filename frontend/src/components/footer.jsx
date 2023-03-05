import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiSitepoint } from "react-icons/si";	
import Link from "next/link";

//TODO cheack design

const Footer = () => {
  return (
    <section className="bg-white absolute bottom-0 w-full">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8 space-x-6">
          <Link href="https://www.linkedin.com/in/astrid--bakken/" target={"_blank"} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Linkedin</span>
            <BsLinkedin size={"1.5rem"} />{" "}
          </Link>
          <Link href="https://github.com/ahbakken" target={"_blank"} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <BsGithub size={"1.5rem"} />
          </Link>
          <Link href="https://astrid-bakken.vercel.app/" target={"_blank"} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Website</span>
            <SiSitepoint size={"1.5rem"} />
          </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2023 Astrid Bakken, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;