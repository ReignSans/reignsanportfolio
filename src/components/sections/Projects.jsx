import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return(
        <section id="projects"
                 className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-600 
                                bg-clip-text text-transparent text-center"> 
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Pyalung Tamu: A Mobile Application for Rediscovering Kapampangan Childhood Games
                            </h3>

                            <p className="text-gray-400 mb-4">
                                Serves as the Database Manager, managed the database design, development,
                            and maintenance for the thesis application
                            </p>

                            <div className="flex flex-wrap gap-2 mb-2">
                                {["Flutter", "Supabase"].map((tech, key) => (
                                    <span key={key} 
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/luizaki/pyalung-tamu" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                > 
                                View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Neurorite: Organize Your Thoughts Before They Get Lost
                            </h3>

                            <p className="text-gray-400 mb-4">
                                Contributed to the app's design and conducted quality assurance testing
                            </p>

                            <div className="flex flex-wrap gap-2 mb-2">
                                {["Flutter", "Firebase"].map((tech, key) => (
                                    <span key={key} 
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/userkace/neurorite" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                > 
                                View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">
                                Simple Member Management App
                            </h3>

                            <p className="text-gray-400 mb-4">
                                Contributed to the project by coding several key pages of the ReactJS-based member management website.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-2">
                                {["React"].map((tech, key) => (
                                    <span key={key} 
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/luizaki/apsi-badge-exam" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                > 
                                View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}