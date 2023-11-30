import Image from "next/image";
import Contact from "./Components/Contact";
import BlogPostsCont from "./Components/BlogPostsCont";
import { GiRobotGolem, GiArtificialIntelligence } from "react-icons/gi";
import { SiWebpack } from "react-icons/si";
import { FaFileCode, FaPenNib } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex container mx-auto flex-col items-center justify-center">
      <section className="relative w-full min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 md:gap-0  pt-[75px] over">
        <div className="flex flex-col items-center md:items-start md:gap-3 order-2 md:order-1">
          <h1 className="tracking-widest text-5xl lg:text-6xl  font-medium text-center md:text-left">
            JOIN THE
          </h1>
          <h1 className="tracking-widest text-5xl lg:text-6xl  font-medium text-center md:text-left">
            COMMUNITY OF
          </h1>
          <h1 className="tracking-widest text-5xl lg:text-6xl  font-medium text-center md:text-left text-blue-600">
            TECH ENTHUSIASTS
          </h1>
          <p className="mt-3 text-base break-words w-[70vw] md:w-[30vw] text-center md:text-left">
            Connect with like-minded individuals and expand your knowledge in
            computer, programming, robotics, and design. Let's be the best
            together
          </p>
          <button
            type="button"
            className="Bebas text-xl mt-5 py-2 font-Bebas px-7 me-2 mb-2 font-medium text-whiterounded-lg border focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-white border-gray-600 hover:text-white hover:bg-gray-700 rounded-lg"
          >
            LEARN MORE
          </button>
        </div>
        <Image
          src={"/BigImg.png"}
          alt={"Image"}
          className="relative aspect-square object-contain max-h-[80vh] md:mr-[-10vw] max-w-[95vw] sm:max-w-[80vw] md:max-w-[55vw] order-1 md:order-2"
          width={850}
          height={850}
        />
        <img
          src="/image/bg2.svg"
          className="absolute bottom-[5vh] right-0"
          alt=""
        />
      </section>

      <div className="w-screen h-fit md:px-36 mt-16 p-4 md:py-16 items-center flex gap-16 flex-wrap bg-sectorsBG object-cover">
        <div className="flex flex-col items-center gap-1 flex-1 transition-all hover:scale-125">
          <GiArtificialIntelligence className="w-16 h-16 text-white" />
          <h1 className="text-xl text-white text-center">
            Artificial Intelligence
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1 flex-1 transition-all hover:scale-125">
          <GiRobotGolem className="w-16 h-16 text-white" />
          <h1 className="text-xl text-white text-center">
            Hardwares & Robotics
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1 flex-1 transition-all hover:scale-125">
          <SiWebpack className="w-16 h-16 text-white" />
          <h1 className="text-xl text-white text-center">
            Website & Native App Development
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1 flex-1 transition-all hover:scale-125">
          <FaFileCode className="w-16 h-16 text-white" />
          <h1 className="text-xl text-white text-center">
            Competitive Programming
          </h1>
        </div>

        <div className="flex flex-col items-center gap-1 flex-1 transition-all hover:scale-125">
          <FaPenNib className="w-16 h-16 text-white" />
          <h1 className="text-xl text-white text-center">
            Graphics Designing & Article
          </h1>
        </div>
      </div>

      <section className="flex flex-col gap-7 items-center">
        <div className="flex flex-col md:flex-row gap-2 self-center mt-12 md:mt-20 md:mb-5 items-center">
          <h1 className="text-3xl md:text-5xl">CHECK OUT OUR</h1>

          <h1 className="text-3xl md:text-5xl text-blue-500">HASHTECH POSTS</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-[90vw] md:w-[30rem] h-56 bg-[#2E2E2E] rounded flex hover:scale-110 transition-all">
            <Image
              src="/Cover.png"
              alt={"Image"}
              width={256}
              height={256}
              className="flex-[1.5] object-cover"
            />
            <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-3">
              <h1 className="p-1 text-white font-Roboto font-bold text-base w-[90%] break-words mt-1">
                Inter College Programming Contest
              </h1>
              <p className="self-start font-Roboto text-white text-base ml-1 mt-1 font-light">
                19h ago
              </p>
            </div>
          </div>
          <div className="w-[90vw] md:w-[30rem] h-56 bg-[#2E2E2E] rounded flex hover:scale-110 transition-all">
            <Image
              src="/Cover.png"
              alt={"Image"}
              width={256}
              height={256}
              className="flex-[1.5] object-cover"
            />
            <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-3">
              <h1 className="p-1 text-white font-Roboto font-bold text-base w-[90%] break-words mt-1">
                Inter College Programming Contest
              </h1>
              <p className="self-start font-Roboto text-white text-base ml-1 mt-1 font-light">
                19h ago
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 flex flex-col gap-7 items-start justify-start w-full py-5 relative">
        <div className="flex flex-col md:flex-row gap-2 self-center mt-20">
          <h1 className="text-center tracking-wider mx-auto md:text-left text-3xl md:text-5xl text-blue-500">
            OUR ACTIVITIES
          </h1>
          <h1 className="text-center mx-auto md:text-left text-3xl md:text-5xl">
            INCLUDE
          </h1>
        </div>
        <BlogPostsCont />
      </section>

      <section className="mt-36 flex flex-col items-center gap-9">
        <div className="flex flex-col md:flex-row gap-1">
          <h1 className="text-3xl md:text-5xl text-center">WHY YOU SHOULD</h1>
          <h1 className="text-blue-500 text-3xl md:text-5xl text-center">
            JOIN NDITC?
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/Ellipse1.png"}
              alt={"Image"}
              width={150}
              height={150}
              className="hover:scale-110 transition-all"
            />
            <h1 className="text-2xl px-3 text-center">
              GAIN EXPERIENCE BY CONTRIBUTING TO REAL-WORLD PROJECTS
            </h1>
            <p className="text-center text-base">
              TechClub provides a supportive community for members to network
              with peers with similar interests and connect with mentors who can
              guide them in their journey.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/Ellipse2.png"}
              alt={"Image"}
              width={150}
              height={150}
              className="hover:scale-110 transition-all"
            />
            <h1 className="text-2xl px-3 text-center">
              EXPLORE THE LEARNING BASED CLUB JOURNEY WITH NDITC
            </h1>
            <p className="text-center text-base">
              TechClub provides a supportive community for members to network
              with peers with similar interests and connect with mentors who can
              guide them in their journey.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/Ellipse3.png"}
              alt={"Image"}
              width={150}
              height={150}
              className="hover:scale-110 transition-all"
            />
            <h1 className="text-2xl px-3 text-center">
              NETWORK WITH PEERS AND MENTORS & SHOWCASE YOUR SKILLSET
            </h1>
            <p className="text-center text-base">
              TechClub provides a supportive community for members to network
              with peers with similar interests and connect with mentors who can
              guide them in their journey.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
