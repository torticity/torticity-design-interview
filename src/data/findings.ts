export type Finding = {
  id: string
  date: string
  type: string
  details: string
  facility: string
  qualifiedFinding: "Yes" | "No" | "Pending"
  qc: "Pass" | "Fail" | "—"
  pages: string
  sourceDocId: string
}

// Deliberately incomplete set — gaps in Imaging, Coverage Gap, Procedure, Provider, Denial
// so a candidate can see there's more extraction work to do.
export const findings: Finding[] = [
  { id: "F-001", date: "11/03/2025", type: "Diagnosis", details: "Invasive ductal carcinoma, right breast, Stage IIIA (ICD-10: C50.911)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-001" },
  { id: "F-002", date: "11/03/2025", type: "Diagnosis", details: "HER2-positive, ER-positive, PR-positive (triple positive)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 3", sourceDocId: "DOC-001" },
  { id: "F-003", date: "10/04/2025", type: "Imaging", details: "No evidence of distant metastasis on MRI brain", facility: "Asheville Imaging Center", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-005" },
  { id: "F-004", date: "10/29/2025", type: "Procedure", details: "Final pathology: pT2 pN2a, margins clear by 1.2mm", facility: "Mission Hospital", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 3", sourceDocId: "DOC-007" },
  { id: "F-005", date: "10/29/2025", type: "Procedure", details: "Right modified radical mastectomy with axillary lymph node dissection", facility: "Mission Hospital", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-007" },
  { id: "F-006", date: "11/03/2025", type: "Treatment", details: "Recommended: 4 cycles AC-T chemo + Herceptin/Perjeta x 1 year", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 4", sourceDocId: "DOC-001" },
  { id: "F-007", date: "11/03/2025", type: "Provider", details: "Treating oncologist: Dr. Arjun Patel, MD (Board-certified, Med Onc)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-001" },
  { id: "F-008", date: "11/20/2025", type: "Clinical", details: "Cardiology clearance: baseline LVEF 62%, cardiotoxic risk noted with photon plan", facility: "Asheville Cardiology Associates", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-012" },
  { id: "F-009", date: "12/03/2025", type: "Administrative", details: "Pre-authorization request submitted for proton beam therapy", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-009" },
  { id: "F-010", date: "01/22/2026", type: "Denial", details: "BCBS denied proton beam therapy as 'not medically necessary' per policy MED-RAD-014", facility: "BlueCross BlueShield", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-002" },
  { id: "F-011", date: "01/22/2026", type: "Denial", details: "BCBS position: standard photon (IMRT) is medically equivalent and the alternative coverage option", facility: "BlueCross BlueShield", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-002" },
  { id: "F-012", date: "01/22/2026", type: "Denial", details: "Appeal rights: 180 days, internal appeal first, external review available", facility: "BlueCross BlueShield", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 3", sourceDocId: "DOC-002" },
  { id: "F-013", date: "11/03/2025", type: "Demographics", details: "Patient: Maria Lopez, age 48, R-handed, employed full-time (impacts return-to-work timeline)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-003" },
  { id: "F-014", date: "11/03/2025", type: "Demographics", details: "Family history: mother (breast ca, age 52), maternal aunt (ovarian ca)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-003" },
]
