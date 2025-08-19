document.getElementById('year').textContent = new Date().getFullYear();

// Avatar upload
const avatarInput = document.getElementById('avatarInput');
const avatarImg = document.getElementById('avatarImg');
if (avatarInput) {
    avatarInput.addEventListener('change', (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            avatarImg.src = ev.target.result;
            avatarImg.style.display = 'block';
            const fb = avatarImg.nextElementSibling;
            if (fb) fb.style.display = 'none';
        };
        reader.readAsDataURL(f);
    });
}


const publications = [
    {
        id: 'rahman2025advancing',
        type: 'journal', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 8.4', accepted: 'Thu, Sep 26, 2024',
        title: 'Advancing skin cancer detection integrating a novel unsupervised classification and enhanced imaging techniques',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Fahad, N. M.; Raiaan, M. A. K.; Jonkman, M.; De Boer, F.; Azam, S.',
        venue: 'CAAI Transactions on Intelligence Technology',
        doi: 'https://doi.org/10.1049/cit2.12410',
        pdf: 'https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/cit2.12410',
        ga: 'graphical_abstract/rahman2025advancing.png',
        abstract: 'Skin cancer, a severe health threat, can spread rapidly if undetected. Therefore, early detection can lead to an advanced and efficient diagnosis, thus reducing mortality. Unsupervised classification techniques analyse extensive skin image datasets, identifying patterns and anomalies without prior labelling, facilitating early detection and effective diagnosis and potentially saving lives. In this study, the authors aim to explore the potential of unsupervised learning methods in classifying different types of skin lesions in dermatoscopic images. The authors aim to bridge the gap in dermatological research by introducing innovative techniques that enhance image quality and improve feature extraction. To achieve this, enhanced super-resolution generative adversarial networks (ESRGAN) was fine-tuned to strengthen the resolution of skin lesion images, making critical features more visible. The authors extracted histogram features to capture essential colour characteristics and used the Davies–Bouldin index and silhouette score to determine optimal clusters. Fine-tuned k-means clustering with Euclidean distance in the histogram feature space achieved 87.77% and 90.5% test accuracies on the ISIC2019 and HAM10000 datasets, respectively. The unsupervised approach effectively categorises skin lesions, indicating that unsupervised learning can significantly advance dermatology by enabling early detection and classification without extensive manual annotation.',
        bibtex: `@article{rahman2025advancing,
  title={Advancing skin cancer detection integrating a novel unsupervised classification and enhanced imaging techniques},
  author={Rahman, Md Abdur and Fahad, Nur Mohammad and Raiaan, Mohaimenul Azam Khan and Jonkman, Mirjam and De Boer, Friso and Azam, Sami},
  journal={CAAI Transactions on Intelligence Technology},
  volume={10},
  number={2},
  pages={474--493},
  year={2025},
  publisher={Wiley Online Library}
}`
    },
    {
        id: 'rahman2025ufoil',
        type: 'journal', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 3.6', accepted: 'Wed, Feb 12, 2025',
        title: 'uFOIL: An Unsupervised Fusion of Image Processing and Language Understanding',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Hasan, M. T.; Howlader, U. F.; Kader, M. A.; Islam, M. M.; Pham, P. H.; Hassan, M. M.',
        venue: 'IEEE Access',
        doi: 'https://doi.org/10.1109/ACCESS.2025.3542417',
        pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10890958',
        ga: 'graphical_abstract/rahman2025ufoil.png',
        abstract: 'In academic institutions, processing and evaluating documents such as exam scripts remains a labor-intensive process susceptible to human error. Traditional digitization systems face significant challenges in handling the complexities of mixed handwritten and printed text and varying document structures. These challenges are exacerbated by the absence of annotated datasets due to privacy concerns, particularly in contexts involving sensitive exam evaluations. To address these issues, this study introduces uFOIL, an unsupervised ensemble-based framework that integrates advanced image and language processing techniques to automate the extraction and validation of key information. The framework employs a majority voting mechanism that combines four state-of-the-art optical character recognition systems. Furthermore, a transformer architecture is incorporated to enhance contextual understanding and the structured formatting of extracted text that follows a post-processing confidence scoring mechanism. The proposed framework achieves high performance, with accuracies of 95.77% and 96.48% for student names and IDs, respectively; and 95.07% for total mark validation based on a dataset of exam script samples. Additionally, experiments on the benchmark ICDAR2013 dataset suggest the framework’s strong applicability achieving precision, recall, and F1-scores of 95.89%, 97.86%, and 96.87%, respectively.',
        bibtex: `@article{rahman2025ufoil,
  title={uFOIL: An Unsupervised Fusion of Image Processing and Language Understanding},
  author={Rahman, Md Abdur and Hasan, Md Tanzimul and Howlader, Umar Farooq and Kader, Md Abdul and Islam, Md Motaharul and Pham, Phuoc Hung and Hassan, Mohammad Mehedi},
  journal={IEEE Access},
  year={2025},
  publisher={IEEE}
}`
    },
    {
        id: 'debnath2025fssulivr',
        type: 'journal', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 2.8', accepted: 'Sun, Jun 22, 2025',
        title: 'FSS-ULivR: a clinically-inspired few-shot segmentation framework for liver imaging using unified representations and attention mechanisms',
        authors: 'Debnath, R. K.; <strong><u>Rahman, M. A.</u></strong>; Azam, S.; Zhang, Y.; Jonkman, M.',
        venue: 'Journal of Cancer Research and Clinical Oncology',
        doi: 'https://doi.org/10.1007/s00432-025-06256-0',
        pdf: 'pdfs/debnath2025fssulivr.pdf',
        ga: 'graphical_abstract/debnath2025fss.png',
        abstract: 'Precise liver segmentation is critical for accurate diagnosis and effective treatment planning, serving as a foundation for medical image analysis. However, existing methods struggle with limited labeled data, poor generalizability, and insufficient integration of anatomical and clinical features. To address these limitations, we propose a novel Few-Shot Segmentation model with Unified Liver Representation (FSS-ULivR), which employs a ResNet-based encoder enhanced with Squeeze-and-Excitation modules to improve feature learning, an enhanced prototype module that utilizes a transformer block and channel attention for dynamic feature refinement, and a decoder with improved attention gates and residual refinement strategies to recover spatial details from encoder skip connections. Through extensive experiments, our FSS-ULivR model achieved an outstanding Dice coefficient of 98.94%, Intersection over Union (IoU) of 97.44% and a specificity of 93.78% on the Liver Tumor Segmentation Challenge dataset. Cross-dataset evaluations further demonstrated its generalizability, with Dice scores of 95.43%, 92.98%, 90.72%, and 94.05% on 3DIRCADB01, Colorectal Liver Metastases, Computed Tomography Organs (CT-ORG), and Medical Segmentation Decathlon Task 3: Liver datasets, respectively. In multi-organ segmentation on CT-ORG, it delivered Dice scores ranging from 85.93% to 94.26% across bladder, bones, kidneys, and lungs. For brain tumor segmentation on BraTS 2019 and 2020 datasets, average Dice scores were 90.64% and 89.36% across whole tumor, tumor core, and enhancing tumor regions. These results emphasize the clinical importance of our model by demonstrating its ability to deliver precise and reliable segmentation through artificial intelligence techniques and engineering solutions, even in scenarios with scarce annotated data.',
        bibtex: `@article{debnath2025fss,
  title={FSS-ULivR: a clinically-inspired few-shot segmentation framework for liver imaging using unified representations and attention mechanisms},
  author={Debnath, Ripon Kumar and Rahman, Md Abdur and Azam, Sami and Zhang, Yan and Jonkman, Mirjam},
  journal={Journal of Cancer Research and Clinical Oncology},
  volume={151},
  number={7},
  pages={1--23},
  year={2025},
  publisher={Springer}
}`
    },

    // --- Conferences ---
    {
        id: 'hasan2023data',
        type: 'conference', year: 2023, accepted: 'Tue, Nov 14, 2023',
        title: 'Data Segmentation with Improved K-Means Clustering Algorithm',
        authors: 'Hasan, E.; <strong><u>Rahman, M. A.</u></strong>; Talukder, M. S.; Utsho, M. F.; Shakhan, M.; Farid, D. M.',
        venue: '2023 26th International Conference on Computer and Information Technology (ICCIT)',
        doi: 'https://doi.org/10.1109/ICCIT60459.2023.10441078',
        pdf: 'pdfs/hasan2023data.pdf',
        abstract: 'Unsupervised learning is also known as learning by observation in machine learning which groups the data instances based on their similarities. k-Means clustering technique is one of the most commonly used partition-based clustering methods that continuously relocate data instances from one cluster to another cluster to ameliorate the cluster validation. In this paper, we have introduced a new approach to improve the data clustering performance of the k-Means clustering algorithm. The proposed approach significantly reduces the number of iterations. Initially, we need to set the value of k, the number of clusters, and randomly select k number of instances from data as initial cluster centers. Then rest of the instances are assigned to the clusters based on the minimum Euclidean value. In the traditional k-means clustering method, each data instance is compared with each cluster center. But, in this proposed method we assign an instance into a cluster based on the average value of all instances that are already assigned to the cluster instead of the cluster center. The primary innovation lies in this modification of the assignment of instances into a cluster, which diverges significantly from conventional methodologies. By harnessing the in-place-mean of cluster instances calculation during assignments, the proposed approach significantly curtails the number of iterations required for convergence.',
        bibtex: `@inproceedings{hasan2023data,
  title={Data Segmentation with Improved K-Means Clustering Algorithm},
  author={Hasan, Emam and Rahman, Md Abdur and Talukder, MD Shojib and Utsho, Md Farnas and Shakhan, Md and Farid, Dewan Md},
  booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
  pages={1--5},
  year={2023},
  organization={IEEE}
}`
    },

    // --- Under Review Papers ---
    {
        id: 'rahman2025weckd',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 13.7',
        title: 'WeCKD: Weakly-supervised chain distillation for efficient multimodal medical image classification',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Azam, S.; Karim, A.; Beissbarth, J.; Leach, A.; Azam, S.',
        venue: '<strong>Submitted to</strong> IEEE Transactions on Image Processing',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'sutradhar2025sourcefree',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 13.7',
        title: 'A source-free approach for domain adaptation via multiview image transformation and latent space consistency',
        authors: 'Sutradhar, D.<sup>*</sup>; <strong><u>Rahman, M. A.<sup>*</sup></u></strong>; Raiaan, M. A. K.; Mohamed, R. E.; Azam, S. <br> (Joint first author<sup>*</sup>)',
        venue: '<strong>Submitted to</strong> IEEE Transactions on Image Processing',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'abian2025hansnet',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 3.5',
        title: 'HANS-Net: Hyperbolic convolution and adaptive temporal attention for accurate and generalizable liver and tumor segmentation in CT imaging',
        authors: 'Abian, A. I.; Debnath, R. K.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Islam, M. R.; Karim, A.; Mohamed, R. E.; Azam, S.',
        venue: '<strong>Submitted to</strong> IEEE Transactions on Radiation and Plasma Medical Sciences',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'rahman2025refrm3d',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 7.6',
        title: 'ReFRM3D: A radiomics-enhanced fused residual multiparametric 3D network with multi-scale feature fusion for glioma characterization',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Abian, A. I.; Zhang, Y.; Jonkman, M.; Azam, S.',
        venue: '<strong>Submitted to</strong> Knowledge-Based Systems',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'rahman2025finegrained',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 8.0',
        title: 'A fine-grained attention and geometric correspondence model for musculoskeletal risk classification in athletes using multimodal visual and skeletal features',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Shermin, T.; Islam, M. R.; Hussain, M.; Azam, S.',
        venue: '<strong>Submitted to</strong> Engineering Applications of Artificial Intelligence',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'raiaan2025diffusion',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 6.3',
        title: 'Diffusion-based knowledge distillation for effective multi-organ segmentation with reduced computational time',
        authors: 'Raiaan, M. A. K.<sup>*</sup>; <strong><u>Rahman, M. A.<sup>*</sup></u></strong>; Yeo, K. C.; Sebastian, Y.; Jonkman, M.; Azam, S. <br> (Joint first author<sup>*</sup>)',
        venue: '<strong>Submitted to</strong> Computers in Biology and Medicine',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'debnath2025ssmtconed',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 4.9',
        title: 'SSMT-ConED: A semi-supervised student–teacher framework with contrastive learning and generative adversarial network-based augmentation for robust multi-organ segmentation across CT and MRI modalities',
        authors: 'Debnath, R. K.; Raiaan, M. A. K.; <strong><u>Rahman, M. A.</u></strong>; Selvarajah, T.; Yeo, K. C.; Azam, S.',
        venue: '<strong>Submitted to</strong> Biomedical Signal Processing and Control',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'rahman2025hallucination',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 13.9',
        title: 'Hallucination to truth: A review of fact-checking and factuality evaluation in large language models',
        authors: 'Rahman, S. S.; Islam, M. A.; Alam, M. M.; Zeba, M.; <strong><u>Rahman, M. A.</u></strong>; Chowa, S. S.; Raiaan, M. A. K.; Azam, S.',
        venue: '<strong>Submitted to</strong> Artificial Intelligence Review',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'fahad2024dualstage',
        type: 'under-review', year: 2025, quartile: 'Q2', imf: 'Impact Factor: 2.1',
        title: 'A Dual-Stage Framework for Cardiovascular Abnormalities Diagnosis from ECG Signals Using CA-GNN and Semi-Supervised Autoencoders',
        authors: 'Fahad, N. M.; <strong><u>Rahman, M. A.</u></strong>; Jakarea, M.; Jonkman, M.; Azam, S.',
        venue: '<strong>Submitted to</strong> Signal, Image and Video Processing',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'sutradhar2025cade',
        type: 'under-review', year: 2025, quartile: '', imf: '',
        title: 'CADE: A lightweight change-adaptive dual-path encoder framework for predicting and generating future changes in satellite imagery using semi-supervised learning',
        authors: 'Sutradhar, D.; <strong><u>Rahman, M. A.</u></strong>; Mannan, Z. I.; Azid, S. I.; Jonkman, M.; Azam, S.',
        venue: '<strong>Submitted to</strong> TO SUBMIT',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'ahmed2025colorectal',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 6.1',
        title: 'Predicting Post-Resection Colorectal Liver Metastases Recurrence using Advanced Graph Neural Networks with Explainability and Causal Inference',
        authors: 'Ahmed, J.; <strong><u>Rahman, M. A.</u></strong>; Azam, S.',
        venue: '<strong>Submitted to</strong> Advanced Intelligent Systems',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'alam2025parkinson',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 3.7',
        title: 'Quantitative measurement of Parkinson disease progression using DaTscan radiomics and clinical features with a machine learning based approach',
        authors: 'Alam, M. M.; Rahman, S. S.; Chowa, S. S.; <strong><u>Rahman, M. A.</u></strong>; Islam, M. R.; Azam, S.',
        venue: '<strong>Submitted to</strong> International Journal of Intelligent Systems',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'raiaan2024dementia',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 3.7',
        title: 'Investigating Dementia Patterns by Machine Learning and Brain MRI Using Weakly-Supervised Multimodal Classification',
        authors: 'Raiaan, M. A. K.; Fahad, N. M.; Sutradhar, D.; <strong><u>Rahman; M. A.</u></strong>; Jonkman, M.; Azam, S.',
        venue: '<strong>Submitted to</strong> International Journal of Intelligent Systems',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    // --- Preprints ---
    {
        id: 'rahman2025hallucination_preprint',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 13.9', accepted: 'Tue, Aug 5, 2025',
        title: 'Hallucination to truth: A review of fact-checking and factuality evaluation in large language models',
        authors: 'Rahman, S. S.; Islam, M. A.; Alam, M. M.; Zeba, M.; <strong><u>Rahman, M. A.</u></strong>; Chowa, S. S.; Raiaan, M. A. K.; Azam, S.',
        venue: '<strong>Submitted to</strong> Artificial Intelligence Review',
        doi: 'https://doi.org/10.48550/arXiv.2508.03860',
        ga: 'graphical_abstract/rahman2025hallucination_preprint.png',
        pdf: 'https://arxiv.org/pdf/2508.03860',
        abstract: 'Large Language Models (LLMs) are trained on vast and diverse internet corpora that often include inaccurate or misleading content. Consequently, LLMs can generate misinformation, making robust fact-checking essential. This review systematically analyzes how LLM-generated content is evaluated for factual accuracy by exploring key challenges such as hallucinations, dataset limitations, and the reliability of evaluation metrics. The review emphasizes the need for strong fact-checking frameworks that integrate advanced prompting strategies, domain-specific fine-tuning, and retrieval-augmented generation (RAG) methods. It proposes five research questions that guide the analysis of the recent literature from 2020 to 2025, focusing on evaluation methods and mitigation techniques. The review also discusses the role of instruction tuning, multi-agent reasoning, and external knowledge access via RAG frameworks. Key findings highlight the limitations of current metrics, the value of grounding outputs with validated external evidence, and the importance of domain-specific customization to improve factual consistency. Overall, the review underlines the importance of building LLMs that are not only accurate and explainable but also tailored for domain-specific fact-checking. These insights contribute to the advancement of research toward more trustworthy and context-aware language models.',
        bibtex: `@article{rahman2025hallucination,
  title={Hallucination to Truth: A Review of Fact-Checking and Factuality Evaluation in Large Language Models},
  author={Rahman, Subhey Sadi and Islam, Md Adnanul and Alam, Md Mahbub and Zeba, Musarrat and Rahman, Md Abdur and Chowa, Sadia Sultana and Raiaan, Mohaimenul Azam Khan and Azam, Sami},
  journal={arXiv preprint arXiv:2508.03860},
  year={2025}
}`
    },
    {
        id: 'abian2025hansnet_preprint',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 3.5', accepted: 'Tue, Jul 15, 2025',
        title: 'HANS-Net: Hyperbolic convolution and adaptive temporal attention for accurate and generalizable liver and tumor segmentation in CT imaging',
        authors: 'Abian, A. I.; Debnath, R. K.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Islam, M. R.; Karim, A.; Mohamed, R. E.; Azam, S.',
        venue: '<strong>Submitted to</strong> IEEE Transactions on Radiation and Plasma Medical Sciences',
        doi: 'https://doi.org/10.48550/arXiv.2507.11325',
        ga: 'graphical_abstract/abian2025hans_preprint.png',
        pdf: 'https://arxiv.org/pdf/2507.11325',
        abstract: 'Accurate liver and tumor segmentation on abdominal CT images is critical for reliable diagnosis and treatment planning, but remains challenging due to complex anatomical structures, variability in tumor appearance, and limited annotated data. To address these issues, we introduce Hyperbolic-convolutions Adaptive-temporal-attention with Neural-representation and Synaptic-plasticity Network (HANS-Net), a novel segmentation framework that synergistically combines hyperbolic convolutions for hierarchical geometric representation, a wavelet-inspired decomposition module for multi-scale texture learning, a biologically motivated synaptic plasticity mechanism for adaptive feature enhancement, and an implicit neural representation branch to model fine-grained and continuous anatomical boundaries. Additionally, we incorporate uncertainty-aware Monte Carlo dropout to quantify prediction confidence and lightweight temporal attention to improve inter-slice consistency without sacrificing efficiency. Extensive evaluations of the LiTS dataset demonstrate that HANS-Net achieves a mean Dice score of 93.26%, an IoU of 88.09%, an average symmetric surface distance (ASSD) of 0.72 mm, and a volume overlap error (VOE) of 11.91%. Furthermore, cross-dataset validation on the 3D-IRCADb-01 dataset obtains an average Dice of 87.45%, IoU of 80.30%, ASSD of 1.525 mm, and VOE of 19.71%, indicating strong generalization across different datasets. These results confirm the effectiveness and robustness of HANS-Net in providing anatomically consistent, accurate, and confident liver and tumor segmentation.',
        bibtex: `@article{abian2025hans,
  title={HANS-Net: Hyperbolic Convolution and Adaptive Temporal Attention for Accurate and Generalizable Liver and Tumor Segmentation in CT Imaging},
  author={Abian, Arefin Ittesafun and Debnath, Ripon Kumar and Rahman, Md Abdur and Raiaan, Mohaimenul Azam Khan and Islam, Md Rafiqul and Karim, Asif and Mohamed, Reem E and Azam, Sami},
  journal={arXiv preprint arXiv:2507.11325},
  year={2025}
}`
    }
];



const pubList = document.getElementById('pubList');
const switches = [...document.querySelectorAll('.switch')];
const input = document.getElementById('pubSearch');

function render(filter = 'all', query = '') {
    pubList.innerHTML = '';
    const q = query.trim().toLowerCase();
    const items = publications
        .filter(p => filter === 'all' || p.type === filter)
        .filter(p => !q || [p.title, p.venue, p.authors, p.year].join(' ').toLowerCase().includes(q))
        .sort((a, b) => b.year - a.year);

    items.forEach(p => {
        const item = document.createElement('div');
        item.className = 'item reveal';
        item.innerHTML = `
        <div class="pub-summary">
            <div style="font-weight:700">${p.title}</div>
            <div class="muted" style="margin:2px 0">${p.authors}</div>
            <div class="muted">${p.venue} · 
                <span class="tag">${p.type}</span> 
                <span class="tag">${p.year}</span>
                <span class="tag">${p.quartile || ''}</span>
                <span class="tag">${p.imf || ''}</span>
            </div>
        </div>
    `;

        const details = document.createElement('div');
        details.className = 'pub-details'; // visible by default

        if (p.type === 'under-review') {
            details.innerHTML = `<div class="pub-details-grid"><div><p><strong>Status:</strong> Under review</p></div></div>`;
        } else if (p.type === 'preprint') {
            details.innerHTML = `
            <div class="pub-details-grid">
                <div style="flex:1">
                    <img class="ga" src="${p.ga}" alt="Graphical Abstract"
                        onerror="this.style.background='repeating-linear-gradient(45deg,#202a53,#202a53 10px,#253061 10px,#253061 20px)'">
                </div>
                <div style="flex:1">
                    <p style="margin-top:0; margin-bottom:10px;"><strong>arXived on:</strong> ${p.accepted || '—'}</p>

                    <div class="pub-actions">
                    <button class="btn show-abstract" data-abstract="${encodeURIComponent(p.abstract || 'Abstract not available')}">Abstract</button>
                        <a href="${p.doi}" class="btn primary" target="_blank">Open DOI</a>
                        <a href="${p.pdf}" class="btn" target="_blank">Open PDF</a>
                        <button class="btn copy-bib">Copy BibTeX</button>
                    </div>
                    <div class="bib">${p.bibtex}</div>
                </div>
            </div>
        `;

        }
        else if (!p.ga) {
            details.innerHTML = `
            <div class="pub-details-grid">
                <div style="flex:1">
                    <p><strong>Accepted on:</strong> ${p.accepted || '—'}</p>
                    <div class="pub-actions">
                    <button class="btn show-abstract" data-abstract="${encodeURIComponent(p.abstract || 'Abstract not available')}">Abstract</button>
                        <a href="${p.doi}" class="btn primary" target="_blank">Open DOI</a>
                        <a href="${p.pdf}" class="btn" target="_blank">Open PDF</a>
                        <button class="btn copy-bib">Copy BibTeX</button>
                    </div>
                    <div class="bib">${p.bibtex}</div>
                </div>
            </div>
        `;
        } else {
            details.innerHTML = `
            <div class="pub-details-grid">
                <div style="flex:1">
                    <img class="ga" src="${p.ga}" alt="Graphical Abstract"
                        onerror="this.style.background='repeating-linear-gradient(45deg,#202a53,#202a53 10px,#253061 10px,#253061 20px)'">
                </div>
                <div style="flex:1">
                    <p style="margin-top:0; margin-bottom:10px;"><strong>Accepted on:</strong> ${p.accepted || '—'}</p>

                    <div class="pub-actions">
                    <button class="btn show-abstract" data-abstract="${encodeURIComponent(p.abstract || 'Abstract not available')}">Abstract</button>
                        <a href="${p.doi}" class="btn primary" target="_blank">Open DOI</a>
                        <a href="${p.pdf}" class="btn" target="_blank">Open PDF</a>
                        <button class="btn copy-bib">Copy BibTeX</button>
                    </div>
                    <div class="bib">${p.bibtex}</div>
                </div>
            </div>
        `;
        }

        item.appendChild(details);

        // Copy BibTeX button
        const copyBtn = details.querySelector('.copy-bib');
        if (copyBtn) {
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent toggling
                const bib = e.target.closest('.pub-details').querySelector('.bib').textContent;
                navigator.clipboard.writeText(bib).then(() => {
                    e.target.textContent = 'Copied!';
                    setTimeout(() => e.target.textContent = 'Copy BibTeX', 1200);
                });
            });
        }

        // Show abstract button
        const absBtn = details.querySelector('.show-abstract');
        if (absBtn) {
            absBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent toggling
                const abs = decodeURIComponent(e.target.dataset.abstract);
                const modal = document.getElementById('abstractModal');
                const modalText = document.getElementById('abstractText');
                modalText.textContent = abs;
                modal.style.display = 'block';
            });
        }

        // Abstract modal logic
        const modal = document.getElementById('abstractModal');
        const modalText = document.getElementById('abstractText');
        const closeBtn = modal.querySelector('.close');

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('show-abstract')) {
                const abs = decodeURIComponent(e.target.dataset.abstract);
                modalText.textContent = abs;
                modal.style.display = 'block';
            }
        });

        closeBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

        // Toggle on click
        item.addEventListener('click', () => {
            details.classList.toggle('visible');
        });

        item.appendChild(details);
        pubList.appendChild(item);
    });
}

// Copy BibTeX button
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-bib')) {
        e.stopPropagation(); // prevents item click toggle
        const bib = e.target.closest('.pub-details').querySelector('.bib').textContent;
        navigator.clipboard.writeText(bib).then(() => {
            const btn = e.target;
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'Copy BibTeX', 1200);
        });
    }
});


// Toggle expand/collapse
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle-details')) {
        const item = e.target.closest('.item');
        const details = item.querySelector('.pub-details');

        if (details.classList.contains('collapsed')) {
            details.classList.remove('collapsed');
            e.target.textContent = '–';
        } else {
            details.classList.add('collapsed');
            e.target.textContent = '+';
        }
    }
});


// Initial render
render();

// Filters
switches.forEach(btn => {
    btn.addEventListener('click', () => {
        switches.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render(btn.dataset.filter, input.value);
    });
});
input.addEventListener('input', () => {
    const active = document.querySelector('.switch.active').dataset.filter;
    render(active, input.value);
});

// Ctrl+K search
window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        input.focus();
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Reveal on scroll
const io = new IntersectionObserver(e => {
    e.forEach(en => {
        if (en.isIntersecting) {
            en.target.classList.add('reveal');
            io.unobserve(en.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.panel, .item').forEach(el => io.observe(el));
