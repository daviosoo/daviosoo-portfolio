import Link from "next/link";
import { Source_Sans_Pro } from "next/font/google";

const source_Sans_Pro = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

function SingleWork({title, link, description}) {
    return (
      <>
        <Link
          className="font-bold text-[#e5e5e5] underline decoration-[#9c9c9c] hover:decoration-[#6d6d6d] decoration-[1.5px]"
          href={link}
          target={"_blank"}
        >
          {title}
        </Link>
        <p
          className="box-border w-fit text-[#9c9c9c] mt-2 leading-5"
          style={source_Sans_Pro.style}
        >
          {description}
        </p>
      </>
    );
}

export default SingleWork;