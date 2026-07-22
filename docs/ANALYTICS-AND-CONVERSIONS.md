# ANALYTICS AND CONVERSIONS — Vision Motors

**Updated:** 2026-07-22 · **Status:** specification. **No tracking IDs are installed.**

---

## Conversion hierarchy

The client's primary CTA is **"Call Us"**. This inverts the demo, which led with booking — and
it is right for this business: most visitors have a broken car and want a person, not a form.

| Priority | Action | Event | Value |
|---|---|---|---|
| **1** | Phone call | `click_to_call` | Highest — direct, immediate, high close rate |
| **2** | Booking form submit | `booking_submit` | High — captures vehicle detail |
| 3 | Contact form submit | `contact_submit` | Medium |
| 4 | Directions / map click | `get_directions` | Medium — strong visit intent |
| 5 | Email click | `click_to_email` | Low-medium |
| — | Booking form start | `booking_start` | Micro — funnel diagnostic |
| — | Booking page view | `view_booking_page` | Micro |

**`click_to_call` is the primary conversion.** Any Ads setup that optimises for form fills alone
will misread this account.

---

## Event specification

```
click_to_call        { location: header|hero|sticky|footer|service_page|final_cta,
                       page_path }
booking_start        { page_path, service_preselected }
booking_submit       { service_required, vehicle_make, page_path, source }
contact_submit       { page_path }
get_directions       { premises: main|engine_shop }
click_to_email       { page_path }
```

`location` on `click_to_call` matters — it tells us which placement actually earns calls, which
is the single most useful optimisation signal on the site.

---

## ⚠️ Known measurement limits — state these to the client

1. **Phone calls cannot be attributed end-to-end without call tracking.** A `tel:` click is a
   *click*, not a confirmed conversation. Reporting clicks as "calls" overstates performance.
   If accurate call attribution matters, a call-tracking number is required — a separate
   decision with NAP-consistency implications, since a tracking number that leaks into
   directories fragments the NAP we are trying to fix.
2. **iOS Safari `tel:` clicks under-report.** Treat call clicks as directional.
3. **Offline conversion is invisible.** Many customers phone after a visit. Attribution will
   understate the site.

---

## Setup checklist — Phase 5 only

- [ ] GA4 property + measurement ID *(client to supply — C17)*
- [ ] GTM container *(current site runs a GTM reference; confirm what carries over)*
- [ ] Ads conversion actions: `click_to_call` (primary), `booking_submit` (primary), rest secondary
- [ ] `/thank-you` conversion page + `formConfig.redirectOnSuccess = true`
- [ ] Search Console property + sitemap
- [ ] GBP insights baseline **before** the website link is attached — otherwise the lift is unmeasurable
- [ ] Consent handling appropriate to POPIA

**Current site carries Facebook Pixel `353548153124201`** and a GTM reference, with no GA4
measurement ID found. Confirm what carries over before installing anything.

---

## Lead data schema (GoHighLevel)

Flat snake_case for straightforward custom-field mapping. Server-side only — `GHL_WEBHOOK_URL`
never reaches the browser bundle.

```
full_name · phone · email · vehicle_make · vehicle_model · vehicle_year
registration (optional) · service_required · problem_description
preferred_date · preferred_contact_method
source · campaign_source · gclid · page_url · submitted_at
```

**Contact** created from name/phone/email. **Opportunity** created with service + vehicle +
preferred date. Pipeline stage on submission: *New Enquiry*.

⚠️ **The preferred date is a request, not a confirmed booking.** The form must say so, and the
GHL automation must not send a confirmation implying otherwise.

---

## Baseline to capture before launch

So the rebuild can actually be measured:

- Search Console: impressions, clicks, top queries, top pages, index coverage
- GBP insights: searches, views, calls, direction requests
- Current rankings for the Tier 1 terms in `KEYWORD-MAP.md`
- **Whether the current forms deliver at all** (C15 — `action=""` on all three)
