"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface DesktopItemProps {
  label: string;
  onClick?: () => void;
  href: string;
  active?: boolean;
  icon: any;
}
const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  onClick,
  href,
  active,
  icon: Icon,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return (
    <li onClick={handleClick} key={label}>
      <Link
        href={href}
        className={clsx(
          `
        group 
        flex 
        gap-x-3 
        rounded-md 
        p-3 
        text-sm 
        leading-6 
        font-semibold 
        text-gray-500 
        hover:text-black 
        hover:bg-gray-100
      `,
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
