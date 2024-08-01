import { AlignCenter } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Hello I'm Josué Reyes.👋
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
                    I'm a web developer with experience in creating frontend and backend applications using technologies such as JavaScript, Python, React.js, Django, etc. <br />
                     My main focus is writing clean and efficient code that meets industry standards and enhances user experience. I'm a great teammate and have effective communication skills that allow me to collaborate effectively with designers, developers, and stakeholders in all aspects of a project.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-3 mx-auto md:flex-row md:justify-center md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/100 font-bold">
                            My projects
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary font-bold" >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;