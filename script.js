window.ABSTRACTS = window.ABSTRACTS || {};

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
        authors: '<strong><u>Rahman, M. A.</u></strong>; Fahad, N. M.; Raiaan, M. A. K.; Jonkman, M.; De Boer, F.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>CAAI Transactions on Intelligence Technology</i>',
        doi: 'https://doi.org/10.1049/cit2.12410',
        pdf: 'https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/cit2.12410',
        ga: 'graphical_abstract/rahman2025advancing.png'
    },
    {
        id: 'rahman2025ufoil',
        type: 'journal', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 3.6', accepted: 'Wed, Feb 12, 2025',
        title: 'uFOIL: An Unsupervised Fusion of Image Processing and Language Understanding',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Hasan, M. T.; Howlader, U. F.; Kader, M. A.; Islam, M. M.; Pham, P. H.; Hassan, M. M.<sup><a href="mailto:motaharul@cse.uiu.ac.bd"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>IEEE Access</i>',
        doi: 'https://doi.org/10.1109/ACCESS.2025.3542417',
        pdf: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10890958',
        ga: 'graphical_abstract/rahman2025ufoil.png'
    },
    {
        id: 'debnath2025fssulivr',
        type: 'journal', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 2.8', accepted: 'Sun, Jun 22, 2025',
        title: 'FSS-ULivR: a clinically-inspired few-shot segmentation framework for liver imaging using unified representations and attention mechanisms',
        authors: 'Debnath, R. K.; <strong><u>Rahman, M. A.</u></strong>; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>; Zhang, Y.; Jonkman, M.',
        venue: '<i>Journal of Cancer Research and Clinical Oncology</i>',
        doi: 'https://doi.org/10.1007/s00432-025-06256-0',
        pdf: 'pdfs/debnath2025fssulivr.pdf',
        ga: 'graphical_abstract/debnath2025fss.png'
    },
    {
        id: 'rahman2026visk',
        type: 'journal', year: 2026, quartile: 'Q1', imf: 'Impact Factor: 4.9', accepted: 'Sat, Jun 6, 2026',
        title: 'A Fine-Grained Attention and Geometric Correspondence Model for Musculoskeletal Risk Classification in Athletes Using Multimodal Visual and Skeletal Features',
        authors: '<strong><u>Rahman, M. A.<sup>†</sup></u></strong>; Karim, W.<sup>†</sup>; Raiaan, M. A. K.<sup>†</sup>; Shermin, T.; Islam, M. R.; Hussain, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup> <br> (joint-first author<sup>†</sup>)',
        venue: '<strong>Under review in</strong> <i>Computers and Electrical Engineering</i>',
        doi: 'https://doi.org/10.1016/j.compeleceng.2026.111281',
        ga: 'graphical_abstract/rahman2026visk.png',
        pdf: 'pdfs/rahman2026visk.pdf'
    },
    {
        id: 'ahmed2025colorectal',
        type: 'journal', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 6.1', accepted: 'Thu, Oct 9, 2025',
        title: 'Predicting Post-Resection Colorectal Liver Metastases Recurrence using Advanced Graph Neural Networks with Explainability and Causal Inference',
        authors: 'Ahmed, J.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>Advanced Intelligent Systems</i>',
        doi: 'https://doi.org/10.1002/aisy.202500596',
        pdf: 'https://advanced.onlinelibrary.wiley.com/doi/epdf/10.1002/aisy.202500596',
        ga: 'graphical_abstract/jubair2025predicting.png'
    },
    {
        id: 'raiaan2025diffusion',
        type: 'journal', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 6.3', accepted: 'Mon, Oct 27, 2025',
        title: 'Diffusion-based knowledge distillation for effective multi-organ segmentation with reduced computational time',
        authors: 'Raiaan, M. A. K.<sup>†</sup>; <strong><u>Rahman, M. A.<sup>†</sup></u></strong>; Yeo, K. C.; Sebastian, Y.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup> <br> (joint-first author<sup>†</sup>)',
        venue: '<i>Computers in Biology and Medicine</i>',
        doi: 'https://doi.org/10.1016/j.compbiomed.2025.111265',
        pdf: "pdfs/raiaan2025diffusion.pdf",
        ga: 'graphical_abstract/raiaan2025diffusion.png'
    },
    {
        id: 'fahad2025dualstage',
        type: 'journal', year: 2025, quartile: 'Q2', imf: 'Impact Factor: 2.1', accepted: 'Tue, Dec 9, 2025',
        title: 'A Dual-Stage Framework for Cardiovascular Abnormalities Diagnosis from ECG Signals Using CA-GNN and Semi-Supervised Autoencoders',
        authors: 'Fahad, N. M.; <strong><u>Rahman, M. A.</u></strong>; Jakarea, M.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>Signal, Image and Video Processing</i>',
        doi: 'https://doi.org/10.1007/s11760-025-05042-2',
        pdf: 'pdfs/fahad2025dualstage.pdf',
        ga: 'graphical_abstract/fahad2025dualstage.png'
    },
    {
        id: 'chowa2026llmagent',
        type: 'journal', year: 2026, quartile: 'Q1', imf: 'Impact Factor: 13.9', accepted: 'Sun, Dec 14, 2025',
        title: 'From language to action: a review of large language models as autonomous agents and tool users',
        authors: 'Chowa, S. S.; Alvi, R.;  Rahman, S. S.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Islam, M. R.; Hussain, M; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>Artificial Intelligence Review</i>',
        doi: 'https://doi.org/10.1007/s10462-025-11471-9',
        ga: 'graphical_abstract/chowa2026llmagent.png',
        pdf: 'pdfs/chowa2026llmagent.pdf'
    },
    {
        id: 'rahman2026hallucination',
        type: 'journal', year: 2026, quartile: 'Q1', imf: 'Impact Factor: 13.9', accepted: 'Wed, Nov 26, 2025',
        title: 'Hallucination to truth: a review of fact-checking and factuality evaluation in large language models',
        authors: 'Rahman, S. S.; Islam, M. A.; Alam, M. M.; Zeba, M.; <strong><u>Rahman, M. A.</u></strong>; Chowa, S. S.; Raiaan, M. A. K.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>Artificial Intelligence Review</i>',
        doi: 'https://doi.org/10.1007/s10462-025-11454-w',
        ga: 'graphical_abstract/rahman2026hallucination.png',
        pdf: 'pdfs/rahman2026hallucination.pdf'
    },
    {
        id: 'abian2026hans',
        type: 'journal', year: 2026, quartile: 'Q1', imf: 'Impact Factor: 3.5', accepted: 'Fri, Jan 9, 2026',
        title: 'HANS-Net: Hyperbolic convolution and adaptive temporal attention for accurate and generalizable liver and tumor segmentation in CT imaging',
        authors: 'Abian, A. I.; Debnath, R. K.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Islam, M. R.; Karim, A.; Mohamed, R. E.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>IEEE Transactions on Radiation and Plasma Medical Sciences</i>',
        doi: 'https://doi.org/10.1109/TRPMS.2026.3654628',
        ga: 'graphical_abstract/abian2026hans.png',
        pdf: 'https://arxiv.org/pdf/2507.11325'
    },
    {
        id: 'alam2026parkinson',
        type: 'journal', year: 2026, quartile: 'Q1', imf: 'Impact Factor: 3.7', accepted: 'Tue, Jan 13, 2026',
        title: 'Quantitative measurement of Parkinson disease progression using DaTscan radiomics and clinical features with a machine learning based approach',
        authors: 'Alam, M. M.; Rahman, S. S.; Chowa, S. S.; <strong><u>Rahman, M. A.</u></strong>; Islam, M. R.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>International Journal of Intelligent Systems</i>',
        doi: 'https://doi.org/10.1155/int/5547118',
        ga: 'graphical_abstract/alam2026parkinson.png',
        pdf: 'https://onlinelibrary.wiley.com/doi/epdf/10.1155/int/5547118'
    },
    {
        id: 'sutradhar2026dementia',
        type: 'journal', year: 2026, accepted: 'Tue, April 28, 2026', quartile: 'Q2', imf: 'CiteScore: 3.2',
        title: 'Investigating dementia patterns by machine learning and graph-based marker analysis for multiclass dementia diagnosis',
        authors: 'Sutradhar, D.<sup>†</sup>; <strong><u>Rahman, M. A.<sup>†</sup></u></strong>; Fahad, N. M.<sup>†</sup>; Sakib, S.; Islam, M. R.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup> <br> (Equal contribution<sup>†</sup>)',
        venue: '<i>Discover Computing</i>',
        ga: 'graphical_abstract/sutradhar2026dementia.png',
        doi: 'https://doi.org/10.1007/s10791-026-10153-6',
        pdf: 'pdfs/sutradhar2026dementia.pdf'
    },


    // --- Conferences ---
    {
        id: 'hasan2023data',
        type: 'conference', year: 2023, accepted: 'Tue, Nov 14, 2023',
        title: 'Data Segmentation with Improved K-Means Clustering Algorithm',
        authors: 'Hasan, E.; <strong><u>Rahman, M. A.</u></strong>; Talukder, M. S.; Utsho, M. F.; Shakhan, M.; Farid, D. M.',
        venue: '<i>2023 26th International Conference on Computer and Information Technology (ICCIT)</i>',
        doi: 'https://doi.org/10.1109/ICCIT60459.2023.10441078',
        pdf: 'pdfs/hasan2023data.pdf'
    },

    // --- Under Review Papers ---
    {
        id: 'rahman2025refrm3d',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 7.6', accepted: 'Sat, Dec 27, 2025',
        title: 'ReFRM3D: A radiomics-enhanced fused residual multiparametric 3D network with multi-scale feature fusion for glioma characterization',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Abian, A. I.; Zhang, Y.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review in</strong> <i>Knowledge-Based Systems</i>',
        doi: 'https://doi.org/10.48550/arXiv.2512.22570',
        ga: 'graphical_abstract/rahman2025refrm3d.png',
        pdf: 'https://arxiv.org/pdf/2512.22570'
    },
    {
        id: 'rahman2026weckd',
        type: 'preprint', year: 2026, quartile: 'Q1', imf: 'Impact Factor: 7.6', accepted: 'Fri, Oct 17, 2025',
        title: 'WeCKD: Weakly-supervised Chained Distillation Network for Efficient Multimodal Medical Imaging',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>; Karim, A.; Beissbarth, J.; & Leach, A.',
        venue: '<strong>Under review in</strong> <i>Pattern Recognition</i>',
        doi: 'https://doi.org/10.48550/arXiv.2510.14668',
        ga: 'graphical_abstract/rahman2026weckd.png',
        pdf: 'https://arxiv.org/pdf/2510.14668'
    },
    {
        id: 'rahman2026metal',
        type: 'under-review', year: 2026, quartile: 'Q1', imf: 'Impact Factor: 8.0',
        title: 'Meta Enhanced Brain Tumor Segmentation with Partial MRI Modalities Through Adaptive Fusion and Bi-Level Optimization',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Abian, A. I.; Alam, M. M.; Mukta, S.; Shourav, S. A.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review in</strong> <i>Engineering Applications of Artificial Intelligence</i>',
        doi: '#',
        pdf: '#'
    },
    {
        id: 'rahman2026radiant',
        type: 'under-review', year: 2026, quartile: 'Q1', imf: 'Impact Factor: 9.3',
        title: 'RADIANT: A Radiomics-Aware Domain-Informed Adversarial Network for High-Grade to Low-Grade Brain Tumor Adaptation',
        authors: '<strong><u>Rahman, M. A.<sup>†</sup></u></strong>; Abian, A. I.<sup>†</sup>; Mukta, S.; Shourav, S. A.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup> <br> (joint-first author<sup>†</sup>)',
        venue: '<strong>Under review in</strong> <i>International Journal of Computer Vision</i>',
        doi: '#',
        pdf: '#'
    },
    {
        id: 'rahman2025arionet',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 7.5', accepted: 'Wed, 1 Oct, 2025',
        title: 'ARIONet: An Advanced Self-supervised Contrastive Representation Network for Birdsong Classification and Future Frame Prediction',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Thuseethan, S.; Yeo, K. C.; Mohamed, R. E.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review in</strong> <i>Expert Systems with Applications</i>',
        doi: 'https://doi.org/10.48550/arXiv.2510.00522',
        ga: 'graphical_abstract/rahman2025arionet.png',
        pdf: 'https://arxiv.org/pdf/2510.00522'
    },
    {
        id: 'sutradhar2025sourcefree',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 13.7', accepted: 'Wed, 28 Jan, 2026',
        title: 'A source-free approach for domain adaptation via multiview image transformation and latent space consistency',
        authors: 'Sutradhar, D.<sup>†</sup>; <strong><u>Rahman, M. A.<sup>†</sup></u></strong>; Raiaan, M. A. K.; Mohamed, R. E.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup> <br> (joint-first author<sup>†</sup>)',
        venue: '<strong>Under review in</strong> <i>IEEE Transactions on Image Processing</i>',
        doi: 'https://doi.org/10.48550/arXiv.2601.20284',
        ga: 'graphical_abstract/sutradhar2025sourcefree.png',
        pdf: 'https://arxiv.org/pdf/2601.20284'
    },
    {
        id: 'adnan2026waste',
        type: 'preprint', year: 2026,
        quartile: 'Q1', imf: 'Impact Factor: 5.7', accepted: 'Sun, 1 Mar, 2026',
        title: "Learning to Weigh Waste: A Physics-Informed Multimodal Fusion Framework and Large-Scale Dataset for Commercial and Industrial Applications",
        authors: 'Islam, M. A.; Karim, W.; Alam, M. M.; Rahman, S. S.; <strong><u>Rahman, M. A.</u></strong>; Abian, A. I.; Raiaan, M. A. K.; Yeo, K. C.; Mathur, D.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review in</strong> <i>IEEE Transactions on Big Data</i>',
        doi: 'https://doi.org/10.48550/arXiv.2603.00931',
        ga: 'graphical_abstract/adnan2026waste.png',
        pdf: 'https://arxiv.org/pdf/2603.00931'
    },
    {
        id: 'debnath2025ssmtconed',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 4.9',
        title: 'SSMT-ConED: A semi-supervised student–teacher framework with contrastive learning and generative adversarial network-based augmentation for robust multi-organ segmentation across CT and MRI modalities',
        authors: 'Debnath, R. K.; Raiaan, M. A. K.; <strong><u>Rahman, M. A.</u></strong>; Selvarajah, T.; Yeo, K. C.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review in</strong> <i>Biomedical Signal Processing and Control</i>',
        doi: '#',
        pdf: '#'

    },
    {
        id: 'haque2025structured',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 8.0',
        title: 'Structured Vision–Language Diffusion Framework for Synthetic Data Generation in Resource-Limited Deep Learning',
        authors: 'Haque, S. Y.; Jahan, E.; <strong><u>Rahman, M. A.</u></strong>; Fahad, N. M.; Raiaan, M. A. K.; Mukta, S.; Islam, M. R.; Azid, S. I.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review in</strong> <i>Engineering Applications of Artificial Intelligence</i>',
        doi: '#',
        pdf: '#'

    },
    {
        id: 'sutradhar2025cade',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: '',
        title: 'CADE: A lightweight change-adaptive dual-path encoder framework for predicting and generating future changes in satellite imagery using semi-supervised learning',
        authors: 'Sutradhar, D.; <strong><u>Rahman, M. A.</u></strong>; Mannan, Z. I.; Azid, S. I.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review in</strong> <i>Neural Computing and Applications</i>',
        doi: '#',
        pdf: '#'

    }
];


