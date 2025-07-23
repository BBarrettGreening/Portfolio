"use client";
import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id:1,
        title:"Jurassic Music Society Website",
        description:"I developed a website for the Jurassic Music Society, my first real-world project using HTML, CSS and JavaScript. This was a fun project to work on and gave me a good understanding of how to create a website from scratch. It is now hosted on GitHub Pages as I improved the design utilizing Next.js framework. This project was also good experience into working for people and meeting client requirements.",
        image:"./JurassicMusicSociety.png",
        tag: ["All", "HTML"],
        gitUrl: "https://github.com/BBarrettGreening/bbarrettgreening.github.io",
        previewUrl: "https://bbarrettgreening.github.io/index.html",
    },
    {
        id:2,
        title:"Next.js Jurassic Music Society Website",
        description:"this is an improved version of the HTML website I made for Jurassic Music Society using the Next.js framework. Using Next.js has meant I'm able to host it on Vercel so that it is more secure and faster than the previous version. This project has given me a good understanding of the Next.js framework and how to improve upon previous work. Monthly hosting costs were reduced by 85% as they now only have to pay domain fees since Vercel offers free hosting.",
        image:"./NJSJurassicMusicSociety.png",
        tag: ["All", "Next.js"],
        gitUrl: "https://github.com/BBarrettGreening/NextJSJurassicMusicSociety",
        previewUrl: "https://jurassicmusicsociety.com",
    },
    {
        id:3,
        title:"Portfolio Website",
        description:"I created this portfolio website using Next.js framework as preperation for improving the Jurassic Music Society's website. As I become more confident with my development skills and complete more projects, this website I will continue to improve.",
        image:"./PortfolioSite.png",
        tag: ["All", "Next.js"],
        gitUrl: "https://github.com/BBarrettGreening/Portfolio",
        previewUrl: "https://bustamantebg.uk",
    },
    {
        id:4,
        title:"R2Electrical LTD Website",
        description:"I designed and manage R2Electrical LTD's business website through the online provider Wix. This was my first project completed for a client and provided me with valuable insight into the expectations of a business and good SEO optimisation strategies. The continued work on this website has seen the addition of a commerical clients page and integration of Google Ads Tags for monitoring advert conversions.",
        image:"./R2Electrical.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "https://www.r2electricalltd.com",
    },
    {
        id:5,
        title:"Spotify Playlist Creation From WhatsApp Export",
        description:"I developed a Springboot Java web service to authenticate with Spotify's API then parse a WhatsApp chat export to identify songs sent on Fridays and create a unique dated playlist for each Friday that includes the songs sent on that date. It then generates an export to match the file that the website uses to get playlist data, greatly streamlining the process of updating playlists. This project was partially vibe coded using Claude AI and the filesystem MCP after being introduced to these in Stage 2 of my degree. Currently I am hosting this project using Koyeb.",
        image:"./JmsSpotify.png",
        tag: ["All", "Java"],
        gitUrl: "https://github.com/BBarrettGreening/jmsSpotifyAuth",
        previewUrl: "https://cooperative-janeen-uop-6f3c4338.koyeb.app/",
    }
]

const ProjectSection = () => {
    const [tag, setTag] = React.useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );
 
    return (
    <>
        <h2 className="text-center text-4xl font-bold text-white mt-10 mb-4">
            My Projects
        </h2>
        {/* Mobile-friendly project tags - now wrap properly */}
        <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6 px-4">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="HTML" 
                isSelected={tag === "HTML"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Next.js" 
                isSelected={tag === "Next.js"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Design" 
                isSelected={tag === "Design"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Java" 
                isSelected={tag === "Java"}
            />
        </div>
        {/* Mobile-friendly project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-5 px-4">
            {filteredProjects.map((project) => 
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
        )}</div>
    </>
  )
}

export default ProjectSection