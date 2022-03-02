import workData from './data.js';

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

// works section
const workContainer = document.querySelector('.works-container');

function generateWorks({
  name, tech, ImgUrl, description,
}, index) {
  const workDiv = document.createElement('div');
  workDiv.innerHTML = `
  <section class="works">
    <div>
      <img class="scaling" src="images/${ImgUrl}" alt="${name}" />
    </div>
    <div class="points">
      <h2>${name}</h2>
      <div class="dots">
        <p>CANOPY</p>
        <img class="tonic" src="images/Counter.png" alt="counter" />
        <p class="soft-color">Back End Dev</p>
        <img class="tonic" src="images/Counter.png" alt="counter" />
        <p class="soft-color">2015</p>
      </div>
      <p class="description">${description}</p>
      <ul>
      ${tech.map((tech) => `<li>${tech}</li>`).join('')}
      </ul>
      <button data-id="${index}" class="project" type="button">See Project</button>
    </div>
  </section>

  `;
  workContainer.appendChild(workDiv);
}

workData.forEach((work, index) => {
  generateWorks(work, index);
});

// modal implementation
const modalContainer = document.querySelector('.modal-container');
const workBtns = document.querySelectorAll('.project');

// create modal

function generateModal({
  ImgUrl, name, description, tech, demoUrl, gitUrl,
}) {
  const modal = document.createElement('div');
  modal.classList.add('modal-layer');
  modal.innerHTML = `
  <div class="desktop-modal-container">
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
  <div>
  <img src="images/${ImgUrl}" alt="${name}" style="max-width: 100%; width: 100%; vertical-align: baseline;" />
  </div>
  <div class="modal-bottom">
  <div class="lmodal">
  <p class="modal-description">${description}</p>
  </div>
  <div class="rmodal">
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
  </div>
  </div>
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
