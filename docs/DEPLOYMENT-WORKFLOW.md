# DEPLOYMENT WORKFLOW — Vision Motors

**Updated:** 2026-07-22 · **Authoritative.** README, SESSION-HANDOVER and LAUNCH-CHECKLIST
summarise this document; if they ever disagree, this file wins.

---

## Why this exists

Vercel's Git integration originally had **`main` as the production branch**. A routine
`git push origin main` therefore replaced the client's approved review deployment automatically,
with no gate. That happened three times during Phase 1–2 before it was caught.

The production branch is now **`production`**, so pushing code and publishing it are two
separate, deliberate acts.

---

## Branches

| Branch | Role | Vercel behaviour |
|---|---|---|
| **`main`** | Active development. All day-to-day work lands here. | **Preview deployment** — unique URL per push. Never touches the review URL. |
| **`production`** | Approved, published state. Only ever fast-forwarded from `main`. | **Production deployment** — takes over `vision-motors-website.vercel.app`. |

Two branches. Nothing else. Feature branches are optional and also produce previews.

---

## Environments

| | URL | Fed by |
|---|---|---|
| **Production / review** | `https://vision-motors-website.vercel.app` | `production` branch |
| **Preview** | `vision-motors-website-<hash>-…vercel.app` (one per push) | `main` and any other branch |
| **Client's real domain** | `visionmotors.co.za` | ⛔ **Not connected.** Still serving the old GroovePages site. |

> Note on naming: `vision-motors-website.vercel.app` is Vercel's *production* environment, but
> commercially it is still a **staging / review** URL. The client's real domain is untouched.

---

## Deploying a preview (normal work)

```bash
git checkout main
# ...work...
git add -A && git commit -m "..."
git push origin main          # → PREVIEW deployment only
```

Get the preview URL from the Vercel dashboard, the GitHub PR comment, or:

```bash
npx vercel ls vision-motors-website
```

You can also build an ad-hoc preview from your working tree without committing:

```bash
npx vercel                    # preview
```

---

## Deploying to production (requires approval)

**Only after the preview has been reviewed and explicitly approved.**

```bash
git checkout production
git merge --ff-only main      # fast-forward only — no merge commits, no divergence
git push origin production    # → PRODUCTION deployment
git checkout main
```

`--ff-only` is deliberate. If it refuses, `production` has drifted from `main` — stop and
investigate rather than forcing it.

**Never** use `npx vercel --prod`. It bypasses the branch gate entirely and is the exact
failure mode this workflow exists to prevent.

---

## Real-domain protection

🔴 **`visionmotors.co.za` must not be connected without written client approval.**

Current state, verified 2026-07-22:

- The project has **exactly one domain**: `vision-motors-website.vercel.app`
- `visionmotors.co.za` is **not present anywhere in the Vercel account**
- No DNS record has been created or changed
- The client's live site is still served by GroovePages

Before the domain is ever connected, all of these must be true:

- [ ] Written client approval to go live
- [ ] `LAUNCH-CHECKLIST.md` fully green
- [ ] Redirects configured and tested (`REDIRECT-MAP.md`)
- [ ] Search Console baseline exported **before** cutover
- [ ] Client informed of the DNS change window

Note: "Auto-assign Custom Production Domains" is **enabled** on the project. That is harmless
today because no custom domain exists — but it means that **the moment a custom domain is
added, the next production deployment will claim it.** Add the domain only when you intend to
go live.

---

## Rollback

### Fastest — Vercel instant rollback (no rebuild)

Dashboard → Project → Deployments → pick the last good production deployment →
**⋯ → Promote to Production**. The alias moves immediately; nothing rebuilds.

Or by CLI:

```bash
npx vercel ls vision-motors-website          # find the deployment URL
npx vercel promote <deployment-url>
```

### Via Git — when the code itself must go back

```bash
git checkout production
git reset --hard <last-good-sha>
git push --force-with-lease origin production
```

`--force-with-lease` rather than `--force`: it refuses if someone else has pushed in the
meantime.

### Known-good reference points

| SHA | What |
|---|---|
| `8d8f5b7` | **Phase 2 — currently live and client-approved** |
| `6ba5bc5` | Phase 1 research docs |
| `b8bd6a2` | Visual system v2 (pre-indigo) |

Vercel keeps immutable deployments, so every past build stays promotable.

---

## Quick reference

| Task | Command |
|---|---|
| Preview | `git push origin main` |
| Production *(approved only)* | `git checkout production && git merge --ff-only main && git push origin production` |
| Ad-hoc preview | `npx vercel` |
| List deployments | `npx vercel ls vision-motors-website` |
| Roll back | `npx vercel promote <url>` |
| Check production branch | `npx vercel project inspect vision-motors-website` |

⛔ **Never:** `npx vercel --prod` · adding `visionmotors.co.za` · changing DNS.
