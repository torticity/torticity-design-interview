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
      <div className="px-3 py-2 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Documents
          </h2>
          <span className="text-[10px] text-muted-foreground">{documents.length} total</span>
        </div>
        <Button size="sm" className="h-7 px-2 gap-1" onClick={onAddDocument}>
          <Plus className="h-3.5 w-3.5" />
          <span className="text-xs">Add Document</span>
        </Button>
      </div>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24 text-[10px] uppercase">Status</TableHead>
              <TableHead className="text-[10px] uppercase">Name / ID</TableHead>
              <TableHead className="w-28 text-[10px] uppercase">Findings</TableHead>
              <TableHead className="w-28 text-[10px] uppercase">Reviewer</TableHead>
              <TableHead className="w-28 text-[10px] uppercase">QC</TableHead>
              <TableHead className="w-16 text-[10px] uppercase">Pages</TableHead>
              <TableHead className="w-16 text-[10px] uppercase">Enc.</TableHead>
              <TableHead className="w-16 text-[10px] uppercase text-right">Preview</TableHead>
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
                  <Badge variant={statusVariant[doc.status]} className="text-[10px]">
                    {doc.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs">
                  <div className="font-medium truncate max-w-[280px]">{doc.name}</div>
                  <div className="text-[10px] text-muted-foreground">{doc.id}</div>
                </TableCell>
                <TableCell className="text-xs">
                  {doc.findingsCount > 0 ? (
                    <span>
                      <span className="font-medium">{doc.findingsCount}</span>
                      <span className="text-muted-foreground"> · {doc.findingsType}</span>
                    </span>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell className="text-xs">{doc.reviewer}</TableCell>
                <TableCell className="text-xs">{doc.qc}</TableCell>
                <TableCell className="text-xs">{doc.pageCount}</TableCell>
                <TableCell>
                  {doc.encrypted ? (
                    <Lock className="h-3 w-3 text-muted-foreground" />
                  ) : (
                    <span className="text-muted-foreground text-[10px]">—</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePreview(doc)
                    }}
                    title="Open preview in new tab"
                  >
                    <Eye className="h-3.5 w-3.5" />
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
