"use client"
import * as React from "react"

import { cn } from "../../lib/utils"
import { useMediaQuery } from "../../hooks/use-media-query"
import { Button } from "../../components/ui/button"
import * as context from 'next/headers';
import Link from 'next/link';
import { Form } from "@/components/ui/form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
// import { auth } from "@/auth/lucia"
import { redirect } from "next/navigation";
import { DivideCircle } from "lucide-react";
// import { validateRequest } from "@/lib/lib.auth";

export default function SignUpComponent() {
  const [open, setOpen] = React.useState(false)

  


    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  

  
  
}

async function ProfileForm({ className }: React.ComponentProps<"form">) {
    // const { user } = await validateRequest();
    // if (user) {
    //   return redirect("/editor");
    // }

    const [username, setUsername] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    }

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
    }

    const registerUser = () => {
        console.log(username, password);
    }

  return (
    <>
      <div className={cn("grid items-start gap-4", className)}>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" defaultValue="shadcn@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@shadcn" onChange={handleUsernameChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" defaultValue="@shadcn"  onChange={handlePasswordChange}/>
        </div>
        <Button type="submit" onClick={registerUser}>Sign Up</Button>
      </div>
    <p className="mt-2 text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </p>
      </>
  )
}
