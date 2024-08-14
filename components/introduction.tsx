import { AlignCenter } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Hello I&apos;m Josué Reyes.👋
                    <br />
                        <TypeAnimation
                            sequence={[
                                'Full ',
                                1000,
                                'Full Stack ',
                                1000,
                                'Full Stack Web ',
                                1000,
                                'Full Stack Web Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl text-center md:text-xl md:mx-0 md:mb-8">
                    I&apos;m a web developer with experience in creating frontend and backend applications using technologies such as JavaScript, Python, React.js, Django, etc. <br />
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all bg-white text-black border-2 border-secondary cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary font-bold">
                            My projects
                        </a>
                        <a href="/testimonials"
                            className="px-3 py-2 my-5 transition-all bg-white text-black border-2 border-secondary cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary font-bold" >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
