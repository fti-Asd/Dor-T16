const customMenu = document.getElementById("custom-menu");


// نمایش منوی سفارشی
map.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // جلوگیری از منوی پیش‌فرض
    const { clientX: mouseX, clientY: mouseY } = e;

    // تنظیم مکان نمایش منو
    customMenu.style.top = `${mouseY}px`;
    customMenu.style.left = `${mouseX}px`;
    customMenu.style.display = "block";
  });

  // مخفی کردن منوی سفارشی وقتی روی صفحه کلیک شود
  document.addEventListener("click", () => {
    customMenu.style.display = "none";
  });

  // جلوگیری از بستن منو هنگام کلیک روی خود منو
  customMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });