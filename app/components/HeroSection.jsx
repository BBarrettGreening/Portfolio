"use client"
import Image from "next/image";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center mb-6 text-center sm:text-left">
                <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold text-[#ECDFCC]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Hello, I&apos;m{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        'Bustamante',
                        1000,
                        'Software developer',
                        1000,
                        'Web developer',
                        1000,
                        'Computer scientist',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-2xl">
                    About me
                </p>
                <div>
                    <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-[#663300] via-[#997a00] to-[#da9837] hover:bg-[#0a0a05] text-black w-full sm:w-fit">
                        Contact Me.
                    </button>
                    <button className="px-1 py-1 rounded-full bg-gradient-to-br from-[#663300] via-[#997a00] to-[#da9837] hover:bg-[#59684a] text-[#ECDFCC] mt-3 w-full- sm:w-fit">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download my CV.
                            </span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[500px] h-[500px] flex items-center justify-center">
                    <Image 
                    src="./Picture1.png"
                    alt="test"
                    className="rounded-full"
                    height={400}
                    width={400}
                    />
                </div>
            </div>
        </div>

    </section>
  )
}

export default HeroSection