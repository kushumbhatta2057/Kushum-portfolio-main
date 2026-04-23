'use client';

import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.slide-up-and-fade', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
                y: 120,
                opacity: 0,
                stagger: 0.06,
            });
        },
        { scope: container }
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container max-w-6xl mx-auto" ref={container}>
                
                {/* QUOTE */}
                <h2 className="text-4xl md:text-6xl font-light slide-up-and-fade text-green-400 leading-tight mb-16">
                    “Innovation distinguishes between a leader and a follower.”
                    <br />
                    <br />
                    <span className="text-white text-xl md:text-2xl font-normal">
                        — Steve Jobs
                    </span>
                </h2>

                {/* SUB INTRO */}
                <p className="pb-6 border-b text-muted-foreground slide-up-and-fade leading-relaxed max-w-3xl">
                    My work is centered on designing digital experiences that feel clear, intuitive, and purposeful
                    <br />
                    while staying practical and easy to use.
                    <br />
                    <br />
                    I believe thoughtful design and modern frontend development go hand in hand
                    <br />
                    to create products that genuinely serve users.
                </p>

                {/* MAIN CONTENT */}
                <div className="grid md:grid-cols-12 gap-12 mt-14 items-center">
                    
                    {/* LEFT PHOTO */}
                    <div className="md:col-span-4 slide-up-and-fade flex justify-center">
                        <div className="relative w-72 h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/me.jpg"
                                alt="Kushum Bhatta"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="md:col-span-8">
                        <p className="text-5xl md:text-6xl slide-up-and-fade text-green-400 mb-10 leading-none">
                            Hi, I&apos;m Kushum.
                        </p>

                        <p className="text-lg md:text-xl text-muted-foreground slide-up-and-fade leading-relaxed max-w-3xl">
                            I&apos;m a UI/UX Designer and Frontend Developer with a background in Computer Engineering,
                            <br />
                            passionate about solving problems through clean, user-focused design.
                            <br />
                            I enjoy turning ideas into interfaces that feel intuitive,
                            <br />
                            visually balanced, and responsive across devices.
                            <br />
                            My approach combines design thinking with practical frontend skills
                            <br />
                            to build experiences that are functional,
                            <br />
                            polished, and easy for people to navigate.
                            <br />
                            <br />
                            I focus on improving usability through thoughtful layouts,
                            <br />
                            clear interaction patterns, and modern web standards.
                        </p>

                        <p className="mt-10 slide-up-and-fade text-green-400 font-semibold tracking-wide text-lg">
                            TURN IDEAS INTO REALITY WITH KUSHUM BHATTA
                            <br />
                            DESIGNING EXPERIENCES PEOPLE ENJOY USING.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
