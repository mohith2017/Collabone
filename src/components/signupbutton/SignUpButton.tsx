"use client"
import { redirect } from "next/navigation";

export default function SignUpButton() {

    const handleSignUp = () => {
        return redirect("/signup");
      }
    
      
    return (
    <div className="flex justify-center">
            <a onClick={handleSignUp}>Register Here</a>
            </div>
        
    )
}