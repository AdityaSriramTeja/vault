"use client"
import { Button } from '@/components/ui/button';
import {
  Check,
  EyeIcon,
  EyeOffIcon,
  PencilIcon,
  Star,
  Trash2Icon,
} from "lucide-react";
import React, { useState } from "react";

export default function PasswordContent() {
  const [fav, setFav] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editUsername, setEditUsername] = useState(false);
  const [editNotes, setEditNotes] = useState(false);

  const [password, setPassword] = useState("test@123");
  const [username, setUsername] = useState("test");
  const [email, setEmail] = useState("test@gmail.com");
  const [notes, setNotes] = useState("Add keys here....");
  const handleChangePasswordVisibility = () => {
    setHidePassword((prev) => !prev);
  };
  const handleChangeEditPassword = () => {
    setEditPassword((prev) => !prev);
  };
  const handleChangeEditEmail = () => {
    setEditEmail((prev) => !prev);
  };
  const handleChangeEditUsername = () => {
    setEditUsername((prev) => !prev);
  };
  const handleChangeEditNotes = () => {
    setEditNotes((prev) => !prev);
  };
  return (
    <div className="flex flex-col h-full  p-10 w-full">
      <div className=" w-full flex  gap-x-4 justify-end">
        {" "}
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
        <div className="flex items-center   p-3 rounded-md ">
          <span className="space-y-2 flex flex-col flex-1">
            <label className="opacity-75 text-sm"> Email </label>
            <input
              disabled={!editEmail}
              className="font-semibold focus:outline-none bg-transparent border-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="font-semibold"></h3>
          </span>
          <div className="space-x-3">
            <button onClick={handleChangeEditEmail}>
              {editEmail ? <Check size={20} /> : <PencilIcon size={20} />}
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-5  p-3 rounded-md ">
          <span className="space-y-2 flex flex-1 flex-col">
            <label className="opacity-75 text-sm"> Username </label>
            <input
              disabled={!editUsername}
              className="font-semibold focus:outline-none bg-transparent border-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <h3 className="font-semibold"></h3>
          </span>
          <div className="space-x-3">
            <button onClick={handleChangeEditUsername}>
              {editUsername ? <Check size={20} /> : <PencilIcon size={20} />}
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-5  p-3  bg-secondary  rounded-md ">
          <span className="space-y-2 flex flex-col flex-1">
            <label className="opacity-75 text-sm"> Password </label>
            <input
              disabled={!editPassword}
              type={hidePassword ? "password" : "text"}
              className="w-full font-semibold focus:outline-none bg-transparent border-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h3 className="font-semibold"></h3>
          </span>
          <div className="space-x-3">
            <button onClick={handleChangePasswordVisibility}>
              {hidePassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
            </button>
            <button onClick={handleChangeEditPassword}>
              {editPassword ? <Check size={20} /> : <PencilIcon size={20} />}
            </button>
          </div>
        </div>
        <span className="space-y-2 p-3">
          <label className="opacity-75 text-sm"> Website </label>
          <h3 className="font-semibold"> www.google.com</h3>
        </span>
        <div className="flex items-center space-x-5  p-3 rounded-md ">
          <span className="space-y-2 flex flex-col flex-1">
            <label className="opacity-75 text-sm"> Notes </label>
            <textarea
              disabled={!editNotes}
              className="text-sm font-semibold focus:outline-none bg-transparent border-none"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <h3 className="font-semibold"></h3>
          </span>
          <div className="space-x-3">
            <button onClick={handleChangeEditNotes}>
              {editNotes ? <Check size={20} /> : <PencilIcon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
