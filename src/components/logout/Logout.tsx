import { lucia, validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ActionResult } from "@/components/form/FormComponent";

async function logout(): Promise<ActionResult> {
    "use server";
    const { session } = await validateRequest();
    if (!session) {
      return {
        error: "Unauthorized",
      };
    }
  
    await lucia.invalidateSession(session.id);
  
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return redirect("/login");
  }

export default logout;