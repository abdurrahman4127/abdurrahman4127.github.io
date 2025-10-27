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
        authors: '<strong><u>Rahman, M. A.</u></strong>; Hasan, M. T.; Howlader, U. F.; Kader, M. A.; Islam, M. M.; Pham, P. H.; Hassan, M. M.<sup><a href="mailto:motaharul@cse.uiu.ac.bd"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>IEEE Access</i>',
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
        authors: 'Debnath, R. K.; <strong><u>Rahman, M. A.</u></strong>; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>; Zhang, Y.; Jonkman, M.',
        venue: '<i>Journal of Cancer Research and Clinical Oncology</i>',
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
    {
        id: 'ahmed2025colorectal',
        type: 'in-production', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 6.1', accepted: 'Thu, Oct 9, 2025',
        title: 'Predicting Post-Resection Colorectal Liver Metastases Recurrence using Advanced Graph Neural Networks with Explainability and Causal Inference',
        authors: 'Ahmed, J.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<i>Advanced Intelligent Systems</i>',
        doi: '',
        // https://doi.org/10.1002/aisy.202500596
        pdf: '',
        ga: 'graphical_abstract/jubair2025predicting.png',
        abstract: "Colorectal liver metastases (CRLM) are a significant challenge in oncology, as recurrence after liver resection is frequently observed. Accurate prediction of CRLM recurrence is important to guide specific treatment strategies and improve clinical outcomes. To address this issue, this study proposes a novel framework. To the best of our knowledge, we are the first to integrate Graph Neural Networks (GNNs) and causal inference to predict post-resection CRLM recurrence using clinical and pathological characteristics. In addition, a GNNExplainer framework is also utilized for the interpretability of the models beyond predictive accuracy. Our proposed framework identifies the factors of recurrence and their impact on patient outcomes, not only providing predictions to clinicians but also explaining the underlying reasons. Furthermore, causal inference strengthened the model by confirming factors. The relevance of these variables is also shown through counterfactual and interventional analyses, allowing for more evidence-based choices. The GCN model of our framework exhibits high performance with test accuracy of 99.40%, F1-score of 99.21%, and receiver operating characteristic area under the curve (ROC AUC) of 99.97%. An extensive evaluation shows the clinical applicability of the proposed framework.",
        bibtex: `Manuscript is accepted on 9 Oct, 2025, and is now under the production team.`
    },
    {
        id: 'raiaan2025diffusion',
        type: 'in-production', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 6.3', accepted: 'Mon, Oct 27, 2025',
        title: 'Diffusion-based knowledge distillation for effective multi-organ segmentation with reduced computational time',
        authors: 'Raiaan, M. A. K.<sup>*</sup>; <strong><u>Rahman, M. A.<sup>*</sup></u></strong>; Yeo, K. C.; Sebastian, Y.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup> <br> (Joint first author<sup>*</sup>)',
        venue: '<i>Computers in Biology and Medicine</i>',
        doi: '',
        pdf: '',
        ga: 'graphical_abstract/raiaan2025diffusion.png',
        abstract: 'Accurate and efficient multi-organ segmentation is crucial for clinical workflows, requiring high accuracy and reduced computational time. In this research, we propose a 3D diffusion-based knowledge distillation framework (3DKD-DiffuseNet) for multi-organ segmentation to achieve higher accuracy with reduced computational time. The core idea is to enhance the training of a lightweight student model by integrating a diffusion mechanism that guides feature learning during knowledge transfer from a high-capacity teacher model. Unlike conventional distillation approaches that rely solely on soft label supervision, our framework incorporates a diffusion consistency loss that encourages the student to learn stable and spatially coherent representations. To further improve computational efficiency, we introduce an organ-specific intensity thresholding strategy, which localizes regions of interest and reduces unnecessary processing without sacrificing critical anatomical detail. The model is validated on both MRI and CT modalities for brain tumor segmentation (BraTS benchmark) and abdominal organ segmentation (RAOS) tasks. On the BraTS benchmark datasets, it achieved outstanding Dice scores for high-grade and low-grade tumors, outperforming the teacher model by 3-5% across all modalities. On the RAOS dataset, it similarly delivered excellent Dice scores, with improvements of 3-6% for critical organs compared to other state-of-the-art (SOTA) models. Experiment shows that the model also achieved a 2-3× reduction in computational time due to strategic preprocessing. Our diffusion-based student model, supported by strategic preprocessing, offers enhanced segmentation accuracy and computational efficiency, making it suitable for clinical applications that require fast and reliable analysis.',
        bibtex: `Manuscript is accepted on 27 Oct, 2025, and is now under the production team.`
    },

    // --- Conferences ---
    {
        id: 'hasan2023data',
        type: 'conference', year: 2023, accepted: 'Tue, Nov 14, 2023',
        title: 'Data Segmentation with Improved K-Means Clustering Algorithm',
        authors: 'Hasan, E.; <strong><u>Rahman, M. A.</u></strong>; Talukder, M. S.; Utsho, M. F.; Shakhan, M.; Farid, D. M.',
        venue: '<i>2023 26th International Conference on Computer and Information Technology (ICCIT)</i>',
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
        id: 'rahman2025refrm3d',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 7.6',
        title: 'ReFRM3D: A radiomics-enhanced fused residual multiparametric 3D network with multi-scale feature fusion for glioma characterization',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Abian, A. I.; Zhang, Y.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>Knowledge-Based Systems</i>',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'rahman2025weckd',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 3.5', accepted: 'Fri, Oct 17, 2025',
        title: 'WeCKD: Weakly-supervised Chained Distillation Network for Efficient Multimodal Medical Imaging',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>; Karim, A.; Beissbarth, J.; & Leach, A.',
        venue: '<strong>Under review at</strong> <i>IEEE Transactions on Radiation and Plasma Medical Sciences</i>',
        doi: 'https://doi.org/10.48550/arXiv.2510.14668',
        ga: 'graphical_abstract/rahman2025weckd.png',
        pdf: 'https://arxiv.org/pdf/2510.14668',
        abstract: "Knowledge distillation (KD) has traditionally relied on a static teacher-student framework, where a large, well-trained teacher transfers knowledge to a single student model. However, these approaches often suffer from knowledge degradation, inefficient supervision, and reliance on either a very strong teacher model or large labeled datasets, which limits their effectiveness in real-world, limited-data scenarios. To address these, we present the first-ever Weakly-supervised Chain-based KD network (WeCKD) that redefines knowledge transfer through a structured sequence of interconnected models. Unlike conventional KD, it forms a progressive distillation chain, where each model not only learns from its predecessor but also refines the knowledge before passing it forward. This structured knowledge transfer further enhances feature learning, reduces data dependency, and mitigates the limitations of one-step KD. Each model in the distillation chain is trained on only a fraction of the dataset and demonstrates that effective learning can be achieved with minimal supervision. Extensive evaluations across four otoscopic imaging datasets demonstrate that it not only matches but in many cases surpasses the performance of existing supervised methods. Experimental results on two other datasets further underscore its generalization across diverse medical imaging modalities, including microscopic and magnetic resonance imaging. Furthermore, our evaluations resulted in cumulative accuracy gains of up to +23% over a single backbone trained on the same limited data, which highlights its potential for real-world adoption.",
        bibtex: `@article{rahman2025weckd,
  title={WeCKD: Weakly-supervised Chained Distillation Network for Efficient Multimodal Medical Imaging},
  author={Rahman, Md Abdur and Raiaan, Mohaimenul Azam Khan and Azam, Sami and Karim, Asif and Beissbarth, Jemima and Leach, Amanda},
  journal={arXiv preprint arXiv:2510.14668},
  year={2025}
}`},
    {
        id: 'rahman2025metal',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 6.3',
        title: 'METAL: An Advanced Meta-Enhanced Tumor Adaptive Learning Framework for Brain Tumor Segmentation with Partial Modalities',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Abian, A. I.; Alam, M. M.; Y., Mukta, S.; Shourav, S. A.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>Computers in Biology and Medicine</i>',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'rahman2025arionet',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 7.5', accepted: 'Wed, 1 Oct, 2025',
        title: 'ARIONet: An Advanced Self-supervised Contrastive Representation Network for Birdsong Classification and Future Frame Prediction',
        authors: '<strong><u>Rahman, M. A.</u></strong>; Thuseethan, S.; Yeo, K. C.; Mohamed, R. E.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>Expert Systems with Applications</i>',
        doi: 'https://doi.org/10.48550/arXiv.2510.00522',
        ga: 'graphical_abstract/rahman2025arionet.png',
        pdf: 'https://arxiv.org/pdf/2510.00522',
        abstract: "Automated birdsong classification is essential for advancing ecological monitoring and biodiversity studies. Despite recent progress, existing methods often depend heavily on labeled data, use limited feature representations, and overlook temporal dynamics essential for accurate species identification. In this work, we propose a self-supervised contrastive network, ARIONet (Acoustic Representation for Interframe Objective Network), that jointly optimizes contrastive classification and future frame prediction using augmented audio representations. The model simultaneously integrates multiple complementary audio features within a transformer-based encoder model. Our framework is designed with two key objectives: (1) to learn discriminative species-specific representations for contrastive learning through maximizing similarity between augmented views of the same audio segment while pushing apart different samples, and (2) to model temporal dynamics by predicting future audio frames, both without requiring large-scale annotations. We validate our framework on four diverse birdsong datasets, including the British Birdsong Dataset, Bird Song Dataset, and two extended Xeno-Canto subsets (A-M and N-Z). Our method consistently outperforms existing baselines and achieves classification accuracies of 98.41%, 93.07%, 91.89%, and 91.58%, and F1-scores of 97.84%, 94.10%, 91.29%, and 90.94%, respectively. Furthermore, it demonstrates low mean absolute errors and high cosine similarity, up to 95%, in future frame prediction tasks. Extensive experiments further confirm the effectiveness of our self-supervised learning strategy in capturing complex acoustic patterns and temporal dependencies, as well as its potential for real-world applicability in ecological conservation and monitoring.",
        bibtex: `@airticle{rahman2025arionet,
	title={ARIONet: An Advanced Self-supervised Contrastive Representation Network for Birdsong Classification and Future Frame Prediction}, 
	author={Md. Abdur Rahman and Selvarajah Thuseethan and Kheng Cher Yeo and Reem E. Mohamed and Sami Azam},
	year={2025},
	eprint={2510.00522},
	archivePrefix={arXiv},
	primaryClass={cs.SD},
	url={https://arxiv.org/abs/2510.00522}, 
}`
    },
    {
        id: 'rahman2025finegrained',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 7.5', accepted: 'Sun, Sept 7, 2025',
        title: 'A Fine-Grained Attention and Geometric Correspondence Model for Musculoskeletal Risk Classification in Athletes Using Multimodal Visual and Skeletal Features',
        authors: '<strong><u>Rahman, M. A.<sup>*</sup></u></strong>; Raiaan, M. A. K.<sup>*</sup>; Shermin, T.; Islam, M. R.; Hussain, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup> <br> (Joint first author<sup>*</sup>)',
        venue: '<strong>Under review at</strong> <i>Expert Systems with Applications</i>',
        doi: 'https://doi.org/10.48550/arXiv.2509.05913',
        ga: 'graphical_abstract/rahman2025finegrained.png',
        pdf: 'https://arxiv.org/pdf/2509.05913',
        abstract: "Musculoskeletal disorders pose significant risks to athletes, and assessing risk early is important for prevention. However, most existing methods are designed for controlled settings and fail to reliably assess risk in complex environments due to their reliance on a single type of data. This research proposes ViSK-GAT (Visual-Skeletal Geometric Attention Transformer), a novel multimodal deep learning framework designed to classify musculoskeletal risk using visual and skeletal coordinate-based features. In addition, a custom multimodal dataset is constructed by combining visual data and skeletal coordinates for risk assessment. Each sample is labeled into eight risk categories based on the Rapid Entire Body Assessment system. ViSK-GAT combines a Residual Block with a Lightweight Transformer Block to learn spatial and temporal dependencies jointly. It incorporates two novel modules: the Fine-Grained Attention Module (FGAM), which enables precise inter-modal feature refinement through cross-attention between visual and skeletal inputs, and the Multimodal Geometric Correspondence Module (MGCM), which enhances cross-modal coherence by aligning image features with coordinate-based representations. ViSK-GAT achieved strong performance with validation and test accuracies of 93.55% and 93.89%, respectively; a precision of 93.86%; an F1 score of 93.85%; and Cohen's Kappa and Matthews Correlation Coefficient of 93%. The regression results also indicated a low Root Mean Square Error of the predicted probability distribution of 0.1205 and a corresponding Mean Absolute Error of 0.0156. Compared to nine popular transfer learning backbones, ViSK-GAT consistently outperformed previous methods. The ViSK-GAT model advances artificial intelligence implementation and application, transforming musculoskeletal risk classification and enabling impactful early interventions in sports.",
        bibtex: `@article{rahman2025fine,
  title={A Fine-Grained Attention and Geometric Correspondence Model for Musculoskeletal Risk Classification in Athletes Using Multimodal Visual and Skeletal Features},
  author={Rahman, Md Abdur and Raiaan, Mohaimenul Azam Khan and Shermin, Tamanna and Islam, Md Rafiqul and Hussain, Mukhtar and Azam, Sami},
  journal={arXiv preprint arXiv:2509.05913},
  year={2025}
}`
    },
    {
        id: 'sutradhar2025sourcefree',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 13.7',
        title: 'A source-free approach for domain adaptation via multiview image transformation and latent space consistency',
        authors: 'Sutradhar, D.<sup>*</sup>; <strong><u>Rahman, M. A.<sup>*</sup></u></strong>; Raiaan, M. A. K.; Mohamed, R. E.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup> <br> (Joint first author<sup>*</sup>)',
        venue: '<strong>Under review at</strong> <i>IEEE Transactions on Image Processing</i>',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'abian2025hansnet',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 3.5', accepted: 'Tue, Jul 15, 2025',
        title: 'HANS-Net: Hyperbolic convolution and adaptive temporal attention for accurate and generalizable liver and tumor segmentation in CT imaging',
        authors: 'Abian, A. I.; Debnath, R. K.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Islam, M. R.; Karim, A.; Mohamed, R. E.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>IEEE Transactions on Radiation and Plasma Medical Sciences</i>',
        doi: 'https://doi.org/10.48550/arXiv.2507.11325',
        ga: 'graphical_abstract/abian2025hans.png',
        pdf: 'https://arxiv.org/pdf/2507.11325',
        abstract: 'Accurate liver and tumor segmentation on abdominal CT images is critical for reliable diagnosis and treatment planning, but remains challenging due to complex anatomical structures, variability in tumor appearance, and limited annotated data. To address these issues, we introduce Hyperbolic-convolutions Adaptive-temporal-attention with Neural-representation and Synaptic-plasticity Network (HANS-Net), a novel segmentation framework that synergistically combines hyperbolic convolutions for hierarchical geometric representation, a wavelet-inspired decomposition module for multi-scale texture learning, a biologically motivated synaptic plasticity mechanism for adaptive feature enhancement, and an implicit neural representation branch to model fine-grained and continuous anatomical boundaries. Additionally, we incorporate uncertainty-aware Monte Carlo dropout to quantify prediction confidence and lightweight temporal attention to improve inter-slice consistency without sacrificing efficiency. Extensive evaluations of the LiTS dataset demonstrate that HANS-Net achieves a mean Dice score of 93.26%, an IoU of 88.09%, an average symmetric surface distance (ASSD) of 0.72 mm, and a volume overlap error (VOE) of 11.91%. Furthermore, cross-dataset validation on the 3D-IRCADb-01 dataset obtains an average Dice of 87.45%, IoU of 80.30%, ASSD of 1.525 mm, and VOE of 19.71%, indicating strong generalization across different datasets. These results confirm the effectiveness and robustness of HANS-Net in providing anatomically consistent, accurate, and confident liver and tumor segmentation.',
        bibtex: `@article{abian2025hans,
  title={HANS-Net: Hyperbolic Convolution and Adaptive Temporal Attention for Accurate and Generalizable Liver and Tumor Segmentation in CT Imaging},
  author={Abian, Arefin Ittesafun and Debnath, Ripon Kumar and Rahman, Md Abdur and Raiaan, Mohaimenul Azam Khan and Islam, Md Rafiqul and Karim, Asif and Mohamed, Reem E and Azam, Sami},
  journal={arXiv preprint arXiv:2507.11325},
  year={2025}
}`
    },
    {
        id: 'debnath2025ssmtconed',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 4.9',
        title: 'SSMT-ConED: A semi-supervised student–teacher framework with contrastive learning and generative adversarial network-based augmentation for robust multi-organ segmentation across CT and MRI modalities',
        authors: 'Debnath, R. K.; Raiaan, M. A. K.; <strong><u>Rahman, M. A.</u></strong>; Selvarajah, T.; Yeo, K. C.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>Biomedical Signal Processing and Control</i>',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'rahman2025hallucination',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 13.9', accepted: 'Tue, Aug 5, 2025',
        title: 'Hallucination to truth: A review of fact-checking and factuality evaluation in large language models',
        authors: 'Rahman, S. S.; Islam, M. A.; Alam, M. M.; Zeba, M.; <strong><u>Rahman, M. A.</u></strong>; Chowa, S. S.; Raiaan, M. A. K.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>Artificial Intelligence Review</i>',
        doi: 'https://doi.org/10.48550/arXiv.2508.03860',
        ga: 'graphical_abstract/rahman2025hallucination.png',
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
        id: 'fahad2024dualstage',
        type: 'under-review', year: 2025, quartile: 'Q2', imf: 'Impact Factor: 2.1',
        title: 'A Dual-Stage Framework for Cardiovascular Abnormalities Diagnosis from ECG Signals Using CA-GNN and Semi-Supervised Autoencoders',
        authors: 'Fahad, N. M.; <strong><u>Rahman, M. A.</u></strong>; Jakarea, M.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>Signal, Image and Video Processing</i>',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'sutradhar2025cade',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: '',
        title: 'CADE: A lightweight change-adaptive dual-path encoder framework for predicting and generating future changes in satellite imagery using semi-supervised learning',
        authors: 'Sutradhar, D.; <strong><u>Rahman, M. A.</u></strong>; Mannan, Z. I.; Azid, S. I.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>Neural Computing and Applications</i>',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'alam2025parkinson',
        type: 'under-review', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 3.7',
        title: 'Quantitative measurement of Parkinson disease progression using DaTscan radiomics and clinical features with a machine learning based approach',
        authors: 'Alam, M. M.; Rahman, S. S.; Chowa, S. S.; <strong><u>Rahman, M. A.</u></strong>; Islam, M. R.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>International Journal of Intelligent Systems</i>',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    },
    {
        id: 'chowa2025languageactionreviewlarge',
        type: 'preprint', year: 2025, quartile: 'Q1', imf: 'Impact Factor: 13.9', accepted: 'Tue, Aug 24, 2025',
        title: 'From Language to Action: A Review of Large Language Models as Autonomous Agents and Tool Users',
        authors: 'Chowa, S. S.; Alvi, R.;  Rahman, S. S.; <strong><u>Rahman, M. A.</u></strong>; Raiaan, M. A. K.; Islam, M. R.; Hussain, M; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup>',
        venue: '<strong>Under review at</strong> <i>Artificial Intelligence Review</i>',
        doi: 'https://doi.org/10.48550/arXiv.2508.17281',
        ga: 'graphical_abstract/chowa2025languageactionreviewlarge.png',
        pdf: 'https://arxiv.org/pdf/2508.17281',
        abstract: "The pursuit of human-level artificial intelligence (AI) has significantly advanced the development of autonomous agents and Large Language Models (LLMs). LLMs are now widely utilized as decision-making agents for their ability to interpret instructions, manage sequential tasks, and adapt through feedback. This review examines recent developments in employing LLMs as autonomous agents and tool users and comprises seven research questions. We only used the papers published between 2023 and 2025 in conferences of the A* and A rank and Q1 journals. A structured analysis of the LLM agents' architectural design principles, dividing their applications into single-agent and multi-agent systems, and strategies for integrating external tools is presented. In addition, the cognitive mechanisms of LLM, including reasoning, planning, and memory, and the impact of prompting methods and fine-tuning procedures on agent performance are also investigated. Furthermore, we evaluated current benchmarks and assessment protocols and have provided an analysis of 68 publicly available datasets to assess the performance of LLM-based agents in various tasks. In conducting this review, we have identified critical findings on verifiable reasoning of LLMs, the capacity for self-improvement, and the personalization of LLM-based agents. Finally, we have discussed ten future research directions to overcome these gaps.",
        bibtex: `@misc{chowa2025languageactionreviewlarge,
      title={From Language to Action: A Review of Large Language Models as Autonomous Agents and Tool Users}, 
      author={Sadia Sultana Chowa and Riasad Alvi and Subhey Sadi Rahman and Md Abdur Rahman and Mohaimenul Azam Khan Raiaan and Md Rafiqul Islam and Mukhtar Hussain and Sami Azam},
      year={2025},
      eprint={2508.17281},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2508.17281}, 
}}`
    },
    {
        id: 'fahad2025dinvestigating',
        type: 'under-review', year: 2025,
        // quartile: 'Q1', imf: 'Impact Factor: 3.7',
        title: 'Investigating Dementia Patterns by Machine Learning and Graph-Based Marker Analysis Integrating Deterministic Finite Automata for Multiclass Dementia Diagnosis',
        authors: 'Fahad, N. M.; Sutradhar, D.<sup>*</sup>; <strong><u>Rahman, M. A.<sup>*</sup></u></strong>; Sakib, S.<sup>*</sup>; Islam, M. R.; Jonkman, M.; Azam, S.<sup><a href="mailto:sami.azam@cdu.edu.au"><i class="fa fa-envelope"></i></a></sup> <br> (Equal contribution<sup>*</sup>)',
        venue: '<strong>Under review at</strong> <i>Discover Computing</i>',
        doi: '#',
        pdf: '#',
        abstract: '',
        bibtex: ``
    }
];



