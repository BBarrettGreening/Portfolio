"use client"
import React from 'react'
import TabButton from './TabButton'

const SKILLS = [
  {
    id: 'gitlab',
    label: 'Git',
    sublabel: 'GitLab · GitHub',
    color: '#3db93d',
    desc: 'Worked with both GitLab and GitHub — GitLab at HMLR for source control and CI/CD, triggering Jenkins pipelines and Terraform runs; GitHub for personal and university projects.',
  },
  {
    id: 'cicd',
    label: 'Jenkins',
    sublabel: 'CI/CD pipelines',
    color: '#3db93d',
    desc: 'Worked directly with Jenkins pipelines to deploy applications to OpenShift at HMLR, and troubleshooted pipeline and configuration issues related to Jenkins.',
  },
  {
    id: 'helm',
    label: 'Helm',
    sublabel: 'Deploy to OpenShift',
    color: '#3db93d',
    desc: 'Written and debugged Helm at HMLR to define application deployments for OpenShift, ensuring relevant environemnt set ups for different regions.',
  },
  {
    id: 'openshift',
    label: 'OpenShift',
    sublabel: 'Container platform',
    color: '#EE0000',
    desc: 'Daily use at HMLR — receives Helm chart deployments from Jenkins, orchestrates containerised workloads, and monitored via a Grafana cluster dashboard.',
  },
  {
    id: 'linux',
    label: 'Linux',
    sublabel: 'RHEL / OpenSuse / Ubuntu',
    color: '#EE0000',
    desc: 'Server monitoring via Nagios, software updates and removal, storage management, and setting up additional monitors using Puppet.',
  },
  {
    id: 'docker',
    label: 'Docker',
    sublabel: 'Containers',
    color: '#4da3ff',
    desc: 'Containerised microservices for the HMLR internal AI platform POC; used Git and Docker to orchestrate a shared development environment.',
  },
  {
    id: 'python',
    label: 'Python',
    sublabel: 'Flask · FastAPI',
    color: '#4da3ff',
    desc: 'Co-led development of an AI platform POC at HMLR using Python microservices with Flask and FastAPI, with RBAC and token authentication on API routes.',
  },
  {
    id: 'java',
    label: 'Java',
    sublabel: 'Springboot',
    color: '#4da3ff',
    desc: 'Springboot web services including a Spotify playlist automation tool; academic projects at University of Plymouth.',
  },
  {
    id: 'terraform',
    label: 'Terraform',
    sublabel: 'Infra as Code',
    color: '#f0ab00',
    desc: 'Terraform provisions and manages AWS resources — upgraded RDS instances to Graviton, migrated Redis instances across accounts and regions.',
  },
  {
    id: 'aws',
    label: 'AWS',
    sublabel: 'Supporting infrastructure',
    color: '#f0ab00',
    desc: 'Provisioned and upgraded RDS instances, migrated Redis instances across accounts and regions, and managed supporting cloud resources for applications running on OpenShift.',
  },
]

