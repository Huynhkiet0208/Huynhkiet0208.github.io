// Menu mobile: mở/đóng thanh điều hướng
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Đóng menu sau khi chọn một mục
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Thanh tiến độ cuộn trang
const progress = document.getElementById("progress");
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = percent + "%";
}
window.addEventListener("scroll", updateProgress);
updateProgress();

// Hiệu ứng xuất hiện khi cuộn đến từng nội dung
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(item => observer.observe(item));

// Tự động cập nhật năm ở chân trang
document.getElementById("year").textContent = new Date().getFullYear();

// Cập nhật email thật của bạn tại href="mailto:..." trong index.html
