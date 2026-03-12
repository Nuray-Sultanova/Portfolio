"use client";

import React, { useState } from "react";
import { Mail, Send, Github, Linkedin, ShieldCheck, Globe } from "lucide-react";

const Contact = () => {
  const [pending, setPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    setTimeout(() => {
      setPending(false);
      alert("Mesajınız uğurla çatdırıldı!");
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-black/50"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Başlıq Bloku */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-rose-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-rose-500">
              Əlaqə kanalları
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
            Gəlin birgə <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-rose-300 italic">
              yaradaq.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sol Panel: Məlumatlar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <div className="group cursor-pointer">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Email
                </p>
                <p className="text-xl font-medium text-white group-hover:text-rose-500 transition-colors">
                  sultanovanuray448@gmail.com
                </p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Məkan
                </p>
                <p className="text-xl font-medium text-white">
                  Bakı, Azərbaycan
                </p>
              </div>
            </div>

            {/* Sosial Linklər */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-500 text-white hover:scale-110 transition-all duration-500"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Ad Soyad İnput */}
                <div className="relative group">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-rose-500 transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-rose-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-bold">
                    Adınız
                  </label>
                </div>

                {/* Email İnput */}
                <div className="relative group">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-rose-500 transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-rose-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-bold">
                    Email
                  </label>
                </div>
              </div>

              {/* Mesaj İnput */}
              <div className="relative group">
                <textarea
                  required
                  rows="1"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-rose-500 transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-rose-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs uppercase tracking-widest font-bold">
                  Mesajınız
                </label>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                <button
                  type="submit"
                  disabled={pending}
                  className="group relative w-full md:w-auto px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest overflow-hidden rounded-full transition-all hover:pr-14 active:scale-95 disabled:opacity-50"
                >
                  <span className="relative z-10">
                    {pending ? "Göndərilir..." : "Mesajı göndər"}
                  </span>
                  <Send
                    size={16}
                    className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </button>

                <div className="flex items-center gap-2 text-gray-600">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] uppercase tracking-widest">
                    End-to-end encrypted
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
