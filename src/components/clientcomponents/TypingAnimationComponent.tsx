"use client";
import { TypeAnimation } from "react-type-animation";

export default function TypingAnimationComponent() {
    return <div>
        <h2 className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-clip-text from-orange-500 via-orange-300 to-orange-100 mt-0 mb-0 font-extralight text-2xl text-left text-transparent md:text-4xl 2xl:text-5xl animate-slideBottom">
            <TypeAnimation
                className=""
                preRenderFirstString={true}
                sequence={[
                    700,
                    "HI, I'M",
                    1500,
                    "HI, I'M A DEVELOPER",
                    1000,
                    "HI, I'M A DESIGNER",
                    1000,
                    "HI, I'M A FREELANCER",
                    1000,
                ]}
                speed={10}
            />
        </h2>
    </div>;
}