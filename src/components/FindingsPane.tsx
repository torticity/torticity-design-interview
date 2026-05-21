import { findings, keyPhrases, uprightCriteria } from "@/data/findings"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { MoreVertical, CheckCircle2, XCircle } from "lucide-react"

export function FindingsPane() {
  return (
    <aside className="w-[44%] shrink-0 bg-card flex flex-col">
      <Tabs defaultValue="summary" className="flex flex-col h-full">
        <TabsList className="rounded-none border-b bg-transparent justify-start h-9 p-0">
          <TabsTrigger
            value="summary"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-3 text-xs"
          >
            Summary Findings
          </TabsTrigger>
          <TabsTrigger
            value="phrases"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-3 text-xs"
          >
            Key Phrases
          </TabsTrigger>
          <TabsTrigger
            value="criteria"
            className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-3 text-xs"
          >
            Upright Criteria
          </TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="flex-1 overflow-auto mt-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20 text-[10px] uppercase">Date</TableHead>
                <TableHead className="w-24 text-[10px] uppercase">Type</TableHead>
                <TableHead className="text-[10px] uppercase">Details</TableHead>
                <TableHead className="w-40 text-[10px] uppercase">Facility</TableHead>
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
                        <DropdownMenuItem>Change document</DropdownMenuItem>
                        <DropdownMenuItem>Clone</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="phrases" className="flex-1 overflow-auto p-3 mt-0">
          <div className="flex flex-wrap gap-1.5">
            {keyPhrases.map((p) => (
              <Badge key={p} variant="outline" className="text-[11px] font-normal">
                {p}
              </Badge>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="criteria" className="flex-1 overflow-auto p-3 mt-0">
          <ul className="space-y-1.5">
            {uprightCriteria.map((c) => (
              <li key={c.criterion} className="flex items-start gap-2 text-[11px]">
                {c.met ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="h-3.5 w-3.5 text-destructive mt-0.5 shrink-0" />
                )}
                <span>{c.criterion}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </aside>
  )
}
