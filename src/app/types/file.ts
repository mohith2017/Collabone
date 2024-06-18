type FileId = string
type FileName = string
type FileContent = string

interface File {
    id: FileId
    name: FileName
    content: FileContent
}

interface FileContext {
    files: File[]
    setFiles: (files: File[] | ((files: File[]) => File[])) => void
    currentFile: File | null
    setCurrentFile: (file: File | null) => void
    createFile: (file: FileName) => FileId
    updateFile: (id: FileId, content: FileContent) => void
    openFile: (fid: FileId) => void
    renameFile: (id: FileId, newName: FileName) => boolean
    deleteFile: (id: FileId) => void
}

export type { File, FileContent, FileContext, FileId, FileName }
