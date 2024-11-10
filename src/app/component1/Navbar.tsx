import Link from "next/link";
import logo from "../../../pictures/cv/logo1.png";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";

export default function Home() {
  return (
    <div className="z-50 sticky top-0">
      <header className="bg-background text-foreground body-font text-xl mx-auto shadow-lg">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-semibold items-center text-foreground mb-4 md:mb-0">
            <Image src={logo} width={80} height={80} alt="AN" className="rounded-full shadow-md" />
            <span className="ml-3 text-3xl font-serif text-black">Maryam Saleem</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-foreground">
            <Link href="/" className="mr-5 hover:text-highlight">Home</Link>
            <Link href="#about" className="mr-5 hover:text-highlight">About</Link>
            <Link href="#skill" className="mr-5 hover:text-highlight">Skills</Link>
            <Link href="#project" className="mr-5 hover:text-highlight">Projects</Link>
            <Link href="#contact" className="mr-5 hover:text-highlight">Contact</Link>
          </nav>
          <Link href="/pictures/cv/myCv.pdf" download>
            <button
              className="inline-flex items-center border-0 py-1 px-3 bg-highlight text-foreground rounded text-base mt-4 md:mt-0 shadow-lg hover:bg-accent focus:outline-none"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
            >
              Resume
              <AiOutlineCloudDownload className="ml-2 text-xl" />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
