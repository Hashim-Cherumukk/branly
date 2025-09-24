import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { WorkCard } from './WorkCard';

type WorkItem = {
  src: string;
  type: 'image' | 'video';
};

const works: WorkItem[] = [
  { src: "/images/Artboard-1.jpg", type: 'image' },
  { src: "/videos/work-1.mp4", type: 'video' },
  { src: "/images/Artboard-2.jpg", type: 'image' },
  { src: "/videos/work-2.mp4", type: 'video' },
  { src: "/images/Artboard-3.jpg", type: 'image' },
  { src: "/videos/work-3.mp4", type: 'video' },
  { src: "/images/Artboard-4.jpg", type: 'image' },
  { src: "/videos/work-4.mp4", type: 'video' },
  { src: "/images/Artboard-5.jpg", type: 'image' },
  { src: "/videos/work-5.mp4", type: 'video' },
  { src: "/images/work-7.jpg", type: 'image' },
];

const borderColors = ['#89f2ff', '#d7a1ff', '#ffb38a', '#d7ff00'];

const columns: WorkItem[][] = [[], [], []];
works.forEach((work, index) => {
  columns[index % 3].push(work);
});
const [col1, col2, col3] = columns;


export const Hero = () => {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupInfiniteScroll = (target: HTMLDivElement | null, isOpposite: boolean) => {
      if (!target) return;
      gsap.to(target, {
        yPercent: isOpposite ? 50 : -50,
        ease: 'none',
        duration: 30, 
        repeat: -1,
      });
    };

    setupInfiniteScroll(col1Ref.current, false);
    setupInfiniteScroll(col2Ref.current, true);
    setupInfiniteScroll(col3Ref.current, false);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center bg-[radial-gradient(ellipse_at_center,_#1c1c1c_0%,_#0a0a0a_70%)]">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-brand-lime/10 rounded-full filter blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 w-full h-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 h-full">
          
          <div className="flex flex-col justify-end text-left z-10 lg:w-1/2 h-full pb-24">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-soft-white leading-tight font-jakarta">
                Crafting Digital Experiences
              </h1>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-start gap-x-5 gap-y-4">
                <a 
                  href="#"
                  className="relative inline-block no-underline overflow-hidden rounded-full border border-brand-lime px-8 py-3 font-bold text-brand-lime transition-colors duration-300 ease-in-out hover:text-soft-black group bg-white/5 shadow-[0_0_8px_0_#D7FF0080]"
                >
                  <span
                    className="absolute inset-0 bg-brand-lime transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-full"
                  ></span>
                  <span className="relative">Get in Touch</span>
                </a>
                <p className="text-lg text-soft-white/80 max-w-xs sm:max-w-sm text-left">
                  We bring ideas to life with branding, digital art, and immersive web experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center -rotate-12 scale-110">
              {/* CHANGED: Added 'items-center' to prevent the columns from stretching vertically. */}
              <div className="relative w-full h-full flex items-center gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,#000_25%,#000_75%,transparent_100%)]">
                
                <div ref={col1Ref} className="flex flex-col gap-4 w-1/3 [will-change:transform]">
                  {[...col1, ...col1].map((work, index) => (
                    <WorkCard 
                      key={`col1-${index}`} 
                      src={work.src}
                      type={work.type}
                      borderColor={borderColors[index % borderColors.length]} 
                    />
                  ))}
                </div>
                
                <div ref={col2Ref} className="flex flex-col gap-4 w-1/3 relative [will-change:transform]">
                  {[...col2, ...col2].map((work, index) => (
                    <WorkCard 
                      key={`col2-${index}`} 
                      src={work.src}
                      type={work.type}
                      borderColor={borderColors[index % borderColors.length]} 
                    />
                  ))}
                </div>
                
                <div ref={col3Ref} className="flex flex-col gap-4 w-1/3 [will-change:transform]">
                  {[...col3, ...col3].map((work, index) => (
                    <WorkCard 
                      key={`col3-${index}`} 
                      src={work.src}
                      type={work.type}
                      borderColor={borderColors[index % borderColors.length]} 
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};