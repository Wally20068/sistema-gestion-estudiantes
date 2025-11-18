document.getElementById("year").textContent = new Date().getFullYear();

// menú móvil
const btn = document.getElementById("menuButton");
const nav = document.getElementById("siteNav");
if (btn && nav){
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open");
  });
}

// ver más / ver menos en las cards
document.querySelectorAll(".card-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("aria-controls");
    const panel = document.getElementById(id);
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    btn.textContent = open ? "Ver más" : "Ver menos";
    if (open) panel.setAttribute("hidden", "");
    else panel.removeAttribute("hidden");
  });
});