function InfraDiagram({ selected, onSelect, expanded = false }) {
  const sp = expanded ? 'space-y-3' : 'space-y-1.5'
  const fs = expanded ? 'text-xs' : 'text-[9px]'

  return (
    <div className={`font-mono text-xs ${sp}`}>
      <style>{`
        @keyframes flow-down { to { stroke-dashoffset: -24; } }
        .arrow-anim { animation: flow-down 1.4s linear infinite; }
        .skill-node { cursor: pointer; transition: all 0.2s; }
        .skill-node:hover { opacity: 0.85; }
      `}</style>

      {/* Git at top — full width */}
      <SkillNode id="gitlab" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS} className="flex justify-center">
        <NodeBox id="gitlab" selected={selected} expanded={expanded} skills={SKILLS} width="w-full" />
      </SkillNode>

      {/* Single arrow on mobile */}
      <div className="sm:hidden flex justify-center">
        <FlowArrow color="#3db93d" />
      </div>

      {/* Two arrows — desktop */}
      <div className="hidden sm:flex justify-around px-4">
        <div className="flex flex-col items-center gap-0.5">
          <FlowArrow color="#3db93d" />
          <span className={`${fs} text-os-muted font-mono`}>triggers</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <FlowArrow color="#3db93d" />
          <span className={`${fs} text-os-muted font-mono`}>tf apply</span>
        </div>
      </div>

      {/* Two columns — stretch fully in both modes */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${expanded ? 'gap-6' : 'gap-2'}`}>

        {/* Left — Jenkins → Helm → OpenShift → Docker */}
        <div className={sp}>
          <SkillNode id="cicd" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS} className="flex justify-center">
            <NodeBox id="cicd" selected={selected} expanded={expanded} skills={SKILLS} width="w-full" />
          </SkillNode>
          <FlowArrow color="#3db93d" />
          <SkillNode id="helm" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS} className="flex justify-center">
            <NodeBox id="helm" selected={selected} expanded={expanded} skills={SKILLS} width="w-full" />
          </SkillNode>
          <FlowArrow color="#3db93d" />
          <LayerBox id="openshift" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS}>
            <div className={`${sp} mt-1`}>
              <FlowArrow color="#EE0000" />
              <LayerBox id="docker" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS}>
                <div className={`grid grid-cols-2 gap-2 mt-1`}>
                  <SkillNode id="python" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS} className="">
                    <NodeBox id="python" selected={selected} expanded={expanded} skills={SKILLS} width="w-full" small={!expanded} />
                  </SkillNode>
                  <SkillNode id="java" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS} className="">
                    <NodeBox id="java" selected={selected} expanded={expanded} skills={SKILLS} width="w-full" small={!expanded} />
                  </SkillNode>
                </div>
              </LayerBox>
              <SkillNode id="linux" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS} className="">
                <NodeBox id="linux" selected={selected} expanded={expanded} skills={SKILLS} width="w-full" small={!expanded} />
              </SkillNode>
            </div>
          </LayerBox>
        </div>

        {/* Right — Terraform → AWS */}
        <div className={sp}>
          <SkillNode id="terraform" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS} className="flex justify-center">
            <NodeBox id="terraform" selected={selected} expanded={expanded} skills={SKILLS} width="w-full" />
          </SkillNode>
          <FlowArrow color="#f0ab00" />
          <LayerBox id="aws" selected={selected} onSelect={onSelect} expanded={expanded} skills={SKILLS}>
            {!expanded && <p className="text-[#f0ab0099] text-[9px] text-center mt-1">Supporting infrastructure</p>}
          </LayerBox>
        </div>
      </div>

      {/* Click-to-expand description panel (normal mode only) */}
      {!expanded && (
        <div
          className={`mt-3 rounded border transition-all duration-300 overflow-hidden ${selected ? 'border-os-border' : 'border-transparent'}`}
          style={{ minHeight: selected ? '56px' : '0' }}
        >
          {selected && (() => {
            const skill = SKILLS.find(s => s.id === selected)
            return (
              <div className="p-3 space-y-1">
                <p className="font-bold text-[11px]" style={{ color: skill.color }}>{skill.label}</p>
                <p className="text-os-text-dim text-[11px] leading-relaxed">{skill.desc}</p>
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}

function NodeBox({ id, selected, expanded, skills, width, small }) {
  const skill = skills.find(s => s.id === id)
  const active = selected === id || expanded
  const labelSize = expanded ? '13px' : small ? '9px' : '11px'
  const subSize   = expanded ? '11px' : '9px'
  return (
    <div
      className={`border rounded text-center transition-all duration-200 ${width} ${expanded ? 'px-4 py-3' : 'px-3 py-1.5'}`}
      style={{
        borderColor: active ? skill.color : skill.color + '88',
        background:  active ? skill.color + '22' : skill.color + '0a',
      }}
    >
      <p className="font-bold" style={{ color: skill.color, fontSize: labelSize }}>{skill.label}</p>
      <p className="text-os-muted" style={{ fontSize: subSize }}>{skill.sublabel}</p>
      {expanded && (
        <p className="text-os-text-dim leading-relaxed mt-2 text-left text-xs">
          {skill.desc}
        </p>
      )}
    </div>
  )
}

function LayerBox({ id, selected, onSelect, expanded, skills, children }) {
  const skill = skills.find(s => s.id === id)
  const active = selected === id || expanded
  return (
    <div
      className={`border rounded transition-all duration-200 ${expanded ? 'p-3' : 'p-2'}`}
      style={{
        borderColor: active ? skill.color : skill.color + '66',
        background:  active ? skill.color + '11' : 'transparent',
      }}
    >
      <button className="skill-node w-full text-center mb-1.5" onClick={() => onSelect(id === selected ? null : id)}>
        <p className="font-bold uppercase tracking-wider" style={{ color: skill.color, fontSize: expanded ? '12px' : '10px' }}>{skill.label}</p>
        <p className="text-os-muted" style={{ fontSize: expanded ? '10px' : '9px' }}>{skill.sublabel}</p>
        {expanded && (
          <p className="text-os-text-dim text-left leading-relaxed mt-1 text-xs">
            {skill.desc}
          </p>
        )}
      </button>
      {children}
    </div>
  )
}

function SkillNode({ id, selected, onSelect, expanded, children, className }) {
  return (
    <div className={`skill-node ${className}`} onClick={() => onSelect(id === selected ? null : id)}>
      {children}
    </div>
  )
}

function FlowArrow({ color }) {
  return (
    <div className="flex justify-center">
      <svg width="12" height="18" viewBox="0 0 12 18">
        <line x1="6" y1="0" x2="6" y2="12" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" className="arrow-anim" />
        <polygon points="6,18 2,10 10,10" fill={color} />
      </svg>
    </div>
  )
}

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-3">
        {[
          {
            title: 'BSc (Hons) Computer Science — Stage 3',
            sub:   'University of Plymouth · 2023–Present',
          },
          {
            title: 'A-Levels: Computer Science, Mathematics, Psychology',
            sub:   'Thomas Hardye Sixth Form · 2021–2023',
          },
        ].map((item) => (
          <div key={item.title} className="console-panel-accent">
            <p className="text-os-text font-semibold text-sm">{item.title}</p>
            <p className="text-os-text-dim text-xs mt-1 font-mono">{item.sub}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <div className="space-y-3">
        {[
          {
            title: 'Head of Henning College Award',
            desc:  'Recognised for perseverance and performance during studies at Thomas Hardye secondary school.',
          },
          {
            title: 'Brown Belt — Gojo-Ryu Karate',
            desc:  'Achieved brown belt at Wessex Karate, demonstrating dedication and commitment to the sport.',
          },
          {
            title: 'First Aid Certified',
            desc:  'Completed a First Aid at Work course with HMLR to become a certified first aider.',
          },
        ].map((item) => (
          <div key={item.title} className="console-panel-accent">
            <p className="text-os-red font-semibold text-sm">{item.title}</p>
            <p className="text-os-text-dim text-xs mt-1 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = React.useState("education");
  const [selectedSkill, setSelectedSkill] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [expanded]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        {/* Section heading */}
        <div className="mb-10">
          <p className="text-os-text-dim text-xs font-mono uppercase tracking-widest mb-2">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-os-text">
            About <span className="text-os-red">Me</span>
          </h2>
          <div className="os-divider mt-3"></div>
        </div>

        <div className="md:grid md:grid-cols-5 gap-10 items-start">

          {/* Left — interactive skills diagram (wider) */}
          <div className="md:col-span-3 mb-8 md:mb-0">
            {/* Expanded overlay */}
            <style>{`
              @keyframes overlay-in {
                from { opacity: 0; transform: translateY(16px); }
                to   { opacity: 1; transform: translateY(0); }
              }
              @keyframes overlay-out {
                from { opacity: 1; transform: translateY(0); }
                to   { opacity: 0; transform: translateY(16px); }
              }
              .overlay-enter { animation: overlay-in 0.25s cubic-bezier(0.16,1,0.3,1) forwards; }
              .overlay-exit  { animation: overlay-out 0.2s ease-in forwards; }
            `}</style>
            {expanded && (
            <div className="overlay-enter fixed inset-0 top-14 z-40 overflow-auto p-4"
              style={{ background: 'var(--os-navy)' }}
            >
              <div className="console-panel w-full min-h-full flex flex-col">
                <div className="console-header justify-between shrink-0">
                  <span className="text-os-text-dim text-xs font-mono">My Skills</span>
                  <div className="flex items-center gap-3">
                    <span className="text-os-muted text-[10px] font-mono hidden sm:block">click a node to read more</span>
                    <button
                      onClick={() => setExpanded(false)}
                      aria-label="Close fullscreen"
                      title="Close"
                      className="text-os-text-dim hover:text-os-red transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6 overflow-auto flex-1">
                  <InfraDiagram selected={selectedSkill} onSelect={setSelectedSkill} expanded={true} />
                </div>
              </div>
            </div>
            )}

            {/* Normal panel */}
            <div className="console-panel w-full">
              <div className="console-header justify-between">
                <span className="text-os-text-dim text-xs font-mono">My Skills</span>
                <div className="flex items-center gap-3">
                  <span className="text-os-muted text-[10px] font-mono hidden sm:block">click a node to read more</span>
                  <button
                    onClick={() => setExpanded(true)}
                    aria-label="Expand skills diagram"
                    title="Expand to fullscreen"
                    className="hidden md:block text-os-text-dim hover:text-os-red transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <InfraDiagram selected={selectedSkill} onSelect={setSelectedSkill} expanded={false} />
              </div>
            </div>
          </div>

          {/* Right — tabs */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {TAB_DATA.map((t) => (
                <TabButton
                  key={t.id}
                  selectTab={() => setTab(t.id)}
                  active={tab === t.id}
                >
                  {t.title}
                </TabButton>
              ))}
            </div>
            <div className="console-panel p-5 flex-1">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
