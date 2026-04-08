import React from 'react';
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, active = true }) => {
  return (
    <div className="console-panel group hover:border-os-red/40 transition-all duration-200 flex flex-col">

      {/* Card header */}
      <div className="console-header justify-end shrink-0">
        {active ? (
          <span className="status-badge status-running">
            <span className="status-dot"></span>
            Active
          </span>
        ) : (
          <span className="status-badge status-inactive">
            <span className="status-dot"></span>
            Inactive
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-os-surface shrink-0">
        <div
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        {/* Hover overlay with action buttons */}
        <div className="absolute inset-0 bg-os-navy/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          {gitUrl && gitUrl !== "/" && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="os-btn-secondary text-xs px-3 py-2 gap-1.5"
              title="View Source"
            >
              <CodeBracketIcon className="h-4 w-4" />
              Source
            </Link>
          )}
          {previewUrl && previewUrl !== "/" && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="os-btn-primary text-xs px-3 py-2 gap-1.5"
              title="View Live"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h5 className="text-os-text font-semibold text-sm mb-2">
          {title}
        </h5>
        <p className="text-os-text-dim text-xs leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>
        {/* Footer links */}
        <div className="mt-4 pt-3 border-t border-os-border flex gap-3">
          {gitUrl && gitUrl !== "/" && (
            <Link href={gitUrl} target="_blank" rel="noopener noreferrer"
              className="text-xs text-os-blue hover:text-os-text transition-colors flex items-center gap-1">
              <CodeBracketIcon className="h-3.5 w-3.5" />
              Source
            </Link>
          )}
          {previewUrl && previewUrl !== "/" && (
            <Link href={previewUrl} target="_blank" rel="noopener noreferrer"
              className="text-xs text-os-blue hover:text-os-text transition-colors flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Site
            </Link>
          )}
        </div>
      </div>

    </div>
  )
}

export default ProjectCard
