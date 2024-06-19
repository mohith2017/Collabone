import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
// import { Label } from "../../components/ui/label"
// import { Input } from "../../components/ui/input"
// import { Button } from "../../components/ui/button"
import { redirect, useRouter } from 'next/navigation'
// import { useState } from "react";
import Link from 'next/link';
// import { validateRequest } from "@/lib/lib.auth"
import { signIn } from "@/auth"
import { Form } from "@/components/ui/form"
import AuthButton from "@/components/auth/AuthButton.server"
// import SignUpComponent from "../signup/page";
import SignUpButton from "@/components/signupbutton/SignUpButton";
// import { redirect } from "next/dist/server/api-utils";
// import { FormControl, FormLabel } from '@mui/material';


export default function LoginComponent() {
    // const router = useRouter()
    // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  //   const { user } = await validateRequest();
  // if (user) {
  //   return redirect("/editor");
  // }

  //   const handleClick = () => {
        
  //   }
  // const handleForm = async (formData:any) => {
  //   "use server"
  //   await signIn("credentials", formData)
  // }

  
  return (
    <div className="pt-12">
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Collaborator Login</CardTitle>
        <CardDescription>Enter your email and password to login to your collaborator account</CardDescription>
      </CardHeader>
      <CardContent>
      
        <div className="space-y-4">
        <AuthButton/>
          <SignUpButton/>
        </div>
        
      </CardContent>
    </Card>
    </div>

  )
}