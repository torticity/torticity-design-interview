import { useRef, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { UploadCloud, FileText, X } from "lucide-react"
import type { CaseDocument, DocumentStatus } from "@/data/documents"

const STATUSES: DocumentStatus[] = [
  "Needs Review",
  "Pending",
  "In Review",
  "QC Pending",
  "Reviewed",
  "Needs Reupload",
]

export function AddDocumentDialog({
  open,
  onOpenChange,
  onAdd,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAdd: (doc: CaseDocument) => void
}) {
  const [name, setName] = useState("")
  const [status, setStatus] = useState<DocumentStatus>("Needs Review")
  const [pageCount, setPageCount] = useState("1")
  const [encrypted, setEncrypted] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function reset() {
    setName("")
    setStatus("Needs Review")
    setPageCount("1")
    setEncrypted(false)
    setFile(null)
    setDragOver(false)
  }

  function handleFile(selected: File | null) {
    setFile(selected)
    if (selected && !name) {
      // strip extension for name autofill
      setName(selected.name.replace(/\.[^.]+$/, ""))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() && !file) return
    const id = `DOC-${String(Math.floor(Math.random() * 900) + 100)}`
    onAdd({
      id,
      name: name.trim() || file?.name || "Untitled document",
      status,
      findingsCount: 0,
      findingsType: "—",
      reviewer: "—",
      qc: "—",
      pageCount: parseInt(pageCount, 10) || 1,
      encrypted,
    })
    reset()
    onOpenChange(false)
  }

  function fmtSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) reset(); onOpenChange(v) }}>
      <DialogContent className="max-w-lg">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Document</DialogTitle>
          </DialogHeader>

          {/* File upload area */}
          <div className="py-4">
            <Label className="text-xs mb-1.5 block">Upload file</Label>
            {file ? (
              <div className="flex items-center gap-3 border rounded-md px-3 py-2.5 bg-muted/40">
                <FileText className="h-5 w-5 text-muted-foreground shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate">{file.name}</div>
                  <div className="text-[10px] text-muted-foreground">{fmtSize(file.size)}</div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => handleFile(null)}
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault()
                  setDragOver(false)
                  const f = e.dataTransfer.files?.[0]
                  if (f) handleFile(f)
                }}
                className={`w-full border-2 border-dashed rounded-md py-7 px-4 flex flex-col items-center gap-2 transition-colors ${
                  dragOver
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-foreground/30 hover:bg-muted/40"
                }`}
              >
                <UploadCloud className="h-6 w-6 text-muted-foreground" />
                <div className="text-xs text-foreground">
                  <span className="font-medium">Click to upload</span>{" "}
                  <span className="text-muted-foreground">or drag and drop</span>
                </div>
                <div className="text-[10px] text-muted-foreground">PDF, JPG, PNG, or TXT</div>
              </button>
            )}
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png,.txt,.md"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <Label className="text-xs mb-1.5 block">Document Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Lab Results - CBC 12/01/25" />
            </div>
            <div className="col-span-1">
              <Label className="text-xs mb-1.5 block">Status</Label>
              <Select value={status} onValueChange={(v) => v && setStatus(v as DocumentStatus)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-1">
              <Label className="text-xs mb-1.5 block">Pages</Label>
              <Input type="number" min={1} value={pageCount} onChange={(e) => setPageCount(e.target.value)} />
            </div>
            <div className="col-span-2 flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="encrypted"
                checked={encrypted}
                onChange={(e) => setEncrypted(e.target.checked)}
                className="h-3.5 w-3.5"
              />
              <Label htmlFor="encrypted" className="text-xs cursor-pointer">Encrypted</Label>
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">Add Document</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
