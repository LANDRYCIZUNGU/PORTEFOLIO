document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("contact-form");
const confirmation = document.getElementById("message-confirmation");
if (!form || !confirmation) return;
form.addEventListener("submit", (e) => {
e.preventDefault();
// la vérification simple des champs requis est nécessaire, je l'intègre
const inputs = form.querySelectorAll("input[required], textarea[required]");
let valid = true;
inputs.forEach((input) => {
if (!input.value.trim()) {
input.classList.add("input-error");
valid = false;} 
else { input.classList.remove("input-error"); } } );
if (!valid) { confirmation.textContent = "Veuillez remplir tous les champs obligatoires.";
confirmation.classList.remove("hidden");
confirmation.classList.add("error");
return; }
// essayons de simuler l'envoi et que cela affiche la confirmation de l'envoie
form.reset();
confirmation.textContent = "Merci ! Votre message a bien été envoyé.";
confirmation.classList.remove("hidden", "error");
confirmation.classList.add("success");
setTimeout(() => { confirmation.classList.add("hidden"); }, 5000); }); });
