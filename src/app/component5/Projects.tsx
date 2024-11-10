import Link from "next/link";
import Image from "next/image";
import countdownImg from "../../../pictures/cv/countdown-timer.jpg"; 
import calculatorImg from "../../../pictures/cv/calculator.jpg"; 
import watchImg from "../../../pictures/cv/watch-website.jpg"; 
import resumeBuilderImg from "../../../pictures/cv/resume-builder.jpg"; 
import ecommerceImg from "../../../pictures/cv/ecommerce.jpg"; 

export default function Projects() {
    return (
        <div id="project">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-40 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium font-serif mb-4 text-gray-700">
                             Projects
                        </h1>
                    </div>
                    {/* Project 1: Countdown Timer */}
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative hover:scale-105 transition-all duration-300 ease-in-out">
                                <Image
                                    src={countdownImg}
                                    width={400} 
                                    height={250} 
                                    className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                                    alt="Countdown Timer"
                                />
                                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-300 ease-in-out">
                                    <div className="text-white p-6">
                                        <h2 className="text-xl font-semibold mb-2">Countdown Timer</h2>
                                        <p className="mb-4">A simple countdown timer built with JavaScript and CSS.</p>
                                        <Link href="your-project-link-here" target="_blank">
                                            <button className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-600">
                                                View Project
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Project 2: Calculator */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative hover:scale-105 transition-all duration-300 ease-in-out">
                                <Image
                                    src={calculatorImg}
                                    width={400} 
                                    height={250} 
                                    className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                                    alt="Calculator"
                                />
                                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-300 ease-in-out">
                                    <div className="text-white p-6">
                                        <h2 className="text-xl font-semibold mb-2">Calculator</h2>
                                        <p className="mb-4">A functional calculator app built with HTML, CSS, and JavaScript.</p>
                                        <Link href="your-project-link-here" target="_blank">
                                            <button className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-600">
                                                View Project
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Project 3: Watch Website */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative hover:scale-105 transition-all duration-300 ease-in-out">
                                <Image
                                    src={watchImg}
                                    width={400} 
                                    height={250} 
                                    className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                                    alt="Watch Website"
                                />
                                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-300 ease-in-out">
                                    <div className="text-white p-6">
                                        <h2 className="text-xl font-semibold mb-2">Watch Website</h2>
                                        <p className="mb-4">A modern watch shop website with interactive UI elements.</p>
                                        <Link href="your-project-link-here" target="_blank">
                                            <button className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-600">
                                                View Project
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Project 4: Resume Builder */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative hover:scale-105 transition-all duration-300 ease-in-out">
                                <Image
                                    src={resumeBuilderImg}
                                    width={400} 
                                    height={250} 
                                    className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                                    alt="Resume Builder"
                                />
                                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-300 ease-in-out">
                                    <div className="text-white p-6">
                                        <h2 className="text-xl font-semibold mb-2">Resume Builder</h2>
                                        <p className="mb-4">An app that helps users build resumes easily with templates.</p>
                                        <Link href="your-project-link-here" target="_blank">
                                            <button className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-600">
                                                View Project
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Project 5: E-commerce Website */}
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative hover:scale-105 transition-all duration-300 ease-in-out">
                                <Image
                                    src={ecommerceImg}
                                    width={400} 
                                    height={250} 
                                    className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                                    alt="E-commerce Website"
                                />
                                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-300 ease-in-out">
                                    <div className="text-white p-6">
                                        <h2 className="text-xl font-semibold mb-2">E-commerce Website</h2>
                                        <p className="mb-4">A fully responsive e-commerce website with a shopping cart and payment system.</p>
                                        <Link href="your-project-link-here" target="_blank">
                                            <button className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-600">
                                                View Project
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
