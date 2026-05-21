import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { medicalDocs } from "@/data/medical-docs"
import type { CaseDocument } from "@/data/documents"

export function DocumentViewerDialog({
  document,
  open,
  onOpenChange,
}: {
  document: CaseDocument | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const docContent = document?.docKey ? medicalDocs[document.docKey] : null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-sm">
            {docContent ? docContent.title : document?.name ?? "Document"}
          </DialogTitle>
        </DialogHeader>
        {docContent ? (
          <div className="overflow-auto flex-1 -mx-6 px-6 pb-4">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4 pb-3 border-b">
              {docContent.meta.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </span>
                  <span className="text-xs">{m.value}</span>
                </div>
              ))}
            </div>
            <pre className="whitespace-pre-wrap text-xs leading-relaxed font-sans">
              {docContent.body}
            </pre>
          </div>
        ) : (
          <div className="text-xs text-muted-foreground py-8 text-center">
            No preview available for this document.
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
