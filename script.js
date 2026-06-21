/* ============================================================
   HABIBI STUDIO — script.js
   All data is defined here — edit freely without touching HTML/CSS
   ============================================================ */

"use strict";

/* ---- HERO STATS ---- */
const heroStats = [
  { target: 500, suffix: "+", label: "Customers" },
  { target: 20,  suffix: "+", label: "Products"  },
  { target: 5,   suffix: "★", label: "Rating"    }
];

/* ---- PRODUCTS DATA ---- */
const products = [
  {
    name: "Beyond Survival Setup",
    price: "$9.99",
    status: "available",
    description: "A fully-featured survival server package perfect for growing communities. Pre-configured with anti-cheat, economy, land claiming, and a beautifully custom-built spawn.",
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
      "https://static.builtbybit.com/attachments/resource/96782/icon/icon.png?1746713985"
    ],
    buyLink: "https://builtbybit.com/resources/beyond-survival-setup-habibi-studios.96782/"
  },
  {
    name: "Beyond Survival Spawn",
    price: "$3.99",
    status: "available",
    description: "Affordable, well-designed spawn featuring a crate area, AFK zone, spawn point, shop area, and PvP Colosseum — drop-in ready.",
    features: [
      "Houses with interiors",
      "PvP Colosseum arena",
      "2 crate placement areas",
      "3 ports with ships",
      "16 NPC spots",
      "Drop-down portal"
    ],
    images: [
      "https://static.builtbybit.com/attachments/resource/97428/icon/icon.png?1746714051"
    ],
    buyLink: "https://builtbybit.com/resources/beyond-survival-spawn-nfx-studio.97428/"
  },
  {
    name: "PlayerKits2 Advanced Config",
    price: "$2.99",
    status: "available",
    description: "A fully configured kit system with pre-made kits, a main menu, rank gradients, right-click preview, and customisable messages.",
    features: [
      "Good looking kit menu",
      "5 different kits",
      "Custom rank gradient colours",
      "Right-click preview support",
      "Custom messages",
      "Easy to edit YAML"
    ],
    images: [
      "https://static.builtbybit.com/attachments/resource/103511/icon/icon.png?1746714109"
    ],
    buyLink: "https://builtbybit.com/resources/playkits-2-advance-kits-conflig-hs.103511/"
  },
  {
    name: "EconomyShopGUI — Lumen Pack",
    price: "$6.99",
    status: "available",
    description: "53 YAML shop configs across 16 shop sections. 'Lumen' purple/gold theme with Unicode small caps branding and 20 language files included.",
    features: [
      "53 YAML files, 16 shop sections",
      "20 language files",
      "Purple/gold 'Lumen' theme",
      "Unicode small caps branding",
      "Plug-and-play ready",
      "Full documentation"
    ],
    images: [
      "https://static.builtbybit.com/attachments/resource/110972/icon/icon.png?1746714187"
    ],
    buyLink: "https://builtbybit.com/resources/shop-configuration-habibi-studios.110972/"
  },
  {
    name: "BlitzarMC Lifesteal SMP Setup",
    price: "$14.99",
    status: "available",
    description: "Complete Paper 1.21.x Lifesteal SMP configuration pack — crates, kits, coin shop, TAB, FancyHolograms leaderboards, DeluxeMenus, and more.",
    features: [
      "4 crate configs (Action/Legendary/Unknown/Rare)",
      "CoinShop with CoinsEngine placeholders",
      "14-rank TAB with MiniMessage hex colours",
      "10 FancyHolograms leaderboards",
      "DeluxeMenus leaderboard GUI",
      "Skript fly, join/leave, bossbar",
      "Full LuckPerms rank setup"
    ],
    images: [
      "https://static.builtbybit.com/attachments/resource/96782/icon/icon.png?1746713985"
    ],
    buyLink: "https://builtbybit.com/creators/habibi-studios.490471/"
  },
  {
    name: "Habibi Moderation Bot",
    price: "Free",
    status: "available",
    description: "A powerful all-in-one Discord moderation bot built with discord.js v14 and MongoDB. 22+ feature systems including moderation, tickets, music, economy, leveling, and giveaways — full source code included.",
    features: [
      "22+ modular feature systems",
      "Moderation, tickets, music, economy",
      "Leveling, giveaways, automod",
      "discord.js v14 + MongoDB",
      "Components V2 UI",
      "Full source code delivered",
      "Prefix: = | Brand color: #6B5BFF"
    ],
    images: [
      "https://static.builtbybit.com/attachments/resource/109090/icon/icon.png?1746714300"
    ],
    buyLink: "https://builtbybit.com/resources/habibi-modaretion-source-code-hs.109090/"
  },
  {
    name: "Custom Plugin Development",
    price: "Quote",
    status: "available",
    description: "Need something bespoke? We build Paper/Spigot plugins with Vault, Redis, multi-database support, and clean Maven/Gradle project structure.",
    features: [
      "Paper 1.21+ compatible",
      "Vault / economy integration",
      "Redis & multi-database support",
      "Maven or Gradle build structure",
      "Full source delivered",
      "Post-delivery support"
    ],
    images: [],
    buyLink: "https://discord.gg/j4ESaraHec"
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
    text: "This is great server setup, thankful this all works!"
  },
  {
    name: "sirmidnight",
    rating: 5,
    text: "Got the setup and my community went absolutely wild. The configs are perfectly balanced and saved me so much time. 10/10 would recommend."
  },
  {
    name: "StargazerDev",
    rating: 4,
    text: "The spawn is stunning. A few plugins needed updating on my end but the support chat helped me sort it in under 30 minutes. Quality is top-notch."
  },
  {
    name: "VoidwalkerPvP",
    rating: 5,
    text: "Been running my server for 3 months now and I still can't believe how polished everything is. Players always ask who built it — I say Habibi Studio every time."
  },
  {
    name: "CrystalMC_Owner",
    rating: 5,
    text: "I'm not very technical and was worried the setup would be confusing. But the installation guide was so clear that even I managed it in under 2 hours. Amazing product!"
  }
];

