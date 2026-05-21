import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import type { Finding } from "@/data/findings"
import type { CaseDocument } from "@/data/documents"

const TYPE_OPTIONS = [
  "Diagnosis",
  "Treatment",
  "Procedure",
  "Imaging",
  "Provider",
  "Clinical",
  "Administrative",
  "Demographics",
  "Coverage Gap",
  "Denial",
]

const today = () => {
  const d = new Date()
  return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}/${d.getFullYear()}`
}

export function AddFindingDialog({
  open,
  onOpenChange,
  documents,
  onAdd,
  initialSourceDocId,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  documents: CaseDocument[]
  onAdd: (f: Finding) => void
  initialSourceDocId?: string | null
}) {
  const [date, setDate] = useState(today())
  const [type, setType] = useState("Diagnosis")
  const [details, setDetails] = useState("")
  const [facility, setFacility] = useState("")
  const [qualifiedFinding, setQualifiedFinding] = useState<Finding["qualifiedFinding"]>("Pending")
  const [pages, setPages] = useState("")
  const [sourceDocId, setSourceDocId] = useState<string>(initialSourceDocId ?? documents[0]?.id ?? "")

  function reset() {
    setDate(today())
    setType("Diagnosis")
    setDetails("")
    setFacility("")
    setQualifiedFinding("Pending")
    setPages("")
    setSourceDocId(initialSourceDocId ?? documents[0]?.id ?? "")
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!details.trim()) return
    const id = `F-${String(Math.floor(Math.random() * 9000) + 1000)}`
    onAdd({
      id,
      date,
      type,
      details: details.trim(),
      facility: facility.trim() || "—",
      qualifiedFinding,
      qc: "—",
      pages: pages.trim() || "—",
      sourceDocId,
    })
    reset()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) reset(); onOpenChange(v) }}>
      <DialogContent className="max-w-lg">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Finding</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3 py-4">
            <div className="col-span-1">
              <Label className="text-xs mb-1.5 block">Date</Label>
              <Input value={date} onChange={(e) => setDate(e.target.value)} placeholder="MM/DD/YYYY" />
            </div>
            <div className="col-span-1">
              <Label className="text-xs mb-1.5 block">Type</Label>
              <Select value={type} onValueChange={(v) => v && setType(v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {TYPE_OPTIONS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2">
              <Label className="text-xs mb-1.5 block">Details</Label>
              <Textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={3} placeholder="e.g. Stage IIIA invasive ductal carcinoma (ICD-10: C50.911)" />
            </div>
            <div className="col-span-1">
              <Label className="text-xs mb-1.5 block">Facility</Label>
              <Input value={facility} onChange={(e) => setFacility(e.target.value)} placeholder="e.g. Mountain Health" />
            </div>
            <div className="col-span-1">
              <Label className="text-xs mb-1.5 block">Pages</Label>
              <Input value={pages} onChange={(e) => setPages(e.target.value)} placeholder="e.g. p. 2-3" />
            </div>
            <div className="col-span-1">
              <Label className="text-xs mb-1.5 block">Qualified Finding</Label>
              <Select value={qualifiedFinding} onValueChange={(v) => setQualifiedFinding(v as Finding["qualifiedFinding"])}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-1">
              <Label className="text-xs mb-1.5 block">Source Document</Label>
              <Select value={sourceDocId} onValueChange={(v) => v && setSourceDocId(v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent alignItemWithTrigger={false} className="min-w-[460px]">
                  {documents.map((d) => (
                    <SelectItem key={d.id} value={d.id}>{d.id} — {d.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">Add Finding</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
