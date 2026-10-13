window.PUBLICATIONS = [
  {
    id: "3dvql", year: 2026, selected: true, type: "conference", venue: "CVPR 2026", topic: "3D visual query localization",
    title: "Towards Visual Query Localization in the 3D World",
    authors: ["Liang Peng", "Bohan Tan", "Zhipeng Zhang", "Haobo Li", "Yifan Jiao", "Xingping Dong", "Libo Zhang"],
    equal: ["Liang Peng", "Bohan Tan"],
    corresponding: { "Xingping Dong": "First corresponding author", "Zhipeng Zhang": "Second corresponding author" },
    description: "A multimodal benchmark and Lift-and-Fusion baseline for localizing visual queries across RGB, depth, and point-cloud sequences.",
    image: "assets/3dvql.webp", imageSize: [640, 240], alt: "Animated RGB, depth, and point-cloud localization results from 3DVQL",
    paper: "https://arxiv.org/abs/2605.01498", project: "https://wuhengliangliang.github.io/3DVQL/", code: "https://github.com/wuhengliangliang/3DVQL",
    bibtex: "@inproceedings{peng2026towards,\n  title={Towards Visual Query Localization in the 3D World},\n  author={Peng, Liang and Tan, Bohan and Zhang, Zhipeng and Li, Haobo and Jiao, Yifan and Dong, Xingping and Zhang, Libo},\n  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n  pages={41406--41415},\n  year={2026}\n}"
  },
  {
    id: "pcrp", year: 2026, selected: true, type: "conference", venue: "MICCAI 2026", venueClass: "miccai", topic: "Pathology grounding",
    title: "PCRP: Progressive Coarse-to-Fine Refinement for Pathology Grounding",
    authors: ["Liang Peng", "Chenxiao Li", "Shaohua Dong", "Bohan Tan", "Zhipeng Zhang", "Xingping Dong"],
    equal: ["Liang Peng", "Chenxiao Li"],
    corresponding: { "Xingping Dong": "Corresponding author" },
    description: "Progressive visual-word alignment and boundary-aware refinement for grounding medical descriptions in histopathology images.",
    image: "assets/pcrp-cover.webp", imageSize: [1600, 898], alt: "PCRP model architecture with visual-word fusion and coarse-to-fine boundary-aware refinement",
    paper: "https://papers.miccai.org/miccai-2026/0762-Paper4084.html",
    bibtex: "@inproceedings{peng2026pcrp,\n  title={PCRP: Progressive Coarse-to-Fine Refinement for Pathology Grounding},\n  author={Peng, Liang and Li, Chenxiao and Dong, Shaohua and Tan, Bohan and Zhang, Zhipeng and Dong, Xingping},\n  booktitle={Medical Image Computing and Computer Assisted Intervention -- MICCAI 2026},\n  publisher={Springer Nature Switzerland},\n  year={2026}\n}"
  },
  {
    id: "resot", year: 2026, type: "preprint", venue: "arXiv 2026", topic: "Vision-language model reliability",
    title: "From Suppression to Repair: Mitigating Object Hallucination in Large Vision-Language Models via Localized Distribution Alignment",
    authors: ["Chen Zhao", "Xingping Dong", "Jiachun Shi", "Liang Peng", "Chong Wang", "Zhen Lei", "Ran He", "Bo Du"],
    equal: [],
    corresponding: {},
    description: "ResOT repairs hidden representations with localized optimal transport to reduce object hallucination in vision-language models without retraining.",
    image: "assets/resot-model.png", imageSize: [1327, 457], alt: "ResOT overview: paired calibration, residual subspace construction, Gaussian optimal transport, and adaptive representation repair at inference",
    paper: "https://arxiv.org/abs/2610.11826",
    bibtex: "@article{zhao2026suppression,\n  title={From Suppression to Repair: Mitigating Object Hallucination in Large Vision-Language Models via Localized Distribution Alignment},\n  author={Zhao, Chen and Dong, Xingping and Shi, Jiachun and Peng, Liang and Wang, Chong and Lei, Zhen and He, Ran and Du, Bo},\n  journal={arXiv preprint arXiv:2610.11826},\n  year={2026}\n}"
  },
  {
    id: "pgl3d", year: 2026, type: "preprint", venue: "arXiv 2026", topic: "3D geometric learning",
    title: "PGL-3D: Towards Progressive Geometric Learning for 3D Visual Query Localization",
    authors: ["Liang Peng", "Shizhuo Mu", "Bohan Tan", "Wenyuan Wang", "Chen Zhao", "Xingping Dong", "Heng Fan", "Libo Zhang", "Bo Du"],
    equal: ["Liang Peng", "Shizhuo Mu"],
    corresponding: { "Xingping Dong": "Corresponding author" },
    description: "Progressively refine 3D query localization by using predicted geometry to update and improve visual features.",
    image: "assets/pgl3d-cover.webp", imageSize: [533, 369], alt: "Three PGL-3D qualitative examples showing paired RGB and point-cloud localization results",
    paper: "https://arxiv.org/abs/2609.33558",
    bibtex: "@article{peng2026pgl3d,\n  title={PGL-3D: Towards Progressive Geometric Learning for 3D Visual Query Localization},\n  author={Peng, Liang and Mu, Shizhuo and Tan, Bohan and Wang, Wenyuan and Zhao, Chen and Dong, Xingping and Fan, Heng and Zhang, Libo and Du, Bo},\n  journal={arXiv preprint arXiv:2609.33558},\n  year={2026}\n}"
  },
  {
    id: "looptrack", year: 2026, type: "preprint", venue: "arXiv 2026", topic: "Efficient visual tracking",
    title: "LoopTrack: A Simple Baseline for Parameter-Efficient Transformer Tracking",
    authors: ["Liang Peng", "Chenxiao Li", "Libo Zhang", "Xingping Dong", "Heng Fan"],
    equal: ["Liang Peng", "Chenxiao Li"],
    corresponding: { "Xingping Dong": "Primary corresponding author", "Heng Fan": "Secondary corresponding author" },
    description: "Reuse shared Transformer blocks through target-aware loops and gated memory for parameter-efficient object tracking.",
    image: "assets/looptrack.webp", imageSize: [685, 277], alt: "LoopTrack architecture with recurrent Transformer loops and target memory",
    paper: "https://arxiv.org/abs/2609.33306",
    bibtex: "@article{peng2026looptrack,\n  title={LoopTrack: A Simple Baseline for Parameter-Efficient Transformer Tracking},\n  author={Peng, Liang and Li, Chenxiao and Zhang, Libo and Dong, Xingping and Fan, Heng},\n  journal={arXiv preprint arXiv:2609.33306},\n  year={2026}\n}"
  },
  {
    id: "vastmat", year: 2026, type: "preprint", venue: "arXiv 2026", topic: "Multi-object tracking",
    title: "VastMAT: A Large-Scale Multi-Category Benchmark for Multi-Animal Tracking",
    authors: ["Zhizhen Li", "Zan Wang", "Huidong Peng", "Bohan Tan", "Shimin Shan", "Yu Liu", "Liang Peng"],
    equal: ["Zhizhen Li", "Zan Wang", "Huidong Peng", "Bohan Tan"],
    corresponding: { "Liang Peng": "Corresponding author" },
    description: "A diverse multi-animal tracking benchmark covering 337 categories, with evaluation on both seen and unseen species.",
    image: "assets/vastmat.webp", imageSize: [900, 509], alt: "Diverse scenes and annotated animal categories in the VastMAT benchmark",
    paper: "https://arxiv.org/abs/2609.34390",
    bibtex: "@article{li2026vastmat,\n  title={VastMAT: A Large-Scale Multi-Category Benchmark for Multi-Animal Tracking},\n  author={Li, Zhizhen and Wang, Zan and Peng, Huidong and Tan, Bohan and Shan, Shimin and Liu, Yu and Peng, Liang},\n  journal={arXiv preprint arXiv:2609.34390},\n  year={2026}\n}"
  },
  {
    id: "vasttrack", year: 2024, selected: true, type: "conference", venue: "NeurIPS 2024", venueClass: "neurips", topic: "Visual tracking benchmark",
    title: "VastTrack: Vast Category Visual Object Tracking",
    authors: ["Liang Peng", "Junyuan Gao", "Xinran Liu", "Weihong Li", "Shaohua Dong", "Zhipeng Zhang", "Heng Fan", "Libo Zhang"],
    equal: ["Liang Peng", "Junyuan Gao", "Xinran Liu", "Weihong Li", "Shaohua Dong"],
    corresponding: { "Libo Zhang": "Corresponding author" },
    advising: ["Heng Fan", "Libo Zhang"],
    description: "Scaling visual tracking to 2,115 object categories and 50,610 video sequences, with rich language annotations.",
    image: "assets/vasttrack-cover.webp", imageSize: [449, 300], alt: "VastTrack benchmark title and representative annotated tracking scenes",
    paper: "https://arxiv.org/abs/2403.03493", code: "https://github.com/HengLan/VastTrack",
    bibtex: "@inproceedings{peng2024vasttrack,\n  title={VastTrack: Vast Category Visual Object Tracking},\n  author={Peng, Liang and Gao, Junyuan and Liu, Xinran and Li, Weihong and Dong, Shaohua and Zhang, Zhipeng and Fan, Heng and Zhang, Libo},\n  booktitle={Advances in Neural Information Processing Systems},\n  volume={37},\n  pages={130797--130818},\n  year={2024}\n}"
  }
];
