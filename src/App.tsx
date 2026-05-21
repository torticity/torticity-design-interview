import { useState } from "react"
import { CaseHeader } from "@/components/CaseHeader"
import { SideNav } from "@/components/SideNav"
import { DocumentsTable } from "@/components/DocumentsTable"
import { FindingsPane } from "@/components/FindingsPane"
import { DocumentViewerDialog } from "@/components/DocumentViewerDialog"
import { documents, type CaseDocument } from "@/data/documents"

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(documents[0]?.id ?? null)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerDoc, setViewerDoc] = useState<CaseDocument | null>(null)

  function handleEdit(doc: CaseDocument) {
    setViewerDoc(doc)
    setViewerOpen(true)
  }

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <CaseHeader />
      <div className="flex flex-1 min-h-0">
        <SideNav />
        <FindingsPane />
        <DocumentsTable
          selectedId={selectedId}
          onSelect={setSelectedId}
          onEdit={handleEdit}
        />
      </div>
      <DocumentViewerDialog
        document={viewerDoc}
        open={viewerOpen}
        onOpenChange={setViewerOpen}
      />
    </div>
  )
}

export default App
