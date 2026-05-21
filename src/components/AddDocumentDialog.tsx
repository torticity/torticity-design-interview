import { useState } from "react"
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
import type { CaseDocument, DocumentStatus } from "@/data/documents"

const STATUSES: DocumentStatus[] = ["Pending", "In Review", "QC Pending", "Reviewed", "Needs Reupload"]

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
  const [status, setStatus] = useState<DocumentStatus>("Pending")
  const [pageCount, setPageCount] = useState("1")
  const [encrypted, setEncrypted] = useState(false)

  function reset() {
    setName("")
    setStatus("Pending")
    setPageCount("1")
    setEncrypted(false)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    const id = `DOC-${String(Math.floor(Math.random() * 900) + 100)}`
    onAdd({
      id,
      name: name.trim(),
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

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) reset(); onOpenChange(v) }}>
      <DialogContent className="max-w-lg">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Document</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3 py-4">
            <div className="col-span-2">
              <Label className="text-xs mb-1.5 block">Document Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Lab Results - CBC 12/01/25" />
            </div>
            <div className="col-span-1">
              <Label className="text-xs mb-1.5 block">Status</Label>
              <Select value={status} onValueChange={(v) => setStatus(v as DocumentStatus)}>
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
            <div className="col-span-2 flex items-center gap-2">
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
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">Add Document</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
