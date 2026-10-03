# iGEM Bioreactor Landscape, 2015–2026

A competitive audit of thirty iGEM bioreactor and fermentation-hardware projects across high
school, undergraduate and overgraduate sections, compared on one spec sheet with device
photographs, an interactive positioning map and a five-tier ranking.

**Live page:** https://timmy97-tw.github.io/igem-bioreactor-landscape/

Built by GEMS-Taiwan 2026 (project ReLeaf) while preparing a Hardware special-award nomination.
Bilingual English / 繁體中文, white ground, no build step, no external requests.

## What is in it

| Section | Contents |
|---|---|
| 01 Rulebooks | The Biomanufacturing village description and the four Hardware aspects, verbatim |
| 02 The map | Interactive scatter: engineering depth against published evidence |
| 03 Metrics | Fourteen specifications that define a bioreactor project |
| 04 Devices | Photograph and design drawing for each project, each opening full-window |
| 05 Head to head | Pick any two projects, compare on the four aspects |
| 06 Spec sheet | Full horizontal comparison, filterable |
| 07 Tiers | The ranking ladder and who stands on each rung |
| 08 The system | Where the reactor sits in the ReLeaf chain, and who else here is a system |
| 09 ReLeaf | Dated results on record, the recomputed operating point, and what keeps us off tier 1 |
| 10 Lineage | Three eras, and the three times one team picked up another's hardware |
| 11 Village | The 2026 Biomanufacturing roster |

## The 3 October 2026 pass

**Thirteen projects added**, taking the set from seventeen to thirty: Evry 2016, NAWI Graz 2017,
Harvard 2017, NCKU Tainan 2018, NUS Singapore-A 2018, Calgary 2020, Concordia-Montreal 2020,
Botchan Lab Tokyo 2020, KU Leuven 2021, RUM-UPRM 2022, IISER-Pune-India 2023, ASU 2024 and
OUC-China 2025. Each was read off its own team wiki.

Four claims the earlier version made did not survive the larger set:

- **"Optogenetic light inside the vessel: 2 of 17."** It is 4 of 30, and we are not the first.
  NUS Singapore-A 2018 closed a light loop on a reading of the culture, which ReLeaf has not done.
- **"The only independent reproduction of an iGEM bioreactor."** There are three handovers:
  Aachen 2015 → NAWI Graz 2017 (sensor and firmware), Humboldt Berlin 2019 → Madrid UCM 2021
  (full rebuild), NCKU Tainan 2018 → Botchan Lab Tokyo 2020 (extension).
- **"Perfusion with cell retention: 1 of 17."** KU Leuven's 2021 CellED names the same mode and an
  external retention device. It was never built, and the page says so.
- **"We have the price list; it is not on a public page yet."** It is now, and at about US$961 it is
  the highest of the eight published figures in the set.

**ReLeaf's own row was rebuilt** against the team's Level-1 modelling handoff of 2 September 2026.
The earlier version took its numbers from `Bioreactor_Invariant_Explorer.html`, which is wrong in
four places, all corrected here: the membrane is 0.2 µm microfiltration and not a 50 kDa cut-off;
the recirculation pump is rated 230–2600 mL/min, so the 94 mL/min figure was below anything it can
deliver; the 37 °C growth refit gives µ_max 1.31 h⁻¹ logistic or 0.92 h⁻¹ log-linear, not 0.48 h⁻¹;
and the chemostat washout criterion D_r < µ_max does not apply to a cell-retaining device, so it was
removed rather than restated. ReLeaf's aspect-3 score drops from 2 to 1 as a result, because no
measured number on the page is set against a stated requirement.

## Sources

Every figure was read off a team wiki, the iGEM team API (`api.igem.org/v1`), or the
2026 iGEM Judge Handbook. Where a team published no number, the cell is blank rather than
estimated. Full source list is in the page footer.

The legacy `igem.org` wikis (2021 and earlier) returned HTTP 504 on 3 October 2026, so their text
was read through the Internet Archive. Their images were served normally from `static.igem.org`.

ReLeaf's figures come from `ReLeaf_Level1_ACCD_Modeling_Handoff.md` (2 September 2026) and the
hardware record on the project wiki.

## Image licence

Team images are reproduced under the Creative Commons Attribution 4.0 International licence
that iGEM team wikis carry. Each is credited to its team and year in the gallery caption and
linked to its source page. See `CREDITS.md` for the file-by-file list.

Photographs of GEMS-Taiwan hardware are the team's own.

Two projects published no image of a device at all — Düsseldorf 2020 and Concordia-Montreal 2020 —
and the gallery shows the gap rather than filling it.

## Corrections

If you are on one of these teams and a figure here is wrong or a photo should not be used,
open an issue and it will be fixed or removed.
