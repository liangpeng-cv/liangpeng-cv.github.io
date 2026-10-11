# Liang Peng - Academic Homepage

Standalone static website. Open `index.html` directly to preview, or serve this
folder with `python -m http.server 8004 --bind 127.0.0.1`.

## Editing

- `index.html`: biography, profile links, all six publications, news starting
  with NeurIPS 2024, education, research experience, selected honors, and service.
- `publications.html`: compatibility redirect to the homepage, preserving paper anchors.
- `publications.js`: publication metadata, links, summaries, and BibTeX.
- `style.css`: responsive layout and colors.
- `assets/`: locally stored profile photograph and paper images.

The homepage follows the compact single-page structure of https://tsungyilin.info/.
All six papers are visible in a continuous illustrated list immediately after
the biography. BibTeX expands inline and can be copied. Links open the original
paper or project. Existing publication-page links redirect to the same paper
on the homepage. No UI framework, external fonts, or analytics are required.

## Verified Content

Profile: https://scholar.google.com/citations?user=aE4vzZoAAAAJ&hl=en

- Identity currently shown: Liang Peng, Ph.D. student, School of Computer
  Science, Wuhan University. The school name matches the paper affiliations.
- The biography's research areas are summarized from the listed publications.
- Each publication includes its original paper figure and a short research summary.
- Academic Service is based on the owner's statement: reviewer for CVPR,
  NeurIPS, ICLR, Pattern Recognition (PR), and IEEE TPAMI. No service years,
  reviewing awards, editor, or area-chair roles are inferred.
- The current photograph is the public Google Scholar profile photo (125 x 128).
- The email `pengliang@whu.edu.cn` and advising by Xingping Dong and Libo Zhang
  were supplied by the owner. Heng Fan is omitted from the biography at the
  owner's request; published coauthorship and paper-specific author roles remain.
- Education, the Peng Cheng Laboratory internship, and selected honors are based on the owner's supplied
  resume. Doctoral dates (2025-2029) were supplied separately; 2029 is explicitly
  marked as expected. The master's specialization and exact degree types are
  not inferred. The ISCAS master's affiliation denotes joint training, not a
  second degree.
- The separate 2020-2023 ISCAS internship is omitted at the owner's request.
- The original resume is not included or linked. Personal phone numbers, age,
  ethnicity, hometown, alternate email, grades, and self-evaluations are omitted.
  Only three relevant honors are selected; the page is not a complete CV.
- Citation metrics are intentionally linked to Scholar rather than cached.
- The 2026 arXiv papers are labeled preprints, not accepted conference papers.
- PCRP's venue is from the MICCAI official paper page. Its linked code repository
  was not publicly accessible during preparation, so no Code link is displayed.
- PCRP uses the owner's original model diagram from the poster materials.
- PGL-3D uses the paper's RGB and point-cloud qualitative results as its cover.
- The 2023 radar paper is omitted at the owner's request. Six papers are shown.
- Author roles were checked against the PDF title pages. The homepage uses a
  consistent legend: `*` equal contribution / co-first author, dagger corresponding
  author, double dagger equal advising. Hover labels retain primary/secondary
  corresponding-author distinctions from the source papers.

## Sources

- Xingping Dong: https://xingpingdong.github.io/ and the Wuhan University
  faculty profile, https://jszy.whu.edu.cn/dongxingping/zh_CN/index.htm.
  Current title: Professor, School of Computer Science, Wuhan University.
- Libo Zhang: https://people.ucas.ac.cn/~zhanglibo.
  Current Chinese title is researcher at full research rank, rendered here as
  Research Professor, Institute of Software, Chinese Academy of Sciences.
  The older ISCAS center page still lists an associate title; the current UCAS
  profile is used. The English title is a translation, not a verbatim quotation.
- Mentor title/affiliation sources checked on 2026-10-07; mentorship itself is
  owner-provided information, not inferred from coauthorship.
- Official English institution names for the education and experience sections:
  https://english.yangtzeu.edu.cn/info/1003/1001.htm,
  https://www.fynu.edu.cn/xxgk/xxjj_yw_.htm,
  https://www.pcl.ac.cn/html/943/2023-06-04/content-4236.html,
  and https://english.is.cas.cn/au/.
- 3DVQL: https://arxiv.org/abs/2605.01498
- PCRP: https://papers.miccai.org/miccai-2026/0762-Paper4084.html
- PGL-3D: https://arxiv.org/abs/2609.33558
- LoopTrack: https://arxiv.org/abs/2609.33306
- VastMAT: https://arxiv.org/abs/2609.34390
- VastTrack: https://arxiv.org/abs/2403.03493

Paper figures come from the corresponding arXiv HTML versions. The 3DVQL
animation is from the owner's existing project-page assets. PCRP's model diagram
comes from the owner's original poster materials.
PGL-3D's qualitative figure source is
https://arxiv.org/html/2609.33558v2/gst9d_qualitative_vis.png.

The revised design follows https://tsungyilin.info/: a narrow white page,
small sans-serif text, blue text links, a compact biography with a photograph,
and a continuous image/text publication list. Images use intrinsic aspect
ratios without borders or padded fixed-height frames.
PGL-3D's thumbnail selects three complete RGB/point-cloud examples from the first
time step; the original complete comparison image is retained in assets.
VastTrack uses a landscape crop centered on the benchmark title. PCRP retains
the entire model diagram with only its outer white edge trimmed. The 3DVQL
animation is unchanged. Regenerate crops using `work/update-personal-covers.py`
from the workspace root. No template code, tracking, or analytics copied.

## Author Role Sources

- 3DVQL: local paper page 1 and https://arxiv.org/pdf/2605.01498.
  Equal: Liang Peng, Bohan Tan. First corresponding: Xingping Dong.
  Second corresponding: Zhipeng Zhang.
- PCRP: https://papers.miccai.org/miccai-2026/paper/4084_paper.pdf, page 1.
  Equal: Liang Peng, Chenxiao Li. Corresponding: Xingping Dong.
- PGL-3D: https://arxiv.org/pdf/2609.33558, v2, page 1.
  Equal: Liang Peng, Shizhuo Mu. Corresponding: Xingping Dong.
- LoopTrack: https://arxiv.org/pdf/2609.33306, page 1.
  Equal: Liang Peng, Chenxiao Li. Primary corresponding: Xingping Dong.
  Secondary corresponding: Heng Fan.
- VastMAT: https://arxiv.org/pdf/2609.34390, v2, page 1.
  Equal: Zhizhen Li, Zan Wang, Huidong Peng, Bohan Tan.
  Corresponding: Liang Peng.
- VastTrack: https://arxiv.org/pdf/2403.03493, page 1.
  Co-first: Liang Peng, Junyuan Gao, Xinran Liu, Weihong Li, Shaohua Dong.
  Equal advising: Heng Fan, Libo Zhang. Corresponding: Libo Zhang.
  Original marks are star, dagger, and sharp respectively; these are normalized
  to the shared site legend without conflating advising with correspondence.

## Deployment

Target repository: `liangpeng-cv/liangpeng-cv.github.io`.
Target address: `https://liangpeng-cv.github.io/`.
Publish these files from the repository root and retain `.nojekyll`.
The existing 3DVQL site remains at `https://wuhengliangliang.github.io/3DVQL/`.
GitHub Pages serves the `main` branch from the repository root. To update the
site, edit the corresponding website files, commit, and push to `main`.

Canonical URLs, Open Graph metadata, Person/WebSite structured data, robots.txt,
and sitemap.xml use the target domain. Search-engine indexing is not automatic
or guaranteed by deployment. No analytics or tracking scripts are included.
