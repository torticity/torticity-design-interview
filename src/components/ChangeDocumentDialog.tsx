import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import type { CaseDocument } from "@/data/documents"
import type { Finding } from "@/data/findings"

export function ChangeDocumentDialog({
  open,
  onOpenChange,
  finding,
  documents,
  onChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  finding: Finding | null
  documents: CaseDocument[]
  onChange: (findingId: string, newSourceDocId: string) => void
}) {
  const [selected, setSelected] = useState<string>(finding?.sourceDocId ?? "")

  useEffect(() => {
    if (finding) setSelected(finding.sourceDocId)
  }, [finding])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!finding) return
    onChange(finding.id, selected)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Change source document</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-3">
            {finding && (
              <div className="text-xs text-muted-foreground border-l-2 pl-3">
                <div className="font-medium text-foreground line-clamp-2">{finding.details}</div>
                <div className="mt-1">Currently: {finding.sourceDocId}</div>
              </div>
            )}
            <div>
              <Label className="text-xs mb-1.5 block">New source document</Label>
              <Select value={selected} onValueChange={(v) => v && setSelected(v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {documents.map((d) => (
                    <SelectItem key={d.id} value={d.id}>{d.id} — {d.name.slice(0, 40)}{d.name.length > 40 ? "…" : ""}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
