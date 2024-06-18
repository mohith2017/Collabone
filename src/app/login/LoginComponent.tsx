import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function LoginComponent() {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

    const handleAuth =  () => {
        // if (isAuthenticated){
            router.push("/editor");
        // }
    }

    const handleClick = () => {
        
    }

  return (
    <div className="pt-12">
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Collaborator Login</CardTitle>
        <CardDescription>Enter your email and password to login to your collaborator account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" onClick={handleAuth} className="w-full">
            Login
          </Button>
          <div className="flex justify-center">
            <a onClick={handleClick}>Register Here</a>
            </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}