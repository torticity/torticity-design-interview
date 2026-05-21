import type { CaseDocument, DocumentStatus } from "@/data/documents"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Lock, Plus } from "lucide-react"

const statusVariant: Record<DocumentStatus, "default" | "secondary" | "destructive" | "outline"> = {
  "Reviewed": "secondary",
  "In Review": "default",
  "QC Pending": "outline",
  "Needs Review": "default",
  "Needs Reupload": "destructive",
  "Pending": "outline",
}

export function DocumentsTable({
  documents,
  selectedId,
  onSelect,
  onAddDocument,
}: {
  documents: CaseDocument[]
  selectedId: string | null
  onSelect: (id: string) => void
  onAddDocument: () => void
}) {
  function handlePreview(doc: CaseDocument) {
    window.open(`?doc=${doc.id}`, "_blank")
  }

  return (
    <div className="flex-1 min-w-0 flex flex-col">
      <div className="px-3 py-2.5 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold uppercase tracking-wider text-muted-foreground">
            Documents
          </h2>
          <span className="text-base text-muted-foreground">{documents.length} total</span>
        </div>
        <Button size="sm" className="h-9 px-3 gap-1.5" onClick={onAddDocument}>
          <Plus className="h-4 w-4" />
          <span className="text-base">Add Document</span>
        </Button>
      </div>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-base uppercase">Status</TableHead>
              <TableHead className="text-base uppercase">Name / ID</TableHead>
              <TableHead className="text-base uppercase">Findings</TableHead>
              <TableHead className="text-base uppercase">Reviewer</TableHead>
              <TableHead className="text-base uppercase">QC</TableHead>
              <TableHead className="text-base uppercase">Pages</TableHead>
              <TableHead className="text-base uppercase">Enc.</TableHead>
              <TableHead className="text-base uppercase text-right">Preview</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow
                key={doc.id}
                data-selected={selectedId === doc.id}
                className="cursor-pointer data-[selected=true]:bg-muted"
                onClick={() => onSelect(doc.id)}
              >
                <TableCell>
                  <Badge variant={statusVariant[doc.status]} className="text-base">
                    {doc.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-base">
                  <div className="font-medium break-all">{doc.name}</div>
                  <div className="text-base text-muted-foreground">{doc.id}</div>
                </TableCell>
                <TableCell className="text-base">
                  {doc.findingsCount > 0 ? (
                    <span>
                      <span className="font-medium">{doc.findingsCount}</span>
                      <span className="text-muted-foreground"> · {doc.findingsType}</span>
                    </span>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell className="text-base">{doc.reviewer}</TableCell>
                <TableCell className="text-base">{doc.qc}</TableCell>
                <TableCell className="text-base">{doc.pageCount}</TableCell>
                <TableCell>
                  {doc.encrypted ? (
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <span className="text-muted-foreground text-base">—</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePreview(doc)
                    }}
                    title="Open preview in new tab"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