const pubList = document.getElementById('pubList');
const switches = [...document.querySelectorAll('.switch')];
const input = document.getElementById('pubSearch');

function publicationToSearchText(pub) {
    return Object.values(pub)
        .flat()
        .map(v => {
            if (v == null) return '';
            return String(v)
                .replace(/<[^>]*>/g, ' ') // strip HTML
                .toLowerCase();
        })
        .join(' ');
}


function render(filter = 'all', query = '') {
    pubList.innerHTML = '';
    const q = query.trim().toLowerCase();
    // const items = publications
    //     .filter(p => filter === 'all' || p.type === filter)
    //     .filter(p => !q || [p.title, p.venue, p.authors, p.year].join(' ').toLowerCase().includes(q))
    //     .sort((a, b) => b.year - a.year);
    const items = publications
        // .filter(p => filter === 'all' || p.type === filter)
        .filter(p => {
            if (filter === 'all') return true;
            if (filter === 'under-review') return p.type === 'under-review' || p.type === 'preprint';
            return p.type === filter;
        })

        // Only remove duplicates when viewing "all"
        .filter(p => {
            if (filter === 'all' && p.type === 'preprint') {
                const baseId = p.id.replace('_preprint', '');
                return !publications.some(q => q.id === baseId && q.type === 'under-review');
            }
            return true;
        })
        // .filter(p => !q || [p.title, p.venue, p.authors, p.year].join(' ').toLowerCase().includes(q))
        .filter(p => !q || publicationToSearchText(p).includes(q))

    // .sort((a, b) => b.year - a.year);



    items.forEach(p => {
        const item = document.createElement('div');
        item.className = 'item reveal';
        item.innerHTML = `
        <div class="pub-summary">
            <div style="flex:1">
                <div style="font-weight:700">${p.title}</div>
                <div class="muted" style="margin:2px 0">${p.authors}</div>
                <div class="muted">${p.venue} · 
                    <span class="tag">${p.type}</span> 
                    <span class="tag">${p.year}</span>
                    <span class="tag">${p.quartile || ''}</span>
                    <span class="tag">${p.imf || ''}</span>
                </div>
            </div>
        </div>
    `;

        const details = document.createElement('div');
        details.className = 'pub-details'; // visible by default

        // Add button to details with relative positioning
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn active';
        toggleBtn.innerHTML = '<span class="close">&times;</span>';

        if (p.venue.includes('NOT SUBMITTED')) {
            details.innerHTML = `
        <div class="pub-details-grid">
            <div style="flex:1">
                <p><strong>Status:</strong> On-going</p>
            </div>
        </div>
    `;
        } else if (p.type === 'under-review') {
            details.innerHTML = `<div class="pub-details-grid"><div><p><strong>Status:</strong> Under review</p></div></div>`;
        } else if (p.type === 'preprint') {
            details.innerHTML = `
            <div class="pub-details-grid">
                <img class="ga" src="${p.ga}" alt="Graphical Abstract"
                    onerror="this.style.background='repeating-linear-gradient(45deg,#202a53,#202a53 10px,#253061 10px,#253061 20px)'">
                <div style="flex:1">
                    <h4 style="margin: 0 0 8px 0;">Abstract</h4>
                    <p style="font-size:0.95rem; line-height:1.5; margin:0; color: var(--muted); text-align: justify;">${window.ABSTRACTS[p.id] || 'Abstract not available'}</p>
                    <div class="pub-actions" style="margin-top:10px;">
                    <span class="btn" style="background: transparent; cursor: default; font-weight: 600;">arXived ON: ${p.accepted || '—'}</span>
                        ${p.doi && p.doi !== '#' ? `<a href="${p.doi}" class="btn" target="_blank">DOI: ${p.doi.replace('https://doi.org/', '')}</a>` : ''}
                        ${p.pdf && p.pdf !== '#' ? `<a href="${p.pdf}" class="btn" target="_blank">OPEN PDF</a>` : ''}
                    </div>
                </div>
            </div>
        `;

        } else if (p.type === 'in-production') {
            details.innerHTML = `
            <div class="pub-details-grid">
                <img class="ga" src="${p.ga}" alt="Graphical Abstract"
                    onerror="this.style.background='repeating-linear-gradient(45deg,#202a53,#202a53 10px,#253061 10px,#253061 20px)'">
                <div style="flex:1">
                    <h4 style="margin: 0 0 8px 0;">Abstract</h4>
                    <p style="font-size:0.95rem; line-height:1.5; margin:0; color: var(--muted); text-align: justify;">${window.ABSTRACTS[p.id] || 'Abstract not available'}</p>
                    <div class="pub-actions" style="margin-top:10px;">
                    <span class="btn" style="background: transparent; cursor: default; font-weight: 600;">IN PRESS; ACCEPTED ON: ${p.accepted || '—'}</span>
                        ${p.doi && p.doi !== '#' ? `<a href="${p.doi}" class="btn" target="_blank">DOI: ${p.doi.replace('https://doi.org/', '')}</a>` : ''}
                        ${p.pdf && p.pdf !== '#' ? `<a href="${p.pdf}" class="btn" target="_blank">OPEN PDF</a>` : ''}
                    </div>
                </div>
            </div>
        `;

        } else if (!p.ga) {
            details.innerHTML = `
        <div class="pub-details-grid">
            <div style="flex:1">
                <h4 style="margin: 0 0 8px 0;">Abstract</h4>
                <p style="font-size:0.95rem; line-height:1.5; margin:0; color: var(--muted); text-align: justify;">${window.ABSTRACTS[p.id] || 'Abstract not available'}</p>
                <div class="pub-actions">
                <span class="btn" style="background: transparent; cursor: default; font-weight: 600;">ACCEPTED ON: ${p.accepted || '—'}</span>
                    ${p.doi && p.doi !== '#' ? `<a href="${p.doi}" class="btn" target="_blank">DOI: ${p.doi.replace('https://doi.org/', '')}</a>` : ''}
                    ${p.pdf && p.pdf !== '#' ? `<a href="${p.pdf}" class="btn" target="_blank">OPEN PDF</a>` : ''}
                </div>
            </div>
        </div>
    `;
        } else {
            details.innerHTML = `
        <div class="pub-details-grid">
            <img class="ga" src="${p.ga}" alt="Graphical Abstract"
                onerror="this.style.background='repeating-linear-gradient(45deg,#202a53,#202a53 10px,#253061 10px,#253061 20px)'">
            <div style="flex:1">
                <h4 style="margin: 0 0 8px 0;">Abstract</h4>
                <p style="font-size:0.95rem; line-height:1.5; margin:0; color: var(--muted); text-align: justify;">${window.ABSTRACTS[p.id] || 'Abstract not available'}</p>
                <div class="pub-actions">
                <span class="btn" style="background: transparent; cursor: default; font-weight: 600;">ACCEPTED ON: ${p.accepted || '—'}</span>
                    ${p.doi && p.doi !== '#' ? `<a href="${p.doi}" class="btn" target="_blank">DOI: ${p.doi.replace('https://doi.org/', '')}</a>` : ''}
                    ${p.pdf && p.pdf !== '#' ? `<a href="${p.pdf}" class="btn" target="_blank">OPEN PDF</a>` : ''}
                </div>
            </div>
        </div>
    `;
        }


        item.appendChild(details);

        // Show abstract button
        const absBtn = details.querySelector('.show-abstract');
        if (absBtn) {
            absBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent toggling
                const abs = decodeURIComponent(e.target.dataset.abstract);
                const modal = document.getElementById('abstractModal');
                const modalText = document.getElementById('abstractText');
                modalText.innerHTML = `<span>${abs.replace(/\n/g, ' ')}</span>`;
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
                modalText.innerHTML = `<span>${abs.replace(/\n/g, ' ')}</span>`;
                modal.style.display = 'block';
            }
        });

        closeBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

        // Toggle on pub-summary click
        const pubSummary = item.querySelector('.pub-summary');
        pubSummary.addEventListener('click', (e) => {
            e.stopPropagation();
            details.classList.add('visible');
        });

        // Only collapse on toggle button click
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            details.classList.remove('visible');
        });

        // Prepend button to details
        details.style.position = 'relative';
        details.insertAdjacentElement('afterbegin', toggleBtn);

        item.appendChild(details);
        pubList.appendChild(item);
    });
}

