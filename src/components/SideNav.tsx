import { Activity, CheckSquare, User, Stethoscope, Folder, ShieldCheck, FileText } from "lucide-react"

const items = [
  { label: "Activity", icon: Activity },
  { label: "Tasks", icon: CheckSquare },
  { label: "Patient info", icon: User },
  { label: "Diagnoses", icon: Stethoscope },
  { label: "Records", icon: Folder, active: true },
  { label: "Review & QC", icon: ShieldCheck },
  { label: "Forms", icon: FileText },
]

export function SideNav() {
  return (
    <nav className="w-44 shrink-0 border-r bg-sidebar text-sidebar-foreground py-3">
      <ul className="px-2 space-y-0.5">
        {items.map(({ label, icon: Icon, active }) => (
          <li key={label}>
            <button
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs text-left ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="truncate">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
