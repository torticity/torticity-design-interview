export type MedicalDoc = {
  key: "oncologist-visit" | "denial-letter" | "patient-history"
  title: string
  meta: { label: string; value: string }[]
  body: string
}

export const medicalDocs: Record<MedicalDoc["key"], MedicalDoc> = {
  "oncologist-visit": {
    key: "oncologist-visit",
    title: "Oncologist Visit Note",
    meta: [
      { label: "Patient", value: "Maria Lopez (DOB 03/14/1977)" },
      { label: "MRN", value: "MC-2024-78451" },
      { label: "Date of Visit", value: "11/03/2025" },
      { label: "Provider", value: "Arjun Patel, MD — Medical Oncology" },
      { label: "Facility", value: "Mountain Health Oncology, Asheville NC" },
    ],
    body: `CHIEF COMPLAINT
Follow-up post right modified radical mastectomy. Treatment planning for adjuvant therapy.

HISTORY OF PRESENT ILLNESS
48-year-old female with newly diagnosed Stage IIIA invasive ductal carcinoma of the right breast (ICD-10: C50.911), HER2-positive, ER-positive, PR-positive. Initial biopsy 09/12/2025. Underwent right modified radical mastectomy with axillary lymph node dissection on 10/29/2025 at Mission Hospital. Final pathology: pT2 pN2a (3 of 7 nodes positive), margins clear by 1.2mm.

Patient presents today for adjuvant treatment planning. Reports good post-operative recovery, denies fevers, chills, or shortness of breath. Pain controlled on PRN acetaminophen. Patient accompanied by spouse; Spanish-language primary, hospital interpreter present.

FAMILY HISTORY
- Mother: breast cancer diagnosed age 52, deceased age 58 (metastatic disease)
- Maternal aunt: ovarian cancer, age 47
- BRCA1/BRCA2 testing ordered 10/02/2025, results pending at time of this visit.

PAST MEDICAL HISTORY
- Hypertension, well-controlled on lisinopril 10mg daily
- No prior cardiac history; baseline LVEF 62% per recent echo
- No prior chest wall radiation

ASSESSMENT & PLAN
1. Stage IIIA invasive ductal carcinoma, HER2-positive — recommend 4 cycles dose-dense AC (doxorubicin/cyclophosphamide) followed by paclitaxel + trastuzumab (Herceptin) + pertuzumab (Perjeta). Continue trastuzumab/pertuzumab to complete 1 year of HER2-targeted therapy.

2. Adjuvant radiation therapy — referred to radiation oncology. Given right-sided primary with nodal involvement, post-mastectomy radiation indicated. Will defer specific modality recommendation to radiation oncology, however given proximity to heart and lungs and the need for internal mammary chain coverage, will support recommendation for proton beam therapy if radiation oncology concurs.

3. Endocrine therapy — anticipated tamoxifen vs. aromatase inhibitor pending menopausal status assessment after chemotherapy.

4. Genetic counseling — patient has been referred and will follow up on BRCA testing results to inform contralateral risk-reduction discussion.

5. Treatment timeline — chemotherapy to begin within 2 weeks. Patient counseled on importance of timely initiation; delays beyond 8 weeks from surgery associated with worse outcomes per literature.

FOLLOW-UP
Return in 1 week to confirm chemotherapy start. Radiation oncology consult scheduled 11/12/2025.

Signed,
Arjun Patel, MD
Board-certified, Medical Oncology`,
  },

  "denial-letter": {
    key: "denial-letter",
    title: "BlueCross BlueShield — Denial Letter",
    meta: [
      { label: "Member", value: "Maria Lopez" },
      { label: "Member ID", value: "MC-2024-78451" },
      { label: "Date", value: "01/22/2026" },
      { label: "Re", value: "Pre-authorization request — proton beam radiation therapy" },
      { label: "Determination", value: "DENIED" },
    ],
    body: `Dear Ms. Lopez,

This letter is to inform you of our coverage determination regarding the pre-authorization request submitted on your behalf by Mountain Health Oncology on 12/03/2025 for proton beam radiation therapy following your right modified radical mastectomy.

DETERMINATION: After review by our Medical Director and clinical staff, BlueCross BlueShield has determined that the requested service — proton beam radiation therapy (CPT 77520, 77522, 77523, 77525) — is NOT MEDICALLY NECESSARY for your diagnosis under your current plan and is therefore not covered.

CLINICAL REASONING: Per BCBS Medical Policy MED-RAD-014, "Proton Beam Therapy for Breast Cancer," proton beam radiation is considered investigational and not medically necessary for the treatment of breast cancer in adult patients, including post-mastectomy radiation for Stage III disease, EXCEPT in specific clinical scenarios involving (a) re-irradiation in a previously irradiated field, (b) pediatric patients, or (c) documented dose-limiting constraints to critical organs that cannot be met with intensity-modulated radiation therapy (IMRT) or volumetric modulated arc therapy (VMAT).

Our review of your submitted clinical documentation indicates that standard photon-based radiation (IMRT) is a medically equivalent and covered alternative under your plan. While we acknowledge your treating radiation oncologist's preference for proton therapy based on cited proximity to heart and lung structures, our reviewing physician determined that modern IMRT and VMAT planning techniques can meet established dose-constraint guidelines for your anatomy. We have therefore determined IMRT to be the appropriate covered modality for your post-mastectomy radiation.

APPEAL RIGHTS: You have the right to appeal this determination. You may submit an internal appeal within 180 days of the date of this letter by writing to:

  BCBS Member Appeals
  PO Box 2410
  Asheville, NC 28802

If your internal appeal is denied, you may then request an external review by an Independent Review Organization (IRO) at no cost to you. Information about the external review process is enclosed.

If you believe this denial poses an imminent risk to your health, you may also request an expedited appeal, which will be reviewed within 72 hours.

If you have questions about this determination, please contact Member Services at 1-800-555-0143.

Sincerely,
Jennifer Adams, MD
Medical Director, BCBS NC

Enclosures: Member Appeal Rights, External Review Process Overview, Medical Policy MED-RAD-014 (excerpt)`,
  },

  "patient-history": {
    key: "patient-history",
    title: "Patient History Summary",
    meta: [
      { label: "Patient", value: "Maria Lopez (DOB 03/14/1977)" },
      { label: "MRN", value: "MC-2024-78451" },
      { label: "Compiled", value: "11/05/2025" },
      { label: "Compiled by", value: "Care coordination team, Mountain Health Oncology" },
    ],
    body: `DEMOGRAPHICS
Maria Lopez, 48-year-old right-handed Latina female. Born 03/14/1977 in Cali, Colombia. Resident of Asheville, NC since 2009. Married, two adult children. Employed full-time as a public school art teacher. Primary language Spanish; conversational English. Insurance: BlueCross BlueShield NC (Member ID MC-2024-78451).

ONCOLOGIC HISTORY
- 08/24/2025: Patient self-detected right breast mass, sought evaluation at primary care
- 09/03/2025: Diagnostic mammogram + ultrasound — BI-RADS 5 suspicious mass, right upper outer quadrant
- 09/12/2025: Core needle biopsy — Invasive ductal carcinoma, grade 2, ER+/PR+/HER2+
- 09/25/2025: Initial oncology consultation, Mountain Health Oncology
- 10/02/2025: Genetic counseling, BRCA1/BRCA2 testing ordered (results pending)
- 10/04/2025: MRI brain w/ contrast — no evidence of metastasis
- 10/18/2025: PET/CT staging — no distant disease, primary 4.2cm, axillary nodal involvement
- 10/29/2025: Right modified radical mastectomy + ALND (Mission Hospital)
- 11/03/2025: Post-op oncology follow-up, adjuvant treatment planning
- 11/12/2025: Radiation oncology consult — proton beam therapy recommended
- 11/20/2025: Cardiology clearance — LVEF 62%, fit for treatment
- 12/03/2025: Pre-authorization submitted for proton beam therapy
- 01/22/2026: BCBS denial received

PAST MEDICAL HISTORY
- Hypertension, well-controlled on lisinopril 10mg daily (since 2019)
- Gestational diabetes (resolved, 2003)
- No prior surgeries other than C-section (2003)
- No prior chest wall radiation
- No prior cancer history

FAMILY HISTORY
- Mother: breast cancer diagnosed age 52, deceased age 58 (metastatic)
- Maternal aunt: ovarian cancer, diagnosed age 47
- Father: alive, age 78, hypertension
- Two siblings: alive and well, no cancer history
- No known Ashkenazi Jewish heritage

SOCIAL HISTORY
- Never-smoker
- Alcohol: rare, social only
- No recreational drug use
- Married, supportive spouse (Carlos, 50)
- Two adult children: Sofia (22, college student), Diego (19, college student)
- Active in church community
- Reports moderate stress related to financial impact of diagnosis

ALLERGIES
- NKDA (no known drug allergies)
- Mild seasonal allergies, takes loratadine PRN

CURRENT MEDICATIONS
- Lisinopril 10mg PO daily
- Acetaminophen 500mg PO PRN post-op pain
- Multivitamin daily

PSYCHOSOCIAL NOTES
Patient reports anxiety about treatment delays following insurance denial. Spouse and children supportive. Patient has indicated preference for continued employment during treatment if possible. Has expressed strong desire to proceed with proton therapy as recommended by treating team and concerns about cardiotoxic risk of standard IMRT given personal/family hypertension and her relative youth.

CASE COORDINATOR NOTES
Treatment delay clock started 11/12/2025 (date of radiation oncology recommendation). Pre-authorization submitted 12/03/2025. Denial received 01/22/2026. Total elapsed delay at time of compilation: approximately 6 weeks. Standard guidance (NCCN) supports initiation of adjuvant radiation within 8–12 weeks of surgery; we are now within that window but approaching the upper boundary if appeal extends beyond 30 days.

—  End of Summary —`,
  },
}
