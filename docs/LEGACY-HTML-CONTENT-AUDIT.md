# LEGACY HTML CONTENT AUDIT — Vision Motors

**Created:** 2026-07-27 · **Source:** a client-supplied Vision Motors HTML page (an
"OVERVIEW / ACCREDITATIONS / LOCATIONS / TEAM / CONTACT" single page), provided as a
**rendered screenshot**. Governs what was imported from it, rejected, held, or flagged.

> ⚠️ The source was a **render**, not raw `.html`. Visible text, structure, colours, voice
> and layout were auditable; exact hex, fonts, `<meta>`, embedded JSON-LD and hidden content
> were **not** extractable. Premium navy was derived from the render + the written brief. If
> exact HTML values/meta are needed later, request the `.html` file.

All decisions are cross-checked against `FACT-VERIFICATION-REGISTER.md` (codes A/B/C/D/E).

---

## A. IMPORTED — added to the new site (verified or client-confirmed)

| Item | Source of truth | Where it now lives |
|---|---|---|
| Second workshop **1197 Steve Biko Road, 0084** (engine shop) | Register B5/B6 + client instruction 2026-07-27 (resolves **C3**) | `site-config.branches`, homepage location section, footer, Contact, Booking, schema (`#engine-shop` branchOf) |
| **Jacques du Randt — Branch Manager (1197)** | Register B4 + client §4 | branches, About team, Contact Branch 02 |
| **Christo Vorster — Branch Manager (1059)** | Register B3 (name); **title HTML-sourced** | branches (`managerTitleSource:"html"`), About team, Contact Branch 01 |
| Two-branches-on-one-street framing | Signage A2 + B5 | location section, FAQ, Contact — softened to "a short distance apart" (no "2 minutes") |
| Authentic **voice/themes** — "good workmanship / honest service", "family-run, owner on the floor", "one standard on every make" | Register B8/B11/B15 (themes, not new facts) | tone of existing copy; no new factual claims added |

## B. HELD — recorded, NOT published (client decision 2026-07-27)

| Item (from HTML) | Why held | Register |
|---|---|---|
| **"Since 1992 / Thirty-four years running"** | Founding year gated. HTML asserts it, but its own management section is internally impossible (a "39-year-old" credited with "34 years of management since day one"), so it is not reliable confirmation. Client chose **keep gated**. | C4 |
| Legal name **"Vision Value Service Centre t/a Vision Motors"** | Conflicts with signage line ending "(Pty) Ltd t/a". Client chose **hold**; not emitted as schema `legalName`. | C6/E6 |
| **Bodywork & insurance-claim** service area | Not in the current build or register; "approved by major insurers" is an unverified accreditation-style claim. Client chose **hold entirely**. | new / E8-analogous |
| Per-branch **WhatsApp** numbers (082 823 5178 / 071 048 8213) | Conflict with C13's number; may be personal lines. §3 forbids inventing per-branch contact details. | C13 |
| **1059 postcode 0084** | Published for 1197 only (confirmed); 1059 still conflicts with GBP 0031. | C20 |

## C. REJECTED — never publish (register-mandated / §10)

| Item (from HTML) | Reason | Register |
|---|---|---|
| **"5-STAR RMI MEMBER"** | The "5-star RMI" wording belongs to **LR Auto Workshop** (a different Pretoria business) and is a grading claim Vision Motors has never held. | E1, E11 |
| RMI / MIWA / ARASA badges | Logo images + self-claims are not membership evidence; no number. | C2, B12/B14 |
| "Approved repairer" + named insurers (King Price, OUTsurance, etc.) | No evidence; displaying a logo ≠ authorisation. | E8-analogous |
| Management **bios / ages** ("aircraft fitter", "39 yrs", "20 years", "74 years between them") | Unverified; internally impossible (39 yrs vs 34 yrs since 1992). No qualifications/years published. | E9, §4 |
| "VAT Registered" badge | Unverified; no VAT number supplied. | new |
| "Two years unlimited km warranty" (implied by voice) | Testimonial recollection, not company policy. | C1/E17 |

## D. OTHER HTML DETAILS NOTED (no action / already correct)

| Item | Note |
|---|---|
| Hours "Mon–Fri 7:30–17:00, closed Sat/holidays" | Matches current build (B1). No change. |
| Emails `vision@` **and** `service@visionmotors.co.za` | Both exist in HTML footer. Current build keeps `vision@` primary; B2 conflict (which mailbox is monitored) remains open. |
| Philosophy quote "Our business philosophy is to offer good workmanship and customer service." | Client's own words — available for use as authentic voice if desired. |
| Insurer list, "APPROVED REPAIRER FOR" logos | Rejected (see C). |
| "FIG.1 — service scope" technical illustration + mono figure captions | The HTML already leans industrial/technical — **confirms** the "Workshop Manual" direction is on-brand. |
| Navy/blue/amber palette | Used as directional reference for the premium-navy refinement (see `SCHEMA-MAP`/theme tokens). |

## Outstanding (still needs the client)
Founding year (C4) · legal entity name (C6) · RMI/MIWA/ARASA numbers (C2) · warranty terms (C1) ·
1059 postcode vs GBP 0031 (C20) · WhatsApp numbers (C13) · whether they do bodywork/insurance work ·
which mailbox is monitored (B2) · Christo's exact title (currently HTML-sourced).
