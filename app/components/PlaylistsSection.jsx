"use client"
import React from 'react'
import Image from "next/image";
import TabButton from './TabButton'
import PlaylistCard from './PlaylistCard';
import PlaylistTag from './PlaylistTag';
import playlistData from './playlistData';

const playlistsData = playlistData;

const PlaylistsSection = () => {
  const [tag, setTag] = React.useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredPlaylists = playlistsData.filter((playlist) =>
        playlist.tag.includes(tag)
    );

  return (
    <>
        <div className="text-center text-black">
          <h2 className=" text-4xl font-bold mt-10 mb-4">
            Our Playlists
          </h2>
          <p>Playlists curated by ourselves and from our weekly song share on our WhatsApp community.</p>
        </div>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-3">
            <PlaylistTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}
            />
            <PlaylistTag 
                onClick={handleTagChange} 
                name="Weekly" 
                isSelected={tag === "Weekly"}
            />
            <PlaylistTag 
                onClick={handleTagChange} 
                name="JMS" 
                isSelected={tag === "JMS"}
            />
        </div>
        <div className="grid  gap-8 md:gap-12">
            {filteredPlaylists.map((project) => 
            <PlaylistCard 
            key={project.id} 
            title={project.title} 
            linkUrl={project.link}
            />
        )}</div>
    </>
  )
}

export default PlaylistsSection

