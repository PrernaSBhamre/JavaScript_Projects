document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input-field");
    const outputField = document.getElementById("output-field");
  
    document.querySelector(".uppercase").addEventListener("click", () => {
      outputField.textContent = inputField.value.toUpperCase();
    });
  
    document.querySelector(".lowercase").addEventListener("click", () => {
      outputField.textContent = inputField.value.toLowerCase();
    });
  
    document.querySelector(".capitalize").addEventListener("click", () => {
      outputField.textContent = inputField.value
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    });
  
    document.querySelector(".bold").addEventListener("click", () => {
      outputField.style.fontWeight =
        outputField.style.fontWeight === "bold" ? "normal" : "bold";
      outputField.textContent = inputField.value;
    });
  
    document.querySelector(".italic").addEventListener("click", () => {
      outputField.style.fontStyle =
        outputField.style.fontStyle === "italic" ? "normal" : "italic";
      outputField.textContent = inputField.value;
    });
  
    document.querySelector(".underline").addEventListener("click", () => {
      outputField.style.textDecoration =
        outputField.style.textDecoration === "underline" ? "none" : "underline";
      outputField.textContent = inputField.value;
    });
  });
  