"use client"
import { Button } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon, PencilIcon, Star, Trash2Icon } from 'lucide-react';
import React, { useState } from 'react'

export default function PasswordContent() {
  const [fav, setFav] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const handleChangePasswordVisibility = () => {
    setHidePassword((prev) => !prev);
  }
  return (
    <div className="flex flex-col h-full  p-10 w-full">
      <div className=" w-full flex  gap-x-4 justify-end">
        {" "}
        <Button className="flex gap-x-3" size={"sm"}>
          {" "}
          <PencilIcon /> Edit{" "}
        </Button>{" "}
        <Button className="flex gap-x-3 hover:bg-red-600" size={"sm"}>
          {" "}
          <Trash2Icon /> Delete{" "}
        </Button>{" "}
      </div>
      <div className="container mx-auto  min-h-full pt-16 flex flex-col gap-y-5">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold"> Google</h1>
          <Star
            className="cursor-pointer"
            fill={fav ? "yellow" : "transparent"}
            onClick={() => setFav((prev) => !prev)}
          />
        </div>

        <hr className="mb-2" />
        <span className="space-y-2 p-3">
          <label className="opacity-75 text-sm"> Username </label>


          <h3 className="font-semibold"> test@gmail.com</h3>
        </span>
        <div className="flex items-center justify-between bg-secondary p-3 rounded-md ">
          <span className="space-y-2">
            <label className="opacity-75 text-sm"> Password </label>
            <h3 className="font-semibold"> {hidePassword ? "*******" : "test@123"} </h3>
          </span>
          <button onClick={handleChangePasswordVisibility}>
            {hidePassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
          </button>
        </div>
        <span className="space-y-2 p-3">
          <label className="opacity-75 text-sm"> Website </label>
          <h3 className="font-semibold"> www.google.com</h3>
        </span>
      </div>
    </div>
  );
}
