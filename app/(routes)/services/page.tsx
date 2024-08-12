import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl font-bold leading-tight text-center md:text-4xl md:mb-5">
                        My
                        <span className="font-bold text-secondary"> services</span>
                    </h1>
                    <p className="mb-3 text-xl text-center text-white">
                    I offer comprehensive frontend and backend web development services, creating robust, engaging, and functional websites and applications. With a full-stack approach, I use technologies such as React, Next.js, Node.js, and MongoDB to ensure optimal performance and a great user experience. Additionally, I perform quality assurance (QA) and manage databases.                             </p>
                    <div className="flex justify-center">
                        <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                            Contacta conmigo
                        </button>
                    </div>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
