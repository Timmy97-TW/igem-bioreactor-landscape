# iGEM Bioreactor Landscape, 2015–2026

A competitive audit of iGEM bioreactor and fermentation hardware, compared on one spec sheet with device
photographs, an interactive positioning map and a five-tier ranking — plus a companion page setting the same
device against the commercial bioreactor industry.

**Live:** https://timmy97-tw.github.io/igem-bioreactor-landscape/
**Industry standing:** https://timmy97-tw.github.io/igem-bioreactor-landscape/industry.html

Built by GEMS-Taiwan 2026 (project ReLEAF) while preparing a Hardware special-award nomination.
Bilingual English / 繁體中文, white ground, no build step, no external requests.

## What is in it

### `index.html` — the iGEM audit

| Section | Contents |
|---|---|
| 00 What is actually ours | Every claim ReLEAF makes, counted against the thirty projects, with what each one does *not* support |
| 01 Rulebooks | The Biomanufacturing village description and the four Hardware aspects, verbatim |
| 02 The map | Interactive scatter: engineering depth against published evidence |
| 03 Metrics | Fourteen specifications that define a bioreactor project |
| 04 Devices | Photograph and design drawing for each project, each opening full-window |
| 05 Head to head | Pick any two projects, compare on the four aspects |
| 06 Spec sheet | Full horizontal comparison, filterable |
| 07 Tiers | The ranking ladder and who stands on each rung |
| 08 The system | Where the reactor sits in the ReLEAF chain, and who else here is a system |
| 09 ReLEAF | Seven dated runs, the recomputed operating point, and what keeps us off tier 1 |
| 10 Lineage | Three eras, and the three times one team picked up another's hardware |
| 11 Village | All fifty-eight 2026 Biomanufacturing teams, opened one by one |

### `industry.html` — the industry standing

Perfusion adoption and where the industry is heading · the five cell-retention technologies and the published
weakness of the one we chose · membrane area at two orders of magnitude · cost per litre of working volume ·
a fourteen-axis comparison against commercial systems · what ASTM F838-20 and Directive 2009/41/EC actually
cover · on-farm production as it already exists in Brazil · and which current trend this device is an
instance of.

### `assets/`

`app.css` and `app.js` are shared by both pages. There is no build step: open `index.html` and it runs.

## The 30 October 2026 pass

**The 2026 village was read team by team.** All fifty-eight registered Biomanufacturing teams had their wikis
opened on 30 October 2026 and were asked one question: is there a cultivation vessel here, and was it built?
Six other teams built one — AshesiGhana, ASIJ-Tokyo, Mingdao, ULethbridge, UESTC-China and SDU-Denmark —
two drew one, eight have no published wiki at all, and the remaining forty-two have no cultivation hardware.
No other team in the village uses a membrane to retain cells, names perfusion as its operating mode, or puts
light inside a vessel. Two have an in-line biomass reading, and ULethbridge closes a loop on it, which ReLEAF
does not.

**ReLEAF's own row was rebuilt from the team's frozen wiki, line by line**, because the modelling handoff the
3 October rebuild relied on no longer exists on disk. That changed real numbers, and the changes do not all
flatter us:

- The membrane is **200 cm² with 11 fibres**, not 150 cm² with 8 — though the team's own page uses both.
- The fouling margin is **J/J_crit = 0.04**, not 0.26, computed against a design flux of 2 LMH — but runs 5, 6
  and 7 drew 36 to 72 LMH, at or above the device's own critical flux of 46. The margin describes an operating
  point the reactor has never run at, and the page now says so.
- **µ_max 1.31 h⁻¹ has been removed.** It appears nowhere on the live wiki and its source file is gone. What
  the wiki does publish is a growth rate of 0.286 ± 0.010 h⁻¹ on run 6, inside an interval registered before
  the run.
- The cost is **US$1,022.67** on the bioreactor page's own list. The Contribution page gives NT$16,450 in parts
  and NT$30,450 with the reference spectrophotometer; none of the three includes the controller, its mainboard,
  the dosing pump or the stir bar.
- There are **seven runs, not three**, and **two leaks, not one**.
- **The green light is not in the reactor at all.** The specification lists an LED strip; the team's software
  page states it is not built into the bioreactor, and no induction curve exists anywhere.

**The duplicate claim list was retired.** Section 10 used to repeat the "firsts" that section 00 now carries.
One list, so the two cannot drift apart — which is the failure mode this audit exists to catch.

## Earlier passes

**3 October 2026 — seventeen projects to thirty.** Thirteen added: Evry 2016, NAWI Graz 2017, Harvard 2017,
NCKU Tainan 2018, NUS Singapore-A 2018, Calgary 2020, Concordia-Montreal 2020, Botchan Lab Tokyo 2020,
KU Leuven 2021, RUM-UPRM 2022, IISER-Pune-India 2023, ASU 2024 and OUC-China 2025. Four claims did not survive
the larger set: we are not first to put optogenetic light in a vessel (four teams did, three before us), there
are three hardware handovers between iGEM teams rather than one, KU Leuven named perfusion with cell retention
in 2021, and our published cost is the highest of the eight on record.

## Sources

Every figure was read off a team wiki, the iGEM team API (`api.igem.org/v1`), or the 2026 iGEM Judge Handbook.
Where a team published no number, the cell is blank rather than estimated. Full source list is in each page's
footer. The legacy `igem.org` wikis (2021 and earlier) returned HTTP 504, so their text was read through the
Internet Archive; their images were served normally from `static.igem.org`.

ReLEAF's figures come from the team's own wiki at `2026.igem.wiki/gems-taiwan`, frozen 21 October 2026.
Where that wiki contradicts itself — and it does, in sixteen places — both figures are printed.

## Image licence

Team images are reproduced under the Creative Commons Attribution 4.0 International licence that iGEM team
wikis carry. Each is credited to its team and year in the gallery caption and linked to its source page. See
`CREDITS.md` for the file-by-file list. Photographs and renders of GEMS-Taiwan hardware are the team's own.

Two projects published no image of a device at all — Düsseldorf 2020 and Concordia-Montreal 2020 — and the
gallery shows the gap rather than filling it.

## Corrections

If you are on one of these teams and a figure here is wrong or a photo should not be used, open an issue and it
will be fixed or removed. That applies to the 2026 teams too: these verdicts were reached by reading a wiki on
one day, and several of those wikis are JavaScript applications whose content had to be read out of their
script bundles.
