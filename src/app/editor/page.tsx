"use client"
import { DrawerSide } from "@/components/drawer/DrawerSide"
import EditorComponent from "@/components/editor/EditorComponent"
import { TabEditor } from "@/components/tabs/TabEditor"
import { FileContextProvider } from "@/context/FileContext"

function EditorPage() {

    return (
        <FileContextProvider>
            <div className="flex flex-row ">
            <div className="pt-3 px-3">
            <DrawerSide />
            </div>
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
