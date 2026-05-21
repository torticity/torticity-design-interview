import { caseHeader } from "@/data/case"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MoreHorizontal } from "lucide-react"

function Field({ label, value }: { label: string; value: string | React.ReactNode }) {
  return (
    <div className="flex flex-col min-w-0">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-xs text-foreground truncate">{value}</div>
    </div>
  )
}

export function CaseHeader() {
  return (
    <header className="border-b bg-card px-4 pt-3 pb-2">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <h1 className="text-base font-semibold truncate">{caseHeader.patientName}</h1>
          {caseHeader.verified && (
            <Badge variant="secondary" className="text-[10px] gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Verified
            </Badge>
          )}
          <Badge className="text-[10px]">{caseHeader.status}</Badge>
          <Badge variant="outline" className="text-[10px]">{caseHeader.subStatus}</Badge>
        </div>
        <Button variant="outline" size="sm" className="h-7 px-2">
          <MoreHorizontal className="h-4 w-4 mr-1" />
          Actions
        </Button>
      </div>

      <div className="grid grid-cols-9 gap-x-4 gap-y-1">
        <Field label="Member ID" value={caseHeader.memberId} />
        <Field label="Claim Type" value={caseHeader.claimType} />
        <Field label="Carrier" value={caseHeader.insuranceCarrier} />
        <Field label="DOB" value={caseHeader.dob} />
        <Field label="Date of Denial" value={caseHeader.dateOfDenial} />
        <Field label="Location" value={caseHeader.location} />
        <Field label="Reviewer" value={caseHeader.assignedReviewer} />
        <Field label="QC" value={caseHeader.assignedQc} />
        <Field label="Status" value={`${caseHeader.status} · ${caseHeader.subStatus}`} />
      </div>
    </header>
  )
}
