export type MedicalDocKey =
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

export type MedicalDoc = {
  key: MedicalDocKey
  title: string
  meta: { label: string; value: string }[]
  body: string
}

export const medicalDocs: Record<MedicalDocKey, MedicalDoc> = {
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

2. Adjuvant radiation therapy — referred to radiation oncology. Given right-sided primary with nodal involvement, post-mastectomy radiation indicated. Will defer specific modality recommendation to radiation oncology.

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

—  End of Summary —`,
  },

  "pathology-biopsy": {
    key: "pathology-biopsy",
    title: "Pathology Report — Core Needle Biopsy",
    meta: [
      { label: "Patient", value: "Maria Lopez (DOB 03/14/1977)" },
      { label: "Specimen Date", value: "09/12/2025" },
      { label: "Specimen", value: "Right breast core needle biopsy" },
      { label: "Pathologist", value: "Linda Hsu, MD" },
      { label: "Facility", value: "Mission Hospital Pathology" },
    ],
    body: `SPECIMEN
A. Right breast, 12 o'clock, 4cm from nipple, ultrasound-guided core needle biopsy (5 cores).

GROSS DESCRIPTION
Received in formalin, five tan-pink fibrous cores, longest 1.4cm. Entirely submitted in cassettes A1–A2.

MICROSCOPIC / DIAGNOSIS
A. Right breast, core needle biopsy:
   — INVASIVE DUCTAL CARCINOMA, Nottingham grade 2 (tubule formation 2, nuclear pleomorphism 2, mitotic count 2; total score 6/9)
   — Tumor cells exhibit a moderately differentiated glandular architecture with focal solid nests
   — Lymphovascular invasion: PRESENT
   — Background changes: usual ductal hyperplasia, no DCIS identified in this sample

IMMUNOHISTOCHEMISTRY (separately reported, see addendum 09/14/2025)
   — Estrogen Receptor (ER): POSITIVE, ~85% nuclear staining, strong intensity
   — Progesterone Receptor (PR): POSITIVE, ~60% nuclear staining, moderate intensity
   — HER2/neu by IHC: 3+ (POSITIVE)
   — HER2 FISH: not required given IHC 3+
   — Ki-67 proliferation index: ~28%

COMMENT
Findings consistent with high-grade hormone-receptor-positive, HER2-positive invasive ductal carcinoma. Recommend correlation with imaging and multidisciplinary tumor board review. Stage to be determined post imaging and surgical pathology.

ICD-10: C50.911 (Malignant neoplasm of unspecified site of right female breast)

Reviewed and signed,
Linda Hsu, MD
Board-certified, Anatomic and Clinical Pathology`,
  },

  "imaging-mri": {
    key: "imaging-mri",
    title: "MRI Brain with and without Contrast",
    meta: [
      { label: "Patient", value: "Maria Lopez (DOB 03/14/1977)" },
      { label: "Study Date", value: "10/04/2025" },
      { label: "Ordering Provider", value: "Arjun Patel, MD" },
      { label: "Radiologist", value: "Steven Park, MD" },
      { label: "Facility", value: "Asheville Imaging Center" },
    ],
    body: `INDICATION
Staging evaluation in patient with newly diagnosed invasive ductal carcinoma, right breast, Stage IIIA. Rule out CNS metastatic disease.

TECHNIQUE
Multi-sequence MRI of the brain performed including T1, T2, FLAIR, DWI, and post-contrast T1 sequences after IV gadolinium administration. No motion artifact.

COMPARISON
None available.

FINDINGS
- BRAIN PARENCHYMA: No focal enhancing lesion identified. No abnormal signal in the cerebral cortex, subcortical white matter, or deep gray nuclei. No restricted diffusion.
- POSTERIOR FOSSA: Cerebellum and brainstem unremarkable.
- VENTRICLES: Normal size and configuration. No midline shift.
- LEPTOMENINGEAL ENHANCEMENT: None identified.
- EXTRA-AXIAL SPACES: No subdural or epidural collections.
- VASCULAR FLOW VOIDS: Preserved in major intracranial arteries.
- SINUSES / ORBITS: Unremarkable.

IMPRESSION
No evidence of intracranial metastatic disease.

No focal mass or abnormal enhancement. Routine follow-up if clinically indicated.

Steven Park, MD
Diagnostic Radiology, MRI`,
  },

  "imaging-petct": {
    key: "imaging-petct",
    title: "PET/CT — Whole Body Staging",
    meta: [
      { label: "Patient", value: "Maria Lopez (DOB 03/14/1977)" },
      { label: "Study Date", value: "10/18/2025" },
      { label: "Ordering Provider", value: "Arjun Patel, MD" },
      { label: "Radiologist", value: "Steven Park, MD" },
      { label: "Facility", value: "Asheville Imaging Center" },
    ],
    body: `INDICATION
Staging in newly diagnosed right breast invasive ductal carcinoma.

TECHNIQUE
Whole body F-18 FDG PET/CT from skull base through mid-thigh. Patient fasted >6 hours, blood glucose 92 mg/dL prior to FDG injection (10.4 mCi). Uptake time 62 minutes.

FINDINGS
- PRIMARY: Hypermetabolic mass in the right breast at 12 o'clock, measuring approximately 4.2 x 3.6 cm, SUVmax 14.8.
- NODES: Hypermetabolic right axillary lymph nodes, largest at level I measuring 1.8 cm, SUVmax 9.6. Three discrete FDG-avid nodes in the right axilla. No suspicious contralateral axillary, supraclavicular, or internal mammary lymphadenopathy.
- CHEST: No pulmonary nodule or mass. No pleural effusion.
- BONES: No FDG-avid osseous lesion identified. Diffuse physiologic marrow activity.
- ABDOMEN / PELVIS: Liver, spleen, pancreas, kidneys, adrenals unremarkable. No FDG-avid abdominopelvic disease.
- BRAIN: Limited evaluation; correlate with dedicated brain MRI (10/04/2025 — negative).

IMPRESSION
1. Hypermetabolic primary right breast mass with right axillary nodal involvement consistent with the patient's known invasive ductal carcinoma.
2. No FDG-avid evidence of distant metastatic disease.

Recommend correlation with surgical pathology following planned mastectomy + ALND.

Steven Park, MD
Diagnostic Radiology / Nuclear Medicine`,
  },

  "surgical-pathology": {
    key: "surgical-pathology",
    title: "Surgical Pathology — Right Modified Radical Mastectomy",
    meta: [
      { label: "Patient", value: "Maria Lopez (DOB 03/14/1977)" },
      { label: "Specimen Date", value: "10/29/2025" },
      { label: "Surgeon", value: "Rachel Okafor, MD — Surgical Oncology" },
      { label: "Pathologist", value: "Linda Hsu, MD" },
      { label: "Facility", value: "Mission Hospital" },
    ],
    body: `SPECIMENS
A. Right breast — modified radical mastectomy
B. Right axillary contents — level I and II lymph node dissection

GROSS DESCRIPTION
A. Right breast with overlying skin and nipple-areolar complex; 22 x 18 x 6 cm. On serial sectioning, an ill-defined firm tan-white mass at the 12 o'clock position, 4.0cm from the nipple, measuring 3.8 x 3.4 x 2.9 cm. Closest deep margin 1.2 mm, anterior margin 8 mm.
B. Right axillary contents, fibroadipose tissue 9 x 6 x 3 cm; seven lymph nodes identified.

MICROSCOPIC / DIAGNOSIS
A. Right breast, mastectomy:
   — INVASIVE DUCTAL CARCINOMA, Nottingham grade 2, tumor size 3.8 cm
   — Lymphovascular invasion: PRESENT, extensive
   — Margins: clear, closest deep margin 1.2 mm; all other margins >5 mm
   — Background: no DCIS identified beyond the invasive component
B. Right axilla, ALND:
   — METASTATIC CARCINOMA in 3 of 7 lymph nodes (3/7)
   — Largest nodal deposit 2.1 cm; extracapsular extension PRESENT in 1 node

AJCC 8th edition pathologic stage: pT2 pN2a (Stage IIIA)

BIOMARKERS (confirmed on surgical specimen)
   — ER: POSITIVE (90%, strong)
   — PR: POSITIVE (65%, moderate)
   — HER2: POSITIVE (IHC 3+)
   — Ki-67: 30%

COMMENT
Findings consistent with patient's prior core needle biopsy diagnosis. Stage IIIA disease with N2 nodal involvement and extracapsular extension supports recommendation for systemic adjuvant therapy and post-mastectomy radiation per NCCN guidelines.

Linda Hsu, MD
Board-certified, Anatomic and Clinical Pathology`,
  },

  "radiation-onc-consult": {
    key: "radiation-onc-consult",
    title: "Radiation Oncology Consultation",
    meta: [
      { label: "Patient", value: "Maria Lopez (DOB 03/14/1977)" },
      { label: "Date of Consult", value: "11/12/2025" },
      { label: "Provider", value: "Maya Goldstein, MD — Radiation Oncology" },
      { label: "Facility", value: "Mountain Health Radiation Oncology" },
    ],
    body: `INDICATION FOR CONSULTATION
Adjuvant radiation planning following right modified radical mastectomy for Stage IIIA invasive ductal carcinoma with 3/7 positive axillary nodes and extracapsular extension.

CLINICAL ASSESSMENT
Patient evaluated today in radiation oncology clinic. Reviewed surgical pathology, preoperative imaging, and treatment history. Performance status ECOG 1. Patient ambulatory, well-healed mastectomy incision. No evidence of recurrence on exam.

RECOMMENDED PLAN
Post-mastectomy radiation therapy (PMRT) to the right chest wall, supraclavicular fossa, and internal mammary lymph node chain. Total dose 50 Gy in 25 fractions over 5 weeks.

MODALITY RECOMMENDATION: PROTON BEAM RADIATION THERAPY

CLINICAL JUSTIFICATION FOR PROTON BEAM
Standard photon-based techniques (IMRT/VMAT) for left-sided breast cancer carry well-documented cardiac dose limitations. While this is a right-sided primary, the patient's specific anatomy poses important constraints:

1. INTERNAL MAMMARY NODE COVERAGE: Adequate coverage of the right internal mammary chain places the tumor bed dose distribution in close proximity to the right ventricle and right lung. Patient's BMI of 22 and chest wall thickness limit beam-sparing options with photon planning.

2. CARDIAC PRESERVATION: Baseline LVEF 62% (cardiology clearance dated 11/20/2025 pending). Patient is 48 years old with long expected post-treatment survival; cardiotoxic risk must be minimized given anticipated decades of survivorship.

3. CONTRALATERAL BREAST DOSE: Patient has known strong family history of breast cancer (mother dx age 52); reducing contralateral breast dose is clinically important. BRCA testing pending.

4. RESPIRATORY MOTION: Deep inspiration breath-hold (DIBH) is not adequately available at this facility.

Proton beam therapy offers a sharper distal fall-off allowing internal mammary coverage with significantly reduced dose to heart, lungs, and contralateral breast compared with photon-based IMRT or VMAT plans.

EXPECTED COVERAGE
The proton plan will achieve internal mammary chain coverage with cardiac mean dose <2 Gy, ipsilateral lung V20 <15%, contralateral breast mean dose <0.2 Gy.

NEXT STEPS
1. Submit pre-authorization request to BlueCross BlueShield for proton beam therapy
2. Coordinate timing with medical oncology to begin radiation 3-4 weeks after completion of chemotherapy
3. Patient counseled on alternative IMRT/VMAT plans should proton be denied; discussed cardiac risk implications

Maya Goldstein, MD
Board-certified, Radiation Oncology`,
  },

  "preauth-request": {
    key: "preauth-request",
    title: "Pre-Authorization Request — Proton Beam Therapy",
    meta: [
      { label: "Submitted", value: "12/03/2025" },
      { label: "Submitting Provider", value: "Maya Goldstein, MD" },
      { label: "Member ID", value: "MC-2024-78451" },
      { label: "Carrier", value: "BlueCross BlueShield NC" },
      { label: "Status at submission", value: "PENDING REVIEW" },
    ],
    body: `MEMBER INFORMATION
Patient Name: Maria Lopez
DOB: 03/14/1977
Member ID: MC-2024-78451
Group #: 78451-G

SERVICE REQUESTED
Proton Beam Radiation Therapy
CPT codes: 77520, 77522, 77523, 77525
Estimated number of fractions: 25
Estimated total billed cost: $148,750

CLINICAL DIAGNOSIS
Primary diagnosis: C50.911 — Malignant neoplasm of unspecified site of right female breast
Stage: pT2 pN2a (Stage IIIA, AJCC 8th edition)
Biomarkers: ER+ / PR+ / HER2+
Surgical history: Right modified radical mastectomy with axillary lymph node dissection, 10/29/2025

CLINICAL JUSTIFICATION SUMMARY
1. Stage IIIA breast cancer with extracapsular nodal extension — post-mastectomy radiation strongly indicated per NCCN guidelines
2. Internal mammary chain coverage required; cardiac/pulmonary proximity makes IMRT/VMAT dose-constraint compliance difficult
3. Patient age 48 with long expected survivorship — cardiotoxic risk minimization essential
4. Family history of breast cancer in mother and aunt — contralateral breast dose reduction important
5. DIBH not adequately available at treating facility

SUPPORTING DOCUMENTATION ATTACHED
- Radiation oncology consultation note dated 11/12/2025
- Surgical pathology report dated 10/29/2025
- Imaging studies (MRI 10/04/2025, PET/CT 10/18/2025)
- Cardiology clearance pending (anticipated 11/20/2025)

REQUESTED START DATE
Within 3 weeks of completion of chemotherapy. Anticipated treatment start: late February 2026.

CONTACT
Maya Goldstein, MD
Mountain Health Radiation Oncology
828-555-0190

Submitted by:
Pre-authorization team, Mountain Health
auth@mountainhealth.example`,
  },

  "lab-results": {
    key: "lab-results",
    title: "Lab Results — CBC + CMP (Reupload Needed)",
    meta: [
      { label: "Patient", value: "Maria Lopez" },
      { label: "Collection Date", value: "11/01/2025" },
      { label: "Status", value: "Document upload failed — Reupload requested" },
    ],
    body: `[ This document failed validation on upload — original PDF appears truncated. ]

Visible content (partial):

CBC with differential collected 11/01/2025
  WBC: 6.4 K/uL  (ref 4.0–11.0)
  HGB: 12.1 g/dL (ref 12.0–16.0)
  HCT: 36.4 %     (ref 36–46)
  PLT: 244 K/uL  (ref 150–400)
  ANC: 3.8 K/uL  (ref >1.5)

CMP collected 11/01/2025
  Na: 139      K: 4.1
  Cl: 102      CO2: 24
  BUN: 14      Cr: 0.8
  Glucose: 92  Calcium: 9.4

[ Remainder of document corrupted / not parseable. Please request reupload from Mission Hospital Lab. ]

Case coordinator note: re-request submitted 11/04/2025, no response yet from Mission Hospital. Follow-up needed before treatment planning.`,
  },

  "genetic-testing": {
    key: "genetic-testing",
    title: "Genetic Testing Order — BRCA1 / BRCA2",
    meta: [
      { label: "Patient", value: "Maria Lopez (DOB 03/14/1977)" },
      { label: "Order Date", value: "10/02/2025" },
      { label: "Status", value: "Sample collected — results pending" },
      { label: "Laboratory", value: "Myriad Genetics" },
      { label: "Ordering Provider", value: "Arjun Patel, MD" },
    ],
    body: `INDICATION FOR TESTING
- Personal history of newly diagnosed invasive ductal carcinoma at age 48
- Family history of first-degree relative (mother) with breast cancer dx age 52
- Family history of maternal aunt with ovarian cancer dx age 47
- Meets NCCN criteria for germline genetic testing

TEST ORDERED
MyRisk Hereditary Cancer Panel — multi-gene panel including:
- BRCA1
- BRCA2
- PALB2
- CHEK2
- ATM
- TP53
- PTEN
- CDH1
- STK11
- (and additional cancer susceptibility genes)

SAMPLE COLLECTION
Saliva sample collected 10/02/2025 in clinic. Patient consented to testing after genetic counseling session with Christine Park, MS, CGC.

EXPECTED TURNAROUND
14–21 business days. Anticipated results date: 10/25/2025 — 11/04/2025.

CLINICAL IMPACT IF POSITIVE
A pathogenic BRCA1/BRCA2 variant would:
- Strengthen clinical case for proton beam radiation (reducing contralateral breast dose)
- Inform consideration of contralateral risk-reducing mastectomy
- Inform consideration of risk-reducing salpingo-oophorectomy
- Trigger cascade testing recommendation for adult family members

CURRENT STATUS
Results not yet returned at time of treatment planning. Patient counseled that absence of results does not preclude proceeding with surgery, but may inform radiation modality choice and long-term risk-reduction conversations.

Christine Park, MS, CGC
Mountain Health Cancer Genetics`,
  },

  "cardiology-clearance": {
    key: "cardiology-clearance",
    title: "Cardiology Clearance Letter",
    meta: [
      { label: "Patient", value: "Maria Lopez (DOB 03/14/1977)" },
      { label: "Date", value: "11/20/2025" },
      { label: "Provider", value: "David Liu, MD, FACC — Cardiology" },
      { label: "Facility", value: "Asheville Cardiology Associates" },
    ],
    body: `RE: Cardiac Clearance for Adjuvant Cancer Therapy

Dear Dr. Patel,

Thank you for referring Ms. Maria Lopez for pretreatment cardiac evaluation. She is a 48-year-old woman with newly diagnosed Stage IIIA invasive ductal carcinoma of the right breast, status-post mastectomy, scheduled to begin anthracycline-based chemotherapy and post-mastectomy radiation therapy.

EXAMINATION TODAY
- Blood pressure 124/78 mmHg on lisinopril 10 mg daily
- Heart rate 72 bpm, regular
- No JVD, no peripheral edema
- Cardiac auscultation: normal S1/S2, no murmurs, rubs, or gallops
- Lungs clear to auscultation bilaterally

INVESTIGATIONS
- Resting ECG (today): normal sinus rhythm, no acute ischemic changes
- Echocardiogram (11/14/2025): LVEF 62% (normal), normal chamber sizes, normal valvular function, no regional wall motion abnormalities
- Stress testing not indicated given asymptomatic status, no risk factors beyond age-appropriate baseline

ASSESSMENT
- Baseline cardiac function is normal
- Hypertension well-controlled
- No prior cardiac disease

RECOMMENDATIONS
1. Patient is CLEARED to proceed with anthracycline-based chemotherapy (AC-T regimen)
2. I support the radiation oncology team's recommendation for proton beam radiation therapy given the elevated cardiotoxic risk profile associated with photon-based techniques in this anatomy and the patient's expected long survivorship
3. Routine cardiac monitoring during chemotherapy: serial LVEF assessment at baseline, mid-treatment, and at completion
4. Continue lisinopril for blood pressure control; consider beta-blocker if LVEF declines >10% absolute during treatment
5. Lifestyle counseling reinforced: cardio-protective diet, regular aerobic exercise as tolerated post-mastectomy

Please feel free to contact me if you have any questions or if her clinical course changes.

Sincerely,
David Liu, MD, FACC
Cardiology
Asheville Cardiology Associates`,
  },
}
