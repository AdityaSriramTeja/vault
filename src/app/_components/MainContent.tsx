import { Plus, SearchIcon } from 'lucide-react';
import React from 'react'
import AccountCard from './AccountCard';
import { Button } from '@/components/ui/button';

export default function MainContent() {
  return (
    <div className="flex h-full flex-col  p-6 overflow-y-auto gap-y-5">
      <h2 className="text-xl font-bold capitalize"> All items </h2>
      <div className="bg-secondary px-3 py-1 rounded-md flex items-center gap-x-2 opacity-75">
        {" "}
        <SearchIcon size={20} /> Search...{" "}
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700  flex items-center gap-x-2  mx-auto opacity-75">
        {" "}
        <Plus size={20} /> Add new item{" "}
      </Button>
      <hr />
      <AccountCard label={"Google"} credential={"test@gmail.com"} />
      <AccountCard label={"Google"} credential={"test@gmail.com"} />
      <AccountCard label={"Google"} credential={"test@gmail.com"} />
      <AccountCard label={"Google"} credential={"test@gmail.com"} />
      <AccountCard label={"Google"} credential={"test@gmail.com"} />
      <AccountCard label={"Google"} credential={"test@gmail.com"} />
      <AccountCard label={"Google"} credential={"test@gmail.com"} />
      <AccountCard label={"Google"} credential={"test@gmail.com"} />

      <AccountCard label={"Google"} credential={"test@gmail.com"} />
    </div>
  );
}
