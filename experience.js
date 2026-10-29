// Interactive Experience section: click a role to branch out its details.
(() => {
  const root = document.getElementById('experience');
  if (!root) return;

  const experienceDetails = [
    {
      title: "Associate Director",
      tasks: [
        "Since March 2026, I have been serving as an Associate Director at the Applied Artificial Intelligence and Intelligent Systems (AAIINS) Lab. At AAIINS, I am responsible for coordinating research activities, mentoring graduate and undergraduate researchers, and leading multiple research teams.",
        "To learn more about AAIINS, visit the lab's <a href='https://aaiins-lab.com/' target='_blank' rel='noopener'>website</a> or its <a href='https://www.linkedin.com/company/applied-artificial-intelligence-intelligent-systems-laboratory' target='_blank' rel='noopener'>LinkedIn page</a>."
      ]
    },
    {
      title: "Research Assistant",
      tasks: [
        "Worked as a Research Assistant at the <a href='https://iar.uiu.ac.bd/' target='_blank' rel='noopener'>Institute for Advanced Research</a> (IAR), United International University (UIU), on an IAR grant (Grant ID: <b>UIU-IAR-02-2023-SE-23</b>) in collaboration with <a href='https://www.cdu.edu.au/' target='_blank' rel='noopener'>Charles Darwin University</a>, Australia, and <a href='https://www.lut.fi/en' target='_blank' rel='noopener'>LUT University</a>, Finland.",
        "We developed (1) a bi-level meta-learning framework with an adversarial modality discriminator and lightweight adapters for segmentation with missing MRI modalities, and (2) a radiomics-guided domain-adversarial network for unsupervised adaptation between high- and low-grade glioma imaging domains.",
        "For both projects, the PI(s) were <a href='https://cse.uiu.ac.bd/faculty/shoib/' target='_blank' rel='noopener'>A/Prof. Shoib Ahmed Shourav</a> (UIU, internal) and <a href='https://researchers.cdu.edu.au/en/persons/sami-azam/' target='_blank' rel='noopener'>Prof. Sami Azam</a> (CDU, external)."
      ]
    },
    {
      title: "Researcher",
      tasks: [
        "In August 2023, during my fourth year of undergraduate study, I joined the Applied Artificial Intelligence and Intelligent Systems (AAIINS) Lab under the supervision of <a href='https://researchers.cdu.edu.au/en/persons/sami-azam/' target='_blank' rel='noopener'>Prof. Sami Azam</a> (IT Discipline Chair at the Faculty of Science and Technology, Charles Darwin University), and was mentored by <a href='https://mak-raiaan.github.io/' target='_blank' rel='noopener'>MAK Raiaan</a> (Monash University, DSAI).",
        "Contributed to more than seven research projects involving machine learning, 3D computer vision, and signal processing. My primary focus was on data-efficient learning (unsupervised, semi-supervised, self-supervised, and weakly supervised), domain adaptation, diffusion, and knowledge distillation for clinical and environmental applications."
      ]
    },
    {
      title: "Undergraduate Assistant",
      tasks: [
        "During Summer 2024, I served as an Undergraduate Assistant for the Object-Oriented Programming Laboratory (CSE 1116) in the Department of Computer Science and Engineering at United International University, working with the course faculty member, <a href='https://mahim05078.github.io/' target='_blank' rel='noopener'>Md Mohaiminul Islam</a>.",
        "I assisted the lecturer during laboratory sessions, helped students with programming exercises, and held counselling sessions for students seeking coding assistance."
      ]
    },
    {
      title: "Undergraduate Grader",
      tasks: [
        "I served as an Undergraduate Grader for the Computer Networks course (CSE 3711) in the Department of Computer Science and Engineering at United International University, working with lecturers <a href='https://cse.uiu.ac.bd/faculty/raihan-md-tanvir/' target='_blank' rel='noopener'>Md. Tanvir Raihan</a> and <a href='https://cse.uiu.ac.bd/faculty/muntaha-sidratul/' target='_blank' rel='noopener'>Muntaha Sidratul</a>.",
        "My responsibilities included preparing assessment questionnaires and grading class tests."
      ]
    }
  ];

  const items = root.querySelectorAll('.xp-item');
  const container = root.querySelector('.xp-container');
  const tree = root.querySelector('#xpTree');
  const svg = root.querySelector('#xpLines');
  const accent = getComputedStyle(root).getPropertyValue('--xp-accent').trim() || '#3b82f6';
  let activeIndex = -1;
  let lastWidth = window.innerWidth;

  function getBoundary() {
    const treeRect = tree.getBoundingClientRect();
    const top = items[0].getBoundingClientRect().top - treeRect.top;
    const bottom = items[items.length - 1].getBoundingClientRect().bottom - treeRect.top;
    return { top, bottom, height: bottom - top };
  }

  function clearAll() {
    activeIndex = -1;
    tree.querySelectorAll('.xp-box').forEach(t => t.remove());
    svg.innerHTML = '';
    items.forEach(i => i.classList.remove('active', 'dimmed'));
  }

  function openItem(index, restart = false) {
    const item = items[index];
    if (activeIndex === index && !restart) return;   // was: if (activeIndex === index) return;
    items.forEach(i => {
      i.classList.remove('active');
      i.classList.add('dimmed');
    });

    item.classList.add('active');
    item.classList.remove('dimmed');
    activeIndex = index;

    tree.querySelectorAll('.xp-box').forEach(t => t.remove());
    svg.innerHTML = '';

    const details = experienceDetails[index];
    const containerRect = container.getBoundingClientRect();
    const treeRect = tree.getBoundingClientRect();
    const roleRect = item.querySelector('.xp-role').getBoundingClientRect();
    const boundary = getBoundary();

    // All SVG points are measured from the container's top-left.
    const startX = roleRect.right - containerRect.left;
    const startY = roleRect.top + roleRect.height / 2 - containerRect.top;

    const boxWidth = Math.max(220, Math.min(400, treeRect.width - 36));
    const boxHeight = Math.max(260, boundary.height * 0.9);
    const boxX = Math.max(18, (treeRect.width - boxWidth) / 2);
    const actualBoxHeight = Math.min(boxHeight, boundary.height);
    const boxY = boundary.top + (boundary.height - actualBoxHeight) / 2;

    const box = document.createElement('div');
    box.className = 'xp-box';
    box.style.left = `${boxX}px`;
    box.style.top = `${boxY}px`;
    box.style.width = `${boxWidth}px`;
    box.style.height = `${actualBoxHeight}px`;

    let html = `<h3>${details.title}</h3><ul>`;
    details.tasks.forEach(task => { html += `<li>${task}</li>`; });
    html += '</ul>';
    box.innerHTML = html;
    tree.appendChild(box);

    // const endX = treeRect.left - containerRect.left + boxX;
    // const topY = treeRect.top - containerRect.top + boxY;
    // const bottomY = topY + actualBoxHeight;
    const endX = treeRect.left - containerRect.left + boxX;
    const topY = treeRect.top - containerRect.top + boxY + 1;                         // was: + boxY
    const bottomY = treeRect.top - containerRect.top + boxY + actualBoxHeight - 1;    // was: topY + actualBoxHeight
    const bendX = Math.min(endX - 24, startX + Math.max(48, (endX - startX) * 0.55));

    // Two smooth branches: one to the box top, one to the box bottom.
    svg.innerHTML = `
        <path d="M ${startX} ${startY} C ${bendX} ${startY}, ${bendX} ${topY}, ${endX} ${topY}"
              fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round" />
        <path d="M ${startX} ${startY} C ${bendX} ${startY}, ${bendX} ${bottomY}, ${endX} ${bottomY}"
              fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round" />
      `;

    svg.querySelectorAll('path').forEach((line, i) => {
      const length = line.getTotalLength();
      line.style.strokeDasharray = length;
      line.style.strokeDashoffset = length;
      line.style.transition = `stroke-dashoffset 0.3s ease-out ${i * 0.04}s`;   // was 0.5s ease, 0.1s stagger
      requestAnimationFrame(() => requestAnimationFrame(() => {                // was: setTimeout(..., 50)
        line.style.strokeDashoffset = '0';
      }));
    });

    setTimeout(() => box.classList.add('visible'), 120);
  }

  // Hover opens a role; the box stays open while the pointer is anywhere in the
  // Experience area (list, connectors, box) and closes shortly after it leaves.
  const canHover = () => window.matchMedia('(hover: hover)').matches;
  let leaveTimer, enterTimer;

  items.forEach((item, index) => {
    item.tabIndex = 0; // keyboard users can Tab through roles
    // item.addEventListener('mouseenter', () => {
    //   clearTimeout(leaveTimer);
    //   if (!canHover()) return;
    //   // Switching roles waits a beat, so sweeping the pointer across the list
    //   // toward the box doesn't flicker through every role on the way.
    //   clearTimeout(enterTimer);
    //   if (activeIndex === -1) openItem(index);
    //   else enterTimer = setTimeout(() => openItem(index), 130);
    // });

    item.addEventListener('mouseenter', () => {
      clearTimeout(leaveTimer);
      if (!canHover()) return;
      clearTimeout(enterTimer);
      // fresh entry (nothing open, or re-entering the open role): redraw from scratch
      if (activeIndex === -1 || activeIndex === index) openItem(index, true);
      else enterTimer = setTimeout(() => openItem(index), 80);   // switching roles keeps the short delay
    });

    item.addEventListener('mouseleave', () => clearTimeout(enterTimer));
    item.addEventListener('focus', () => openItem(index));
    item.addEventListener('click', () => {
      // Touch screens have no hover: tap opens, tap again closes.
      if (!canHover() && activeIndex === index) clearAll();
      else openItem(index);
    });
  });

  container.addEventListener('mouseenter', () => clearTimeout(leaveTimer));
  container.addEventListener('mouseleave', () => {
    if (!canHover()) return;
    leaveTimer = setTimeout(clearAll, 150);
  });

  // Connector lines are positioned in pixels, so reset if the width changes.
  window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
      lastWidth = window.innerWidth;
      if (activeIndex !== -1) clearAll();
    }
  });
})();
