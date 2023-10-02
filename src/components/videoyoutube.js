"use client"
import React, { useState, useEffect } from "react";

export default function videoyoutube() {
  const [videoCarregado, setVideoCarregado] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVideoCarregado(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (videoCarregado) {
    return (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cCzQJmqE6nI?si=93kTkWFW7Ms-GE39"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  } else {
    return (
      <div className="text-center">
        Carregando o vídeo do YouTube...
      </div>
    );
  }
}

