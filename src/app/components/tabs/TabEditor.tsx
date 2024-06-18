import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Editor from "../editor/Editor"
import EditorComponent from "../editor/EditorComponent"
import FileSystem from "@/components/files/FileSystem"

export function TabEditor() {
  return (
    <Tabs defaultValue="files" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="files">Files</TabsTrigger>
        <TabsTrigger value="richtext">Rich Text</TabsTrigger>
      </TabsList>
      <TabsContent value="files">
        <FileSystem />
      </TabsContent>
      <TabsContent value="password">
       {/* </RichText> */}
      </TabsContent>
    </Tabs>
  )
}
