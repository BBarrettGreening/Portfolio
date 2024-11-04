"use client";
import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id:1,
        title:"JurassicMusicSociety Website",
        description:"I created a website for the JurassicMusicSociety, my first real-world project using HTML, CSS and JavaScript. This was a fun project to work on and gave me a good understanding of how to create a website from scratch. It is now hosted on GitHub Pages as I improved the design utilizing Next.js framework.",
        image:"./JurassicMusicSociety.png",
        tag: ["All", "HTML"],
        gitUrl: "https://github.com/BBarrettGreening/bbarrettgreening.github.io",
        previewUrl: "https://bbarrettgreening.github.io/index.html",
    },
    {
        id:2,
        title:"Next.js JurassicMusicSociety Website",
        description:"this is an improved version of the HTML website I made for JurassicMusicSociety using the Next.js framework. Using Next.js has meant I'm able to host it on Vercel so that it is more secure and faster than the previous version. This project has given me a good understanding of how to use Next.js and how to improve upon previous work. There are also no hosting fees through Vercel so JurassicMusicSociety no longer has to pay for that.",
        image:"./NJSJurassicMusicSociety.png",
        tag: ["All", "Next.js"],
        gitUrl: "https://github.com/BBarrettGreening/NextJSJurassicMusicSociety",
        previewUrl: "https://jurassicmusicsociety.com",
    },
    {
        id:3,
        title:"Portfolio Website",
        description:"I created this portfolio website using Next.js framework so I could deepen my understanding in using it. I will continue to improve this site as I have more projects and experience to add.",
        image:"./PortfolioSite.png",
        tag: ["All", "Next.js"],
        gitUrl: "https://github.com/BBarrettGreening/Portfolio",
        previewUrl: "https://bustamantebg.uk",
    },
    {
        id:4,
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