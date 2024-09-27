"use client";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import Project from "./components/project";
import SideQuest from "./components/sidequest";

export default function Home() {
  return (
    <div className="px-8 py-16 lg:px-16 lg:py-32 min-h-lvh">
      <main className="flex flex-col lg:flex-row gap-32">
        <div className="flex flex-col gap-6 w-96">
          <h4 className="font-display text-2xl font-semibold text-bone">
            Jennaleigh Angala
          </h4>
          <div className="font-body text-base uppercase">
            <p>Lead UX/UI designer Based in Manila, Philippines. </p>
            <br />
            <p>
              Currently working at{" "}
              <a
                href="https://goyazi.com"
                target="_blank"
                className="text-orange font-semibold"
              >
                Yazi
              </a>{" "}
              building user interfaces & experiences.
            </p>
            <br />
            <p>
              See some of my{" "}
              <Link className="text-orange font-semibold">
                projects & side-quests
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-0 font-body text-base uppercase">
            <p className="text-sm text-cement">Links</p>
            <div className="flex flex-row gap-6 text-orange items-start font-semibold">
              <Link href="https://github.com/jennayey" target="_blank">Github</Link>
              <Link href="https://www.linkedin.com/in/jennaleigh-angala/" target="_blank">LinkedIn</Link>
              <Link href="https://app.uxcel.com/ux/G2J8F4MTX00Y" target="_blank">Uxcel</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 grow">
  {/* my projects start */}
  <div className="flex flex-col gap-6">
          <div className="pb-6 border-b border-cement">
            <h4 className="font-display text-2xl font-semibold text-bone">
              Recent & not so recent works
            </h4>
          </div>

          <div className="flex flex-col gap-0">
            <Project
              title="Philippine Scripts Translator"
              icon="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              inDevelopment
              hasLink
              pLink="https://v2.translate.jennayey.com"
              linkText="Visit"
              isDeveloper
              isDesigner
            />
            <Project
              title="May Bike Parking ba?"
              icon="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              inDevelopment
              // pLink="https://v2.translate.jennayey.com"
              linkText="Visit"
              isDeveloper
              isDesigner
            />
            <Project
              title="Somber: A 2D Game"
              icon="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              hasLink
              pLink="https://jennayey.itch.io/somber"
              linkText="Play"
              isDeveloper
              isDesigner
            />
               <Project
              title="Noli Me Tangere: A 3D Game"
              icon="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              hasLink
              pLink="  https://jennayey.itch.io/nolimetangere"
              linkText="Play"
              isDesigner
            />
          
          </div>
        </div>

        {/* my sidequests start */}
        <div className="flex flex-col gap-6 grow">
          <div className="pb-6 border-b border-cement">
            <h4 className="font-display text-2xl font-semibold text-bone">
              Side quests
            </h4>
          </div>

          <div className="flex flex-col gap-0">
            <SideQuest
              title="Bike Kahit Saan"
              icon="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              description="Uploading cycling shenanigans in Manila"
              pLink="https://www.youtube.com/@bikekahitsaan"
              linkText="Watch"
             
            />
          </div>
        </div>

        </div>
      
      </main>
    </div>
  );
}