/* ---- LINKS DATA ---- */
const links = [
  {
    icon: "🛒",
    title: "BuiltByBit Store",
    desc: "Browse all products, setups, configs, and exclusive packages on our official BuiltByBit storefront.",
    label: "Open Store",
    href: "https://builtbybit.com/creators/habibi-studios.490471/"
  },
  {
    icon: "💬",
    title: "Discord",
    desc: "Join our Discord for live support, community discussions, free resources, and server advice.",
    label: "Join Discord",
    href: "https://discord.gg/j4ESaraHec"
  },
  {
    icon: "📖",
    title: "Help Docs",
    desc: "Step-by-step installation guides, FAQs, plugin compatibility lists, and tutorials.",
    label: "Read Docs",
    href: "https://docs.habibidevelopment.com/"
  },
  {
    icon: "🌍",
    title: "Website",
    desc: "Visit our main website for more info about Habibi Studios and what we offer.",
    label: "Visit Site",
    href: "https://habibidevolopment.com"
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
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");

    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(l => {
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
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ============================================================
   SCROLL REVEAL — mobile fixed
   ============================================================ */
(function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
        setTimeout(() => {
          el.classList.add("visible");
          el.querySelectorAll(".stat-num").forEach(animateCounter);
          if (el.classList.contains("hero-stats")) {
            el.querySelectorAll(".stat-num").forEach(animateCounter);
          }
        }, delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0, rootMargin: "0px 0px -10px 0px" });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // Force trigger anything already in viewport on load
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
        el.querySelectorAll(".stat-num").forEach(animateCounter);
      }
    });
  }, 100);
})();

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
(function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  products.forEach((p, idx) => {
    const isComingSoon = p.status === "coming_soon";

    const card = document.createElement("div");
    card.className = "product-card" + (isComingSoon ? " coming-soon" : "");
    card.setAttribute("data-delay", `${(idx % 3) * 80}`);

    if (!isComingSoon) {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `View ${p.name}`);
    }

    const imgHTML = p.images && p.images.length > 0
      ? `<img src="${p.images[0]}" alt="${p.name}" loading="lazy" />`
      : `<div class="img-placeholder"><span>🎮</span><small>Preview</small></div>`;

    const hintHTML = isComingSoon ? `` : `<div class="product-view-hint">View Details →</div>`;
    const badgeHTML = isComingSoon ? `<div class="coming-soon-badge"><span class="cs-dot"></span>Coming Soon</div>` : ``;

    card.innerHTML = `
      <div class="product-img-wrap">
        ${imgHTML}
        <div class="product-img-overlay"></div>
        ${badgeHTML}
        ${hintHTML}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">${isComingSoon ? "Coming Soon" : p.price}</div>
      </div>
    `;

    if (!isComingSoon) {
      const open = () => openModal(idx);
      card.addEventListener("click", open);
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") open(); });
    }

    grid.appendChild(card);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseFloat(el.dataset.delay || 0);
        setTimeout(() => el.classList.add("visible"), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0 });

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

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        setTimeout(() => el.classList.add("visible"), parseFloat(el.dataset.delay || 0));
        io.unobserve(el);
      }
    });
  }, { threshold: 0 });

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
  }, { threshold: 0 });

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

  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalPrice").textContent = p.price;
  document.getElementById("modalDesc").textContent   = p.description;

  const featuresList = document.getElementById("modalFeatures");
  featuresList.innerHTML = "";
  (p.features || []).forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featuresList.appendChild(li);
  });

  const buyBtn  = document.getElementById("modalBuy");
  const buyText = document.getElementById("modalBuyText");
  buyBtn.href = p.buyLink || "#";
  buyText.textContent = p.price === "Quote" ? "Get a Quote" : `Buy Now — ${p.price}`;

  currentImages = p.images && p.images.length ? p.images : [];
  buildSlideshow(currentImages);

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
  slideTimer = setInterval(() => { goToSlide(currentSlide + 1); }, 5000);
}

document.getElementById("slidePrev").addEventListener("click", () => {
  clearInterval(slideTimer); goToSlide(currentSlide - 1); startSlideTimer();
});
document.getElementById("slideNext").addEventListener("click", () => {
  clearInterval(slideTimer); goToSlide(currentSlide + 1); startSlideTimer();
});

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
   COUNTER TRIGGER
   ============================================================ */
(function initHeroCounters() {
  const statsEl = document.querySelector(".hero-stats");
  if (!statsE
