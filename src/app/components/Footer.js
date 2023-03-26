import Link from "next/link";

import { Source_Sans_Pro } from "next/font/google";

const source_Sans_Pro = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
const dayName = dayNames[d.getDay()];

function Footer() {
    return (
      <footer className="flex flex-col items-center fade delay11">
        <hr className="w-full border-[#232323]" />
        <div className="px-1.5 md:px-0 w-11/12 md:w-[42.188rem] flex flex-row justify-center md:justify-between py-4">
          <Link
            href="https://es.wikipedia.org/wiki/Medell%C3%ADn"
            target={"_blank"}
            className="hidden md:flex"
          >
            <p className="text-[#9c9c9c]" style={source_Sans_Pro.style}>
              Medellín, COL • 2023
            </p>
          </Link>
          <p className="text-[#9c9c9c]" style={source_Sans_Pro.style}>
            Happy {dayName}.
          </p>
        </div>
      </footer>
    );
}

export default Footer;