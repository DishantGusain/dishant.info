"use client";
import dynamic from 'next/dynamic';
import { memo } from 'react';

const TypeAnimation = dynamic(() => import('react-type-animation').then(mod => mod.TypeAnimation), { ssr: true });


function TypingAnimationComponent() {
    return (
        <div>
            <h2 className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-clip-text from-orange-500 via-orange-300 to-orange-100 my-2   text-left text-transparent text-3xl md:text-6xl 2xl:text-7xl font-semibold ">
                
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        700,
                        "...",
                        1000,
                        "FREELANCER",
                        1000,
                        "DESIGNER",
                        1000,
                        "DEVELOPER",
                        1000,
                    ]}
                    speed={10}
                />
            </h2>
        </div>
    );
}

export default memo(TypingAnimationComponent);