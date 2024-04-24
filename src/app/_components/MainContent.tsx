import { SearchIcon } from "lucide-react";
import React from "react";
import AccountCard from "./AccountCard";
import CreateAccountForm from "@/components/CreateAccountForm";
import { Input } from "@/components/ui/input";

export default function MainContent() {
  return (
    <div className="flex h-full flex-col  p-6 overflow-y-auto gap-y-5">
      <h2 className="text-xl font-bold capitalize"> All items </h2>
      <div className="bg-secondary px-3 py-1 rounded-md flex items-center gap-x-2 opacity-75">
        {" "}
        <SearchIcon size={20} />
        <input
          placeholder="Search..."
          className="bg-transparent focus:outline-none border-none"
        />
      </div>

      <CreateAccountForm />
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
