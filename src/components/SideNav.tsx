import { Activity, CheckSquare, User, Stethoscope, Folder } from "lucide-react"

const items = [
  { label: "Activity", icon: Activity },
  { label: "Tasks", icon: CheckSquare },
  { label: "Patient info", icon: User },
  { label: "Diagnoses", icon: Stethoscope },
  { label: "Records review", icon: Folder, active: true },
]

export function SideNav() {
  return (
    <nav className="w-56 shrink-0 border-r bg-sidebar text-sidebar-foreground py-3">
      <ul className="px-2 space-y-1">
        {items.map(({ label, icon: Icon, active }) => (
          <li key={label}>
            <button
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-base text-left transition-colors ${
                active
                  ? "bg-neutral-200 text-foreground font-medium"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent/40"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="truncate">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
