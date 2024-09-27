"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  icon: string;
  description: string;
  pLink: string;
  linkText: string;
}
export default function SideQuest({
  title,
  icon,
  description,
  pLink,
  linkText,
}: Props) {
  return (
    <div className="flex flex-row justify-between py-6 border-b border-cement w-full gap-8">
      <div className="flex flex-row justify-start gap-4">
        <Image src={icon} alt={title + " " + "Logo"} width={40} height={40} />
        <div className="flex flex-col gap-1 grow">
          <p className="text-base font-body text-bone font-medium">{title}</p>
          <p className="text-sm font-body text-cement">{description}</p>
        </div>
      </div>
      <Link
        href={pLink}
        target="_blank"
        className="flex flex-row gap-4 font-body"
      >
        <p className="text-small text-bone">{linkText}</p>
        <p className="text-small text-bone">➡️</p>
      </Link>
    </div>
  );
}
