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
    name: "Oncologist Visit Note - Dr. Patel 11/03/25",
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
    name: "BCBS Denial Letter 01/22/26",
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
    name: "Patient History Summary",
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
    name: "Pathology Report - Initial Biopsy 09/12/25",
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
    name: "Imaging - MRI Brain w/ Contrast 10/04/25",
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
    name: "Imaging - PET/CT 10/18/25",
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
    name: "Surgical Pathology - Right Mastectomy 10/29/25",
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
    name: "Radiation Oncology Consult 11/12/25",
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
    name: "Insurance Pre-Auth Request 12/03/25",
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
    name: "Lab Results - CBC + CMP 11/01/25",
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
    name: "Genetic Testing - BRCA1/BRCA2 10/02/25",
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
    name: "Cardiology Clearance Letter 11/20/25",
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
