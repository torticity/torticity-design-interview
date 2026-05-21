export type DocumentStatus =
  | "Reviewed"
  | "In Review"
  | "QC Pending"
  | "Needs Review"
  | "Needs Reupload"
  | "Pending"

export type CaseDocument = {
  id: string
  name: string
  status: DocumentStatus
  findingsCount: number
  findingsType: string
  reviewer: string
  qc: string
  pageCount: number
  encrypted: boolean
  docKey?:
    | "oncologist-visit"
    | "denial-letter"
    | "patient-history"
    | "pathology-biopsy"
    | "imaging-mri"
    | "imaging-petct"
    | "surgical-pathology"
    | "radiation-onc-consult"
    | "preauth-request"
    | "lab-results"
    | "genetic-testing"
    | "cardiology-clearance"
}

export const documents: CaseDocument[] = [
  {
    id: "DOC-001",
    name: "Oncologist_Visit_Note_Lopez_Maria_11-03-2025_Patel_MD_Mountain_Health_Onc_signed_v2.pdf",
    status: "Reviewed",
    findingsCount: 4,
    findingsType: "Clinical",
    reviewer: "Sarah Chen",
    qc: "Marcus Rivera",
    pageCount: 6,
    encrypted: false,
    docKey: "oncologist-visit",
  },
  {
    id: "DOC-002",
    name: "BCBS_Pre-Auth_Denial_Letter_Lopez_Maria_MC-2024-78451_2026-01-22_proton_beam_MED-RAD-014.pdf",
    status: "In Review",
    findingsCount: 3,
    findingsType: "Denial",
    reviewer: "Sarah Chen",
    qc: "—",
    pageCount: 3,
    encrypted: false,
    docKey: "denial-letter",
  },
  {
    id: "DOC-003",
    name: "Patient_History_Summary_Lopez_Maria_DOB_1977-03-14_compiled_2025-11-05_care_coord_v2.pdf",
    status: "Reviewed",
    findingsCount: 2,
    findingsType: "Clinical",
    reviewer: "Sarah Chen",
    qc: "Marcus Rivera",
    pageCount: 9,
    encrypted: false,
    docKey: "patient-history",
  },
  {
    id: "DOC-004",
    name: "Pathology_Report_Right_Breast_Core_Needle_Biopsy_Lopez_Maria_09-12-2025_Hsu_MD_FINAL.pdf",
    status: "Needs Review",
    findingsCount: 0,
    findingsType: "—",
    reviewer: "—",
    qc: "—",
    pageCount: 4,
    encrypted: false,
    docKey: "pathology-biopsy",
  },
  {
    id: "DOC-005",
    name: "Imaging_MRI_Brain_with_and_without_Contrast_Lopez_Maria_10-04-2025_Asheville_Imaging_Park_MD.pdf",
    status: "Reviewed",
    findingsCount: 1,
    findingsType: "Imaging",
    reviewer: "Sarah Chen",
    qc: "Marcus Rivera",
    pageCount: 2,
    encrypted: false,
    docKey: "imaging-mri",
  },
  {
    id: "DOC-006",
    name: "Imaging_PET-CT_Whole_Body_Staging_FDG_Lopez_Maria_10-18-2025_Asheville_Imaging_Park_MD.pdf",
    status: "Needs Review",
    findingsCount: 0,
    findingsType: "—",
    reviewer: "—",
    qc: "—",
    pageCount: 3,
    encrypted: false,
    docKey: "imaging-petct",
  },
  {
    id: "DOC-007",
    name: "Surgical_Pathology_Right_Modified_Radical_Mastectomy_ALND_Lopez_Maria_10-29-2025_Hsu_signed.pdf",
    status: "Reviewed",
    findingsCount: 2,
    findingsType: "Clinical",
    reviewer: "Sarah Chen",
    qc: "Marcus Rivera",
    pageCount: 5,
    encrypted: false,
    docKey: "surgical-pathology",
  },
  {
    id: "DOC-008",
    name: "Radiation_Oncology_Consultation_Lopez_Maria_11-12-2025_Goldstein_MD_proton_recommendation.pdf",
    status: "Needs Review",
    findingsCount: 0,
    findingsType: "—",
    reviewer: "—",
    qc: "—",
    pageCount: 4,
    encrypted: false,
    docKey: "radiation-onc-consult",
  },
  {
    id: "DOC-009",
    name: "BCBS_PreAuth_Request_CPT_77520_77522_77523_77525_Lopez_Maria_2025-12-03_Mountain_Health.pdf",
    status: "Needs Review",
    findingsCount: 1,
    findingsType: "Administrative",
    reviewer: "Sarah Chen",
    qc: "—",
    pageCount: 2,
    encrypted: false,
    docKey: "preauth-request",
  },
  {
    id: "DOC-010",
    name: "Lab_Results_CBC_CMP_Lopez_Maria_2025-11-01_Mission_Hospital_Lab_FAILED_VALIDATION_partial.pdf",
    status: "Needs Reupload",
    findingsCount: 0,
    findingsType: "—",
    reviewer: "—",
    qc: "—",
    pageCount: 1,
    encrypted: false,
    docKey: "lab-results",
  },
  {
    id: "DOC-011",
    name: "Genetic_Testing_Order_BRCA1_BRCA2_PALB2_CHEK2_ATM_Lopez_Maria_10-02-2025_Myriad_pending.pdf",
    status: "Needs Review",
    findingsCount: 0,
    findingsType: "—",
    reviewer: "—",
    qc: "—",
    pageCount: 3,
    encrypted: false,
    docKey: "genetic-testing",
  },
  {
    id: "DOC-012",
    name: "Cardiology_Clearance_Letter_Lopez_Maria_2025-11-20_Liu_MD_FACC_LVEF_62_signed.pdf",
    status: "Reviewed",
    findingsCount: 1,
    findingsType: "Clinical",
    reviewer: "Sarah Chen",
    qc: "Marcus Rivera",
    pageCount: 2,
    encrypted: false,
    docKey: "cardiology-clearance",
  },
]
