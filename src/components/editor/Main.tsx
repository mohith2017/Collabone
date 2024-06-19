"use client"
import { auth } from "@/auth"
import { DrawerSide } from "../drawer/DrawerSide"
import EditorComponent from "./EditorComponent"
import { TabEditor } from "../tabs/TabEditor"
import { FileContextProvider } from "@/context/FileContext"

interface EditorPageProps {
    username: string;
  }


function EditorPage({ username }: EditorPageProps) {

    
    return (
        <FileContextProvider>
            <div className="flex flex-row ">
            <div className="pt-3 px-3">
            <DrawerSide />
            </div>
            Hi {username} !
            <div className="pt-24 px-16 w-full">
            <EditorComponent />
            </div>
            <div className="pr-24 pt-12">
            <TabEditor />
            </div>
            </div>
        </FileContextProvider>
    )
}

export default EditorPage
