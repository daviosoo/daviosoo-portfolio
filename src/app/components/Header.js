import Image from "next/image";
import Link from "next/link";

import { Inter, Source_Sans_Pro } from "next/font/google";

import profilePicture from "./../../../public/assets/profilePicture.jpg";

const inter = Inter({ subsets: ["latin"] });
const source_Sans_Pro = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

function Header() {
    return (
      <header className="flex flex-col items-center pt-24">
        <div className="px-1.5 md:px-0 w-11/12 md:w-[42.188rem]">
          <section className="flex flex-row items-center justify-between w-full">
            <div>
              <h1
                className="font-bold text-white fade delay1"
                style={inter.style}
              >
                David Osorio
              </h1>
              <p
                className="mt-0.5 box-border w-fit text-[#9c9c9c] fade delay2"
                style={source_Sans_Pro.style}
              >
                Developer, Designer & Student
              </p>
              <p
                className="box-border w-fit  text-[#9c9c9c] fade delay3"
                style={source_Sans_Pro.style}
              >
                Medellín, Colombia
              </p>
            </div>

            <div className="overflow-hidden rounded-full w-20 h-20 fade delay1">
              <Image
                alt="Photo-Penguin"
                src={profilePicture}
                draggable={false}
              />
            </div>
          </section>
        </div>
      </header>
    );
}

export default Header;