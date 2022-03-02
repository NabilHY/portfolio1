const btn = document.querySelector('.mobile-menu-btn');
const ham = document.querySelector('.ham');
const menu = document.querySelector('.mobile-menu');
const menuTag = document.querySelectorAll('.mobile-menu a');

btn.addEventListener('click', () => {
  menu.classList.toggle('none');
});

ham.addEventListener('click', () => {
  menu.classList.toggle('none');
});

menuTag.forEach((elem) => {
  elem.addEventListener('click', () => {
    menu.classList.add('none');
  });
});

// modal implementation
const modalContainer = document.querySelector('.modal-container');
const workBtns = document.querySelectorAll('.project');

const workData = [
  {
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLore",
    ImgUrl: 'SnapshootPortfolio(1).png',
    tech: ['HTML', 'css', 'javascript'],
    demoUrl: 'https://nabilhy.github.io/portfolio1/',
    gitUrl: 'https://github.com/NabilHY/portfolio1',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    ImgUrl: 'SnapshootPortfolio(3).png',
    tech: ['HTML', 'css', 'javascript'],
    demoUrl: 'https://nabilhy.github.io/portfolio1/',
    gitUrl: 'https://github.com/NabilHY/portfolio1',
  },
  {
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLore",
    ImgUrl: 'SnapshootPortfolio(1).png',
    tech: ['HTML', 'css', 'javascript'],
    demoUrl: 'https://nabilhy.github.io/portfolio1/',
    gitUrl: 'https://github.com/NabilHY/portfolio1',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    ImgUrl: 'SnapshootPortfolio(3).png',
    tech: ['HTML', 'css', 'javascript'],
    demoUrl: 'https://nabilhy.github.io/portfolio1/',
    gitUrl: 'https://github.com/NabilHY/portfolio1',
  },
];

// create modal

function generateModal({
  ImgUrl, name, description, tech, demoUrl, gitUrl,
}) {
  const modal = document.createElement('div');
  modal.classList.add('modal-layer');
  modal.innerHTML = `
    <div class="modal-container-top">
    <h3>${name}</h3>
    <img class="cross" src="images/Icon.svg" alt="${name}">
  </div>
  <div class="dots">
    <p class="points">CANOPY</p>
    <img class="tonic" src="images/Counter.png" alt="counter" />
    <p class="soft-color">Back End Dev</p>
    <img class="tonic" src="images/Counter.png" alt="counter" />
    <p class="soft-color">2015</p>
  </div>
  <img src="images/${ImgUrl}" alt="${name}">
  <p class="modal-description">${description}</p>
  <ul class="modalfr">
  ${tech.map(
    (tech) => `<li>
        ${tech}
      </li>`,
  )}
  </ul>
  <div class="modalButtons">
    <a  href="${demoUrl}" class="modalbutton" type="button">See Project<img src="images/Icon.png" alt="mdlbtn"></a>
    <a  href="${gitUrl}" class="modalbutton" type="button">See Project<img src="images/Frame.png" alt="mdlbtn"></a>
  </div>
    `;
  modalContainer.appendChild(modal);
}
function closeBtn() {
  document.querySelector('.cross').addEventListener('click', () => {
    modalContainer.classList.remove('active');
    // document.body.classList.remove('no-scroll');
  });
}

workBtns.forEach((workBtn) => {
  workBtn.addEventListener('click', () => {
    modalContainer.innerHTML = '';
    generateModal(workData[workBtn.dataset.id]);
    closeBtn();
    modalContainer.classList.add('active');
    // document.body.classList.add('no-scroll');
  });
});