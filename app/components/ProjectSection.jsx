"use client";
import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id:1,
        title:"JurassicMusicSociety Website",
        description:"this is a HTML, CSS and JavaScript website made for JurassicMusicSociety with a section for playlists, reviews and sources. There is also a button to join the WhatsApp channel with weekly posts. I plan to remake this project using Next.js framework in the coming month.",
        image:"./JurassicMusicSociety.png",
        tag: ["All", "HTML"],
        gitUrl: "/",
        previewUrl: "https://jurassicmusicsociety.com",
    },
    {
        id:2,
        title:"Portfolio Website",
        description:"I created a portfolio site using Next.js framework so I would have something to link on my CV so that employers can get a look at some of the work i've completed before. This project was a fun learning experience and has given me knowledge to improve upon previous work",
        image:"./PortfolioSite.png",
        tag: ["All", "Next.js"],
        gitUrl: "https://github.com/BBarrettGreening/Portfolio",
        previewUrl: "https://BBarrettGreening.github.io",
    },
    {
        id:3,
        title:"R2Electrical LTD Website",
        description:"I designed and manage R2Electrical LTD's business site through the online provider fasthost. This was my first real-world experience with designing and hosting a website and gave me good inspiration for my other projects.",
        image:"./R2Electrical.png",
        tag: ["All", "Design"],
        gitUrl: "/",
        previewUrl: "https://www.r2electricalltd.com",
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
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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