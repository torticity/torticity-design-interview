import { caseHeader } from "@/data/case"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  ChevronRight,
  Bookmark,
  Share2,
  RotateCcw,
  MoreHorizontal,
  Save,
  Pin,
  FileText,
  ListChecks,
  Clock,
  CalendarDays,
} from "lucide-react"

function Field({ label, value }: { label: string; value: string | React.ReactNode }) {
  return (
    <div className="flex flex-col min-w-0">
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-[11px] text-foreground truncate">{value}</div>
    </div>
  )
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function AssigneeChip({ role, name }: { role: string; name: string }) {
  return (
    <div className="flex items-center gap-1.5 pl-0.5 pr-1.5 py-0.5 rounded-full bg-muted/60 border">
      <Avatar className="h-4 w-4">
        <AvatarFallback className="text-[8px] font-medium">{initials(name)}</AvatarFallback>
      </Avatar>
      <span className="text-[10px] text-muted-foreground">{role}:</span>
      <span className="text-[10px] font-medium truncate max-w-[80px]">{name}</span>
    </div>
  )
}

export function CaseHeader() {
  return (
    <header className="border-b bg-card">
      {/* Row 1: utility / breadcrumb bar */}
      <div className="flex items-center justify-between px-4 py-1.5 border-b text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <span>All Cases</span>
          <ChevronRight className="h-3 w-3" />
          <span>Open Appeals</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Lopez, Maria</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px]">{caseHeader.lastSaved}</span>
          <Button variant="ghost" size="icon" className="h-5 w-5"><Pin className="h-3 w-3" /></Button>
          <Button variant="ghost" size="icon" className="h-5 w-5"><Bookmark className="h-3 w-3" /></Button>
          <Button variant="ghost" size="icon" className="h-5 w-5"><Share2 className="h-3 w-3" /></Button>
          <Button variant="ghost" size="icon" className="h-5 w-5"><MoreHorizontal className="h-3 w-3" /></Button>
        </div>
      </div>

      {/* Row 2: patient name + badges + primary actions */}
      <div className="flex items-center justify-between gap-3 px-4 pt-2.5 pb-2">
        <div className="flex items-center gap-2 min-w-0 flex-wrap">
          <h1 className="text-base font-semibold truncate">{caseHeader.patientName}</h1>
          <Badge className="text-[10px]">{caseHeader.status}</Badge>
          <Badge variant="outline" className="text-[10px]">{caseHeader.subStatus}</Badge>
          <Badge variant="destructive" className="text-[10px]">Priority: {caseHeader.priority}</Badge>
          <Badge variant="secondary" className="text-[10px]">{caseHeader.planType}</Badge>
          <Badge variant="secondary" className="text-[10px]">{caseHeader.network}</Badge>
          <Badge variant="outline" className="text-[10px]">Day {caseHeader.daysInAppeal} of appeal</Badge>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <Button variant="outline" size="sm" className="h-7 px-2 gap-1">
            <Save className="h-3 w-3" />
            <span className="text-[11px]">Save</span>
          </Button>
          <Button variant="outline" size="sm" className="h-7 px-2 gap-1">
            <RotateCcw className="h-3 w-3" />
            <span className="text-[11px]">Refresh</span>
          </Button>
          <Button variant="outline" size="sm" className="h-7 px-2 gap-1">
            <MoreHorizontal className="h-4 w-4" />
            <span className="text-[11px]">Actions</span>
          </Button>
        </div>
      </div>

      {/* Row 3: dense field grid */}
      <div className="grid grid-cols-8 gap-x-4 gap-y-2 px-4 pb-2.5 pt-1 border-t">
        <Field label="Member ID" value={caseHeader.memberId} />
        <Field label="Group #" value={caseHeader.groupNumber} />
        <Field label="Claim #" value={caseHeader.claimNumber} />
        <Field label="Auth #" value={caseHeader.authNumber} />
        <Field label="Claim Type" value={caseHeader.claimType} />
        <Field label="Carrier" value={caseHeader.insuranceCarrier} />
        <Field label="Plan" value={`${caseHeader.planType} · ${caseHeader.network}`} />
        <Field label="Coverage End" value={caseHeader.coverageEndDate} />
        <Field label="DOB" value={caseHeader.dob} />
        <Field label="Date of Denial" value={caseHeader.dateOfDenial} />
        <Field label="Location" value={caseHeader.location} />
        <Field label="Primary Language" value={caseHeader.primaryLanguage} />
        <Field label="Reviewer" value={caseHeader.assignedReviewer} />
        <Field label="QC" value={caseHeader.assignedQc} />
        <Field label="Supervisor" value={caseHeader.assignedSupervisor} />
        <Field label="Case Manager" value={caseHeader.assignedCaseManager} />
      </div>

      {/* Row 4: stats + assignees */}
      <div className="flex items-center justify-between gap-3 px-4 py-2 border-t bg-muted/30">
        <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <FileText className="h-3 w-3" />
            <span className="text-foreground font-medium">{caseHeader.documentsCount}</span> Documents
          </span>
          <span className="flex items-center gap-1.5">
            <ListChecks className="h-3 w-3" />
            <span className="text-foreground font-medium">{caseHeader.findingsCount}</span> Findings
          </span>
          <span className="flex items-center gap-1.5">
            <ListChecks className="h-3 w-3" />
            <span className="text-foreground font-medium">{caseHeader.openTasksCount}</span> Open Tasks
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            Last activity <span className="text-foreground font-medium">{caseHeader.lastActivity}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3 w-3" />
            Next deadline <span className="text-foreground font-medium">{caseHeader.nextDeadline}</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <AssigneeChip role="Rev" name={caseHeader.assignedReviewer} />
          <AssigneeChip role="QC" name={caseHeader.assignedQc} />
          <AssigneeChip role="Sup" name={caseHeader.assignedSupervisor} />
          <AssigneeChip role="CM" name={caseHeader.assignedCaseManager} />
        </div>
      </div>
    </header>
  )
}
