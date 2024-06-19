import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import LoginComponent from "./login/page"
// import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ActionResult} from "@/components/form/FormComponent";
import Form from "@/components/form/FormComponent";
import logout from "@/components/logout/Logout";
import { auth } from "@/auth";
import AuthButton from "@/components/auth/AuthButton.server";

const App = async () => {
    // const { user } = await validateRequest();
    // if (!user) {
    //   return redirect("/login");
    // }
    const session = await auth();
    return (
        <>
        <h1 className="text-3xl font-bold">Home Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LoginComponent/>

      
      {/* <h1>Hi, {user.username}!</h1>
      <p>Your user ID is {JSON.parse(JSON.stringify(user.id))}</p>
      <Form action="/api/logout">
        <button>Sign out</button>
      </Form> */}
      
    </>
    )
}

export default App