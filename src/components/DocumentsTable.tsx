import { documents, type CaseDocument } from "@/data/documents"
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
import { Pencil, Lock } from "lucide-react"

const statusVariant: Record<CaseDocument["status"], "default" | "secondary" | "destructive" | "outline"> = {
  "Reviewed": "secondary",
  "In Review": "default",
  "QC Pending": "outline",
  "Needs Reupload": "destructive",
  "Pending": "outline",
}

export function DocumentsTable({
  selectedId,
  onSelect,
  onEdit,
}: {
  selectedId: string | null
  onSelect: (id: string) => void
  onEdit: (doc: CaseDocument) => void
}) {
  return (
    <div className="flex-1 min-w-0 border-r flex flex-col">
      <div className="px-3 py-2 border-b flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Documents
        </h2>
        <span className="text-[10px] text-muted-foreground">{documents.length} total</span>
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
              <TableHead className="w-12 text-[10px] uppercase text-right">Edit</TableHead>
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
                      onEdit(doc)
                    }}
                  >
                    <Pencil className="h-3 w-3" />
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
