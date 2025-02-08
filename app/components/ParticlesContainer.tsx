"use client";

import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '@/Context/ThemeContextProvider';


const ParticlesContainer = () => {
    const {theme} = useTheme()

    // Initialize particles
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="hero-particles"
            className="w-screen h-full absolute top-0 left-0 -z-10"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: "transparent" } },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        push: { quantity: 2 },
                        repulse: { distance: 200, duration: 0.5 },
                    },
                },
                particles: {
                    color: { value: theme === "light" ? "#000" : "#fff" },
                    links: {
                        color: theme === "light" ? "#000" : "#fff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "out" },
                        speed: 3,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 50,
                    },
                    opacity: { value: 0.6 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 5 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesContainer;
