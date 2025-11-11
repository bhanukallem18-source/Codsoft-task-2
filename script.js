const planetData = {
  Sun: {
    name: "Sun",
    fact: "The Sun is a G-type main-sequence star at the center of our Solar System. It contains 99.86% of the system's mass and provides the energy that sustains life on Earth.",
    color: "#ffcc33"
  },
  Mercury: {
    name: "Mercury",
    fact: "The smallest planet and closest to the Sun. One year lasts only 88 Earth days.",
    color: "#b1b1b1"
  },
  Venus: {
    name: "Venus",
    fact: "Second planet from the Sun with a toxic atmosphere and surface heat that melts lead.",
    color: "#e0b060"
  },
  Earth: {
    name: "Earth",
    fact: "Our home planet, rich with life and 71% covered by water. One year = 365 days.",
    color: "#2e9afe"
  },
  Mars: {
    name: "Mars",
    fact: "Known as the Red Planet due to iron oxide on its surface. Has the tallest volcano.",
    color: "#d94b2b"
  },
  Jupiter: {
    name: "Jupiter",
    fact: "The largest planet in our Solar System with a massive storm called the Great Red Spot.",
    color: "#d2b48c"
  },
  Saturn: {
    name: "Saturn",
    fact: "Famous for its beautiful rings made of ice and rock particles.",
    color: "#deb887"
  },
  Uranus: {
    name: "Uranus",
    fact: "An icy planet that rotates on its side! Its blue color comes from methane in its atmosphere.",
    color: "#76d7ea"
  },
  Neptune: {
    name: "Neptune",
    fact: "The farthest planet from the Sun, known for its deep blue color and strong winds.",
    color: "#4169e1"
  }
};

const modal = document.getElementById("planetModal");
const modalContent = document.getElementById("modalContent");

function openModalFor(dataObj) {
  modal.style.display = "flex";
  modalContent.innerHTML = "";
  const closeSpan = document.createElement('span');
  closeSpan.className = 'close';
  closeSpan.innerHTML = '&times;';
  closeSpan.addEventListener('click', () => { modal.style.display = 'none'; });
  const title = document.createElement('h2');
  title.style.color = dataObj.color || '#fff';
  title.textContent = dataObj.name || 'Unknown';
  const para = document.createElement('p');
  para.textContent = dataObj.fact || 'No information available.';
  modalContent.appendChild(closeSpan);
  modalContent.appendChild(title);
  modalContent.appendChild(para);
}

document.querySelectorAll('.planet').forEach(planet => {
  const key = planet.dataset ? planet.dataset.planet : null;
  planet.addEventListener('click', () => {
    const data = key ? planetData[key] : null;
    openModalFor(data || { name: key || 'Unknown', fact: 'No information available.', color: '#fff' });
  });
});

const sunEl = document.querySelector('.sun');
if (sunEl) {
  sunEl.addEventListener('click', () => {
    const data = planetData['Sun'];
    openModalFor(data);
  });
}

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

const starsContainer = document.getElementById("stars");
for (let i = 0; i < 100; i++) {
  const star = document.createElement("span");
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  starsContainer.appendChild(star);
}
