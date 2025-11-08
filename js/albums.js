AOS.init({ duration: 5000, easing: "ease-out-cubic", once: false });
  document.getElementById("year").textContent = new Date().getFullYear();

  const albums = [
    { id: "album1", title: "Youthful Exuberance", songs: ["Big Boyz", "My Life", "Invincible 1", "Resolution", "Back to Stay", "Trouble", "Bring it on", "Fifteen", "We are young"] },
    { id: "album2", title: "Lofty Retro Synths", songs: ["Over n Out", "XO Forever", "F.E.A.R."] },
    { id: "album3", title: "Invincible Ecstasy", songs: ["Hero", "New Levels", "Legendary", "Remember Me!", "Champion", "Born to Live"] },
    { id: "album4", title: "Urban Reflection", songs: ["Luxury", "Ladies", "After Tonight", "Chilliest", "All Night Long", "Feeling Me", "Losing Control", "She Knows", "Luxury 2", "Bar Reign"] },
    { id: "album5", title: "Run Away", songs: ["G.T.A.", "Fly Away", "Far Away", "Ride Away", "Sail Away", "Run Away", "Go Away", "Getaway", "Hold me Close", "Other Side"] },
    { id: "album6", title: "Gloomy Aurora", songs: ["Rumbling", "Broken Path", "Missing You", "No One", "Invincible 2", "Wishing", "Right Now", "Angelina", "My Lover", "I gave you all"] },
    { id: "album7", title: "Golden Memento", songs: ["Momma & Papa", "My Sister", "Memories", "Delorean", "Everytime"] },
    { id: "album8", title: "Nature's Park", songs: ["Wishing Paradise", "I wanna know", "Night creatures", "Ancient", "Bad Dreams", "Close Range", "Dream song", "Stereotype"] },
    { id: "album9", title: "Futuristic Voyage", songs: ["Sky High", "Terminator 1 [Age]", "Terminator 2 [Lone Knight]", "Terminator 3 [Renegade]", "Terminator 4 [The End]"] },
    { id: "album10", title: "Grand Times", songs: ["Let it Burn Down", "City Lights", "Mega Super Starz", "Stardom!", "Fiery Horse", "Epic Ochestra"] },
    { id: "album11", title: "True Blue Cronies", songs: ["My Friend", "Pretty Butterfly", "Smile", "Cuando Estaba", "Brava", "Happiness 2"] },
    { id: "album12", title: "Unforgetable Heyday", songs: ["Happiness 1", "Come Back", "Don't Give Up", "I got this feeling", "It's Okay", "Just Ride"] },
    { id: "album13", title: "Darkest Deep", songs: ["One more chance", "Pressure", "Nobody", "Drifting soul", "Broken dreams", "Wanna enjoy"] },
    { id: "album14", title: "Final Farewell", songs: ["Good bye friends", "Don't cry", "I thought", "Remember me 2 [radio]", "I'll miss you", "Monami don't cry", "Made it"] },
    { id: "album15", title: "Love Tales", songs: ["Love as one", "Second thought", "Tempty start", "Only you", "Number one", "One and only", "Yonder", "Lover 1", "Stay with me", "The ONE"] },
    { id: "album16", title: "Rocky Rolly", songs: ["Deserve it", "Dance with me", "Rock n roll", "Dance", "Lock n load", "BoomBoom", "Believe me", "DNCE"] },
    { id: "album17", title: "Who am I?", songs: ["Chasing after luck", "Stages", "Never know", "It's okay", "Born to live", "Best of me", "Dreamer boy", "Who is Josiah?", "King of the skies", "Cyber punk"] },
    { id: "album18", title: "Kingdom Tunes", songs: ["Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified"] },
    { id: "album19", title: "Akademic Days", songs: ["G.S.I.S", "M.O.N.I", "Sober", "Sign out"] },
    { id: "album20", title: "Roots and Origin", songs: ["King of the jungle", "Wonder", "Dara", "No stressing", "Foor you"] }
  ];

    const albumDescriptions = {
      album1: {
        emoji: "🌱",
        title: "Youthful Exuberance",
        theme: "The birth of boldness",
        notes: "Juvenile, fearless ambition",
        interpretation: "The rise of a super star. Daring, raw, and reaching for greatness."
      },
      album2: {
        emoji: "🌆",
        title: "Lofty Retro Synths",
        theme: "Neon dreams and timeless grooves",
        notes: "80s revival, spacey optimism",
        interpretation: "Remixing Cyber-nostalgia for a romantic escapism."
      },
      album3: {
        emoji: "🚀",
        title: "Invincible Ecstasy",
        theme: "Triumphant confidence",
        notes: "Inspiration, influence",
        interpretation: "The world watches in awe. Glory, Grandeur, and a Legacy untouchable."
      },
      album4: {
        emoji: "🌃",
        title: "Urban Reflection",
        theme: "Nightlife duality",
        notes: "Glamour, loneliness, Seduction",
        interpretation: "Luxury and longing meet in the shadows of the spotlight."
      },
      album5: {
        emoji: "🏃",
        title: "Run Away",
        theme: "Romantic escapade",
        notes: "Escape, freedom, desire",
        interpretation: "Away we go. Hearts on the move as we chase freedom."
      },
      album6: {
        emoji: "🌌",
        title: "Gloomy Aurora",
        theme: "Heartbreak with ambiance",
        notes: "Melancholy, longing, solitude",
        interpretation: "Heartbreak under glowing skies, am I beautifully bruised?"
      },
      album7: {
        emoji: "🕰️",
        title: "Golden Memento",
        theme: "Family and memory",
        notes: "Warmth, nostalgia, legacy",
        interpretation: "Echoes of yesterday’s light."
      },
      album8: {
        emoji: "🌳",
        title: "Nature’s Park",
        theme: "Life reflection",
        notes: "Imagination, Oasis, wonder",
        interpretation: "Creation, mysteries, and searching for Purpose in the wild."
      },
      album9: {
        emoji: "🛸",
        title: "Futuristic Voyage",
        theme: "Science fiction saga",
        notes: "Time travel, rebellion, Space Odyssey",
        interpretation: "Time unravels as the Past and Future collide in a galactic storm."
      },
      album10: {
        emoji: "🏙️",
        title: "Grand Times",
        theme: "Superstardom",
        notes: "Fame, spectacle, legacy",
        interpretation: "All roads lead to the crown! Stardom, legend, legacy."
      },
      album11: {
        emoji: "💙",
        title: "True Blue Cronies",
        theme: "Unbreakable Friendship",
        notes: "Loyalty, joy, platonic bonds",
        interpretation: "Love songs — but for our squad. Pieces that hug like real friends."
      },
      album12: {
        emoji: "📸",
        title: "Unforgettable Heyday",
        theme: "Flashback and growth",
        notes: "Coming back, feel-good, euphoric reflection",
        interpretation: "A love letter to peak memories. Honest, bittersweet, unfiltered."
      },
      album13: {
        emoji: "🌑",
        title: "Darkest Deep",
        theme: "Internal chaos",
        notes: "Loneliness, pressure, self-struggle",
        interpretation: "These aren’t just songs — they’re inner storms that raged deep inside me."
      },
      album14: {
        emoji: "🕊️",
        title: "Final Farewell",
        theme: "Letting go",
        notes: "Mourning, closure, soul release",
        interpretation: "Lyrical Farewells for people, dreams, or past selves."
      },
      album15: {
        emoji: "💘",
        title: "Love Tales",
        theme: "Romantic highs and heartbreaks",
        notes: "Infatuation, devotion, passion",
        interpretation: "Tearful kisses and slow dancing with your first love."
      },
      album16: {
        emoji: "🤘",
        title: "Rocky Rolly",
        theme: "Musical liberation",
        notes: "Rock, dance, groovy",
        interpretation: "No rules. Just rhythm. Melodic and contagious energy through the roof."
      },
      album17: {
        emoji: "❓",
        title: "Who Am I?",
        theme: "Identity crisis and self-realization",
        notes: "Searching, masks, truth",
        interpretation: "These tracks peel back the layers of every mask. Every line is a mirror. Every beat, a truth bomb."
      },
      album18: {
        emoji: "👑",
        title: "Kingdom Tunes",
        theme: "Paradisic Melodies",
        notes: "Release date: After Armageddon",
        interpretation: "Undisclosed till when we get to paradise"
      },
      album19: {
        emoji: "🎓",
        title: "Akademic Days",
        theme: "School life and dreams",
        notes: "Stress, ambition, pressure",
        interpretation: "Classrooms, breakups, wild ambitions."
      },
      album20: {
        emoji: "🌍",
        title: "Roots and Origin",
        theme: "Culture and identity",
        notes: "Afrobeat soul, ancestry, truth",
        interpretation: "Where it all started. This is a return to the source — honoring where you're from, to power where you're going."
      }
    };
    const songs = {};
    function makeSlugs(title) {
    const lower = String(title).toLowerCase().trim();
    const slugHyphen = lower
        .replace(/[^a-z0-9\s-]/g, '')   
        .replace(/\s+/g, '-')          
        .replace(/-+/g, '-');           
    const slugPlain = lower.replace(/[^a-z0-9]/g, ''); 
    return { slugHyphen, slugPlain };
    }

    if (!Array.isArray(albums)) {
    console.error("albums variable not found. Ensure your albums[] is declared above this code.");
    }
    albums.forEach(album => {
    (album.songs || []).forEach(songTitle => {
        const { slugHyphen, slugPlain } = makeSlugs(songTitle);
        songs[songTitle] = {
        audio: `/Songs/audio/${slugPlain}.wav`,
        lyricsPath: `/Songs/lyrics/${slugPlain}.txt`,
        audiomack: `https://audiomack.com/jolectro/song/${slugHyphen}`,
        youtube: `https://youtube.com/results?search_query=jolectro+${encodeURIComponent(songTitle)}`
        };
    });
    });
    
    const albumContainer = document.getElementById("album-cards");
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.2 });

    albumContainer.innerHTML = ''; 
    albums.forEach(album => {
    const albumDiv = document.createElement("div");
    albumDiv.className = "album-card bg-gray-800 p-4 my-6 rounded-lg shadow-md fade-in";
    albumDiv.setAttribute("data-aos", "fade-up");
    albumDiv.id = album.id;

    const desc = albumDescriptions[album.id] || {};
    const songsHtml = (album.songs || []).map(song => {
        return `
        <div class="song-tile" data-song="${song}" tabindex="0" role="button">
            <div class="song-icon">🎧</div>
            <div class="song-meta">
            <div class="song-title">${song}</div>
            <div class="song-sub">${desc.emoji || ''} ${desc.title || ''}</div>
            </div>
            <div class="song-actions">
            <a class="audiomack-link" href="${songs[song].audiomack}" target="_blank" rel="noopener noreferrer" title="Open on Audiomack">Audiomack ↗</a>
            </div>
        </div>
        `;
    }).join('');

    albumDiv.innerHTML = `
        <h3 class="album-title">${album.title}</h3>

        <div class="image-container mt-4 rounded-lg overflow-hidden">
        <img src="../covers/${album.id}.jpg" alt="${album.title} Cover">
        <div class="album-info">
            <p class="text-lg font-bold">${desc.emoji || ''} ${desc.title || ''}</p>
            <p><strong>Theme:</strong> ${desc.theme || ''}</p>
            <p><strong>Notes:</strong> ${desc.notes || ''}</p>
            <p><strong>Concept:</strong> ${desc.interpretation || ''}</p>
        </div>
        </div>
        <button class="toggle-songs-btn">Show Song List</button>
        <div class="song-list">
        <div class="song-grid">
            ${songsHtml}
        </div>
        </div>
    `;

    albumContainer.appendChild(albumDiv);
    observer.observe(albumDiv);
    });

    albumContainer.addEventListener('click', (evt) => {
    const t = evt.target;

    if (t.closest && t.closest('.toggle-songs-btn')) {
        const btn = t.closest('.toggle-songs-btn');
        const card = btn.closest('.album-card');
        card.classList.toggle('open');
        btn.innerText = card.classList.contains('open') ? 'Hide Songs' : 'Show Songs';
        return;
    }
    const tile = t.closest && t.closest('.song-tile');
    if (tile) {
        const songTitle = tile.dataset.song;
        if (songTitle) showModal(songTitle);
    }
    });
    albumContainer.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter' || evt.key === ' ') {
        const tile = evt.target.closest && evt.target.closest('.song-tile');
        if (tile) {
        evt.preventDefault();
        showModal(tile.dataset.song);
        }
    }
    });

    function showModal(songTitle) {
    const s = songs[songTitle];
    if (!s) {
        console.warn("Song not found in songs map:", songTitle);
        return;
    }
    const modal = document.getElementById("song-modal");
    document.getElementById("song-title").innerText = songTitle;

    const audioSource = document.getElementById("audio-source");
    audioSource.src = s.audio;

    document.getElementById("youtube-link").href = s.youtube;
    document.getElementById("audiomack-link").href = s.audiomack;

    const lyricsEl = document.getElementById("lyrics-text");
    lyricsEl.innerText = "Loading lyrics...";

    fetch(s.lyricsPath)
        .then(res => res.ok ? res.text() : Promise.reject("no lyrics"))
        .then(text => {
        lyricsEl.innerText = text;
        })
        .catch(() => {
        lyricsEl.innerText = "I haven't uploaded the Lyrics yet. If you want them, please DM me on YouTube @jolectro and I'll upload it right away!";
        });

    modal.classList.add("show");
    modal.style.display = "flex";
    const audio = modal.querySelector("audio");
    audio.load();
    audio.play().catch(() => {  });
    }

    function closeModal() {
    const modal = document.getElementById("song-modal");
    modal.classList.remove("show");
    modal.style.display = "none";
    const audio = modal.querySelector("audio");
    audio.pause();
    audio.currentTime = 0;
    }

    document.addEventListener('click', (e) => {
    if (e.target.matches && e.target.matches('.modal .close')) {
        closeModal();
    }
    });

    document.getElementById('song-modal').addEventListener('click', (e) => {
    if (e.target.id === 'song-modal') closeModal();
    });

    (function initSearchOverlay() {
    const searchLink = document.querySelector('a[href="search.html"], a[href="#search"], a[data-search="true"]');
    if (!searchLink) return;

    searchLink.addEventListener('click', (e) => {
        e.preventDefault();
        openSearchOverlay();
    });

    function openSearchOverlay() {
        if (document.getElementById('search-overlay')) return; 

        const overlay = document.createElement('div');
        overlay.id = 'search-overlay';
        overlay.innerHTML = `
        <div class="search-panel">
            <button id="close-search" class="close-search" title="Close">✕</button>
            <h2 class="search-heading">Search songs & albums</h2>
            <input id="search-input" placeholder="Type a song name, album, or lyric..." />
            <div id="search-results" class="search-results"></div>
        </div>
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (ev) => {
        if (ev.target === overlay || ev.target.id === 'close-search') overlay.remove();
        });
        const input = overlay.querySelector('#search-input');
        const resultsBox = overlay.querySelector('#search-results');
        const allEntries = albums.flatMap(a => (a.songs || []).map(s => ({ song: s, album: a.title, albumId: a.id })));
        input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        resultsBox.innerHTML = '';
        if (!q) return;
        const results = allEntries.filter(item =>
            item.song.toLowerCase().includes(q) ||
            item.album.toLowerCase().includes(q)
        ).slice(0, 50);
        if (!results.length) {
            resultsBox.innerHTML = `<div class="no-results">No results</div>`;
            return;
        }
        resultsBox.innerHTML = results.map(r => `
            <div class="search-result" data-song="${r.song}" tabindex="0">
            <div class="sr-title">${r.song}</div>
            <div class="sr-sub">${r.album}</div>
            </div>
        `).join('');
        });
        resultsBox.addEventListener('click', (ev) => {
        const res = ev.target.closest && ev.target.closest('.search-result');
        if (res) {
            const song = res.dataset.song;
            document.getElementById('search-overlay').remove();
            showModal(song);
        }
        });
        resultsBox.addEventListener('keydown', (ev) => {
        if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.matches('.search-result')) {
            ev.preventDefault();
            const song = ev.target.dataset.song;
            document.getElementById('search-overlay').remove();
            showModal(song);
        }
        });
        setTimeout(() => input.focus(), 50);
    }
    })();
