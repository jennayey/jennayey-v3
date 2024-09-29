"use client";
import { Link } from "@nextui-org/link";
import SideQuest from "./components/sidequest";
import ProjectCard from "./components/projects";
import { ProjectsList } from "./components/projectList";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Home() {
  const [projectShow, setProjectShow] = useState(false);
  const toggleProjects = () => setProjectShow(!projectShow);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.4 } },
  };

  const listItems = ProjectsList.map((project) => (
    <motion.li key={project.id} variants={itemVariants}>
      <ProjectCard
        title={project.title}
        icon={project.icon}
        hasUrl={project.hasUrl}
        inDevelopment={project.inDevelopment}
        isDesigner={project.isDesigner}
        isDeveloper={project.isDeveloper}
        url={project.url}
        linkText={project.linkText}
      />
    </motion.li>
  ));

  return (
    <div className="px-5 py-16 lg:px-16 lg:py-32 min-h-lvh">
      <main className="flex flex-col lg:flex-row gap-32">
        <div className="flex flex-col gap-6 w-full sm:w-96">
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
              <Link
                className="text-orange font-semibold"
                onClick={toggleProjects}
              >
                projects & side-quests
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-0 font-body text-base uppercase">
            <p className="text-sm text-cement">Links</p>
            <div className="flex flex-row gap-6 text-orange items-start font-semibold">
              <Link href="https://github.com/jennayey" target="_blank">
                Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/jennaleigh-angala/"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                href="https://app.uxcel.com/ux/G2J8F4MTX00Y"
                target="_blank"
              >
                Uxcel
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 grow">
          <AnimatePresence mode="wait">
            {projectShow ? (
              <div>
                <motion.div
                  layout
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={spring}
                >
                  <h4 className="font-display text-2xl font-semibold text-bone">
                    Bobo & not so recent works
                  </h4>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>

          <motion.div initial={false} animate={projectShow ? "open" : "closed"}>
            <motion.ul
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delayChildren: 0.5,
                    staggerChildren: 0.08,
                  },
                },

                closed: {
                  opacity: 0,
                  y: 20,
                  transition: {},
                },
              }}
            >
              {listItems}
            </motion.ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

const spring = {
  ease: "easeInOut",
  duration: 0.5,
};
