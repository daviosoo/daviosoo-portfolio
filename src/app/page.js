import Image from 'next/image'
import { Inter, Source_Sans_Pro } from "next/font/google";


import penguinPhoto from '../../public/assets/adelie_penguin.d48bf94.width-800.1f7b749.jpg'
import profilePicture from '../../public/assets/profilePicture.jpg'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })
const source_Sans_Pro = Source_Sans_Pro({ subsets: ["latin"], weight: '400' });

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center">
        <div className="px-1.5 md:px-0 w-11/12 md:w-[42.188rem]">
          <section className="flex flex-row items-center justify-between w-full">
            <div>
              <h1 className="font-bold" style={inter.style}>
                David Osorio
              </h1>
              <p
                className="mt-0.5 box-border w-fit text-[#9c9c9c]"
                style={source_Sans_Pro.style}
              >
                Developer, Designer & Student
              </p>
              <p
                className="box-border w-fit  text-[#9c9c9c]"
                style={source_Sans_Pro.style}
              >
                Medellín, Colombia
              </p>
            </div>

            <div className="overflow-hidden rounded-full w-20 h-20">
              <Image alt="Photo-Penguin" src={profilePicture} draggable={false} />
            </div>
          </section>
        </div>
      </header>

      <main className="flex flex-col items-center">
        <div className="px-1.5 md:px-0 pt-24 w-11/12 md:w-[42.188rem]">
          <section className="w-full">
            <div>
              <h3 className="mb-6 font-bold" style={inter.style}>
                Ethos
              </h3>
              <p
                className="box-border w-fit text-[#9c9c9c] leading-5"
                style={source_Sans_Pro.style}
              >
                Painting beautiful interfaces. Building tools and polished user
                interactions.
              </p>
              <p
                className="box-border mt-2 w-fit text-[#9c9c9c] leading-5"
                style={source_Sans_Pro.style}
              >
                Following passion, living what I love. Enjoys lifting weights,
                evening walks, mobile, video games, VSCode, and other random
                computer things.
              </p>
              <p
                className="box-border mt-2 w-fit text-[#9c9c9c] leading-5"
                style={source_Sans_Pro.style}
              >
                Feel free to check out my{" "}
                <Link
                  className="text-white underline hover:decoration-[#9c9c9c] decoration-2"
                  href="/"
                >
                  gear
                </Link>
                , or the {""}
                <Link
                  className="text-white underline hover:decoration-[#9c9c9c] decoration-2"
                  href="/"
                >
                  music
                </Link>{" "}
                I&#39;ve been listening to.
              </p>
            </div>
          </section>

          <svg
            aria-hidden="true"
            width="80"
            height="16"
            viewBox="0 0 432 38"
            fill="none"
            className="my-4 text-[#9c9c9c]"
          >
            <path
              d="M402.74 37.5899C390.193 37.5899 374.767 21.3129 374.111 20.6249C367.068 12.4335 359.943 5.14795 349.463 5.14795C337.975 5.14795 324.479 20.406 324.338 20.558L323.17 21.8313C315.729 29.9329 308.701 37.5893 296.186 37.5893C283.639 37.5893 268.213 21.3123 267.557 20.6243C260.514 12.4329 253.389 5.14734 242.909 5.14734C231.421 5.14734 217.925 20.4053 217.784 20.5573L216.683 21.7175C208.186 30.5847 201.48 37.5885 189.636 37.5885C177.085 37.5885 161.656 21.3115 161.007 20.6235C153.96 12.4321 146.831 5.14655 136.359 5.14655C124.871 5.14655 111.375 20.4045 111.234 20.5565L110.054 21.8417C102.62 29.9394 95.5889 37.5837 83.0769 37.5837C70.5259 37.5837 55.0969 21.3067 54.4479 20.6187C47.401 12.4273 40.2719 5.14175 29.7999 5.14175C19.3699 5.14175 9.86587 10.8722 4.98787 20.0987C4.3824 21.2549 2.94488 21.6964 1.78478 21.087C0.628579 20.4698 0.187069 19.0401 0.800389 17.8839C6.50349 7.10691 17.6124 0.403931 29.7964 0.403931C42.2694 0.403931 50.5504 8.82583 57.9644 17.4469C61.941 21.6774 74.3554 32.8419 83.0734 32.8419C93.5074 32.8419 99.2644 26.5724 106.557 18.6349L107.702 17.3888C108.268 16.7404 122.733 0.404816 136.35 0.404816C148.823 0.404816 157.104 8.82671 164.518 17.4478C168.494 21.6783 180.909 32.8428 189.627 32.8428C199.447 32.8428 204.943 27.1123 213.256 18.4368L214.295 17.3509C214.83 16.7337 229.295 0.401917 242.908 0.401917C255.388 0.401917 263.67 8.82382 271.076 17.4449C275.053 21.6676 287.467 32.8359 296.185 32.8359C306.623 32.8359 312.388 26.5625 319.685 18.6129L320.822 17.3785C321.388 16.7301 335.853 0.394531 349.463 0.394531C361.943 0.394531 370.225 8.81643 377.631 17.4375C381.607 21.6602 394.022 32.8285 402.74 32.8285C412.744 32.8285 422.06 27.4379 427.064 18.7625C427.716 17.6258 429.161 17.2313 430.302 17.8914C431.435 18.5438 431.822 19.993 431.173 21.1258C425.321 31.2898 414.427 37.5908 402.739 37.5908L402.74 37.5899Z"
              fill="currentColor"
            ></path>
          </svg>

          <section className="w-full">
            <div>
              <p
                className="box-border mt-2 w-fit text-[#9c9c9c] leading-5"
                style={source_Sans_Pro.style}
              >
                If you&#39;re ever near the Medellín, Antioquía area, let&#39;s
                hang out. Looking for new opportunities. Reach out at{" "}
                <Link
                  className="text-white underline hover:decoration-[#9c9c9c] decoration-2"
                  href="https://twitter.com/daviosood"
                  target={"_blank"}
                >
                  @daviosood
                </Link>{" "}
                or{" "}
                <Link
                  className="text-white underline hover:decoration-[#9c9c9c] decoration-2"
                  href="mailto:daviosood@gmail.com"
                >
                  daviosood@gmail.com
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-row mt-6">
              <Link href="https://github.com/daviosoo" target={"_blank"}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#9c9c9c] mr-3 hover:text-[#acacac]"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Link>
              <Link href="https://twitter.com/daviosood" target={"_blank"}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#9c9c9c] mr-3 hover:text-[#acacac]"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
              <Link href="https://daviosoo.site" target={"_blank"}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#9c9c9c] mr-3 hover:text-[#acacac]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/andres-david-osorio-zapata-2bb007213/" target={'_blank'}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#9c9c9c] mr-3 hover:text-[#acacac]"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
