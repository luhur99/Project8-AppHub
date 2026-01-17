"use client";

import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    setCurrentVerse(getDailyVerse());
  }, []);

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white text-lg font-medium z-10 p-4 bg-black bg-opacity-50 rounded-lg max-w-xl mx-auto">
      <p>{currentVerse}</p>
    </div>
  );
};

export default DailyVerse;