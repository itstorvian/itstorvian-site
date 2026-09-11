/* Types the hero heading once on load. The full word is always present in
   the DOM for screen readers; only an aria-hidden copy is animated. */
(function () {
  var doc = document;

  /* Marked before first paint so CSS can hold the visual copy back and the
     untouched word never flashes. Without this script nothing is hidden. */
  doc.documentElement.classList.add("js");

  doc.addEventListener("DOMContentLoaded", function () {
    var name = doc.querySelector(".name");
    var out = name && name.querySelector(".name-text");
    if (!out) return;

    var word = out.textContent;
    var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (still) {
      name.classList.add("is-running");
      return;
    }

    out.textContent = "";
    name.dataset.text = "";
    name.classList.add("is-running");

    var i = 0;
    (function step() {
      out.textContent = word.slice(0, ++i);
      name.dataset.text = out.textContent;
      if (i < word.length) setTimeout(step, 120);
    })();
  });
})();
