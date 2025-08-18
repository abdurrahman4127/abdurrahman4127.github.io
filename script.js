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
        id: 'rahman2025skin',
        type: 'journals', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 8.4',
        title: 'Advancing skin cancer detection integrating a novel unsupervised classification and enhanced imaging techniques',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Fahad, N. M.; Raiaan, M. A. K.; Jonkman, M.; De Boer, F.; Azam, S.',
        venue: 'CAAI Transactions on Intelligence Technology',
        doi: '#',
        pdf: '#',
        ga: 'graphical_abstract/rahman2025advancing.png',
        abstract: '',
        bibtex: `@article{rahman2025skin,
title={Advancing skin cancer detection integrating a novel unsupervised classification and enhanced imaging techniques},
author={Rahman, M. A. and Fahad, N. M. and Raiaan, M. A. K. and Jonkman, M. and De Boer, F. and Azam, S.},
journal={CAAI Transactions on Intelligence Technology},
year={2025}}`
    },
    {
        id: 'rahman2025ufoil',
        type: 'journals', year: 2025,
        title: 'uFOIL: An Unsupervised Fusion of Image Processing and Language Understanding',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Hasan, M. T.; Howlader, U. F.; Kader, M. A.; Islam, M. M.; Pham, P. H.; Hassan, M. M.',
        venue: 'IEEE Access',
        doi: '#',
        pdf: '#',
        ga: 'graphical_abstract/rahman2025ufoil.png',
        abstract: '',
        bibtex: `@article{rahman2025ufoil,
title={uFOIL: An Unsupervised Fusion of Image Processing and Language Understanding},
author={Rahman, M. A. and Hasan, M. T. and Howlader, U. F. and Kader, M. A. and Islam, M. M. and Pham, P. H. and Hassan, M. M.},
journal={IEEE Access},
year={2025}}`
    },
    {
        id: 'debnath2025fssulivr',
        type: 'journals', year: 2025,
        title: 'FSS-ULivR: a clinically-inspired few-shot segmentation framework for liver imaging using unified representations and attention mechanisms',
        authors: 'Debnath, R. K.; <strong><u>Rahman, M. A.</u></strong>; Azam, S.; Zhang, Y.; Jonkman, M.',
        venue: 'Journal of Cancer Research and Clinical Oncology',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{debnath2025fssulivr,
title={FSS-ULivR: a clinically-inspired few-shot segmentation framework for liver imaging using unified representations and attention mechanisms},
author={Debnath, R. K. and Rahman, M. A. and Azam, S. and Zhang, Y. and Jonkman, M.},
journal={Journal of Cancer Research and Clinical Oncology},
year={2025}}`
    },

    // --- Conferences ---
    {
        id: 'hasan2023datasegmentation',
        type: 'conferences', year: 2023,
        title: 'Data Segmentation with Improved K-Means Clustering Algorithm',
        authors: 'Hasan, E.; <strong><u>Rahman, M. A.</u></strong>; Talukder, M. S.; Utsho, M. F.; Shakhan, M.; Farid, D. M.',
        venue: '2023 26th International Conference on Computer and Information Technology (ICCIT)',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@inproceedings{hasan2023datasegmentation,
title={Data Segmentation with Improved K-Means Clustering Algorithm},
author={Hasan, E. and Rahman, M. A. and Talukder, M. S. and Utsho, M. F. and Shakhan, M. and Farid, D. M.},
booktitle={2023 26th International Conference on Computer and Information Technology (ICCIT)},
year={2023}}`
    },

    // --- Under Review Papers ---
    {
        id: 'rahman2025weckd',
        type: 'under-review', year: 2025,
        title: 'WeCKD: Weakly-supervised chain distillation for efficient multimodal medical image classification',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Azam, S.; Karim, A.; Beissbarth, J.; Leach, A.',
        venue: 'IEEE Transactions on Image Processing',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{rahman2025weckd,
title={WeCKD: Weakly-supervised chain distillation for efficient multimodal medical image classification},
author={Rahman, M. A. and Raiaan, M. A. K. and Azam, S. and Karim, A. and Beissbarth, J. and Leach, A.},
journal={IEEE Transactions on Image Processing},
year={2025}}`
    },
    {
        id: 'sutradhar2025sourcefree',
        type: 'under-review', year: 2025,
        title: 'A source-free approach for domain adaptation via multiview image transformation and latent space consistency',
        authors: 'Sutradhar, D.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Mohamed, R. E.; Azam, S.',
        venue: 'IEEE Transactions on Image Processing',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{sutradhar2025sourcefree,
title={A source-free approach for domain adaptation via multiview image transformation and latent space consistency},
author={Sutradhar, D. and Rahman, M. A. and Raiaan, M. A. K. and Mohamed, R. E. and Azam, S.},
journal={IEEE Transactions on Image Processing},
year={2025}}`
    },
    {
        id: 'abian2025hansnet',
        type: 'under-review', year: 2025,
        title: 'HANS-Net: Hyperbolic convolution and adaptive temporal attention for accurate and generalizable liver and tumor segmentation in CT imaging',
        authors: 'Abian, A. I.; Debnath, R. K.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Islam, M. R.; Karim, A.; Mohamed, R. E.; Azam, S.',
        venue: 'IEEE Transactions on Radiation and Plasma Medical Sciences',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{abian2025hansnet,
title={HANS-Net: Hyperbolic convolution and adaptive temporal attention for accurate and generalizable liver and tumor segmentation in CT imaging},
author={Abian, A. I. and Debnath, R. K. and Rahman, M. A. and Raiaan, M. A. K. and Islam, M. R. and Karim, A. and Mohamed, R. E. and Azam, S.},
journal={IEEE Transactions on Radiation and Plasma Medical Sciences},
year={2025}}`
    },
    {
        id: 'rahman2025refrm3d',
        type: 'under-review', year: 2025,
        title: 'ReFRM3D: A radiomics-enhanced fused residual multiparametric 3D network with multi-scale feature fusion for glioma characterization',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Abian, A. I.; Zhang, Y.; Jonkman, M.; Azam, S.',
        venue: 'Knowledge-Based Systems',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{rahman2025refrm3d,
title={ReFRM3D: A radiomics-enhanced fused residual multiparametric 3D network with multi-scale feature fusion for glioma characterization},
author={Rahman, M. A. and Raiaan, M. A. K. and Abian, A. I. and Zhang, Y. and Jonkman, M. and Azam, S.},
journal={Knowledge-Based Systems},
year={2025}}`
    },
    {
        id: 'rahman2025finegrained',
        type: 'under-review', year: 2025,
        title: 'A fine-grained attention and geometric correspondence model for musculoskeletal risk classification in athletes using multimodal visual and skeletal features',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Shermin, T.; Islam, M. R.; Hussain, M.; Azam, S.',
        venue: 'Engineering Applications of Artificial Intelligence',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{rahman2025finegrained,
title={A fine-grained attention and geometric correspondence model for musculoskeletal risk classification in athletes using multimodal visual and skeletal features},
author={Rahman, M. A. and Raiaan, M. A. K. and Shermin, T. and Islam, M. R. and Hussain, M. and Azam, S.},
journal={Engineering Applications of Artificial Intelligence},
year={2025}}`
    },
    {
        id: 'raiaan2025diffusion',
        type: 'under-review', year: 2025,
        title: 'Diffusion-based knowledge distillation for effective multi-organ segmentation with reduced computational time',
        authors: 'Raiaan, M. A. K.; <strong><u>Rahman, M. A.</u></strong>; Yeo, K. C.; Sebastian, Y.; Jonkman, M.; Azam, S.',
        venue: 'Computers in Biology and Medicine',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{raiaan2025diffusion,
title={Diffusion-based knowledge distillation for effective multi-organ segmentation with reduced computational time},
author={Raiaan, M. A. K. and Rahman, M. A. and Yeo, K. C. and Sebastian, Y. and Jonkman, M. and Azam, S.},
journal={Computers in Biology and Medicine},
year={2025}}`
    },
    {
        id: 'debnath2025ssmtconed',
        type: 'under-review', year: 2025,
        title: 'SSMT-ConED: A semi-supervised student–teacher framework with contrastive learning and generative adversarial network-based augmentation for robust multi-organ segmentation across CT and MRI modalities',
        authors: 'Debnath, R. K.; Raiaan, M. A. K.; <strong><u>Rahman, M. A.</u></strong>; Selvarajah, T.; Yeo, K. C.; Azam, S.',
        venue: 'Biomedical Signal Processing and Control',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{debnath2025ssmtconed,
title={SSMT-ConED: A semi-supervised student–teacher framework with contrastive learning and generative adversarial network-based augmentation for robust multi-organ segmentation across CT and MRI modalities},
author={Debnath, R. K. and Raiaan, M. A. K. and Rahman, M. A. and Selvarajah, T. and Yeo, K. C. and Azam, S.},
journal={Biomedical Signal Processing and Control},
year={2025}}`
    },
    {
        id: 'rahman2025hallucination',
        type: 'under-review', year: 2025,
        title: 'Hallucination to truth: A review of fact-checking and factuality evaluation in large language models',
        authors: 'Rahman, S. S.; Islam, M. A.; Alam, M. M.; Zeba, M.; <strong><u>Rahman, M. A.</u></strong>; Chowa, S. S.; Raiaan, M. A. K.; Azam, S.',
        venue: 'Artificial Intelligence Review',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{rahman2025hallucination,
title={Hallucination to truth: A review of fact-checking and factuality evaluation in large language models},
author={Rahman, S. S. and Islam, M. A. and Alam, M. M. and Zeba, M. and Rahman, M. A. and Chowa, S. S. and Raiaan, M. A. K. and Azam, S.},
journal={Artificial Intelligence Review},
year={2025}}`
    },
    {
        id: 'fahad2024dualstage',
        type: 'under-review', year: 2024,
        title: 'A Dual-Stage Framework for Cardiovascular Abnormalities Diagnosis from ECG Signals Using CA-GNN and Semi-Supervised Autoencoders',
        authors: 'Fahad, N. M.; <strong><u>Rahman, M. A.</u></strong>; Jakarea, M.; Jonkman, M.; Azam, S.',
        venue: 'Signal, Image and Video Processing',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{fahad2024dualstage,
title={A Dual-Stage Framework for Cardiovascular Abnormalities Diagnosis from ECG Signals Using CA-GNN and Semi-Supervised Autoencoders},
author={Fahad, N. M. and Rahman, M. A. and Jakarea, M. and Jonkman, M. and Azam, S.},
journal={Signal, Image and Video Processing},
year={2024}}`
    },
    {
        id: 'sutradhar2025cade',
        type: 'under-review', year: 2025,
        title: 'CADE: A lightweight change-adaptive dual-path encoder framework for predicting and generating future changes in satellite imagery using semi-supervised learning',
        authors: 'Sutradhar, D.; <strong><u>Rahman, M. A.</u></strong>; Mannan, Z. I.; Azid, S. I.; Jonkman, M.; Azam, S.',
        venue: 'TO SUBMIT',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{sutradhar2025cade,
title={CADE: A lightweight change-adaptive dual-path encoder framework for predicting and generating future changes in satellite imagery using semi-supervised learning},
author={Sutradhar, D. and Rahman, M. A. and Mannan, Z. I. and Azid, S. I. and Jonkman, M. and Azam, S.},
journal={TO SUBMIT},
year={2025}}`
    },
    {
        id: 'ahmed2025colorectal',
        type: 'under-review', year: 2025,
        title: 'Predicting Post-Resection Colorectal Liver Metastases Recurrence using Advanced Graph Neural Networks with Explainability and Causal Inference',
        authors: 'Ahmed, J.; <strong><u>Rahman, M. A.</u></strong>; Azam, S.',
        venue: 'Advanced Intelligent Systems',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{ahmed2025colorectal,
title={Predicting Post-Resection Colorectal Liver Metastases Recurrence using Advanced Graph Neural Networks with Explainability and Causal Inference},
author={Ahmed, J. and Rahman, M. A. and Azam, S.},
journal={Advanced Intelligent Systems},
year={2025}}`
    },
    {
        id: 'alam2025parkinson',
        type: 'under-review', year: 2025,
        title: 'Quantitative measurement of Parkinson disease progression using DaTscan radiomics and clinical features with a machine learning based approach',
        authors: 'Alam, M. M.; Rahman, S. S.; Chowa, S. S.; <strong><u>Rahman, M. A.</u></strong>; Islam, M. R.; Azam, S.',
        venue: 'International Journal of Intelligent Systems',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{alam2025parkinson,
title={Quantitative measurement of Parkinson disease progression using DaTscan radiomics and clinical features with a machine learning based approach},
author={Alam, M. M. and Rahman, S. S. and Chowa, S. S. and Rahman, M. A. and Islam, M. R. and Azam, S.},
journal={International Journal of Intelligent Systems},
year={2025}}`
    },
    {
        id: 'raiaan2024dementia',
        type: 'under-review', year: 2024,
        title: 'Investigating Dementia Patterns by Machine Learning and Brain MRI Using Weakly-Supervised Multimodal Classification',
        authors: 'Raiaan, M. A. K.; <strong><u>Rahman, M. A.</u></strong>; Jonkman, M.; Azam, S.',
        venue: 'Neural Computing and Applications',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: `@article{raiaan2024dementia,
title={Investigating Dementia Patterns by Machine Learning and Brain MRI Using Weakly-Supervised Multimodal Classification},
author={Raiaan, M. A. K. and Rahman, M. A. and Jonkman, M. and Azam, S.},
journal={Neural Computing and Applications},
year={2024}}`
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
        } else if (!p.ga) {
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