
document.addEventListener("DOMContentLoaded", function () {
  const dropBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropBtn && dropdownContent) {
    dropBtn.addEventListener("click", (event) => {
      event.preventDefault();
      dropdownContent.classList.toggle("show");
    });


    window.addEventListener("click", (e) => {
      if (!e.target.matches(".dropbtn")) {
        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        }
      }
    });
  }
});
