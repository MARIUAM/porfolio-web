import Link from "next/link";
import Image from "next/image";
import logo from "../../../pictures/cv/logo1.png";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

export default function Component2() {
    return (
        <footer className="bg-black text-gray-300 body-font font-sans">
            <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link href={""} className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <Image src={logo} width={100} height={100} alt="Maryam Saleem Logo" className="w-14 border-white border-2 font-bold rounded-full" />
                        <span className="ml-3 text-3xl font-serif text-white">Maryam Saleem</span>
                    </Link>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-5 md:text-left text-center pb-14">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-gray-100 text-lg tracking-wide font-semibold mb-3">Our Expertise</h2>
                        <nav className="list-none mb-10">
                            <li><Link href={""}>Custom Web Development</Link></li>
                            <li><Link href={""}>UI/UX Design</Link></li>
                            <li><Link href={""}>E-Commerce Solutions</Link></li>
                            <li><Link href={""}>Brand Strategy & Identity</Link></li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-gray-100 text-lg tracking-wide font-semibold mb-3">Showcase</h2>
                        <nav className="list-none mb-10">
                            <li><Link href={""}>Recent Projects</Link></li>
                            <li><Link href={""}>Client Testimonials</Link></li>
                            <li><Link href={""}>Case Studies</Link></li>
                            <li><Link href={""}>Design Portfolio</Link></li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-gray-100 text-lg tracking-wide font-semibold mb-3">Learn More</h2>
                        <nav className="list-none mb-10">
                            <li><Link href={""}>Blog</Link></li>
                            <li><Link href={""}>Design Tips</Link></li>
                            <li><Link href={""}>Web Development Guides</Link></li>
                            <li><Link href={""}>How-To Tutorials</Link></li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font text-gray-100 text-lg tracking-wide font-semibold mb-3">Connect</h2>
                        <nav className="list-none mb-10">
                            <li><Link href={""}>Email</Link></li>
                            <li><Link href={""}>LinkedIn</Link></li>
                            <li><Link href={""}>Facebook</Link></li>
                            <li><Link href={""}>Instagram</Link></li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900">
                <div className="container mx-auto pb-5 pt-5 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">Maryam Saleem. All rights reserved.</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-end">
                        <Link href={""} className="ml-3 text-gray-500 text-3xl hover:text-white">
                            <IoLogoLinkedin />
                        </Link>
                        <Link href={""} className="ml-3 text-gray-500 text-3xl hover:text-white">
                            <IoLogoFacebook />
                        </Link>
                        <Link href={""} className="ml-3 text-gray-500 text-3xl hover:text-white">
                            <IoLogoTwitter />
                        </Link>
                        <Link href={""} className="ml-3 text-gray-500 text-3xl hover:text-white">
                            <IoLogoInstagram />
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
}
