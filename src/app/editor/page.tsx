import { Room } from "@/app/Room";
import { auth } from "@/auth";
import { TextEditor } from "@/components/TextEditor";
import AuthButton from "@/components/auth/AuthButton.server";


export default async function Editor() {
  const session = await auth();



  return (
    <main>
      {session?.user?.name ? 
      ( <Room>       
        <TextEditor />
      </Room>) : (<>Invalid! Log In here:<br/><AuthButton/></>
      )}
      
    </main>
  );
}
