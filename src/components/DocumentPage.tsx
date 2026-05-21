import { medicalDocs } from "@/data/medical-docs"
import { documents } from "@/data/documents"

export function DocumentPage({ docId }: { docId: string }) {
  const doc = documents.find((d) => d.id === docId)
  const content = doc?.docKey ? medicalDocs[doc.docKey] : null

  if (!doc) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="bg-card border rounded-lg p-8 max-w-md text-center">
          <h1 className="text-lg font-semibold mb-2">Document not found</h1>
          <p className="text-sm text-muted-foreground">No document with ID {docId}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted py-8">
      <div className="max-w-3xl mx-auto bg-card border rounded-lg shadow-sm">
        <header className="border-b px-8 py-5">
          <div className="flex items-baseline justify-between gap-3">
            <h1 className="text-lg font-semibold">{content ? content.title : doc.name}</h1>
            <span className="text-xs text-muted-foreground shrink-0">{doc.id}</span>
          </div>
          {content && (
            <div className="text-xs text-muted-foreground font-mono break-all mt-1">{doc.name}</div>
          )}
          <div className="text-xs text-muted-foreground mt-1">
            {doc.pageCount} page{doc.pageCount !== 1 ? "s" : ""} · {doc.findingsType}
          </div>
        </header>

        {content ? (
          <div className="px-8 py-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6 pb-5 border-b">
              {content.meta.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </span>
                  <span className="text-xs">{m.value}</span>
                </div>
              ))}
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed font-sans">
              {content.body}
            </pre>
          </div>
        ) : (
          <div className="px-8 py-20 text-center">
            <p className="text-sm font-medium">Document upload received</p>
            <p className="text-xs text-muted-foreground mt-2">
              Preview will be available once processing completes.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