// Initial render — start with JOURNALS
const DEFAULT_FILTER = 'journal';

// set active button
switches.forEach(b => b.classList.remove('active'));
const defaultBtn = switches.find(b => b.dataset.filter === DEFAULT_FILTER);
if (defaultBtn) defaultBtn.classList.add('active');

// render journals
render(DEFAULT_FILTER, input.value);

// Filters
switches.forEach(btn => {
    btn.addEventListener('click', () => {
        switches.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render(btn.dataset.filter, input.value);
    });
});

// input.addEventListener('input', () => {
//     const active = document.querySelector('.switch.active').dataset.filter;
//     render(active, input.value);
// });

input.addEventListener('input', () => {
    const q = input.value.trim();
    if (q) {
        // Global search across all publications while typing
        render('all', q);
    } else {
        // No search query — render the active tab
        const active = document.querySelector('.switch.active').dataset.filter;
        render(active, '');
    }
});


window.addEventListener('keydown', e => {
    // Ctrl + Shift + F → focus search
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        input.focus();
        return;
    }

    // Escape → exit search
    if (e.key === 'Escape') {
        input.blur();          // remove focus
        // optional: clear value
        // input.value = '';
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

// Adjust timeline line heights to match content
function adjustTimelineHeights() {
    document.querySelectorAll('.timeline').forEach(timeline => {
        const items = timeline.querySelectorAll('.t-item');
        if (items.length === 0) return;

        const lastItem = items[items.length - 1];
        const timelineRect = timeline.getBoundingClientRect();
        const lastItemRect = lastItem.getBoundingClientRect();

        // Calculate height from top of timeline to bottom of last item
        const height = (lastItemRect.bottom - timelineRect.top) + 12; // 12px buffer
        timeline.style.setProperty('--timeline-height', `${height}px`);
    });
}

// Sync Experience and News heights
function syncExperienceAndNewsHeights() {
    const experienceTimeline = document.querySelector('#experience .timeline.list');
    const insightsTimeline = document.querySelector('#insights .timeline.list');

    if (experienceTimeline && insightsTimeline) {
        const experienceHeight = experienceTimeline.offsetHeight;
        document.documentElement.style.setProperty('--experience-height', `${experienceHeight}px`);
    }
}

// Call on load and when content changes
adjustTimelineHeights();
syncExperienceAndNewsHeights();
window.addEventListener('resize', () => {
    adjustTimelineHeights();
    syncExperienceAndNewsHeights();
});
window.addEventListener('load', () => {
    adjustTimelineHeights();
    syncExperienceAndNewsHeights();
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
