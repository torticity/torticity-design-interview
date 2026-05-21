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

export const findings: Finding[] = [
  { id: "F-001", date: "09/12/2025", type: "Diagnosis", details: "Invasive ductal carcinoma, right breast, Stage IIIA (ICD-10: C50.911)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-004" },
  { id: "F-002", date: "09/12/2025", type: "Diagnosis", details: "HER2-positive, ER-positive, PR-positive (triple positive)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 3", sourceDocId: "DOC-004" },
  { id: "F-003", date: "09/12/2025", type: "Imaging", details: "Right axillary lymph node involvement, 3 of 7 nodes positive", facility: "Asheville Imaging Center", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-005" },
  { id: "F-004", date: "10/04/2025", type: "Imaging", details: "No evidence of distant metastasis on MRI brain", facility: "Asheville Imaging Center", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-005" },
  { id: "F-005", date: "10/18/2025", type: "Imaging", details: "PET/CT - no FDG-avid distant disease, primary tumor 4.2cm", facility: "Asheville Imaging Center", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1-2", sourceDocId: "DOC-006" },
  { id: "F-006", date: "10/29/2025", type: "Procedure", details: "Right modified radical mastectomy with axillary lymph node dissection", facility: "Mission Hospital", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-007" },
  { id: "F-007", date: "10/29/2025", type: "Procedure", details: "Final pathology: pT2 pN2a, margins clear by 1.2mm", facility: "Mission Hospital", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 3", sourceDocId: "DOC-007" },
  { id: "F-008", date: "11/03/2025", type: "Provider", details: "Treating oncologist: Dr. Arjun Patel, MD (Board-certified, Med Onc)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-001" },
  { id: "F-009", date: "11/03/2025", type: "Treatment", details: "Recommended: 4 cycles AC-T chemo + Herceptin/Perjeta x 1 year", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 4", sourceDocId: "DOC-001" },
  { id: "F-010", date: "11/12/2025", type: "Treatment", details: "Radiation oncologist recommended proton beam therapy due to left-sided heart/lung proximity risk", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-008" },
  { id: "F-011", date: "11/12/2025", type: "Treatment", details: "Cited evidence: prior left chest wall radiation, internal mammary node coverage required", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 3", sourceDocId: "DOC-008" },
  { id: "F-012", date: "11/20/2025", type: "Clinical", details: "Cardiology clearance: baseline LVEF 62%, cardiotoxic risk noted with photon plan", facility: "Asheville Cardiology Associates", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-012" },
  { id: "F-013", date: "12/03/2025", type: "Administrative", details: "Pre-authorization request submitted for proton beam therapy", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-009" },
  { id: "F-014", date: "01/22/2026", type: "Denial", details: "BCBS denied proton beam therapy as 'not medically necessary' per policy MED-RAD-014", facility: "BlueCross BlueShield", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-002" },
  { id: "F-015", date: "01/22/2026", type: "Denial", details: "BCBS position: standard photon (IMRT) is medically equivalent and the alternative coverage option", facility: "BlueCross BlueShield", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-002" },
  { id: "F-016", date: "01/22/2026", type: "Denial", details: "Appeal rights: 180 days, internal appeal first, external review available", facility: "BlueCross BlueShield", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 3", sourceDocId: "DOC-002" },
  { id: "F-017", date: "11/03/2025", type: "Demographics", details: "Patient: Maria Lopez, age 48, R-handed, employed full-time (impacts return-to-work timeline)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 1", sourceDocId: "DOC-001" },
  { id: "F-018", date: "11/03/2025", type: "Demographics", details: "Family history: mother (breast ca, age 52), maternal aunt (ovarian ca)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-001" },
  { id: "F-019", date: "11/03/2025", type: "Coverage Gap", details: "Treatment delay: 6 weeks between recommended plan and denial response", facility: "BlueCross BlueShield", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 5", sourceDocId: "DOC-001" },
  { id: "F-020", date: "10/02/2025", type: "Clinical", details: "BRCA1/BRCA2 testing ordered, results pending at time of treatment planning", facility: "Mountain Health Oncology", qualifiedFinding: "Pending", qc: "—", pages: "p. 1", sourceDocId: "DOC-011" },
  { id: "F-021", date: "11/03/2025", type: "Demographics", details: "Spanish-language primary, interpreter present at consult", facility: "Mountain Health Oncology", qualifiedFinding: "No", qc: "—", pages: "p. 1", sourceDocId: "DOC-001" },
  { id: "F-022", date: "10/29/2025", type: "Procedure", details: "Sentinel node procedure: not performed (palpable disease)", facility: "Mission Hospital", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-007" },
  { id: "F-023", date: "11/03/2025", type: "Diagnosis", details: "Comorbidity: hypertension (controlled on lisinopril)", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 2", sourceDocId: "DOC-003" },
  { id: "F-024", date: "11/03/2025", type: "Treatment", details: "Patient enrolled in genetic counseling pre-treatment", facility: "Mountain Health Oncology", qualifiedFinding: "Yes", qc: "Pass", pages: "p. 6", sourceDocId: "DOC-003" },
]

export const keyPhrases = [
  "not medically necessary",
  "medically equivalent alternative",
  "policy MED-RAD-014",
  "proton beam therapy",
  "left-sided heart/lung proximity",
  "internal mammary node coverage",
  "baseline LVEF 62%",
  "cardiotoxic risk",
  "HER2-positive triple positive",
  "pT2 pN2a",
  "180-day appeal window",
  "external review available",
  "6-week treatment delay",
]

export const uprightCriteria = [
  { criterion: "Treatment recommendation documented by board-certified oncologist", met: true },
  { criterion: "Medical necessity established with cited clinical reasoning", met: true },
  { criterion: "Alternative treatments considered and documented", met: true },
  { criterion: "Cardiotoxic risk assessment present", met: true },
  { criterion: "Pre-authorization timeline within carrier policy", met: true },
  { criterion: "Denial letter received and dated", met: true },
  { criterion: "Appeal deadline tracked", met: false },
  { criterion: "Internal appeal submitted", met: false },
  { criterion: "External review requested", met: false },
  { criterion: "Patient consent for appeal on file", met: false },
]
