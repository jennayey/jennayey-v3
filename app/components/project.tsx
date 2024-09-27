"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  icon: string;
  inDevelopment: boolean;
  hasLink:boolean;
  pLink: string;
  linkText: string;
  isDeveloper: boolean;
  isDesigner: boolean;
}
export default function Project({
  title,
  icon,
  inDevelopment,
  hasLink,
  pLink,
  linkText,
  isDeveloper,
  isDesigner,
}: Props) {
  return (
    <div className="flex flex-row justify-between py-6 border-b border-cement w-full gap-8">
      <div className="flex flex-row justify-start gap-4">
        <Image
          src={icon}
          alt={title + " " + "Logo"}
          width={40}
          height={40}
        />
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
      {hasLink ? (
        <Link href={pLink} target="_blank" className="flex flex-row gap-4 font-body">
            <p className="text-small text-bone">{linkText}</p>
            <p className="text-small text-bone">➡️</p>

        </Link>
      ) : (
        <div className="flex flex-row gap-4 font-body">
              <p className="text-small text-cement">Visit Soon</p>
              <p className="text-small text-cement">🔒</p>
        </div>
      )}
    </div>
  );
}
