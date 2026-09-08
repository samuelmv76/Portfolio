(function () {
  "use strict";

  var data = window.__BRAND__ || {};
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "] failed:", e); }
  }

  /* ---------- footer year + mailto subject ---------- */
  function initBrandFields() {
    $$("[data-year]").forEach(function (el) { el.textContent = data.year || new Date().getFullYear(); });
    if (data.email) {
      $$("[data-mailto]").forEach(function (el) {
        var subject = encodeURIComponent(data.mailSubject || "Contacto");
        el.setAttribute("href", "mailto:" + data.email + "?subject=" + subject);
      });
    }
  }

  /* ---------- nav: scrolled state + mobile toggle ---------- */
  function initNav() {
    var nav = $(".nav");
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 24) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = $(".nav-toggle");
    var links = $(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var open = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      $$("a", links).forEach(function (a) {
        a.addEventListener("click", function () { links.classList.remove("is-open"); });
      });
    }
  }

  /* ---------- smooth anchor scroll with nav offset ---------- */
  function initAnchorScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: top, behavior: reduced ? "auto" : "smooth" });
    });
  }

  /* ---------- reveal on scroll ---------- */
  function initReveals() {
    var items = $$(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
    // safety net: reveal everything after 6s regardless
    setTimeout(function () {
      items.forEach(function (el) { el.classList.add("is-visible"); });
    }, 6000);
  }

  /* ---------- subtle tilt on cards (fine pointer only) ---------- */
  function initTilt() {
    if (!fineHover) return;
    var cards = $$("[data-tilt]");
    cards.forEach(function (card) {
      card.addEventListener("mouseover", function (e) {
        if (card.contains(e.relatedTarget)) return;
      });
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(900px) rotateX(" + (py * -5) + "deg) rotateY(" + (px * 6) + "deg) translateY(-2px)";
      });
      card.addEventListener("mouseout", function (e) {
        if (card.contains(e.relatedTarget)) return;
        card.style.transform = "";
      });
    });
  }

  /* ---------- mesh background parallax (mouse-reactive, subtle) ----------
     Runs a rAF loop only while the mouse is actually moving and the
     animation hasn't settled yet. Previously this looped forever from
     page load, permanently competing with scroll/input work on the main
     thread even when nothing was changing on screen. */
  function initMeshParallax() {
    if (reduced || !fineHover) return;
    var spans = $$(".mesh-bg span");
    if (!spans.length) return;
    var tx = 0, ty = 0, cx = 0, cy = 0;
    var running = false;
    function raf() {
      cx += (tx - cx) * 0.04;
      cy += (ty - cy) * 0.04;
      spans.forEach(function (el, i) {
        var factor = (i + 1) * 0.6;
        el.style.transform = "translate3d(" + (cx * factor) + "px," + (cy * factor) + "px,0)";
      });
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
        requestAnimationFrame(raf);
      } else {
        running = false;
      }
    }
    window.addEventListener("mousemove", function (e) {
      tx = (e.clientX / window.innerWidth - 0.5) * 28;
      ty = (e.clientY / window.innerHeight - 0.5) * 28;
      if (!running) {
        running = true;
        requestAnimationFrame(raf);
      }
    }, { passive: true });
  }

  /* ---------- GSAP-enhanced hero entrance (progressive, optional) ---------- */
  function initHeroEntrance() {
    if (!(window.gsap)) return;
    var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-kicker", { y: 14, opacity: 0, duration: 0.6 })
      .from(".hero h1", { y: 24, opacity: 0, duration: 0.75 }, "-=0.35")
      .from(".hero-lede", { y: 18, opacity: 0, duration: 0.6 }, "-=0.45")
      .from(".hero-cta", { y: 16, opacity: 0, duration: 0.55 }, "-=0.4")
      .from(".hero-fact", { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.35");
  }

  function boot() {
    safe(initBrandFields, "initBrandFields");
    safe(initNav, "initNav");
    safe(initAnchorScroll, "initAnchorScroll");
    safe(initReveals, "initReveals");
    safe(initTilt, "initTilt");
    safe(initMeshParallax, "initMeshParallax");
    safe(initHeroEntrance, "initHeroEntrance");
    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
