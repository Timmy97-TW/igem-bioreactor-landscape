/* Shared behaviour: language, reveal, lightbox, scrollspy. No dependencies. */
(function () {
  "use strict";

  /* ---------------------------------------------------------- language */
  /* English is the default. The browser's locale does not decide this —
     only an explicit choice the reader made does. Same storage key as the
     audit page, so a choice made on either one carries to the other. */
  var saved = null;
  try { saved = localStorage.getItem("ibl.lang"); } catch (e) {}
  var LANG = saved === "zh" ? "zh" : "en";
  window.LANG = LANG;

  function applyLang(l) {
    window.LANG = l;
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.setAttribute("lang", l === "zh" ? "zh-Hant" : "en");
    var en = document.getElementById("btn-en"), zh = document.getElementById("btn-zh");
    if (en) en.setAttribute("aria-pressed", String(l === "en"));
    if (zh) zh.setAttribute("aria-pressed", String(l === "zh"));
    try { localStorage.setItem("ibl.lang", l); } catch (e) {}
    if (typeof window.renderAll === "function") window.renderAll();
  }
  window.applyLang = applyLang;

  /* ------------------------------------------------------------ reveal */
  document.documentElement.classList.add("js");

  function reveal() {
    var els = document.querySelectorAll(".rv:not(.in)");
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
      for (var i = 0; i < els.length; i++) els[i].classList.add("in");
      return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.04 });
    for (var j = 0; j < els.length; j++) io.observe(els[j]);
  }
  window.reveal = reveal;

  /* ---------------------------------------------------------- lightbox */
  function lbOpen(src, cap) {
    var lb = document.getElementById("lb");
    if (!lb) return;
    document.getElementById("lb-img").src = src;
    document.getElementById("lb-cap").textContent = cap || "";
    lb.classList.add("on");
    document.body.style.overflow = "hidden";
  }
  function lbClose() {
    var lb = document.getElementById("lb");
    if (!lb) return;
    lb.classList.remove("on");
    document.getElementById("lb-img").src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    document.body.style.overflow = "";
  }
  window.lbOpen = lbOpen;
  window.lbClose = lbClose;

  document.addEventListener("click", function (ev) {
    var img = ev.target.closest ? ev.target.closest(".fig img, .plate img, img[data-cap]") : null;
    if (img && img.getAttribute("src")) {
      var cap = img.getAttribute("data-cap");
      if (!cap) {
        var fc = img.parentElement && img.parentElement.querySelector("figcaption");
        cap = fc ? fc.textContent.trim() : (img.alt || "");
      }
      lbOpen(img.getAttribute("src"), cap);
      return;
    }
    if (ev.target.closest && ev.target.closest("#lb")) lbClose();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") lbClose();
  });

  /* --------------------------------------------------------- scrollspy */
  function scrollspy() {
    var links = Array.prototype.slice.call(document.querySelectorAll("#toc a[href^='#']"));
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (a) {
      var el = document.getElementById(a.getAttribute("href").slice(1));
      if (el) map[el.id] = a;
    });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        if (map[e.target.id]) map[e.target.id].setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  /* -------------------------------------------------------------- boot */
  function boot() {
    applyLang(LANG);
    var en = document.getElementById("btn-en"), zh = document.getElementById("btn-zh");
    if (en) en.onclick = function () { applyLang("en"); };
    if (zh) zh.onclick = function () { applyLang("zh"); };
    reveal();
    scrollspy();
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", boot);
  else boot();

  /* last resort: nothing stays invisible, whatever the observer does */
  setTimeout(function () {
    var e = document.querySelectorAll(".rv:not(.in)");
    for (var i = 0; i < e.length; i++) e[i].classList.add("in");
  }, 3000);
})();
