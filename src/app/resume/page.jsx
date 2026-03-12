"use client";

import React from "react";
import { Download, Briefcase, GraduationCap, Code2 } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Başlıq */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-rose-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-rose-500">
                Mənim Yolum
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Təcrübə & <br />
              <span className="text-zinc-500">Təhsil</span>
            </h2>
          </div>

          <button className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full text-xs uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all">
            CV-ni Yüklə
            <Download size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Təcrübə */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-rose-500" size={24} />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                Təcrübə
              </h3>
            </div>

            <div className="relative border-l border-zinc-800 ml-3 pl-8 space-y-12">

              <div className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-rose-500 border-4 border-zinc-950" />
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                  2026 - Hazırda
                </span>
                <h4 className="text-white font-bold text-lg mt-1">
                  Frontend Developer (Şəxsi Layihələr)
                </h4>
                <p className="text-zinc-500 text-sm mt-2">
                  React, Next.js və Tailwind CSS istifadə edərək şəxsi veb
                  layihələr hazırlayıram və müasir UI komponentləri üzərində
                  işləyirəm.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-zinc-800 border-4 border-zinc-950" />
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  2025 - 2026
                </span>
                <h4 className="text-white font-bold text-lg mt-1">
                  Frontend Development Öyrənmə Prosesi
                </h4>
                <p className="text-zinc-500 text-sm mt-2">
                  HTML, CSS, JavaScript və React texnologiyalarını öyrənərək
                  praktik layihələr üzərində təcrübə qazanmışam.
                </p>
              </div>

            </div>
          </div>

          {/* Təhsil və Bacarıqlar */}
          <div className="space-y-12">

            {/* Təhsil */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-rose-500" size={24} />
                <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                  Təhsil
                </h3>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                  2026 - Hazırda
                </span>
                <h4 className="text-white font-bold text-lg mt-1">
                  İnformasiya Təhlükəsizliyi
                </h4>
                <p className="text-zinc-500 text-sm">
                  3-cü kurs tələbəsi
                </p>
              </div>
            </div>

            {/* Bacarıqlar */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Code2 className="text-rose-500" size={24} />
                <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                  Bacarıqlar
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;