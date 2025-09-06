import React, { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`;
    };

    const animateFollower = () => {
      const speed = 0.1;
      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;

      follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
      
      requestAnimationFrame(animateFollower);
    };

    const handleMouseEnterLink = () => {
      cursor.classList.add('cursor-link');
      follower.classList.add('follower-link');
    };

    const handleMouseLeaveLink = () => {
      cursor.classList.remove('cursor-link');
      follower.classList.remove('follower-link');
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterLink);
      el.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    animateFollower();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterLink);
        el.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="mouse-cursor fixed pointer-events-none z-50 w-4 h-4 bg-primary rounded-full opacity-80 mix-blend-difference transition-transform duration-100"
      />
      <div
        ref={followerRef}
        className="mouse-follower fixed pointer-events-none z-40 w-10 h-10 border border-primary rounded-full opacity-30 transition-all duration-300"
      />
    </>
  );
};

export default MouseFollower;