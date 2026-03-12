"use client";

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Layers, ShoppingBag, Smartphone, Laptop, Tv, Zap } from 'lucide-react';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Shop.co Platform",
      category: "E-Commerce",
      desc: "Müasir geyim mağazası: Dinamik filtrasiya və səbət idarəetməsi.",
      tech: ["Next.js", "Tailwind", "Redux"],
      link: "https://shop-co-beige.vercel.app/",
      github: "https://github.com/nuraysultanova",
      image: "/shopco.jpg", 
      size: "md:col-span-8",
      icon: <ShoppingBag size={20} className="text-rose-500" />
    },
    {
      id: 2,
      title: "Apple Ecosystem",
      category: "UI Showcase",
      desc: "Apple cihazlarının və ekosisteminin interaktiv 3D təqdimatı.",
      tech: ["React", "GSAP", "Three.js"],
      link: "https://apple-site-in-react.vercel.app/",
      github: "https://github.com/nuraysultanova",
      image: "/apple.jpg",
      size: "md:col-span-4",
      icon: <Smartphone size={20} className="text-rose-500" />
    },
    {
      id: 3,
      title: "Cyber Electronics Store",
      category: "Tech & Gadgets",
      desc: "Smartfonlar, noutbuklar və ən son elektronika avadanlıqlarının satışı üçün nəzərdə tutulmuş ultra-modern mağaza.",
      tech: ["React", "Vite", "Framer Motion"],
      link: "https://cyber-ice69bhqx-nuray-sultanovas-projects.vercel.app",
      github: "https://github.com/nuraysultanova",
      image: "/cyber.jpg",
      size: "md:col-span-12",
      icon: <Laptop size={24} className="text-rose-400" />
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Arxa fonda zərif işıq effekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-rose-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-rose-500 text-[10px] uppercase font-black tracking-[0.2em]">
              <Zap size={12} fill="currentColor" />
              Selected Works
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Rəqəmsal <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-rose-200">Portfel.</span>
            </h2>
          </div>
          <div className="hidden md:block h-20 w-1 bg-linear-to-t from-rose-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className={`${project.size} group relative bg-[#0C0C0C] border border-white/5 rounded-[3rem] overflow-hidden transition-all duration-700 hover:shadow-[0_20px_80px_-20px_rgba(244,63,94,0.15)] hover:border-rose-500/20`}
            >
              <div className="relative h-112.5 w-full">
             
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  sizes="(max-width: 1200px) 100vw, 50vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-700" />

                {/* Floating Tag (Küncdəki Kateqoriya) */}
                <div className="absolute top-8 left-8 z-30">
                  <div className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-2">
                    {project.icon}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">{project.category}</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-10 left-10 right-10 z-30 transform group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-rose-500 text-white text-[9px] font-black uppercase tracking-tighter rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white group-hover:text-rose-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-2 max-w-sm line-clamp-1 group-hover:line-clamp-none transition-all">
                        {project.desc}
                      </p>
                    </div>
                    
                    <div className="flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;