// --- Story Data ---
const stories = {
  "Let It Burn Down": {
    emoji: "🔥",
    desc: "Burning down all lies and fear.",
    textFile: "stories/let-it-burn-down.txt",
    narration: "narrations/let-it-burn-down.mp3"
  },
  "Broken Dreams": {
    emoji: "💔",
    desc: "A fallen city of dreams and the last spark of hope.",
    textFile: "stories/broken-dreams.txt",
    narration: "narrations/broken-dreams.mp3"
  }
};
const storyList = document.getElementById("storyList");
storyList.innerHTML = Object.keys(stories)
  .map(title => {
    const s = stories[title];
    return `
      <div class="story-tile" data-story="${title}">
        <div class="story-title">${s.emoji} ${title}</div>
        <div class="story-desc">${s.desc}</div>
      </div>`;
  })
  .join("");
const modal = document.getElementById("storyModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const narrationAudio = document.getElementById("narrationAudio");
const narrationBtn = document.getElementById("narrationBtn");
document.querySelectorAll(".story-tile").forEach(tile => {
  tile.addEventListener("click", async () => {
    const key = tile.dataset.story;
    const s = stories[key];
    modalTitle.textContent = `${s.emoji} ${key}`;
    modal.classList.add("active");
    try {
      const response = await fetch(s.textFile);
      const text = await response.text();
      modalText.textContent = text;
    } catch {
      modalText.textContent = "Failed to load story.";
    }
    narrationAudio.src = s.narration;
    narrationAudio.play().catch(() => {});
  });
});
function closeModal() {
  modal.classList.remove("active");
  narrationAudio.pause();
}
narrationBtn.addEventListener("click", () => {
  if (narrationAudio.paused) narrationAudio.play();
  else narrationAudio.pause();
});
document.getElementById("year").textContent = new Date().getFullYear();
//SEARCH OVERLAY
(function initSearchOverlay() {
  const searchLink = document.querySelector(
    'a[href="search.html"], a[href="#search"], a[data-search="true"]'
  );
  if (!searchLink) return;
  searchLink.addEventListener("click", (e) => {
    e.preventDefault();
    openSearchOverlay();
  });
  function openSearchOverlay() {
    if (document.getElementById("search-overlay")) return; 
    const overlay = document.createElement("div");
    overlay.id = "search-overlay";
    overlay.innerHTML = `
      <div class="search-panel">
        <button id="close-search" class="close-search" title="Close">✕</button>
        <h2 class="search-heading">What Story are you looking for?</h2>
        <input id="search-input" placeholder="Type story name or keyword..." />
        <div id="search-results" class="search-results"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", (ev) => {
      if (ev.target === overlay || ev.target.id === "close-search") overlay.remove();
    });
    const input = overlay.querySelector("#search-input");
    const resultsBox = overlay.querySelector("#search-results");
    const allStories = Object.keys(stories).map(title => ({
      title,
      emoji: stories[title].emoji,
      desc: stories[title].desc
    }));
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      resultsBox.innerHTML = "";
      if (!q) return;
      const results = allStories.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q)
      );
      if (!results.length) {
        resultsBox.innerHTML = `<div class="no-results">No results found</div>`;
        return;
      }
      resultsBox.innerHTML = results
        .map(
          r => `
            <div class="search-result" data-story="${r.title}" tabindex="0">
              <div class="sr-title">${r.emoji} ${r.title}</div>
              <div class="sr-sub">${r.desc}</div>
            </div>`
        )
        .join("");
    });
    resultsBox.addEventListener("click", (ev) => {
      const res = ev.target.closest(".search-result");
      if (res) {
        const story = res.dataset.story;
        overlay.remove();
        openStory(story);
      }
    });
    resultsBox.addEventListener("keydown", (ev) => {
      if ((ev.key === "Enter" || ev.key === " ") && ev.target.matches(".search-result")) {
        ev.preventDefault();
        const story = ev.target.dataset.story;
        overlay.remove();
        openStory(story);
      }
    });
    setTimeout(() => input.focus(), 50);
  }
  function openStory(title) {
    const s = stories[title];
    if (!s) return;
    modalTitle.textContent = `${s.emoji} ${title}`;
    modal.classList.add("active");
    fetch(s.textFile)
      .then(res => res.text())
      .then(data => (modalText.textContent = data))
      .catch(() => (modalText.textContent = "Failed to load story."));
    narrationAudio.src = s.narration;
    narrationAudio.play().catch(() => {});
  }
})();
