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
      <div className="px-3 py-2.5 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold uppercase tracking-wider text-muted-foreground">
            Summary Findings
          </h2>
          <span className="text-base text-muted-foreground">{findings.length} total</span>
        </div>
        <Button size="sm" className="h-9 px-3 gap-1.5" onClick={onAdd}>
          <Plus className="h-4 w-4" />
          <span className="text-base">Add Finding</span>
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-base uppercase">Date</TableHead>
              <TableHead className="text-base uppercase">Type</TableHead>
              <TableHead className="text-base uppercase">Details</TableHead>
              <TableHead className="text-base uppercase">Doc</TableHead>
              <TableHead className="text-base uppercase">Facility</TableHead>
              <TableHead className="text-base uppercase">Qual.</TableHead>
              <TableHead className="text-base uppercase">QC</TableHead>
              <TableHead className="text-base uppercase">Pages</TableHead>
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {findings.map((f) => (
              <TableRow key={f.id}>
                <TableCell className="text-base whitespace-nowrap">{f.date}</TableCell>
                <TableCell className="text-base">
                  <Badge variant="outline" className="text-base">
                    {f.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-base">{f.details}</TableCell>
                <TableCell className="text-base">
                  <span className="text-muted-foreground font-mono">{f.sourceDocId}</span>
                </TableCell>
                <TableCell className="text-base text-muted-foreground">{f.facility}</TableCell>
                <TableCell className="text-base">
                  <Badge
                    variant={f.qualifiedFinding === "Yes" ? "secondary" : "outline"}
                    className="text-base"
                  >
                    {f.qualifiedFinding}
                  </Badge>
                </TableCell>
                <TableCell className="text-base">{f.qc}</TableCell>
                <TableCell className="text-base text-muted-foreground">{f.pages}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="h-8 w-8 inline-flex items-center justify-center rounded hover:bg-muted">
                      <MoreVertical className="h-4 w-4" />
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
