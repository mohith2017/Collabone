import { auth } from "@/auth";
import EditorPage from "../../components/editor/Main";
import AuthButton from "@/components/auth/AuthButton.server";


export default async function Protected() {
  const session = await auth();
  // console.log(session?.user)

  async function onGetUserAction() {
    "use server";
    const session = await auth();
    return session?.user?.name ?? null;
  }

  return (
    <main>

      <div>User: {session?.user?.name}</div>
      {session?.user?.name ? (
        <EditorPage username={session.user.name} />
      ) : (
        <>Please log in:</>
      )}
      <AuthButton/>
    </main>
  );
}