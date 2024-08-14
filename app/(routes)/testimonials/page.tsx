"use client"

import Image from 'next/image';
import TransitionPage from '@/components/transition-page';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaIdCard, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <>
            <TransitionPage />
            <div className='flex flex-col items-center justify-center h-lvh'>
                
            <h1 className="text-3xl leading-tight text-center md:text-4xl md:mb-5 font-bold">
            My social networks  
                    <span className="block font-bold text-secondary"></span>
                </h1>

                <Image
                    src="/selfie1.png" // Reemplaza con la ruta de tu imagen
                    alt="Tu nombre"
                    width={150}
                    height={150}
                    className="rounded-full mb-5"
                />
                
                <ul className="list-none text-center space-y-4">
                    <li className="flex items-left justify-center">
                        <FaLinkedin className="mr-2 text-2xl" />
                        <a href="https://www.linkedin.com/in/josuereyes16/" target="_blank" className="text-lg hover:underline">
                            LinkedIn
                        </a>
                    </li>
                    <li className="flex items-center justify-center">
                        <FaGithub className="mr-2 text-2xl" />
                        <a href="https://github.com/josuereyes16" target="_blank" className="text-lg hover:underline">
                            GitHub
                        </a>
                    </li>
                    <li className="flex items-center justify-center">
                        <FaFileAlt className="mr-2 text-2xl" />
                        <a href="https://drive.google.com/file/d/1I5oCZAS-0TloUHOfYVxmz3ycr8ygIvL6/view?usp=sharing" target="_blank" className="text-lg hover:underline">
                        Curriculum
                        </a>
                    </li>
                    <li className="flex items-center justify-center">
                        <FaIdCard className="mr-2 text-2xl" />
                        <a href="https://drive.google.com/file/d/1BgUViTJB2k1Y_-946jtTosA1DIBOC784/view?usp=sharing" target="_blank" className="text-lg hover:underline">
                        Business card
                        </a>
                    </li>
                    <li className="flex items-center justify-center">
                        <FaWhatsapp className="mr-2 text-2xl" />
                        <a href="https://wa.me/573143404164" target="_blank" className="text-lg hover:underline">
                            WhatsApp
                        </a>
                    </li>
                    <li className="flex items-center justify-center">
                        <FaEnvelope className="mr-2 text-2xl" />
                        <a href="mailto:antoniojosuerp@ufps.edu.co" className="text-lg hover:underline">
                        Send me an email
                        </a>
                    </li>
                   
                </ul>
            </div>
        </>
    );
}

export default ContactPage;