const pubList = document.getElementById('pubList');
const switches = [...document.querySelectorAll('.switch')];
const input = document.getElementById('pubSearch');

function render(filter = 'all', query = '') {
    pubList.innerHTML = '';
    const q = query.trim().toLowerCase();
    // const items = publications
    //     .filter(p => filter === 'all' || p.type === filter)
    //     .filter(p => !q || [p.title, p.venue, p.authors, p.year].join(' ').toLowerCase().includes(q))
    //     .sort((a, b) => b.year - a.year);
    const items = publications
        .filter(p => filter === 'all' || p.type === filter)
        // Only remove duplicates when viewing "all"
        .filter(p => {
            if (filter === 'all' && p.type === 'preprint') {
                const baseId = p.id.replace('_preprint', '');
                return !publications.some(q => q.id === baseId && q.type === 'under-review');
            }
            return true;
        })
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

        } else if (p.type === 'in-production') {
            details.innerHTML = `
            <div class="pub-details-grid">
                <div style="flex:1">
                    <img class="ga" src="${p.ga}" alt="Graphical Abstract"
                        onerror="this.style.background='repeating-linear-gradient(45deg,#202a53,#202a53 10px,#253061 10px,#253061 20px)'">
                </div>
                <div style="flex:1">
                    <p style="margin-top:0; margin-bottom:10px;"><strong>Accepted for publication on:</strong> ${p.accepted || '—'}</p>
                    <div class="pub-actions">
                    <button class="btn show-abstract" data-abstract="${encodeURIComponent(p.abstract || 'Abstract not available')}">Abstract</button>
                    </div>
                    <div class="bib">${p.bibtex}</div>
                </div>
            </div>
        `;

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
