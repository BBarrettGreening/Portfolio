"use client";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import WhatsAppIcon from '/public/whatsapp-icon.svg';

const Footer = () => {
  return (
    <div className="bg-[#252525] mt-20 bg-opacity-100 py-4">
      <div className="socials mt-4 mb-4 flex flex-row gap-2 justify-center">
        <Link href="https://chat.whatsapp.com/JqONUP9z9YT7WBW9wyAQeq">
          <Image src={WhatsAppIcon} alt="WhatsApp Icon" className="bg-white rounded-lg p-1"/>
        </Link>
      </div>
      <div className="border-t border-white my-4 mx-auto w-1/2"></div>
      <div className="text-xs text-slate-500 text-center">
        © Copyright JurassicMusicSociety. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;