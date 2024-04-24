import React from 'react'

export default function AccountCard({label, credential}: {label: string, credential: string}) {
  return (
    <div className="hover:text-white h-24 w-full bg-secondary rounded-md p-3 flex-col flex justify-evenly hover:bg-blue-500 cursor-pointer">
      <h3 className=" font-semibold capitalize"> {label} </h3>
      <h5 className=" text-sm font-light "> {credential} </h5>
    </div>
  );
}
