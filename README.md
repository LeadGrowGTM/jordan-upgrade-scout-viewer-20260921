# Jordan upgrade scout viewer

Apple-style public throwaway viewer for the Jordan My Tools → gtm-orchestrator upgrade scout, plus the Clay deterministic campaign scout.

**Live (GitHub Pages):** https://leadgrowgtm.github.io/jordan-upgrade-scout-viewer-20260921/

Repo: https://github.com/LeadGrowGTM/jordan-upgrade-scout-viewer-20260921

## Open locally

```bash
cd dashboard   # or repo root on Pages clone
python3 -m http.server 8765
```

Open http://127.0.0.1:8765/

Or open `index.html` directly (`file://` works; data is embedded in `data.js` and `clay.js`, no fetch required).

## Sections

| Tab | Contents |
|-----|----------|
| Home | Stats + P0 stack + browse by theme |
| Upgrades | All 28 upgrades, filter P0–P3 / theme / search |
| Digests | All 33 digests with mechanism + linked upgrade ids |
| Clay | Curated Clay deterministic campaign scout (R1–R5, experiments, checklist) |
| Pipeline | Placeholder for pipeline fit review (pending) |

Cross-links: upgrade ↔ digests both ways.

## Files

| File | Role |
|------|------|
| `index.html` | Apple HIG UI (light default, optional dark toggle) |
| `data.js` | `window.SCOUT_DATA` (upgrades + digests) |
| `data.json` | Same payload as JSON |
| `clay.js` | `window.CLAY_SCOUT` curated scout content |
| `README.md` | This file |

Regenerate `data.js` from `data.json` if needed:

```bash
python3 -c "import json; d=json.load(open('data.json')); open('data.js','w').write('window.SCOUT_DATA = '+json.dumps(d,ensure_ascii=False)+';\n')"
```

## Out of scope

Public throwaway viewer only. Does not implement upgrades or open PRs against gtm-orchestrator. Does not mutate Clay.
