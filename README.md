# Torticity Design Interview — MediClaim Findings UI

Starter project for the Torticity Design Engineer interview case study.

## What this is

A deliberately bulky, hard-to-use CRM-style records review interface for a fictional healthcare-appeals platform called **MediClaim**. You'll be designing improvements to this app during the live exercise.

The platform helps patient advocates manage long-running insurance appeals. The current Records / Findings page is the focal point of the exercise.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) components

## Project structure

```
src/
  App.tsx                       App shell (header + sidebar + main)
  components/
    CaseHeader.tsx              Top header with all case fields
    SideNav.tsx                 Left sidebar nav
    DocumentsTable.tsx          Main documents table
    FindingsPane.tsx            Left pane with Summary Findings / Key Phrases / Upright Criteria tabs
    DocumentViewerDialog.tsx    Modal to view a document's contents
    ui/                         shadcn primitives
  data/
    case.ts                     Header fields for the active case
    documents.ts                Documents table data
    findings.ts                 Findings + Key Phrases + Upright Criteria data
    medical-docs.ts             Full content of fake medical documents
```

## What you'll see when you run it

- **Maria Lopez** — 48-year-old patient, Stage IIIA breast cancer
- 12 documents in the Documents table
- 24 findings extracted across those documents
- 3 fully written-out medical documents you can view: Oncologist Visit Note, BCBS Denial Letter, Patient History Summary (open them via the edit icon on the corresponding rows)

## The problem

Today our nurse reviewers spend about 2 hours per case pulling out the facts that matter for the appeal. We hear things like *"I can't find what I need"* and *"I just want it faster."*

You'll get the full brief verbally at the start of the session.
