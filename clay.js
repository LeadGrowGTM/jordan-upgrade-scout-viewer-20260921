window.CLAY_SCOUT = {
  "meta": {
    "title": "Clay-deterministic campaign building",
    "task": "clay-campaign-determinism-20260921",
    "mode": "SCOUT / REPORT ONLY — no PRs, no spend, no Clay mutations",
    "author": "Clay Forge Expert",
    "date": "2026-09-21 (America/Toronto)",
    "audience": "Churchill → captain",
    "lane_note": "Jev owns ultra-fast interactive Clay table builds. This scout recommends what to put in Clay; table grind handoffs go to Jev."
  },
  "sources": [
    {
      "source": "Jordan upgrade synthesis",
      "path": "SYNTHESIS.md",
      "used_for": "P0 themes: evidence, ladder, hard-kill, spend, ICP"
    },
    {
      "source": "Jordan backlog",
      "path": "UPGRADE-BACKLOG.json",
      "used_for": "Priority clusters"
    },
    {
      "source": "Clay CLI expertise pack",
      "path": "/workspace/clay-cli-expertise-pack/*",
      "used_for": "CLI surface, spend gates, architecture"
    },
    {
      "source": "Clay forge AGENTS",
      "path": "LeadGrowGTM/clay-forge AGENTS.md",
      "used_for": "Workspace 206846, primitives, live builds, BYOK"
    },
    {
      "source": "Campaign enrichments skill",
      "path": "skills/clay-campaign-enrichments/SKILL.md",
      "used_for": "Task 12 bridge into Clay"
    },
    {
      "source": "gtm-orchestrator listing",
      "path": "LeadGrowGTM/gtm-orchestrator",
      "used_for": "Confirmed CAMPAIGNS.md, tasks/, validators exist"
    },
    {
      "source": "Gap",
      "path": "Full CAMPAIGNS.md + numbered task docs",
      "used_for": "Unverified this run — GitHub MCP rate-limit mid-scout; Task 12 skill is the evidenced Clay call site"
    }
  ],
  "current_path": {
    "title": "Current campaign-build path",
    "where_clay_is": [
      "gtm-orchestrator Task 12 (campaign enrichments) is the documented Clay call site.",
      "Campaign pipeline produces a contacts CSV (Task 11: row_key / person_id / email).",
      "Task 12 runs enrichments.py with --slugs name-hygiene[,playbook-x...] [--approve-spend] [--limit N].",
      "Live today: slug name-hygiene shells into clay-run-function → Clay function name-hygiene.",
      "Not live: any playbook-x slug writes clay-not-used.json and is not executed in Clay.",
      "Validator reads stages/12-campaign-enrichments/enrichments_run.yaml vs contract.yaml required_enrichments.",
      "Hard gate: needs_review = true ⇒ exclude from copy variables; never substitute “there” / spintax."
    ],
    "upstream_functions": [
      "Email Waterfall (email-waterfall) — Task 11 territory",
      "Company Firmographics (company-firmographics) — Task 04",
      "Verify Employment (verify-employment) — Task 10",
      "New In Role (new-in-role)",
      "19 signal playbooks under playbooks/ — specs only until built under workflows/"
    ],
    "thin_spots": [
      {
        "stage": "List / TAM / audience",
        "today": "Mostly agent + free scrapers; Clay Audiences/Search underused",
        "issue": "LLM-ish sourcing; re-runs diverge"
      },
      {
        "stage": "Hard-kill / filters",
        "today": "Jordan U-004 wants pre-LLM rule engine; Clay formulas exist for name hygiene only",
        "issue": "Soft filters inside prompts = drift"
      },
      {
        "stage": "Enrichment ladder",
        "today": "Crawford ladder (U-003) conceptual; Clay waterfalls cover email well, not full ladder",
        "issue": "Agents re-derive parked/dead domains"
      },
      {
        "stage": "Evidence packets",
        "today": "U-002 P0; Clay can store URL/passage but path does not enforce quote-or-blank",
        "issue": "Fiction enters sequences"
      },
      {
        "stage": "Signal playbooks (19)",
        "today": "Recipes only; Task 12 marks not-used",
        "issue": "Skip signals or invent via LLM"
      },
      {
        "stage": "Spend",
        "today": "Clay harness exit 3 without --approve-spend is good; LLM spend less ledgered",
        "issue": "Surprise $"
      }
    ],
    "slow_summary": [
      "Most campaign intelligence still sits in LLM agents after a thin Clay name-hygiene pass.",
      "Playbook signals are not Clay-executable → agents improvise or skip.",
      "No universal pre-LLM hard-kill tab logged like Jordan’s suppressed-row audit.",
      "Replays depend on agent conversation state more than pinned Clay column configs + frozen receipts.",
      "Primitive escalation ignored: audiences → search → routines → workflows → tables is not the campaign default."
    ]
  },
  "recommendations": [
    {
      "id": "R1",
      "title": "Expand Task 12 slug router to the live Clay function set (before new tables)",
      "change": "Add Task 12 (or adjacent stage) branches for email-waterfall, company-firmographics, verify-employment, new-in-role using existing clay-run-function + manifest/functions.json (same pattern as name-hygiene). Keep playbook-* as not-used until built.",
      "why_faster": "Reuses already-proven Clay functions; no new table invent; parallelizable via --limit smokes then full runs.",
      "why_deterministic": "Same function ids, same input→output contracts, receipts under stages/…, validator-enforced required_enrichments.",
      "clay_mechanism": "clay-run-function / routines (function:t_…), CLI free reads for preflight.",
      "impact": "High — turns Task 12 from hygiene only into the enrichment spine for campaigns that already have CSV rows.",
      "dependencies": "enrichments.py branches; contract.yaml required_enrichments; validators; stage cost accumulator keys; task docs for 04/10/11/12 ordering."
    },
    {
      "id": "R2",
      "title": "Campaign hard-kill sheet in Clay (or pre-Clay CSV) before any LLM judge/copy",
      "change": "For each campaign type, define deterministic kill rules (geo, title mismatch, dead domain, generic mailbox, tenure/anti-hopping, negative lists) as Clay formula/guard columns or a Python rule engine that writes suppressed.csv + killing_rule before Task 12 spend. Only survivors enter Clay paid enrichments and LLM judges (Jordan U-004).",
      "why_faster": "Kill 20–60% of junk before BYOK/provider spend and before LLM batches.",
      "why_deterministic": "Same rules every run; suppressed audit is replayable evidence.",
      "clay_mechanism": "Formula columns + conditional run guards; optional Jev table template for the kill sheet UI; CLI tables query for audits.",
      "impact": "High on $ and wall-clock for large lists; medium engineering.",
      "dependencies": "New stage (e.g. 09b-hard-kill) before enrichments; schema for suppressed rows; campaign contract fields for kill config version."
    },
    {
      "id": "R3",
      "title": "Evidence columns as first-class campaign fields (quote-or-blank)",
      "change": "Add EvidencePacket-shaped columns (URL, passage, visibility label snapshot-proven|record-dated|assumed, anti-fit) on campaign tables / stage CSVs. Copy/LLM stages refuse rows with missing quote/URL or assumed visibility (Jordan U-002).",
      "why_faster": "Stops rewrite loops when fiction is caught late in QA.",
      "why_deterministic": "Literal substring check is mechanical; same packet schema across campaigns.",
      "clay_mechanism": "Text/URL columns + formula validators; http-api-v2 only when fetching proof; Claygent only for report-from-page facts (models report, formulas derive).",
      "impact": "Medium-high quality; medium build.",
      "dependencies": "Shared schema package; copy-variable contract; eval rejecting missing evidence before sequence export."
    },
    {
      "id": "R4",
      "title": "Research ladder wired as Clay + free floors, LLM only on residue",
      "change": "Implement Crawford ladder (U-003) as staged campaign enrichments: free wire/DNS/parked probes (orchestrator scripts or http-api-v2) → cheap Clay/routines → expensive LLM only with a verdict packet of cheaper constraints the agent cannot un-know.",
      "why_faster": "Most rows resolve on free/cheap floors (~$0.005/row class demos).",
      "why_deterministic": "Escalation rules are code; packets freeze prior verdicts.",
      "clay_mechanism": "Routines waterfalls + http-api-v2 (0 Clay credits) + optional Claygent BYOK on stubborn rows only.",
      "impact": "High cost control; medium-high complexity.",
      "dependencies": "Ladder stage definitions; verdict-packet schema; cost receipts; hold queue."
    },
    {
      "id": "R5",
      "title": "Promote 3–5 highest-ROI playbooks from recipe → live Clay functions",
      "change": "Pick captain-priority playbooks (e.g. new-in-role already live; fundraising, hiring-surge, linkedin-engagement, tech-on-website candidates). Build under workflows/<slug>/, register in AGENTS index, re-run setup → manifest, then add Task 12 slug branch. Hand table construction to Jev where UI grind is needed.",
      "why_faster": "Signal fields become one Clay run instead of per-row LLM research.",
      "why_deterministic": "Fixed prompts, frozen columns, smoke receipts, COSTS.md.",
      "clay_mechanism": "Function tables + execute-subroutine; CLI harness for workflows where applicable.",
      "impact": "High for campaigns that need those signals; build cost per playbook.",
      "dependencies": "Task 12 router; contract enrichments; copy variable mapping (one field ↔ one variable + fallback)."
    },
    {
      "id": "R6",
      "title": "Pin Clay + campaign versions for replay",
      "change": "Campaign contract.yaml pins: manifest/functions.json hash or function routine ids, playbook versions, positioning/voice @vN (Jordan U-028), Clay plugin version / workspace id. Store clay-receipt.json + enrichments_run.yaml as immutable stage artifacts.",
      "why_faster": "Debugging stops being re-run and hope.",
      "why_deterministic": "Same pins ⇒ same enrichment surface.",
      "clay_mechanism": "Setup receipt + manifest; CLI whoami gate (workspace 206846).",
      "impact": "Medium reliability; low build.",
      "dependencies": "Contract schema; CI check that pins match receipts."
    },
    {
      "id": "R7",
      "title": "Spend honesty: one ledger across Clay + LLM",
      "change": "Extend campaign cost accumulator so Clay harness USD + Clay credits + LLM judge spend share one Plain Plan + arithmetic check (U-005). Tiered confirms already match Clay --approve-spend culture.",
      "why_faster": "Fewer blocked runs from surprise overages mid-campaign.",
      "why_deterministic": "Math must reconcile or export fails.",
      "clay_mechanism": "Existing harness cost write into state.sqlite; COSTS.md prices.",
      "impact": "Medium; low-medium build.",
      "dependencies": "Cost schema; export gate."
    }
  ],
  "leverage": [
    {
      "work": "Name/company cleaning",
      "move_to_clay": "name-hygiene function (already)",
      "keep_in_llm": "—"
    },
    {
      "work": "Email find + verify",
      "move_to_clay": "email-waterfall + MV/Kitt/QE/Ark",
      "keep_in_llm": "—"
    },
    {
      "work": "Firmographics",
      "move_to_clay": "company-firmographics",
      "keep_in_llm": "Narrative dossier prose"
    },
    {
      "work": "Employment / new-in-role",
      "move_to_clay": "verify-employment, new-in-role",
      "keep_in_llm": "Soft judgment on edge cases"
    },
    {
      "work": "Hard-kill filters",
      "move_to_clay": "Formula/guards or rule engine → suppressed tab",
      "keep_in_llm": "—"
    },
    {
      "work": "ICP pre-gates",
      "move_to_clay": "Clay filters / formulas",
      "keep_in_llm": "Outcome archetype scoring after evidence"
    },
    {
      "work": "Signal fields",
      "move_to_clay": "Built playbook functions",
      "keep_in_llm": "Copy that uses the field"
    },
    {
      "work": "Evidence quote/URL",
      "move_to_clay": "Columns + substring validators",
      "keep_in_llm": "Synthesis only over packets"
    },
    {
      "work": "Free domain triage",
      "move_to_clay": "Scripts + http-api-v2 floors",
      "keep_in_llm": "Expensive agent with frozen packet"
    },
    {
      "work": "Sequence personalization",
      "move_to_clay": "—",
      "keep_in_llm": "Generative copy only on survivors with clean vars + evidence"
    }
  ],
  "checklist": [
    "clay whoami ⇒ workspace 206846; credits recorded",
    "Contract pins function routine ids / manifest hash / playbook versions / voice@positioning@vN",
    "Hard-kill config version + suppressed audit written before enrichments",
    "Only required_enrichments slugs run; playbooks not silently skipped if required",
    "--approve-spend only after Plain Plan (rows × unit = total; ledger agrees)",
    "BYOK marker on Claygent columns; never Prospeo",
    "Frozen columns: no silent PATCH of partial typeSettings without re-GET",
    "Evidence columns present; assumed / missing quote blocked from send queue",
    "needs_review / kill flags exclude from copy variables (no spintax substitutes)",
    "Smoke ≤N rows with measured $ (not estimate-only); receipts under stages/",
    "Replay: same input CSV + same pins ⇒ bit-comparable enrichments_run + within-tolerance costs",
    "Spend caps: campaign max $; Clay credits cap; LLM residue budget",
    "Hard-kill before LLM judge/copy (U-004 ordering)"
  ],
  "experiments": [
    {
      "id": "A",
      "title": "Task 12 + email-waterfall on one live campaign (no new tables)",
      "steps": [
        "Pick one campaign dir with Task 11 CSV.",
        "Add email-waterfall slug path mirroring name-hygiene (manifest id already live).",
        "Run --limit 25 with approved spend; compare coverage vs prior agent email path.",
        "Success: ≥ baseline valid/catch_all rate, full receipts, validator green, $ within Plain Plan.",
        "Owner: Clay Forge Expert (CLI/router) + gtm-orchestrator wiring; Jev not required."
      ]
    },
    {
      "id": "B",
      "title": "Hard-kill suppressed audit on 1k rows, then name-hygiene only on survivors",
      "steps": [
        "Encode 5–10 deterministic kill rules for one campaign type (geo/title/generic mail/dead domain).",
        "Produce suppressed.csv with killing_rule; measure kill rate.",
        "Run Task 12 name-hygiene only on survivors (--limit then full).",
        "Success: kill log replayable; Clay/LLM $ down vs judge-all baseline; zero copy on killed rows.",
        "Owner: Clay Forge Expert + orchestrator stage; optional Jev if kill rules become a reusable Clay template table."
      ]
    },
    {
      "id": "C",
      "title": "EvidencePacket columns on 50-row buying-signal slice",
      "steps": [
        "Add URL + passage + visibility columns to one signal campaign stage.",
        "Eval: reject rows failing quote-or-blank before any LLM copy.",
        "Success: 0 assumed rows in export; human spot-check ≥90% passages match source.",
        "Owner: orchestrator schema + Clay Forge Expert column contract; Jev if table UI template needed."
      ]
    }
  ],
  "close_notes": [
    "Deliverable path: /workspace/jordan-my-tools-digest-20260921/CLAY-DETERMINISTIC-CAMPAIGN-BUILD.md",
    "Branch/PR: none (scout only)",
    "Gap: Deep read of gtm-orchestrator CAMPAIGNS.md / full task graph blocked mid-run by GitHub MCP rate-limit/re-auth; Task 12 skill remains the strongest evidenced Clay integration point."
  ]
};
