import { useMemo, useState } from "react"
import { CaseHeader } from "@/components/CaseHeader"
import { SideNav } from "@/components/SideNav"
import { DocumentsTable } from "@/components/DocumentsTable"
import { FindingsPane } from "@/components/FindingsPane"
import { DocumentPage } from "@/components/DocumentPage"
import { AddFindingDialog } from "@/components/AddFindingDialog"
import { AddDocumentDialog } from "@/components/AddDocumentDialog"
import { ChangeDocumentDialog } from "@/components/ChangeDocumentDialog"
import { documents as initialDocuments, type CaseDocument } from "@/data/documents"
import { findings as initialFindings, type Finding } from "@/data/findings"

function App() {
  // URL-based "routing" for opening a document in a new tab
  const docIdFromUrl = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get("doc")
  }, [])

  if (docIdFromUrl) {
    return <DocumentPage docId={docIdFromUrl} />
  }

  return <MainApp />
}

function MainApp() {
  const [documents, setDocuments] = useState<CaseDocument[]>(initialDocuments)
  const [findings, setFindings] = useState<Finding[]>(initialFindings)
  const [selectedId, setSelectedId] = useState<string | null>(initialDocuments[0]?.id ?? null)

  const [addFindingOpen, setAddFindingOpen] = useState(false)
  const [addDocOpen, setAddDocOpen] = useState(false)
  const [changeDocFinding, setChangeDocFinding] = useState<Finding | null>(null)

  function handleAddFinding(f: Finding) {
    setFindings((prev) => [f, ...prev])
    // increment the source doc's findings count to keep things consistent
    setDocuments((prev) =>
      prev.map((d) =>
        d.id === f.sourceDocId ? { ...d, findingsCount: d.findingsCount + 1 } : d
      )
    )
  }

  function handleAddDocument(doc: CaseDocument) {
    setDocuments((prev) => [doc, ...prev])
  }

  function handleCloneFinding(f: Finding) {
    const cloned: Finding = {
      ...f,
      id: `F-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      qc: "—",
    }
    setFindings((prev) => {
      const idx = prev.findIndex((x) => x.id === f.id)
      const next = [...prev]
      next.splice(idx + 1, 0, cloned)
      return next
    })
  }

  function handleDeleteFinding(f: Finding) {
    setFindings((prev) => prev.filter((x) => x.id !== f.id))
    setDocuments((prev) =>
      prev.map((d) =>
        d.id === f.sourceDocId ? { ...d, findingsCount: Math.max(0, d.findingsCount - 1) } : d
      )
    )
  }

  function handleChangeDocument(findingId: string, newSourceDocId: string) {
    setFindings((prev) => {
      const target = prev.find((f) => f.id === findingId)
      const oldDocId = target?.sourceDocId
      const updated = prev.map((f) =>
        f.id === findingId ? { ...f, sourceDocId: newSourceDocId } : f
      )
      // adjust counts on source docs
      setDocuments((docs) =>
        docs.map((d) => {
          if (d.id === oldDocId) return { ...d, findingsCount: Math.max(0, d.findingsCount - 1) }
          if (d.id === newSourceDocId) return { ...d, findingsCount: d.findingsCount + 1 }
          return d
        })
      )
      return updated
    })
  }

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <CaseHeader />
      <div className="flex flex-1 min-h-0">
        <SideNav />
        <FindingsPane
          findings={findings}
          onAdd={() => setAddFindingOpen(true)}
          onChangeDocument={(f) => setChangeDocFinding(f)}
          onClone={handleCloneFinding}
          onDelete={handleDeleteFinding}
        />
        <DocumentsTable
          documents={documents}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onAddDocument={() => setAddDocOpen(true)}
        />
      </div>

      <AddFindingDialog
        open={addFindingOpen}
        onOpenChange={setAddFindingOpen}
        documents={documents}
        onAdd={handleAddFinding}
        initialSourceDocId={selectedId}
      />

      <AddDocumentDialog
        open={addDocOpen}
        onOpenChange={setAddDocOpen}
        onAdd={handleAddDocument}
      />

      <ChangeDocumentDialog
        open={!!changeDocFinding}
        onOpenChange={(v) => { if (!v) setChangeDocFinding(null) }}
        finding={changeDocFinding}
        documents={documents}
        onChange={handleChangeDocument}
      />
    </div>
  )
}

export default App
