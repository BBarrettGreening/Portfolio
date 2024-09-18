import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const PlaylistCard = ({ linkUrl, title }) => {
  return (
    <div>
        <div className="text-white rounded-t-xl bg-[#181818] py-3 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
      </div>
      <div className="flex justify-between items-center bg-[#181818] py-4 px-4 rounded-b-xl">
      <iframe style={{ borderRadius : '12px' }} src={linkUrl} width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default PlaylistCard