import { Room } from "@/app/Room";
import { auth } from "@/auth";
import { TextEditor } from "@/components/TextEditor";
import LoginComponent from "./login/page";
import AuthButton from "@/components/auth/AuthButton.server";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      {session?.user?.name ? 
      ( <Room>       
        <TextEditor />
      </Room>
      ) : (
        
        
      <LoginComponent/>)}
      
    </main>
  );
}
