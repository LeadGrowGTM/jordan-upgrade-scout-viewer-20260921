window.PIPELINE_SCOUT = {
  "meta": {
    "title": "Pipeline-fit review",
    "subtitle": "Jordan My Tools upgrades vs LeadGrowGTM/gtm-orchestrator",
    "task": "jordan-pipeline-fit-20260921",
    "mode": "SCOUT / REPORT ONLY (no PRs, no code changes, no push)",
    "repo_scanned": "LeadGrowGTM/gtm-orchestrator (shallow clone 2026-09-21 ET)",
    "inputs": "UPGRADE-BACKLOG.json (U-001…U-028), SYNTHESIS.md",
    "authority": "CAMPAIGNS.md (as-run), CONTEXT.md, README.md, src/gtm_orchestrator/stages/constants.py",
    "p0_summary": "6 P0s → yes 0 / partial 4 / no 2 (partial: U-001, U-003, U-004, U-005 · no: U-002, U-006)"
  },
  "top5": [
    {
      "id": "U-002",
      "title": "Universal evidence contracts"
    },
    {
      "id": "U-004",
      "title": "Hard-kill → judge + suppressed-row audit"
    },
    {
      "id": "U-003",
      "title": "Research-ladder enrichment + verdict-packet bus"
    },
    {
      "id": "U-001",
      "title": "Per-client Context OS pack (+ describe-not-score dossier slice)"
    },
    {
      "id": "U-005",
      "title": "Spend honesty gates (plain-plan + arithmetic + typed tiers)"
    }
  ],
  "stages": [
    {
      "code": "01-discover",
      "detail": "DiscoverStage | GmapsDiscoverStage | PreparedDiscoverStage | UCCDiscoverStage (+ SignalDiscoverStage / prepared CSV / custom flows via FlowRegistry)"
    },
    {
      "code": "02.5-domain-mx",
      "detail": "DomainMXPreFilterStage — security-gateway hard drops"
    },
    {
      "code": "03-qualify",
      "detail": "ICPQualifyStage — DiscoLike validate+discogen | locked lg-llm-runtime prompt | Clay score fallback"
    },
    {
      "code": "03b-enrich-company",
      "detail": "EnrichCompanyStage — post-qualify cleanup enrichments"
    },
    {
      "code": "04-people",
      "detail": "PeopleFindStage — people-find gate; QE → Clay find-people → AI Ark"
    },
    {
      "code": "04b-waterfall",
      "detail": "WaterfallStage — email find + verify"
    },
    {
      "code": "04c-mx",
      "detail": "MXFilterStage — provider buckets; gateway blocked again"
    },
    {
      "code": "04d-enrich-contact",
      "detail": "EnrichContactStage — sendable-only personalization enrichments"
    },
    {
      "code": "06-segment",
      "detail": "SegmentStage"
    },
    {
      "code": "07-apply",
      "detail": "ApplyStage — approved copy onto segments"
    },
    {
      "code": "07b-personalize",
      "detail": "PersonalizeStage — SamplingGate then fan-out"
    },
    {
      "code": "08-qa",
      "detail": "QAStage / ScorecardStage — list-quality-scorecard; grade F confirm"
    },
    {
      "code": "09-launch",
      "detail": "LaunchStage — Bison create/upload; launch-gate.md (launch approved only)"
    }
  ],
  "agent_surface": [
    {
      "layer": "Coordinator",
      "path": "AGENTS.md (Napoleon)",
      "role": "Dispatch only; gates for launch / people-find / spend"
    },
    {
      "layer": "Campaign agents",
      "path": ".claude/agents/",
      "role": "Zone owners under Napoleon (list-builder, enrichment, copywriter, uploader, …)"
    },
    {
      "layer": "Judgment skills",
      "path": ".claude/skills/",
      "role": "Strategy, copy, ICP lock, enrichment selection, QA"
    },
    {
      "layer": "Clay handoffs",
      "path": "Companion clay-forge",
      "role": "Firmographics, people escalation, employment verify, email waterfall fallback, supabase-precheck"
    },
    {
      "layer": "Signals",
      "path": "trigger-workflows/signals/ + signal-bank/",
      "role": "Hiring / engagement / PH / funding-adjacent continuous matching"
    },
    {
      "layer": "Shared data",
      "path": "Supabase via registry-first SupabasePreCheck",
      "role": "Cache before paid providers"
    }
  ],
  "client_pack": {
    "tracked_example": "clients/gtm-client-desmond/",
    "observed": [
      "Root: icp-profile.yaml (legacy), HANDOFF.*, _master.md",
      "company/ (offers), research/, intel/, briefs/, campaigns/, gtm/, inputs/, sequences/",
      "Canonical durable client context: root company.md with frontmatter for icp, voice, suppression, proof, offer, icp_qualification_prompt",
      "Campaign dir: clients/gtm-client-<slug>/campaigns/<slug>/ with state.sqlite, brief.md, decisions.md, campaign.jsonl, stages/<stage>/, backlog.md"
    ],
    "not_found": "context/, sources/, skills/, work/, releases/, account dossiers, or DEPENDS_ON package pins as standard layout",
    "stage_note": "There is no 05-enrich runner. Stage 2 is a pass-through seed; company firmographics for Task 04 run through clay-forge skills. Effective stage order is frozen per campaign in state.sqlite (manifest_meta.effective_stages) by list_source."
  },
  "gates": [
    {
      "concern": "Free / cheap / paid tiers",
      "exists": "T1 Transform / T2 Research / T3 API; registry-first Supabase; lg_free Cloud Run enrichments",
      "paths": "CONTEXT.md, stages/enrichments/lg_free.py, enrichments/waterfall.py"
    },
    {
      "concern": "Spend controls",
      "exists": "Dry-run spend_guard.SPEND_STAGES; cost_gate vs contract.yaml ceiling; people-find gate; SamplingGate; campaign budget checkpoints",
      "paths": "stages/spend_guard.py, enrichments/cost_gate.py, people-find-gate.md, sampling_gate.py, gates.py"
    },
    {
      "concern": "Hard drops",
      "exists": "Security-gateway MX → blocked at 02.5 + 04c + launch backstop; company.md suppression; ICP disqualifiers",
      "paths": "mx_utils.py, domain_mx_prefilter.py, mx_filter.py, company template"
    },
    {
      "concern": "ICP",
      "exists": "Locked annealed prompt or DiscoLike validate; Clay clay_icp_score >= 70 fallback; firmographic ICP in company.md",
      "paths": "stages/icp_qualify.py, icp_prompt.py"
    },
    {
      "concern": "List send readiness",
      "exists": "list-quality-scorecard + ScorecardStage; company contact cap; grade F → confirm",
      "paths": "list-quality-scorecard/, stages/scorecard.py, stages/company_cap.py"
    },
    {
      "concern": "Launch",
      "exists": "Literal launch approved + Bison live verification",
      "paths": ".claude/rules/launch-gate.md"
    },
    {
      "concern": "Schemas in-repo",
      "exists": "Essentially schemas/bison-lead-upload.schema.json only",
      "paths": "schemas/"
    }
  ],
  "clay_handoffs_note": "Clay speed/build is owned by Clay Forge. Orchestrator facts: Task graph and skills call into clay-forge for firmographics, people find/escalation, employment verify, email waterfall fallback, and supabase-precheck (CAMPAIGNS.md tasks 04/08/09/10/11/12). Dead Clay CLI stages 02a/02b/02c were removed (root backlog.md Done: remove-clay-stages).",
  "upgrades": [
    {
      "id": "U-001",
      "priority": "P0",
      "covered": "partial",
      "where": "Client root `company.md` + `research/`/`intel/`/`campaigns/`; Nexus client-context; AGENTS.md rulebook at repo root",
      "gap": "No Context OS dirs (`context/`/`sources/`/`skills/`/`work/`/`releases/`); no per-account dossier timeline/provenance/conflicts; no pre-flight “must read context/sources” gate; scoring not formally blocked from writing dossiers (dossiers not an artifact)",
      "recommend": "ship first slice",
      "effort": "Scaffold one live client; migrate ICP/voice into `releases/`; dossier for 10 accounts; wire Orient pre-flight"
    },
    {
      "id": "U-002",
      "priority": "P0",
      "covered": "no",
      "where": "Claims flow through ICP CSV columns, signal packs, scorecard dimensions, copy variables — no shared EvidencePacket",
      "gap": "No quote-or-blank, source packet, visibility labels (`snapshot-proven`/`record-dated`/`assumed`), confirmed-vs-inferred, or dual death columns; `schemas/` has no EvidencePacket",
      "recommend": "ship first slice",
      "effort": "Add schema + eval on one buying-signal path; quarantine `assumed` from send queues"
    },
    {
      "id": "U-003",
      "priority": "P0",
      "covered": "partial",
      "where": "Registry-first Supabase; `lg_free` free floors; T1/T2/T3; enrichment-manager; cost receipts via cost accumulators",
      "gap": "No Crawford-style escalation ladder with **verdict packets as hard constraints** higher floors cannot un-know; no systematic free wire/DNS/parked→cheap→budgeted agent; no blind grade≥8.0 export gate on verify jobs",
      "recommend": "ship first slice",
      "effort": "Ladder module on one 150–500 row verify job; attach verdict packet + hold queue"
    },
    {
      "id": "U-004",
      "priority": "P0",
      "covered": "partial",
      "where": "MX gateway hard-kill; company.md suppression; ICP disqualifiers; scorecard hard blockers; row_conservation kept/rejected",
      "gap": "No reusable pre-LLM hard-kill **config schema** + **Suppressed audit tab** with killing rule; survivors→batched classify judges not a general pattern; tenure/anti-hopping deterministic rules not a shared engine",
      "recommend": "ship first slice",
      "effort": "Extract hard-kill config for one campaign type; log kills; judge only survivors; $ vs judge-all"
    },
    {
      "id": "U-005",
      "priority": "P0",
      "covered": "partial",
      "where": "`spend_guard` dry-run plans; `cost_gate` ceiling + operator_ack; people-find stated cost; SamplingGate cost projection; `gtm-orchestrator costs`/`estimate`; `gates.py` CROSS_CUTTING confirm types",
      "gap": "No ninth-grade **plain-plan** brief schema; no **arithmetic honesty** eval (`unit×volume≠total`); no tiered typed-amount confirms ($100/$1k/$10k); no route-split domain-sample cost calibrator as a first-class gate",
      "recommend": "ship first slice",
      "effort": "Wrap one enrichment agent with plain-plan + arithmetic + tiered confirm"
    },
    {
      "id": "U-006",
      "priority": "P0",
      "covered": "no",
      "where": "ICP = firmographic filters + locked LLM prompt (`company.md` / `icp-prompt-builder`); DiscoLike validate; Clay score fallback",
      "gap": "No win-loss-rewind, Phase 0 `data_confidence`, outcome-backed archetype rubrics, holdout lift, or visibility-proven tells as ICP SSOT; headcount/industry still primary discriminators in template",
      "recommend": "ship first slice",
      "effort": "One vertical: data_confidence.md + one archetype fit_score pilot into routing"
    },
    {
      "id": "U-007",
      "priority": "P1",
      "covered": "partial",
      "where": "`signal-bank/` hiring/PH/funding match; `trigger-workflows/signals/linkedin-jobs-signal.ts`, `hiring-processor.ts`; Apify/Harvest job skills; list_source `linkedin_jobs`",
      "gap": "No embeddings ranker over frozen+live ATS corpus with quote-or-blank; no JoJo→Crawford verified-people handoff as a productized stage; flip-rank call sheets not in orchestrator",
      "recommend": "ship first slice",
      "effort": "Dated corpus slice + ranker for one ICP; 10-company call sheet; reuse signal-bank ingest"
    },
    {
      "id": "U-008",
      "priority": "P1",
      "covered": "partial",
      "where": "`gtm-playbooks` = 19 **copy merge-field** recipes; `docs/source-scrapers.md` + workspace scrapers; `do-gtm-research`",
      "gap": "Not Jordan Blueprint (URL→ICP inference→public-record hunt→segment gates→permissionless gifts); no OSHA/EPA/… adapter set in orchestrator",
      "recommend": "defer / adapt",
      "effort": "Prefer extending source-scraper catalog + playbook field for one vertical adapter; don’t rebuild Blueprint as parallel product"
    },
    {
      "id": "U-009",
      "priority": "P1",
      "covered": "no",
      "where": "People-find uses title/seniority filters from brief (`people_search_defaults.yaml`); no owned-page title vocabulary cascade",
      "gap": "No domain→all pages→title vocab→title score→person score→orphan-page detector; buyer-rules packet schema not standard",
      "recommend": "ship first slice",
      "effort": "One enterprise account pilot; persist buyer-rules + packet in client pack"
    },
    {
      "id": "U-010",
      "priority": "P1",
      "covered": "partial",
      "where": "`scripts/tam/` free merge/triage; `lg_free`; web-scraper skill; email waterfall after people; dual gates partially via MV/waterfall",
      "gap": "No homepage triage buckets→deterministic mailto/CF XOR/JSON-LD harvest→dual name↔email gates as one TAM harvester path with $5 paid cap",
      "recommend": "ship first slice",
      "effort": "150–500 domain free pass + verify_names; hard-cap paid residue"
    },
    {
      "id": "U-011",
      "priority": "P1",
      "covered": "partial",
      "where": "`docs/source-scrapers.md` (12+ scrapers); `discover-maps` CLI; DiscoLike; TAM multi-source merge; signal-bank seed",
      "gap": "No phase-gated multi-lane discovery swarm with fixed scorecard (Coverage/Websites/Quality/Cost) + compelled-license adjacency as a skill",
      "recommend": "defer",
      "effort": "Document scorecard overlay on existing scrapers first; avoid new swarm framework"
    },
    {
      "id": "U-012",
      "priority": "P1",
      "covered": "no",
      "where": "Not found in repo scan as PDF triage / row-crop OCR / screen-recording attendee extractor",
      "gap": "No pypdf+$0 path or vision row-crop pipeline in orchestrator",
      "recommend": "defer",
      "effort": "Adjacent tooling; only if a live client list is PDF-bound"
    },
    {
      "id": "U-013",
      "priority": "P1",
      "covered": "partial",
      "where": "Task 10 `clay-forge:clay-verify-employment`; people-find waterfall; enrichment after find; last30days Exa backend",
      "gap": "No three-rung live-profile→re-hunt→adversarial skeptic ladder; no known-answer enrichment-filter probe fail-closed; no Exa people→Haiku validate as default",
      "recommend": "ship first slice",
      "effort": "Wire three-rung after one people pull; quarantine FPs"
    },
    {
      "id": "U-014",
      "priority": "P1",
      "covered": "partial",
      "where": "TechSight CLI (TOOLS.md) for site tech fingerprints; campaign-strategy mentions BuiltWith/Wappalyzer",
      "gap": "No fingerprint-first **confirmed-customer** install-base finder with binary confirmation artifacts vs inferred BuiltWith/G2/jobs bucket",
      "recommend": "defer",
      "effort": "Use TechSight for ICP filters; confirmed-install product is a separate ship if a client needs competitor install-base"
    },
    {
      "id": "U-015",
      "priority": "P1",
      "covered": "no",
      "where": "Channel hints in `company.md` `channels:`; gtm-playbooks warm-intro/social; not a market→rank→act channel census",
      "gap": "No concentric buyer picture→10–50 channel census→8-factor scorecard→Monday next-steps module",
      "recommend": "defer",
      "effort": "Strategy skill territory; low urgency vs send-quality P0s"
    },
    {
      "id": "U-016",
      "priority": "P2",
      "covered": "no",
      "where": "signal-bank funding seed / PH; no PE acquisition transaction-group scout with deal-status gates",
      "gap": "No PE monthly scout schema / ownership-graph routing",
      "recommend": "defer",
      "effort": "Signal-bank adjacent later"
    },
    {
      "id": "U-017",
      "priority": "P2",
      "covered": "no",
      "where": "Not found (influence-graph / I×I×R)",
      "gap": "No KOL scoring product in orchestrator",
      "recommend": "reject-adapt",
      "effort": "Keep out of core pipeline; optional research skill if a client asks"
    },
    {
      "id": "U-018",
      "priority": "P2",
      "covered": "no",
      "where": "Not found (referral notability)",
      "gap": "No owner-influence customer ranking",
      "recommend": "defer",
      "effort": "CRM-heavy; not cold-email core path"
    },
    {
      "id": "U-019",
      "priority": "P2",
      "covered": "partial",
      "where": "`linkedin-engagement-signal.ts`; last30days; competitor research in do-gtm-research",
      "gap": "No vision-on-attachments competitor watcher with hypothesis registry",
      "recommend": "defer",
      "effort": "Extend engagement signal; Clay Forge / Apify for media"
    },
    {
      "id": "U-020",
      "priority": "P2",
      "covered": "no",
      "where": "Research Process Builder / last30days / do-gtm-research (single-engine patterns)",
      "gap": "No triple deep-research fan-out + asymmetric claim synthesis with stable claim IDs",
      "recommend": "defer",
      "effort": "Expensive wall-clock; after evidence contracts (U-002)"
    },
    {
      "id": "U-021",
      "priority": "P2",
      "covered": "no",
      "where": "Reply scoring (`scoring/reply_classifier.py`, `score-replies`); cost attribution in state store — **not** Salesforce Campaign Influence",
      "gap": "No sourced-vs-influenced webinar attribution / call×search demand engine",
      "recommend": "reject-adapt",
      "effort": "Outside Bison+orchestrator charter unless a CRM client pack explicitly needs it"
    },
    {
      "id": "U-022",
      "priority": "P2",
      "covered": "no",
      "where": "Row conservation; company.md readiness; scorecard dimensions — not a pre-dossier math auditor",
      "gap": "No domains→joins→canonical revenue auditor + handshake file before account intel",
      "recommend": "defer",
      "effort": "Pair with U-001 dossier when dossiers exist"
    },
    {
      "id": "U-023",
      "priority": "P2",
      "covered": "partial",
      "where": "Copy QA / spintax-spam-check / rendered semantic QA; voice in company.md; voice-of-market skill",
      "gap": "No Editorial Frame 1–5 + twelve AI-tell patterns + transcript-conditioned rewriter as delivery boundary",
      "recommend": "defer",
      "effort": "Attach lint to Slack status path after copy QA anneal finishes (`backlog.md` reanneal item)"
    },
    {
      "id": "U-024",
      "priority": "P3",
      "covered": "partial",
      "where": "Pattern already embodied: MX prefilter→qualify→people→waterfall→enrich; SamplingGate; registry-first; TAM deterministic triage",
      "gap": "Not documented as reusable “cheap-gate cascade” template; parking-lot specifics N/A",
      "recommend": "defer",
      "effort": "Docs-only template first; apply to one signal class"
    },
    {
      "id": "U-025",
      "priority": "P3",
      "covered": "partial",
      "where": "DiscoLike bulk/geo-batch; discover-maps; full scrapers; AI Ark company search",
      "gap": "No flat-rate “enumerate every company” + 3-tab Sheet/Doc shortlist deliverable as standard pack",
      "recommend": "defer",
      "effort": "Reuse DiscoLike + Sheets mirror patterns from signal-bank"
    },
    {
      "id": "U-026",
      "priority": "P3",
      "covered": "no",
      "where": "People objects carry title/seniority; sales-motion 8-dim schema not in people model",
      "gap": "Demoted hiring surface — keep as optional people-schema fields only",
      "recommend": "reject-adapt",
      "effort": "Add fields only if outbound persona scoring needs them; do **not** ship AE hiring product"
    },
    {
      "id": "U-027",
      "priority": "P2",
      "covered": "partial",
      "where": "last30days Exa/Brave/Serper backends (`WEB_BACKEND_ORDER`); not Exa people mode-router",
      "gap": "No deep-reasoning vs deep/fast A/B for people-at-company; no staleness self-heal skill; no $/validated-contact meter as gate",
      "recommend": "defer",
      "effort": "Useful after U-013; encode gotchas in people-find skill config"
    },
    {
      "id": "U-028",
      "priority": "P1",
      "covered": "no",
      "where": "`company.md` is mutable SSOT; campaigns read current profile; Nexus deposits patterns",
      "gap": "No owned packages with proposed diffs / owner review / cut releases; no campaign pin `positioning@vN`; no `DEPENDS_ON` refresh flags",
      "recommend": "ship first slice",
      "effort": "Version positioning+voice for one client; pin one campaign; prove refresh flag"
    }
  ],
  "ship_next": [
    {
      "rank": 1,
      "id": "U-002",
      "why": "Zero evidence-contract implementation in schemas/ or stage evals — unsupported claims can still reach copy/send paths"
    },
    {
      "rank": 2,
      "id": "U-004",
      "why": "Hard drops exist only for MX/suppression fragments; missing reusable kill-log → judge-survivors cuts LLM spend on every list path"
    },
    {
      "rank": 3,
      "id": "U-003",
      "why": "Free floors (lg_free, registry-first) exist but agents can still re-derive / spend without verdict-packet constraints"
    },
    {
      "rank": 4,
      "id": "U-001",
      "why": "company.md is real SSOT but not multiplayer Context OS + dossier; agents lack mandatory context/sources pre-flight"
    },
    {
      "rank": 5,
      "id": "U-005",
      "why": "Spend tooling is strong on dry-run/ceiling/people-find; still missing plain-plan + arithmetic honesty that catch bad unit math"
    },
    {
      "rank": 6,
      "id": "U-006",
      "why": "ICP today is filters + annealed prompt — largest quality lever left, but needs outcome data; ship after evidence labels (U-002)"
    },
    {
      "rank": 7,
      "id": "U-028",
      "why": "Unlocks safe evolution of U-001 artifacts without silent drift across campaigns"
    },
    {
      "rank": 8,
      "id": "U-013",
      "why": "Employment verify exists via clay-forge; FP kill ladder is the missing orchestrator-side trust rung before waterfall spend"
    }
  ],
  "ship_next_note": "Explicitly not in ship-next: U-007…U-012, U-014…U-027 except as noted — either partial coverage via signal-bank/scrapers/TechSight, Clay-Forge-owned, demoted charter, or P2/P3 after P0 foundations.",
  "conflicts": [
    {
      "upgrade": "U-003 ladder",
      "existing": "T1/T2/T3 + lg_free + enrichment-manager + Supabase precheck",
      "handling": "Adapt — do not replace registry; add ladder + verdict bus on top"
    },
    {
      "upgrade": "U-005 spend honesty",
      "existing": "spend_guard, cost_gate, people-find gate, SamplingGate, gates.py",
      "handling": "Extend — add plain-plan + arithmetic; don’t fork a second budget system"
    },
    {
      "upgrade": "U-004 hard-kill",
      "existing": "mx_utils gateway drops, company.md suppression, scorecard hard gates",
      "handling": "Generalize into config+audit; keep gateway as one kill rule family"
    },
    {
      "upgrade": "U-001 Context OS",
      "existing": "company.md + research/ + Napoleon Orient lists",
      "handling": "Migrate layout; don’t create a second SSOT beside company.md"
    },
    {
      "upgrade": "U-007 job ranker",
      "existing": "signal-bank/, trigger-workflows/signals/*jobs*, linkedin_jobs list_source",
      "handling": "Compose — rank/quote layer on existing ingest, don’t new Signal Bank"
    },
    {
      "upgrade": "U-008 Blueprint",
      "existing": "gtm-playbooks (merge fields) + source-scrapers catalog",
      "handling": "Different products; Blueprint adapters ≠ Clay playbook fields"
    },
    {
      "upgrade": "U-010 TAM harvest",
      "existing": "scripts/tam/, scrapers, web-scraper, waterfall",
      "handling": "Overlap on free-first; harvest.py should call into tam/scraper outputs"
    },
    {
      "upgrade": "U-011 discovery swarm",
      "existing": "docs/source-scrapers.md, DiscoLike, discover-maps",
      "handling": "Swarm scorecard is meta; scrapers already exist"
    },
    {
      "upgrade": "U-014 install-base",
      "existing": "TechSight CLI",
      "handling": "TechSight ≠ confirmed-customer finder; don’t rename TechSight into U-014"
    },
    {
      "upgrade": "U-027 Exa router",
      "existing": "last30days Exa backend",
      "handling": "last30days is market research, not people-at-company mode-router"
    },
    {
      "upgrade": "U-021 attribution",
      "existing": "score-replies / cost attribution",
      "handling": "Different problem (reply class vs Salesforce influence)"
    },
    {
      "upgrade": "Clay stages",
      "existing": "Removed 02a/02b/02c; clay-forge now",
      "handling": "Any upgrade that rebuilds Clay in Python stages conflicts with Done remove-clay-stages"
    }
  ],
  "do_not_build": [
    "Brief → Bison stage machine — 01-discover…09-launch in constants.py / CAMPAIGNS.md",
    "Launch gate — .claude/rules/launch-gate.md + Task 15 confirm",
    "People-find authorization gate — .claude/rules/people-find-gate.md + paid_people_plan checkpoint",
    "Dry-run spend refusal + per-stage spend plans — stages/spend_guard.py",
    "Contract spend ceiling + operator_ack — enrichments/cost_gate.py",
    "List quality scorecard + grade F block + company contact cap",
    "Security-gateway MX hard drop — mx_utils.py / 02.5 / 04c / launch backstop",
    "Registry-first Supabase pre-check + fail-open persistence",
    "Email waterfall + MV verification path — 04b-waterfall",
    "ICP prompt lock / anneal library path — icp-prompt-builder, company.md icp_qualification_prompt",
    "Napoleon coordinator + agent roster + tasks-axi campaign backlog",
    "Clay firmographics / people / employment / email fallback — clay-forge skills (do not re-add Python Clay stages)",
    "Hiring/engagement signal processors — trigger-workflows/signals/",
    "Source scraper catalog + DiscoLike discover + Maps discover CLI",
    "Free company enrichment service — stages/enrichments/lg_free.py",
    "2-email D15 Bison sequence standard + Outlook variant rules",
    "Per-lead cost attribution store — state.sqlite cost accumulators / costs CLI"
  ],
  "slow_steps": [
    "Operator checkpoint fan-out (exit 5) — enrichment selection, MX split, people_plan, personalize approval, QA findings, scorecard D/F, launch confirmation, budget exceeded. Campaigns stop for human edits; --yolo still cannot auto-resolve launch or scorecard F.",
    "15-task bootstrap not exercised on a live campaign — target contract built/tested but zero .campaign.yaml / zero 01-strategy task IDs under clients as of doc date; live runs still stage/state.sqlite-driven. Dual mental models slow ops.",
    "09-launch never observed live through this pipeline — stage_09_launch has zero rows in sampled campaigns; launch path still manual/Bison-skill heavy.",
    "ICP prompt anneal / lock — icp-prompt-builder multi-round convergence + agreement-rate gate before Task 06; non-deterministic model rounds.",
    "03-qualify LLM / DiscoLike / Clay fallback triad — path depends on brief meta; LLM qualify is token-variable; Clay threshold >= 70 is a blunt fallback.",
    "07b-personalize SamplingGate → full fan-out — sample quality then commit budget; quality grades are model-dependent.",
    "People-find multi-hop — orchestrator stages wait on QE → Clay → AI Ark; orchestrator cannot make Clay faster — it only sequences and gates spend.",
    "Large DiscoLike discovers — geo-batch when max_records large; multi-call cost and resume complexity.",
    "Signal-first without CSV — checkpoints for missing signal_csv_path rather than auto-building.",
    "Open backlog friction — e.g. TAM budget ceiling not hard-enforced in code, QuickEnrich env/preflight issues make list-build retries non-deterministic in practice."
  ],
  "method": [
    "Auth: GitHub MCP user-Github ready; gh repo clone succeeded. Code Search API returned empty/incomplete_results for this private repo — analysis used clone + ripgrep + get_file_contents/gh api contents, not search hits.",
    "Invented features: None claimed. Items marked no = not found in repo scan of listed paths.",
    "Live client data: Repo tracks stub clients/gtm-client-desmond only; production packs are external symlink — pack layout conclusions use template + CAMPAIGNS.md + that stub."
  ]
};
