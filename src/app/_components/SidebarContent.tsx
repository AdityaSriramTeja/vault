import { LucideTrash2, ShieldHalf, Star } from 'lucide-react'
import React from 'react'
import SidebarLabel from './SidebarLabel';

export default function SidebarContent() {
  return (
    <div className="h-full w-full py-10 px-3 flex flex-col items-center gap-y-3 ">
      <SidebarLabel Icon={ShieldHalf} label="All Items" count={10} />
      <SidebarLabel Icon={Star} label='Favourite' count={10} />
      <SidebarLabel Icon={LucideTrash2} label='Trash' count={10} />

    </div>
  );
}
