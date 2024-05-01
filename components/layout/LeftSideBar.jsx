"use client";

import { SignedIn, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import {Logout} from '@mui/icons-material';
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { useEffect, useState } from "react";
// import Loader from "@components/Loader";

function LeftSideBar() {
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
    <Link href="/">
      <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
    </Link>

    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 items-center text-light-1">
        <Link href={`/`}>
          <Image
            src="/assets/Andrew.jpg"
            alt="profile photo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <p className="text-small-bold">
          First Last
        </p>
      </div>
      <div className="flex text-light-1 justify-between">
        <div className="flex flex-col items-center">
          <p className="text-base-bold">1</p>
          <p className="text-tiny-medium">Posts</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-base-bold">2</p>
          <p className="text-tiny-medium">Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-base-bold">3</p>
          <p className="text-tiny-medium">Following</p>
        </div>
      </div>
    </div>

    <hr />

    <Menu />

    <hr />

    <div className="flex gap-4 items-center">
      <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in"/>
      <p className="text-light-1 text-body-bold">Manage Account</p>
    </div>

      <SignedIn>
        <SignOutButton>
          <div className="flex cursor-poiter gap-4 items-center">
          <Logout sx={{color:"white", fontSize:"32px"}}/>
          <p className="text-body-bold text-light-1">LogOut</p>
          </div>
        </SignOutButton>
      </SignedIn>
  </div>
  )
}

export default LeftSideBar