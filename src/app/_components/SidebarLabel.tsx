import { LucideIcon } from 'lucide-react';
import React from 'react'

export default function SidebarLabel({ Icon, label, count }: {Icon: LucideIcon, label: string, count: number}) {
  return (
    <span className=" group/item flex gap-x-2 w-full  rounded-md font-semibold text-sm items-center hover:bg-blue-400 hover:cursor-pointer hover:text-white px-2 py-1">
      <Icon fill={label === "Favourite" ? 'yellow' : label === "Trash" ? "red" : "transparent"} size={20} />
      <label className="flex-1  group-hover/item:cursor-pointer">
        {" "}
        {label}
      </label>{" "}
      <label className="opacity-75  group-hover/item:cursor-pointer">
        {" "}
        {count}{" "}
      </label>
    </span>
  );
}
