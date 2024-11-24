"use client";
import dynamic from 'next/dynamic';
import { memo } from 'react';

const TypeAnimation = dynamic(() => import('react-type-animation').then(mod => mod.TypeAnimation), { ssr: false });


function TypingAnimationComponent() {
    return (
        <div>
            <h2 className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-clip-text from-orange-500 via-orange-300 to-orange-100 mt-0 mb-0 font-extralight text-2xl text-left text-transparent md:text-3xl lg:text-4xl ">
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        1000,
                        "...",
                        3000,
                        "A FREELANCER",
                        2000,
                        "A DESIGNER",
                        2000,
                        "A DEVELOPER",
                        1000,
                    ]}
                    speed={10}
                />
            </h2>
        </div>
    );
}

export default memo(TypingAnimationComponent);