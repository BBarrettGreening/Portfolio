import React from 'react'
import Spotify from "/public/spotify.svg";
import NTS from "/public/NTS_radio.svg";
import Bandcamp from "/public/bandcamp.svg";
import Soundcloud from "/public/soundcloud.svg";
import Image from "next/image";

const SourcesSection = () => {
  return (
    <section>
    <div className="md:mt-20 text-center text-black">
          <h2 className=" text-4xl font-bold mt-10 mb-4">
            Our Sources
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 bg-gray-100 rounded-lg p-6">
            <a href="https://source1.com" target="_blank" className="flex justify-center items-center">
                <Image src={Spotify} alt="Spotify" className="w-25 h-25" />
            </a>
            <a href="https://source2.com" target="_blank" className="flex justify-center items-center">
                <Image src={NTS} alt="NTS Radio" className="w-20 h-20" />
            </a>
            <a href="https://source3.com" target="_blank" className="flex justify-center items-center">
                <Image src={Bandcamp} alt="Bandcamp" className="w-25 h-25" />
            </a>
            <a href="https://source4.com" target="_blank" className="flex justify-center items-center">
                <Image src={Soundcloud} alt="Soundcloud" className="w-25 h-25" />
            </a>
        </div>
    </div>
    </section>
  )
}

export default SourcesSection