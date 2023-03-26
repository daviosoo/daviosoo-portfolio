import Image from 'next/image'
import { Inter, Source_Sans_Pro } from "next/font/google";


import penguinPhoto from '../../public/assets/adelie_penguin.d48bf94.width-800.1f7b749.jpg'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })
const source_Sans_Pro = Source_Sans_Pro({ subsets: ["latin"], weight: '300' });

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center">
        <div className="px-1.5 md:px-0 pt-24 w-11/12 md:w-[42.188rem]">
          <section className="flex flex-row items-center justify-between w-full">
            <div>
              <h1 style={inter.style}>David Osorio</h1>
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

            <div className="overflow-hidden rounded-full w-20 h-20 mt-2">
              <Image alt="Photo-Penguin" src={penguinPhoto} draggable={false} />
            </div>
          </section>
        </div>
      </header>

      <main className="flex flex-col items-center">
        <div className="px-1.5 md:px-0 pt-24 w-11/12 md:w-[42.188rem]">
          <section className="w-full">
            <div>
              <h3 className="mb-6" style={inter.style}>
                Ethos
              </h3>
              <p
                className="box-border w-fit text-[#9c9c9c]"
                style={source_Sans_Pro.style}
              >
                Painting beautiful interfaces. Building tools and polished user
                interactions.
              </p>
              <p
                className="box-border mt-2 w-fit text-[#9c9c9c]"
                style={source_Sans_Pro.style}
              >
                Following passion, living what I love. Enjoys lifting weights,
                evening walks, databases, Linux, Vim, and other random computer
                things.
              </p>
              <p
                className="box-border mt-2 w-fit text-[#9c9c9c]"
                style={source_Sans_Pro.style}
              >
                Feel free to check out my <Link className='text-white underline' href="/">gear</Link>, or the {''}
                <Link className='text-white underline' href="/">music</Link> I&#39;ve been listening to.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
