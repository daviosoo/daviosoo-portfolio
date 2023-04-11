import Link from "next/link";

import { Inter, Source_Sans_Pro } from "next/font/google";

import WaveSvg from "./svgComponents/WaveSvg";
import GithubSVG from "./svgComponents/GithubSvg";
import TwitterSvg from "./svgComponents/TwitterSvg";
import PortfolioSvg from "./svgComponents/PortfolioSvg";
import LinkedinSvg from "./svgComponents/LinkedinSvg";
import ArrowSvg from "./svgComponents/ArrowSvg";
import SingleWork from "./SingleWork";

const inter = Inter({ subsets: ["latin"] });
const source_Sans_Pro = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

function Main() {
    return (
      <main className="flex flex-col items-center pb-40">
        <div className="px-1.5 md:px-0 pt-24 w-11/12 md:w-[42.188rem]">
          <section className="w-full">
            <div>
              <h3
                className="mb-6 font-bold text-[#e5e5e5] fade delay4"
                style={inter.style}
              >
                About
              </h3>
              <p
                className="box-border w-fit text-[#9c9c9c] leading-5 fade delay5"
                style={source_Sans_Pro.style}
              >
                Painting beautiful interfaces. Building tools and polished user
                interactions.
              </p>
              <p
                className="box-border mt-3 w-fit text-[#9c9c9c] leading-5 fade delay6"
                style={source_Sans_Pro.style}
              >
                Following passion, living what I love. Enjoys lifting weights,
                evening walks, mobile, video games, VSCode, and other random
                computer things.
              </p>
              <p
                className="box-border mt-3 w-fit text-[#9c9c9c] leading-5 fade delay7"
                style={source_Sans_Pro.style}
              >
                Feel free to check out my{" "}
                <Link
                  className="text-[#e5e5e5] underline decoration-[#9c9c9c] hover:decoration-[#6d6d6d] decoration-[1.5px]"
                  href="https://drive.google.com/file/d/1sdQ53LSCNRCrBzTRpTerFMdlmOQ4WVyE/view?usp=sharing"
                  target={"_blank"}
                >
                  CV
                </Link>
                .
              </p>
            </div>
          </section>

          <WaveSvg />

          <section className="w-full">
            <div>
              <p
                className="box-border mt-2 w-fit text-[#9c9c9c] leading-5 fade delay9"
                style={source_Sans_Pro.style}
              >
                If you&#39;re ever near the Medellín, Antioquía area, let&#39;s
                hang out. Looking for new opportunities. Reach out at{" "}
                <Link
                  className="text-[#e5e5e5] underline decoration-[#9c9c9c] hover:decoration-[#6d6d6d] decoration-[1.5px]"
                  href="https://twitter.com/daviosood"
                  target={"_blank"}
                >
                  @daviosood
                </Link>{" "}
                or{" "}
                <Link
                  className="text-[#e5e5e5] underline decoration-[#9c9c9c] hover:decoration-[#6d6d6d] decoration-[1.5px]"
                  href="mailto:daviosood@gmail.com"
                >
                  daviosood@gmail.com
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-row mt-6 fade delay10">
              <Link href="https://github.com/daviosoo" target={"_blank"}>
                <GithubSVG />
              </Link>

              <Link href="https://twitter.com/daviosood" target={"_blank"}>
                <TwitterSvg />
              </Link>

              <Link href="https://daviosoo.site" target={"_blank"}>
                <PortfolioSvg />
              </Link>

              <Link
                href="https://www.linkedin.com/in/andres-david-osorio-zapata-2bb007213/"
                target={"_blank"}
              >
                <LinkedinSvg />
              </Link>
            </div>
          </section>
        </div>

        <div className="px-1.5 md:px-0 pt-24 w-11/12 md:w-[42.188rem]">
          <section className="w-full">
            <div>
              <h3
                className="mb-6 font-bold text-[#e5e5e5] fade delay11"
                style={inter.style}
              >
                Select Works
              </h3>
              <div className="fade delay12">
                <div className="flex flex-row">
                  <p
                    className="box-border w-fit text-[#9c9c9c] leading-5  mr-10 md:mr-24"
                    style={source_Sans_Pro.style}
                  >
                    2023
                  </p>

                  <div>
                    <div>
                      <SingleWork
                        title={"Davioso portfolio"}
                        link={"https://github.com/daviosoo/daviosoo-portfolio"}
                        description={
                          "Daviosoo portfolio. Ethos and selected works. Made with Next JS 13."
                        }
                      />
                    </div>

                    <div className="mt-6">
                      <SingleWork
                        title={"Matelsa APP"}
                        link={"https://github.com/daviosoo/Mattelsa"}
                        description={
                          "A mobile APP in progress. Online clothing store. Building with React Native for iOS & Android."
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row mt-6">
                  <p
                    className="box-border w-fit text-[#9c9c9c] leading-5  mr-10 md:mr-24"
                    style={source_Sans_Pro.style}
                  >
                    2022
                  </p>

                  <div>
                    <div>
                      <SingleWork
                        title={"The Running Fox clone"}
                        link={"https://therunningfox.netlify.app"}
                        description={
                          "The Running Fox website clone. Made with React JS & PHP API."
                        }
                      />
                    </div>

                    <div className="mt-6">
                      <SingleWork
                        title={"Sales system APP"}
                        link={"https://github.com/daviosoo/sales-system-app"}
                        description={
                          "A mobile APP work for college. Sales system register. Made with React Native for iOS & Android."
                        }
                      />
                    </div>

                    <div className="mt-6">
                      <SingleWork
                        title={"Sales system API"}
                        link={"https://github.com/daviosoo/sales-system-api"}
                        description={
                          "An API made for mobile APP work college. Sales system register. Made with Express JS & Mongo DB."
                        }
                      />
                    </div>

                    <div className="mt-6">
                      <SingleWork
                        title={"Meeet waitlist"}
                        link={"https://daviosoo.github.io/Meeet-WaitList"}
                        description={
                          "A responsive landing page. Practice project. Made with pure HTML & CSS."
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row mt-6">
                  <p
                    className="box-border w-fit text-[#9c9c9c] leading-5  mr-10 md:mr-24"
                    style={source_Sans_Pro.style}
                  >
                    2021
                  </p>

                  <div>
                    <div>
                      <SingleWork
                        title={"Snipper"}
                        link={"https://daviosoo.github.io/Snipper"}
                        description={
                          "A responsive landing page. Practice project. Made with pure HTML & CSS."
                        }
                      />
                    </div>

                    <div className="mt-6">
                      <SingleWork
                        title={"MazaSketch"}
                        link={"https://daviosoo.github.io/MazaSketchFinal"}
                        description={
                          "A website in progress. Portfolio for MazaSketch client. Building with pure HTLM, CSS & JS."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Link href="https://github.com/daviosoo" target={"_blank"}>
                <div className="flex flex-row items-center mt-6 fade delay11 text-[#e5e5e5] allProjects">
                  All Works
                  <ArrowSvg />
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
}

export default Main