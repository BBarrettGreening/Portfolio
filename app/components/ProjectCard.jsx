import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="transform transition duration-500 hover:scale-110">
      <div className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            {gitUrl && gitUrl !== "/" && (
            <Link href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link">
                <CodeBracketIcon className="h-10 w-10 text-[#adb7be] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute cursor-pointer group-hover/link:text-white" />
            </Link>
            )}
            <Link href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link">
                <EyeIcon className="h-10 w-10 text-[#adb7be] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute cursor-pointer group-hover/link:text-white" />
            </Link>
        </div>
      </div>
        <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard