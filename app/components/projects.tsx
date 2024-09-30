"use client";
import Image from "next/image";
import Link from "next/link";
import { ProjectsList } from "./projectList";
import { motion, Variants } from "framer-motion";
import { ArrowLongRightIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface Props {
  title: string;
  icon: string;
  inDevelopment: boolean;
  hasUrl: boolean;
  url: string;
  linkText: string;
  isDeveloper: boolean;
  isDesigner: boolean;
}

interface projProps {
  animate: boolean;
}
export default function ProjectCard ({
  title,
  icon,
  inDevelopment,
  hasUrl,
  url,
  linkText,
  isDeveloper,
  isDesigner,
}: Props){
  return (
    <div className="flex flex-row justify-between py-6 border-b flex-start border-cement w-full gap-8">
      <div className="flex flex-row justify-start gap-4">
        <Image src={`/images/${icon}.svg`} className="rounded-full h-fit" alt={title + " " + "Logo"} width={40} height={40} />
        <div className="flex flex-col gap-1 grow">
          <p className="text-base font-body text-bone font-medium">
            {title}
            <span className="text-orange ml-2">{inDevelopment ? "●" : ""}</span>
          </p>
          <p className="text-sm font-body text-cement uppercase">
            {isDeveloper ? "Developer" : ""}
            {isDeveloper && isDesigner ? " & " : ""}
            {isDesigner ? "Designer" : ""}
          </p>
        </div>
      </div>
      {hasUrl ? (
        <Link
          href={url}
          target="_blank"
          className="flex flex-row gap-4 font-body h-fit"
        >
          <p className="text-small text-bone">{linkText}</p>
          <ArrowLongRightIcon className="h-5 w-5 text-bone"/>
        </Link>
      ) : (
        <div className="flex flex-row gap-4 font-body">
          <p className="text-small text-cement">Visit Soon</p>
          <LockClosedIcon className="h-5 w-5 text-cement"/>

        </div>
      )}
    </div>
  );
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
// export default function Projects(animate: projProps) {
//   return (
//     <motion.div initial={false} animate={animate ? "open" : "closed"}>
//       <motion.ul
//         variants={{
//           open: {
//             opacity: 1,
//             y: 0,
//             transition: {
//               delayChildren: 0.5,
//               staggerChildren: 0.08,
//             },
//           },

//           closed: {
//             opacity: 0,
//             y: 20,
//             transition: {},
//           },
//         }}
//       >
//         {listItems}
//       </motion.ul>
//     </motion.div>
//   );
// }
