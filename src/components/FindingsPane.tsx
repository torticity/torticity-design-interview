import type { Finding } from "@/data/findings"
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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { MoreVertical, Plus } from "lucide-react"

export function FindingsPane({
  findings,
  onAdd,
  onChangeDocument,
  onClone,
  onDelete,
}: {
  findings: Finding[]
  onAdd: () => void
  onChangeDocument: (f: Finding) => void
  onClone: (f: Finding) => void
  onDelete: (f: Finding) => void
}) {
  return (
    <aside className="w-[44%] shrink-0 bg-card flex flex-col border-r">
      <div className="px-3 py-2 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Summary Findings
          </h2>
          <span className="text-[10px] text-muted-foreground">{findings.length} total</span>
        </div>
        <Button size="sm" className="h-7 px-2 gap-1" onClick={onAdd}>
          <Plus className="h-3.5 w-3.5" />
          <span className="text-xs">Add Finding</span>
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20 text-[10px] uppercase">Date</TableHead>
              <TableHead className="w-24 text-[10px] uppercase">Type</TableHead>
              <TableHead className="text-[10px] uppercase">Details</TableHead>
              <TableHead className="w-20 text-[10px] uppercase">Doc</TableHead>
              <TableHead className="w-32 text-[10px] uppercase">Facility</TableHead>
              <TableHead className="w-16 text-[10px] uppercase">Qual.</TableHead>
              <TableHead className="w-12 text-[10px] uppercase">QC</TableHead>
              <TableHead className="w-12 text-[10px] uppercase">Pages</TableHead>
              <TableHead className="w-8"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {findings.map((f) => (
              <TableRow key={f.id}>
                <TableCell className="text-[11px] whitespace-nowrap">{f.date}</TableCell>
                <TableCell className="text-[11px]">
                  <Badge variant="outline" className="text-[10px]">
                    {f.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-[11px]">{f.details}</TableCell>
                <TableCell className="text-[11px]">
                  <span className="text-muted-foreground font-mono text-[10px]">{f.sourceDocId}</span>
                </TableCell>
                <TableCell className="text-[11px] text-muted-foreground">{f.facility}</TableCell>
                <TableCell className="text-[11px]">
                  <Badge
                    variant={f.qualifiedFinding === "Yes" ? "secondary" : "outline"}
                    className="text-[10px]"
                  >
                    {f.qualifiedFinding}
                  </Badge>
                </TableCell>
                <TableCell className="text-[11px]">{f.qc}</TableCell>
                <TableCell className="text-[11px] text-muted-foreground">{f.pages}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="h-6 w-6 inline-flex items-center justify-center rounded hover:bg-muted">
                      <MoreVertical className="h-3 w-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onChangeDocument(f)}>
                        Change document
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onClone(f)}>Clone</DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => onDelete(f)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </aside>
  )
}
