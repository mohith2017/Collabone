"use client"
import { useRouter } from "next/navigation";

export default function EditorButton() {
  const router = useRouter();

    const handleEditor = () => {
        router.push("/editor");
      }
    
      
    return (
    <div className="flex justify-center">
            <button type="button" onClick={handleEditor}>CLICK HERE</button>
            </div>
        
    )
}