"use client";

import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const verses = [
  "Sesungguhnya sesudah kesulitan itu ada kemudahan (Al-Insyirah: 6)",
  "Allah tidak membebani seseorang melainkan sesuai kesanggupannya (Al-Baqarah: 286)",
  "Janganlah kamu berputus asa dari rahmat Allah (Az-Zumar: 53)",
  "Ingatlah, hanya dengan mengingati Allah hati menjadi tenteram (Ar-Ra'd: 28)",
  "Cukuplah Allah menjadi Penolong kami dan Allah adalah sebaik-baik Pelindung (Ali Imran: 173)",
  "Janganlah kamu bersikap lemah dan jangan bersedih hati (Ali Imran: 139)",
  "Jika kamu bersyukur, niscaya Aku akan menambah nikmat kepadamu (Ibrahim: 7)",
  "Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan keperluannya (At-Talaq: 3)",
  "Boleh jadi kamu membenci sesuatu, padahal ia amat baik bagimu (Al-Baqarah: 216)",
  "Dan sampaikanlah kabar gembira kepada orang-orang yang sabar (Al-Baqarah: 155)",
  "Dan perintahkanlah keluargamu mendirikan shalat dan bersabarlah (Thaha: 132)",
  "Sesungguhnya Allah beserta orang-orang yang sabar (Al-Anfal: 46)",
  "Tuhanmu tiada meninggalkan kamu dan tiada pula benci kepadamu (Ad-Duha: 3)",
  "Dan kelak Tuhanmu pasti memberikan karunia-Nya kepadamu, lalu hati kamu menjadi puas (Ad-Duha: 5)",
  "Maka sesungguhnya beserta kesulitan ada kemudahan (Al-Insyirah: 5)",
  "Dan hanya kepada Tuhanmulah hendaknya kamu berharap (Al-Insyirah: 8)",
  "Dan Dia bersamamu di mana saja kamu berada (Al-Hadid: 4)",
  "Sesungguhnya pertolongan Allah itu amat dekat (Al-Baqarah: 214)",
  "Barangsiapa bertakwa kepada Allah niscaya Dia akan mengadakan baginya jalan keluar (At-Talaq: 2)",
  "Dan janganlah kamu berputus asa dari rahmat Allah (Yusuf: 87)",
  "Allah kelak akan memberikan kelapangan sesudah kesempitan (At-Talaq: 7)",
  "Dan mohonlah pertolongan dengan sabar dan shalat (Al-Baqarah: 45)",
  "Sesungguhnya Kami tidak menyia-nyiakan pahala orang yang berbuat baik (Al-Kahfi: 30)",
  "Dan berikanlah berita gembira kepada orang-orang yang beriman (Al-Baqarah: 223)",
  "Dan Allah adalah sebaik-baik pemberi rezeki (Al-Jumu'ah: 11)",
  "Tidak ada balasan kebaikan kecuali kebaikan pula (Ar-Rahman: 60)",
  "Cukuplah Allah bagi kami (At-Taubah: 129)",
  "Sesungguhnya Allah mencintai orang-orang yang bertawakal (Ali Imran: 159)",
  "Dan bahwasanya seorang manusia tiada memperoleh selain apa yang telah diusahakannya (An-Najm: 39)",
  "Maka bersabarlah kamu dengan sabar yang baik (Al-Ma'arij: 5)",
];

const getDailyVerse = () => {
  const startOfYear = new Date(new Date().getFullYear(), 0, 0);
  const diff = new Date().getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return verses[dayOfYear % verses.length];
};

const DailyVerse: React.FC = () => {
  const [currentVerse, setCurrentVerse] = useState('');
  const [verseText, setVerseText] = useState('');
  const [verseRef, setVerseRef] = useState('');

  useEffect(() => {
    const verse = getDailyVerse();
    setCurrentVerse(verse);
    
    // Split verse and reference if possible
    const lastParenIndex = verse.lastIndexOf('(');
    if (lastParenIndex > -1) {
      setVerseText(verse.substring(0, lastParenIndex).trim());
      setVerseRef(verse.substring(lastParenIndex).replace('(', '').replace(')', ''));
    } else {
      setVerseText(verse);
      setVerseRef('');
    }
  }, []);

  if (!currentVerse) return null;

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 px-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur transition duration-500 group-hover:opacity-40"></div>
        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl text-center md:text-left">
          <div className="p-3 rounded-full bg-white/5 border border-white/10 shrink-0">
            <Quote className="w-6 h-6 text-blue-400" />
          </div>
          <div className="space-y-3">
            <p className="text-lg md:text-xl font-light text-gray-200 leading-relaxed font-sans italic">
              "{verseText}"
            </p>
            {verseRef && (
              <div className="flex justify-center md:justify-start">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full tracking-wider uppercase">
                  {verseRef}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyVerse;