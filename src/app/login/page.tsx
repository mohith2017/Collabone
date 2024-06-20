import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/login/ui/card"
// import { Label } from "../../components/ui/label"
// import { Input } from "../../components/ui/input"
// import { Button } from "../../components/ui/button"
import { redirect, useRouter, useSearchParams } from 'next/navigation'
// import { useState } from "react";
import Link from 'next/link';
// import { validateRequest } from "@/lib/lib.auth"
import { signIn } from "@/auth"
import { Form } from "@/components/ui/form"
import AuthButton from "@/components/auth/AuthButton.server"
// import SignUpComponent from "../signup/page";
import SignUpButton from "@/components/signupbutton/SignUpButton";
import { useEffect } from "react";
import { useState } from "react";
import EditorButton from "@/components/editorbutton/EditorButton";
// import LoginLayout from "@/app/login/layout";
// import { redirect } from "next/dist/server/api-utils";
// import { FormControl, FormLabel } from '@mui/material';


export default function LoginComponent() {
  return (
    <div className="flex items-center pt-12">
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Collaborator Login</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
      
        <div className="space-y-4">
        <AuthButton/>
          <br/><br/>


          New User?
          <br/>
          <SignUpButton/>
        
        <br/><br/>
        Already Signed In?
          <br/>
          <EditorButton/>
        </div>

        
      </CardContent>
    </Card>
    </div>

  )
}