"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const images = [
        // Frontend Development
        { src: "https://cdn.simpleicons.org/html5/E34F26", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/css3/1572B6", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/javascript/F7DF1E", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/react/61DAFB", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/redux/764ABC", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/bootstrap/7952B3", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", width: 50, height: 50 },
    
        // Backend Development
        { src: "https://cdn.simpleicons.org/nodedotjs/339933", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/express/000000", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/mongodb/47A248", width: 50, height: 50 },
        { src: "https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png", width: 124, height: 60 },
    
        // Tools & Libraries
        { src: "https://cdn.simpleicons.org/cypress/17202C", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/postman/FF6C37", width: 50, height: 50 },
        { src: "https://cdn.simpleicons.org/git/F05032", width: 50, height: 50 }
    ];


    return (
        <Particles
            id="skills-particles"
            init={particlesInit}
            className="w-full h-screen"
            options={{
                fullScreen: false,
                particles: {
                    number: {
                        value: 0, // Disable auto-generated particles
                    },
                    shape: {
                        type: "image",
                    },
                    size: {
                        value: 40,
                        animation: {
                            enable: true,
                            speed: 5,
                            minimumValue: 10,
                            sync: false,
                        },
                    },
                    opacity: {
                        value: 1,
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                    life: {
                        duration: { value: 5, sync: false },
                        count: 0,
                    },
                },
                manualParticles: images.map((image) => ({
                    options: {
                        shape: {
                            type: "image",
                            image: {
                                src: image.src,
                                width: image.width,
                                height: image.height,
                            },
                        },
                    },
                })),
                detectRetina: true,
                _options: {
                    crossOrigin: "anonymous" // Add this line
                }
            }}
        />
    );
};

export default ParticlesBackground;