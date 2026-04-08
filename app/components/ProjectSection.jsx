"use client";
import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Jurassic Music Society Website",
        description: "I developed a website for the Jurassic Music Society, my first real-world project using HTML, CSS and JavaScript. This was a fun project to work on and gave me a good understanding of how to create a website from scratch. It is now hosted on GitHub Pages as I improved the design utilizing Next.js framework. This project was also good experience into working for people and meeting client requirements.",
        image: "./JurassicMusicSociety.png",
        tag: ["All", "HTML"],
        gitUrl: "https://github.com/BBarrettGreening/bbarrettgreening.github.io",
        previewUrl: "https://bbarrettgreening.github.io/index.html",
    },
    {
        id: 2,
        title: "Next.js Jurassic Music Society Website",
        description: "An improved version of the HTML website I made for Jurassic Music Society using the Next.js framework. Using Next.js has meant I'm able to host it on Vercel so that it is more secure and faster than the previous version. Monthly hosting costs were reduced by 85% as they now only have to pay domain fees since Vercel offers free hosting.",
        image: "./NJSJurassicMusicSociety.png",
        tag: ["All", "Next.js"],
        gitUrl: "https://github.com/BBarrettGreening/NextJSJurassicMusicSociety",
        previewUrl: "https://jurassicmusicsociety.com",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "I created this portfolio website using Next.js framework as preparation for improving the Jurassic Music Society's website. As I become more confident with my development skills and complete more projects, this website will continue to improve.",
        image: "./PortfolioSite.png",
        tag: ["All", "Next.js"],
        gitUrl: "https://github.com/BBarrettGreening/Portfolio",
        previewUrl: "https://bustamantebg.uk",
    },
    {
        id: 4,
        title: "R2Electrical LTD Website",
        description: "I designed and manage R2Electrical LTD's business website through the online provider Wix. This was my first project completed for a client and provided me with valuable insight into the expectations of a business and good SEO optimisation strategies. The continued work on this website has seen the addition of a commercial clients page and integration of Google Ads Tags for monitoring advert conversions.",
        image: "./R2Electrical.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "https://www.r2electricalltd.com",
    },
    {
        id: 5,
        title: "Spotify Playlist Creation From WhatsApp Export",
        description: "A Springboot Java web service to authenticate with Spotify's API, then parse a WhatsApp chat export to identify songs sent on Fridays and create a unique dated playlist for each Friday. Generates an export to match the website's playlist data format, greatly streamlining the update process. Previously hosted on Koyeb's free tier.",
        image: "./JmsSpotify.png",
        tag: ["All", "Java"],
        gitUrl: "https://github.com/BBarrettGreening/jmsSpotifyAuth",
        previewUrl: "/",
        active: false,
    },
    {
        id: 6,
        title: "Wave Connections CIC Website",
        description: "I designed and provide support for Wave Connections CIC's website through the online provider Wix. This project reinforced my understanding of meeting client expectations and business needs. The GitHub link shows a LinkedIn post with the previous design which was outdated and harder to navigate.",
        image: "./WaveConnections.png",
        tag: ["All", "Design"],
        gitUrl: "https://www.linkedin.com/posts/bustamante-barrett-greening-820838327_i-recently-completed-a-design-project-for-activity-7369450691095998465-Eyfu?utm_source=share&utm_medium=member_android&rcm=ACoAAFKG_ZgBUTqBVkF5twaSlcOGUvzbjngTURU",
        previewUrl: "https://www.waveconnections.org",
    },
]

const ProjectSection = () => {
    const [tag, setTag] = React.useState("All");

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            {/* Section heading */}
            <div className="mb-8">
                <p className="text-os-text-dim text-xs font-mono uppercase tracking-widest mb-2">
                    Projects
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-os-text">
                    My <span className="text-os-red">Work</span>
                </h2>
                <div className="os-divider mt-3"></div>
                <p className="text-os-text-dim text-sm mt-4 max-w-2xl leading-relaxed">
                    Here&apos;s a selection of some the projects I've made with different technologies.
                </p>
            </div>

            {/* Filter tags */}
            <div className="flex flex-wrap gap-2 mb-8">
                {["All", "HTML", "Next.js", "Design", "Java"].map((t) => (
                    <ProjectTag
                        key={t}
                        onClick={setTag}
                        name={t}
                        isSelected={tag === t}
                    />
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                        active={project.active !== false}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectSection
