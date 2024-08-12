import { BookText, CodeSquare,ShieldCheck, HomeIcon, UserRound, Linkedin, Contact, Rss, Mail, PhoneCall, Crop, Pencil, Computer, Book, Rocket, Speech, Facebook, Github, Code, SquareChartGantt, Database, Brain, } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Contact size={30} strokeWidth={1} />,
        src: "https://drive.google.com/file/d/1I5oCZAS-0TloUHOfYVxmz3ycr8ygIvL6/view?usp=sharing",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/josuereyes16/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/josuereyes16",
    },
    {
        id: 4,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:antoniojosuerp@ufps.edu.co",
    },
    {
        id: 5,
        logo: <PhoneCall size={30} strokeWidth={1} />,
        src: "https://wa.me/573143404164",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Technician specializing in Software Development",
        subtitle: "School San Francisco de Sales",
        description: "During this program, I was introduced to web development, focusing on creating dynamic and responsive websites using HTML, CSS, and JavaScript. I also gained a strong foundation in Object-Oriented Programming (OOP) concepts, which helped me build well-structured and efficient code.",
        date: "2017 - 2019 ",
    },
    {
        id: 2,
        title: "Systems Engineering Career",
        subtitle: "University Francisco de Paula Santander",
        description: " Developed a comprehensive understanding of software engineering principles, with a strong focus on designing and optimizing systems. Worked on various projects that integrated theory and practical skills, deepening my expertise in system analysis, software development, and project management.",
        date: "2020 - 2025",
    },
    {
        id: 3,
        title: "Back-End Specialization",
        subtitle: "One Oracle Next Education",
        description: "Enhanced my skills in server-side development, focusing on building robust and scalable back-end systems. Gained hands-on experience with database management, API development, and cloud services, applying advanced techniques to create efficient and secure back-end solutions.",
        date: "2023 - 2024",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: +5,
        text: "Years of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: +40,
        text: "Skills acquired",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: +20,
        text: "Completed projects",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: +30,
        text: "Certifications",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Code />,
        title: "Full Stack Web Development",
        description: "Design and development of complete web applications using modern technologies.",
    },
    {
        icon: <SquareChartGantt />,
        title: "Project Management",
        description: "Coordination and supervision of software development projects, ensuring  deadlines and quality.",
    },
    {
        icon: <ShieldCheck />,
        title: "QA Analysis",
        description: "Execution of quality tests, identification of bugs, and ensuring the quality of applications to guarantee optimal performance.",
    },
    {
        icon: <Database />,
        title: "Database Management",
        description: "Administration and optimization  databases, ensuring the integrity and security of information.",
    },
    {
        icon: <Brain />,
        title: "Software Engineering",
        description: "Design and development of robust software solutions, following best practices in software  architecture.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];