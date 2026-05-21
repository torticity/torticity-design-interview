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
      <div className="text-base uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-base text-foreground truncate">{value}</div>
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
    <div className="flex items-center gap-1.5 pl-0.5 pr-2 py-0.5 rounded-full bg-muted/60 border">
      <Avatar className="h-6 w-6">
        <AvatarFallback className="text-base font-medium">{initials(name)}</AvatarFallback>
      </Avatar>
      <span className="text-base text-muted-foreground">{role}:</span>
      <span className="text-base font-medium truncate max-w-[100px]">{name}</span>
    </div>
  )
}

export function CaseHeader() {
  return (
    <header className="border-b bg-card">
      {/* Row 1: utility / breadcrumb bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b text-base text-muted-foreground">
        <div className="flex items-center gap-1">
          <span>All Cases</span>
          <ChevronRight className="h-4 w-4" />
          <span>Open Appeals</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Lopez, Maria</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-base">{caseHeader.lastSaved}</span>
          <Button variant="ghost" size="icon" className="h-7 w-7"><Pin className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7"><Bookmark className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7"><Share2 className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-7 w-7"><MoreHorizontal className="h-4 w-4" /></Button>
        </div>
      </div>

      {/* Row 2: patient name + badges + primary actions */}
      <div className="flex items-center justify-between gap-3 px-4 pt-3 pb-2">
        <div className="flex items-center gap-2 min-w-0 flex-wrap">
          <h1 className="text-xl font-semibold truncate">{caseHeader.patientName}</h1>
          <Badge className="text-base">{caseHeader.status}</Badge>
          <Badge variant="outline" className="text-base">{caseHeader.subStatus}</Badge>
          <Badge variant="destructive" className="text-base">Priority: {caseHeader.priority}</Badge>
          <Badge variant="secondary" className="text-base">{caseHeader.planType}</Badge>
          <Badge variant="secondary" className="text-base">{caseHeader.network}</Badge>
          <Badge variant="outline" className="text-base">Day {caseHeader.daysInAppeal} of appeal</Badge>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <Button variant="outline" size="sm" className="h-9 px-3 gap-1.5">
            <Save className="h-4 w-4" />
            <span className="text-base">Save</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 px-3 gap-1.5">
            <RotateCcw className="h-4 w-4" />
            <span className="text-base">Refresh</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 px-3 gap-1.5">
            <MoreHorizontal className="h-5 w-5" />
            <span className="text-base">Actions</span>
          </Button>
        </div>
      </div>

      {/* Row 3: dense field grid */}
      <div className="grid grid-cols-8 gap-x-4 gap-y-3 px-4 pb-3 pt-2 border-t">
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
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-t bg-muted/30 flex-wrap">
        <div className="flex items-center gap-5 text-base text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1.5">
            <FileText className="h-4 w-4" />
            <span className="text-foreground font-medium">{caseHeader.documentsCount}</span> Documents
          </span>
          <span className="flex items-center gap-1.5">
            <ListChecks className="h-4 w-4" />
            <span className="text-foreground font-medium">{caseHeader.findingsCount}</span> Findings
          </span>
          <span className="flex items-center gap-1.5">
            <ListChecks className="h-4 w-4" />
            <span className="text-foreground font-medium">{caseHeader.openTasksCount}</span> Open Tasks
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            Last activity <span className="text-foreground font-medium">{caseHeader.lastActivity}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            Next deadline <span className="text-foreground font-medium">{caseHeader.nextDeadline}</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
          <AssigneeChip role="Rev" name={caseHeader.assignedReviewer} />
          <AssigneeChip role="QC" name={caseHeader.assignedQc} />
          <AssigneeChip role="Sup" name={caseHeader.assignedSupervisor} />
          <AssigneeChip role="CM" name={caseHeader.assignedCaseManager} />
        </div>
      </div>
    </header>
  )
}
