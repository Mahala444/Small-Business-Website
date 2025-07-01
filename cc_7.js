document.addEventListener("DOMContentLoaded", () => {
  const ctaInput = document.getElementById("cta-input");
  const updateBtn = document.getElementById("update-btn");
  const ctaHeadline = document.getElementById("cta-headline");

  updateBtn.addEventListener("click", () => {
    const text = ctaInput.value.trim();
    if (text) {
      ctaHeadline.textContent = text;
      ctaInput.value = "";
    }
  });
});
