"use client"
import React from 'react'
import Image from "next/image";
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>C++</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science A-Level</li>
        <li>Mathematics A-level</li>
        <li>Psychology A-level</li>
        <li className="text-slate-400 list-none">Thomas Hardye Sixth Form</li>
      </ul>
    )
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Head of Henning College Award</li>
        <li className="text-slate-400 list-none">Recognised for my perseverance and performance during my studies at the Thomas Hardye secondary school.</li>
        <li>Brown Belt Gojo-Ryu Karate</li>
        <li className="text-slate-400 list-none">Achieved brown belt at Wessex Karate, demonstrating my dedication and commitment to the sport.</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = React.useState("skills");
  const [isPending, startTransition] = React.useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-8 xl:gap-16 sm:py-16 xl:px-16 ">
          <Image src="./computer.jpg" alt="" width={500} height={500} layout="fixed"/>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-2xl text-bold mb-b">
              About Me
            </h2>
            <p className="test-base md:text-lg">
              I am a 19 year old student currently studying BSc (Hons) Computer Science at the University of Plymouth, I&apos;m going into my second year and preparing to apply for placements. As part of this I&apos;ve developed this site to host a collection of my personal projects to give insight into what I can achieve.
            </p>
            <div className="flex flex-row mt-8">
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                {" "}
                Education{" "}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("achievements")} active={tab === "achievements"}>
              {" "}
                Achievements{" "}
              </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection