/* ============================================================
   HABIBI STUDIO — script.js
   All data is defined here — edit freely without touching HTML/CSS
   ============================================================ */

"use strict";

/* ============================================================
   ✏️  EDITABLE DATA — Update all content here
   ============================================================ */

/* ---- HERO STATS — edit numbers & labels here ---- */
const heroStats = [
  { target: 8, suffix: "+", label: "Customers" },
  { target: 3, suffix: "+", label: "Products"  },
  { target: 5,   suffix: "★", label: "Rating"    }
];

const products = [
  {
    name: "Beyond Survival Setup",
    price: "$9.99",
    description: "A fully-featured survival server package perfect for growing communities. Comes pre-configured with anti-cheat, economy, land claiming, and beautifully custom-built spawn.",
    features: [
      "Custom hand-built spawn (200x200)",
      "EssentialsX full configuration",
      "GriefPrevention land claiming",
      "LuckPerms multi-rank system",
      "Vault economy + Chest Shop",
      "Anti-cheat (Matrix) pre-tuned",
      "Discord bot integration"
    ],
    images: [
      "https://builtbybit.com/attachments/gemini_generated_image_8ybsuo8ybsuo8ybs-png.1236180/?preset=cardr1",
      "https://builtbybit.com/attachments/2026-03-03_16-39-21-png.1233113/?preset=cardr1"
    ],
    buyLink: "https://builtbybit.com/resources/beyond-survival-setup-habibi-studios.96782/"
  },
  {
    name: "Beyond Survival Spawn ",
    price: "$3.99",
    description: "Affordable, well-designed spawn featuring a crate area, AFK zone, spawn point, shop area, and PvP.",
    features: [
      "Houses with interiors",
      "PvP Colosseum arena",
      "2 places for Crates",
      "3 ports with ships",
      "16 places for NPCs",
      "Drop-down portal",
    ],
    images: [
      "https://builtbybit.com/attachments/20260307_105724-png.1236899/?preset=cardr1",
      "https://builtbybit.com/attachments/2026-03-03_16-55-53-png.1236907/?preset=cardr1",
      "https://builtbybit.com/attachments/2026-03-03_16-33-43-png.1236913/?preset=cardr1"
    ],
    buyLink: "https://builtbybit.com/resources/beyond-survival-spawn-nfx-studio.97428/"
  },
  {
    name: "PLAYKITS 2 Advance Kits Conflig",
    price: "$2.99",
    description: "A fully configured kit system including pre-made kits, a main menu, and customizable messages.",
    features: [
      "Good looking kit menu",
      "5 different kits",
      "Custom messages",
      "Easy to edit"
    ],
    images: [
      "https://builtbybit.com/attachments/20260414_201639-jpg.1289697/?preset=cardr1",
      "https://builtbybit.com/attachments/banner-png.1289643/?preset=fullr1",
      "https://builtbybit.com/attachments/has-permission-png.1289689/?preset=fullr1"
    ],
    buyLink: "https://builtbybit.com/resources/playkits-2-advance-kits-conflig-hs.103511/"
  }
];

/* ---- REVIEWS DATA ---- */
const reviews = [
  {
    name: "DawnStudio",
    rating: 5,
    text: "This setup is simply beautiful, easy to adjust, and perfect for a survival setup!"
  },
  {
    name: "wru",
    rating: 5,
    text: "This is great server setup thankful this all works)"
  },
  {
    name: "sirmidnight",
    rating: 5,
    text: "Got the Factions Pro Bundle and my community went absolutely wild. The cannon configs are perfectly balanced and the event scheduler saved me so much time. 10/10 would recommend."
  },
  {
    name: "StargazerDev",
    rating: 4,
    text: "The SkyBlock setup is stunning. A few plugins needed updating on my end but the support chat helped me sort it in under 30 minutes. Quality is top-notch."
  },
  {
    name: "VoidwalkerPvP",
    rating: 5,
    text: "Been running my prison server for 3 months now and I still can't believe how polished everything is. Players always ask who built it. I proudly say Habibi Studio every time."
  },
  {
    name: "CrystalMC_Owner",
    rating: 5,
    text: "I'm not very technical and was worried the setup would be confusing. But the installation guide was so clear that even I managed it in under 2 hours. Amazing product, amazing team."
  }
];

/* ---- LINKS DATA ---- */
const links = [
  {
    icon: "🛒",
    title: "Shop",
    desc: "Browse all products, bundles, and exclusive server packages on our official BuiltByBit storefront.",
    label: "Open Store",
    href: "https://builtbybit.com/creators/habibi-studios.490471/"
  },
  {
    icon: "📖",
    title: "Help Docs",
    desc: "Step-by-step installation guides, FAQs, plugin compatibility lists, and video tutorials.",
    label: "Read Docs",
    href: "https://docs.habibidevelopment.com/"
  },
  {
    icon: "💬",
    title: "Support",
    desc: "Join our Discord server for live support, community discussions, free resources, and server advice.",
    label: "Join Discord",
    href: "https://discord.gg/ZkPCEMjsVN"
  }
];

/* ============================================================
   CURSOR GLOW
   ============================================================ */
(function initCursor() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  function animCursor() {
    cx += (mx - cx) * 0.1;
    cy += (my - cy) * 0.1;
    glow.style.left = cx + "px";
    glow.style.top  = cy + "px";
    requestAnimationFrame(animCursor);
  }
  animCursor();
})();

/* ============================================================
   NAVBAR SCROLL BEHAVIOUR
   ============================================================ */
(function initNavbar() {
  const navbar = document.getElementById("navbar");
  const links  = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    // Sticky style
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");

    // Active link highlight
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  });
})();

/* ============================================================
   HAMBURGER / MOBILE MENU
   ============================================================ */
(function initMobileMenu() {
  const btn  = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  const mobs = document.querySelectorAll(".mob-link");

  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    menu.classList.toggle("open");
  });

  mobs.forEach(a => {
    a.addEventListener("click", () => {
      btn.classList.remove("open");
      menu.classList.remove("open");
    });
  });
})();

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // Stagger for grids
        const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
        setTimeout(() => {
          el.classList.add("visible");

          // Trigger counters inside heroes
          el.querySelectorAll(".stat-num").forEach(animateCounter);
          if (el.classList.contains("hero-stats")) {
            el.querySelectorAll(".stat-num").forEach(animateCounter);
          }
        }, delay);

        io.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
})();

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
(function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  products.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-delay", `${(idx % 3) * 80}`);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View ${p.name}`);

    const imgHTML = p.images && p.images.length > 0
      ? `<img src="${p.images[0]}" alt="${p.name}" loading="lazy" />`
      : `<div class="img-placeholder"><span>🎮</span><small>Preview</small></div>`;

    card.innerHTML = `
      <div class="product-img-wrap">
        ${imgHTML}
        <div class="product-img-overlay"></div>
        <div class="product-view-hint">View Details →</div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.price}</div>
      </div>
    `;

    // Open modal
    const open = () => openModal(idx);
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") open(); });

    grid.appendChild(card);
  });

  // Observe for reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseFloat(el.dataset.delay || 0);
        setTimeout(() => el.classList.add("visible"), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".product-card").forEach(c => io.observe(c));
})();

/* ============================================================
   RENDER REVIEWS
   ============================================================ */
(function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;

  reviews.forEach((r, idx) => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.setAttribute("data-delay", `${(idx % 3) * 80}`);

    const stars = Array.from({ length: 5 }, (_, i) =>
      `<span class="star${i < r.rating ? '' : ' empty'}">★</span>`
    ).join("");

    const initial = r.name.charAt(0).toUpperCase();

    card.innerHTML = `
      <div class="review-stars">${stars}</div>
      <p class="review-text">${r.text}</p>
      <div class="review-author">
        <div class="review-avatar">${initial}</div>
        <span class="review-name">${r.name}</span>
      </div>
    `;

    grid.appendChild(card);
  });

  // Observe
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        setTimeout(() => el.classList.add("visible"), parseFloat(el.dataset.delay || 0));
        io.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".review-card").forEach(c => io.observe(c));
})();

/* ============================================================
   RENDER LINKS
   ============================================================ */
(function renderLinks() {
  const grid = document.getElementById("linksGrid");
  if (!grid) return;

  links.forEach((l, idx) => {
    const card = document.createElement("a");
    card.className = "link-card";
    card.href = l.href;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute("data-delay", `${idx * 100}`);

    card.innerHTML = `
      <div class="link-icon">${l.icon}</div>
      <div class="link-title">${l.title}</div>
      <p class="link-desc">${l.desc}</p>
      <div class="link-arrow">${l.label} →</div>
    `;

    grid.appendChild(card);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        setTimeout(() => el.classList.add("visible"), parseFloat(el.dataset.delay || 0));
        io.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".link-card").forEach(c => io.observe(c));
})();

/* ============================================================
   MODAL + SLIDESHOW
   ============================================================ */
let currentSlide = 0;
let slideTimer   = null;
let currentImages = [];

function openModal(productIdx) {
  const p = products[productIdx];
  if (!p) return;

  // Populate text content
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalPrice").textContent = p.price;
  document.getElementById("modalDesc").textContent   = p.description;

  // Features list
  const featuresList = document.getElementById("modalFeatures");
  featuresList.innerHTML = "";
  (p.features || []).forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featuresList.appendChild(li);
  });

  // Buy button
  const buyBtn  = document.getElementById("modalBuy");
  const buyText = document.getElementById("modalBuyText");
  buyBtn.href = p.buyLink || "#";
  buyText.textContent = `Buy Now for ${p.price}`;

  // Build slideshow
  currentImages = p.images && p.images.length ? p.images : [];
  buildSlideshow(currentImages);

  // Open overlay
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
  clearInterval(slideTimer);
}

function buildSlideshow(images) {
  const track = document.getElementById("slideshowTrack");
  const dots  = document.getElementById("slideDots");
  track.innerHTML = "";
  dots.innerHTML  = "";
  currentSlide = 0;

  if (!images.length) {
    track.innerHTML = '<div class="slide active"><div class="img-placeholder"><span>🎮</span><small>No Preview</small></div></div>';
    return;
  }

  images.forEach((src, i) => {
    const slide = document.createElement("div");
    slide.className = "slide" + (i === 0 ? " active" : "");
    slide.innerHTML = `<img src="${src}" alt="Product image ${i + 1}" loading="lazy" />`;
    track.appendChild(slide);

    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goToSlide(i));
    dots.appendChild(dot);
  });

  startSlideTimer();
}

function goToSlide(n) {
  const slides = document.querySelectorAll("#slideshowTrack .slide");
  const dots   = document.querySelectorAll("#slideDots .dot");
  if (!slides.length) return;

  slides[currentSlide].classList.remove("active");
  dots[currentSlide] && dots[currentSlide].classList.remove("active");

  currentSlide = (n + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  dots[currentSlide] && dots[currentSlide].classList.add("active");
}

function startSlideTimer() {
  clearInterval(slideTimer);
  if (currentImages.length <= 1) return;
  slideTimer = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
}

// Slide controls
document.getElementById("slidePrev").addEventListener("click", () => {
  clearInterval(slideTimer);
  goToSlide(currentSlide - 1);
  startSlideTimer();
});
document.getElementById("slideNext").addEventListener("click", () => {
  clearInterval(slideTimer);
  goToSlide(currentSlide + 1);
  startSlideTimer();
});

// Close handlers
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (document.getElementById("modalOverlay").classList.contains("open")) {
    if (e.key === "ArrowLeft")  { clearInterval(slideTimer); goToSlide(currentSlide - 1); startSlideTimer(); }
    if (e.key === "ArrowRight") { clearInterval(slideTimer); goToSlide(currentSlide + 1); startSlideTimer(); }
  }
});

/* ============================================================
   COUNTER TRIGGER — renders stats from heroStats data & animates
   ============================================================ */
(function initHeroCounters() {
  const statsEl = document.querySelector(".hero-stats");
  if (!statsEl) return;

  // Rebuild stat elements from heroStats data
  statsEl.innerHTML = "";
  heroStats.forEach((s, i) => {
    if (i > 0) {
      const div = document.createElement("div");
      div.className = "stat-divider";
      statsEl.appendChild(div);
    }
    const stat = document.createElement("div");
    stat.className = "stat";
    stat.innerHTML = `
      <div class="stat-row">
        <span class="stat-num" data-target="${s.target}">0</span><span class="stat-suffix">${s.suffix}</span>
      </div>
      <small>${s.label}</small>
    `;
    statsEl.appendChild(stat);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stat-num").forEach(animateCounter);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  io.observe(statsEl);
})();
