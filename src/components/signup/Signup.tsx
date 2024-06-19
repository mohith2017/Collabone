import Link from "next/link";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia, validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ActionResult } from "@/components/form/FormComponent";
import userModel from "@/models/user-model";
import dbConnect from "@/db/mongoose";

async function signup(_: any, formData: FormData): Promise<ActionResult> {
    "use server";
    const username = formData.get("username");
    if (
      typeof username !== "string" ||
      username.length < 3 ||
      username.length > 31 ||
      !/^[a-z0-9_-]+$/.test(username)
    ) {
      return {
        error: "Invalid username",
      };
    }
    const password = formData.get("password");
    if (
      typeof password !== "string" ||
      password.length < 6 ||
      password.length > 255
    ) {
      return {
        error: "Invalid password",
      };
    }
  
    const hashedPassword = await new Argon2id().hash(password);
  
    try {
      await dbConnect();
      const user = await userModel.create({
        username: username,
        password: hashedPassword,
        email: "test12@gmail.com",
        name: "test",
      });
  
      const session = await lucia.createSession(user._id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    } catch (e) {
      console.log("error", e);
      return {
        error: "An unknown error occurred",
      };
    }
    return redirect("/Login");
  }

  export default signup;