'use client';

import {useEffect, useState} from 'react';

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY});
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getTransform = (baseX: number, baseY: number, intensity: number = 0.1) => {
    const deltaX = (mousePosition.x - window.innerWidth / 2) * intensity;
    const deltaY = (mousePosition.y - window.innerHeight / 2) * intensity;
    return `translate(${deltaX}px, ${deltaY}px)`;
  };

  const getReverseTransform = (baseX: number, baseY: number, intensity: number = 0.1) => {
    const deltaX = (mousePosition.x - window.innerWidth / 2) * -intensity;
    const deltaY = (mousePosition.y - window.innerHeight / 2) * -intensity;
    return `translate(${deltaX}px, ${deltaY}px)`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="hidden md:block absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/15 to-orange-600/5 rounded-full animate-pulse"
        style={{animationDuration: '6s', transform: getTransform(10, 20, 0.05), transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="hidden md:block absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 rounded-full animate-pulse"
        style={{animationDuration: '8s', animationDelay: '2s', transform: getReverseTransform(80, 40, 0.08), transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="hidden md:block absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-500/15 to-yellow-600/5 rounded-full animate-pulse"
        style={{animationDuration: '7s', animationDelay: '1s', transform: getTransform(25, 68, 0.06), transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="hidden md:block absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-orange-600/3 rounded-full animate-pulse"
        style={{animationDuration: '9s', animationDelay: '3s', transform: getReverseTransform(67, 50, 0.07), transition: 'transform 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>

      <div
        className="md:hidden absolute top-16 left-4 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-orange-600/3 rounded-full animate-pulse"
        style={{animationDuration: '6s', transform: getTransform(4, 16, 0.03), transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="md:hidden absolute top-32 right-4 w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-cyan-600/3 rounded-full animate-pulse"
        style={{animationDuration: '8s', animationDelay: '2s', transform: getReverseTransform(96, 32, 0.04), transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="md:hidden absolute bottom-24 left-1/2 w-8 h-8 bg-gradient-to-br from-yellow-500/10 to-yellow-600/3 rounded-full animate-pulse"
        style={{animationDuration: '7s', animationDelay: '1s', transform: getTransform(50, 76, 0.03), transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>

      <div
        className="hidden md:block absolute top-16 right-1/4 w-8 h-8 bg-orange-500/20 rotate-45 animate-pulse"
        style={{animationDuration: '4s', transform: getReverseTransform(75, 16, 0.1), transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="hidden md:block absolute bottom-40 left-1/3 w-12 h-12 bg-cyan-500/15 rounded-full animate-pulse"
        style={{animationDuration: '5s', animationDelay: '1.5s', transform: getTransform(33, 60, 0.08), transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="hidden md:block absolute top-1/3 right-1/6 w-6 h-6 bg-yellow-500/25 animate-pulse"
        style={{animationDuration: '6s', animationDelay: '2.5s', transform: getReverseTransform(83, 33, 0.12), transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>

      <div
        className="hidden md:block absolute top-1/4 left-1/4 text-6xl text-foreground/5 rotate-12 animate-pulse"
        style={{animationDuration: '8s', transform: getTransform(25, 25, 0.15), transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      >
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '0s', animationDuration: '3s'}}
        >
          C
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '0.5s', animationDuration: '3s'}}
        >
          O
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '1s', animationDuration: '3s'}}
        >
          D
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '1.5s', animationDuration: '3s'}}
        >
          E
        </span>
      </div>

      <div
        className="md:hidden absolute top-20 left-6 text-2xl text-foreground/5 rotate-12 animate-pulse"
        style={{animationDuration: '8s', transform: getReverseTransform(6, 20, 0.08), transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      >
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '0s', animationDuration: '3s'}}
        >
          C
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '0.5s', animationDuration: '3s'}}
        >
          O
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '1s', animationDuration: '3s'}}
        >
          D
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '1.5s', animationDuration: '3s'}}
        >
          E
        </span>
      </div>

      <div
        className="hidden md:block absolute bottom-1/4 right-1/4 text-5xl text-foreground/5 -rotate-12 animate-pulse"
        style={{animationDelay: '2s', animationDuration: '6s', transform: getReverseTransform(75, 75, 0.12), transition: 'transform 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      >
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '0s', animationDuration: '4s'}}
        >
          D
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '0.8s', animationDuration: '4s'}}
        >
          E
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDelay: '1.6s', animationDuration: '4s'}}
        >
          V
        </span>
      </div>

      <div
        className="hidden md:block absolute top-1/2 left-1/6 text-4xl text-foreground/5 rotate-45 animate-pulse"
        style={{animationDelay: '4s', animationDuration: '7s', transform: getTransform(17, 50, 0.1), transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      >
        <span
          className="inline-block animate-pulse"
          style={{animationDuration: '5s'}}
        >
          W
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDuration: '5s', animationDelay: '1s'}}
        >
          E
        </span>
        <span
          className="inline-block animate-pulse"
          style={{animationDuration: '5s', animationDelay: '2s'}}
        >
          B
        </span>
      </div>

      <div
        className="absolute top-1/2 left-1/2 w-1 h-1 md:w-2 md:h-2 bg-orange-500/30 rounded-full animate-pulse"
        style={{animationDelay: '1s', animationDuration: '4s', transform: getReverseTransform(50, 50, 0.2), transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 md:w-3 md:h-3 bg-cyan-500/25 rounded-full animate-pulse"
        style={{animationDelay: '2.5s', animationDuration: '5s', transform: getTransform(67, 33, 0.18), transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/2 w-1 h-1 md:w-2 md:h-2 bg-yellow-500/35 rounded-full animate-pulse"
        style={{animationDelay: '4s', animationDuration: '6s', transform: getReverseTransform(50, 67, 0.15), transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>

      <div
        className="hidden md:block absolute top-1/4 right-1/4 w-16 h-16 border-2 border-orange-500/15 rounded-full animate-pulse"
        style={{animationDuration: '6s', transform: getTransform(75, 25, 0.08), transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="hidden md:block absolute bottom-1/4 left-1/4 w-20 h-20 border-2 border-cyan-500/15 rounded-full animate-pulse"
        style={{animationDuration: '8s', animationDelay: '2s', transform: getReverseTransform(25, 75, 0.06), transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="hidden md:block absolute top-1/2 left-1/2 w-12 h-12 border-2 border-yellow-500/15 rounded-full animate-pulse"
        style={{animationDuration: '7s', animationDelay: '4s', transform: getTransform(50, 50, 0.1), transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>

      <div
        className="absolute top-1/6 left-1/2 w-2 h-2 md:w-4 md:h-4 bg-orange-500/20 rounded-full animate-pulse"
        style={{animationDuration: '5s', animationDelay: '1s', transform: getReverseTransform(50, 17, 0.12), transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="absolute bottom-1/6 right-1/2 w-1.5 h-1.5 md:w-3 md:h-3 bg-cyan-500/25 rounded-full animate-pulse"
        style={{animationDuration: '6s', animationDelay: '3s', transform: getTransform(50, 83, 0.1), transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
      <div
        className="absolute top-2/3 left-1/5 w-2.5 h-2.5 md:w-5 md:h-5 bg-yellow-500/20 rounded-full animate-pulse"
        style={{animationDuration: '4s', animationDelay: '2s', transform: getReverseTransform(20, 67, 0.14), transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}
      ></div>
    </div>
  );
}
