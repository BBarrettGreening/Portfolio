"use client"
import Image from "next/image";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => {
  return (
    <section>
        <div className="md:mt-20 grid grid-cols-1 lg:gap-16 sm:grid-cols-12">
            <div className="col-span-7 place-self-center mb-6 text-center sm:text-left">
                <p className="text-black text-base mb-4 sm:text-lg lg:text-2xl">
                Welcome to the Jurassic Music Society, your community-driven radio destination! Hosted by Rich, Jake, and Harry, we bring your favorite tunes directly to your speakers. Whether it&apos;s Tecno, drum and bass, rock, jazz, acoustic, classical, or the latest hits, we play it all. Dive into diverse genres and explore music from every corner of the globe with us. We thrive on your requests and reviews, making sure each broadcast is uniquely tailored to our listeners. Tune in, join the conversation, and let Rich, Jake, and Harry play your music, for you!
                </p>
                <div>
                    <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-[#009933] via-[#66ff66] to-[#ccff33] hover:bg-[#2e5220] text-black font-bold w-full sm:w-fit">
                        <a href='https://chat.whatsapp.com/JqONUP9z9YT7WBW9wyAQeq'>Join our WhatsApp</a>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center  mt-4 lg:mt-0">
                <div className="flex items-center justify-center">
                    <Image 
                    src="./JMS.png"
                    alt="test"
                    className="rounded-full"
                    height={600}
                    width={600}
                    />
                </div>
            </div>
        </div>

    </section>
  )
}

export default HomeSection