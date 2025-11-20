import { RevealOnScroll } from "../RevealOnScroll";
import portrait from "../../assets/Santos_Reign.png";

export const Home = () => {

    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 scroll-mt-16">
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-center z-10 px-4 gap-8">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent leading-right">
                            Hi, I'm Reign Santos
                        </h1>

                        <p className="text-gray-400 text-lg mb-6 max-w-lg mx-auto md:mx-0">
                            I am a 4th-year BS Computer Science student of Holy Angel University 
                            with an experience in backend development, primarily using Python and Java
                            and familiar with frontend development, utilizing JavaScript, JSX, and
                            React to create responsive and interactive web applications.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <div className="flex space-x-4">
                                <a href="#projects" 
                                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,264,0.4)]"
                                >
                                    View Projects
                                </a>

                                <a href="#contact" 
                                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,264,0.2)] hover:bg-blue-500/10"
                                >
                                Contact Me
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <figure>
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-500/40 to-green-500/30 rounded-full flex items-center justify-center shadow-xl">
                                <div className="bg-white/90 rounded-full p-1 md:p-2">
                                    <img
                                        src={portrait}
                                        alt="Reign Santos Portrait"
                                        className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover"
                                    />
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );

};