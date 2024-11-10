import Image from "next/image";
import pic from "../../../pictures/pic3.jpg";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="bg-black text-white"> {/* Added bg-black and text-white */}
      <section className="text-gray-300 body-font"> {/* Adjusted text color for readability */}
        <div className="container flex px-5 py-32 md:flex-row flex-col items-center mx-auto">
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[15rem]" 
              alt="pic"
              src={pic} 
              width={500} 
              height={500}
            />
          </div> */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-lg font-bold mb-4 text-white"> {/* Updated text color */}
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              I’m a dedicated web developer and graphic designer with a flair for creating modern, engaging websites and visuals. Skilled in HTML, CSS, TypeScript, and graphic design tools, I focus on crafting seamless user experiences with a creative touch. Always eager to learn, I enjoy transforming ideas into reality through both code and design, and I’m committed to continuously enhancing my skills in both fields.
            </p>
            <p className="mb-8 leading-relaxed">
              I aspire to build my career in freelancing, where I can use my skills to work independently and gain experience by collaborating on diverse projects with different clients. With a passion for web development and graphic design, I aim to deliver creative and quality work for my clients. Through freelancing, I’m determined to advance my goals and passion, continuously learning and growing in my career.
            </p>
            <div className="flex justify-center">
              <Link href="/pictures/cv/mycv.pdf" target="_blank" rel="noopener noreferrer">
                <button
                 className="border-2 font-medium border-yellow-500 py-2 px-6 focus:outline-none text-lg inline-flex items-center bg-white text-black rounded mt-4 md:mt-0 shadow-inner" style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.6)' }}>
            Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
