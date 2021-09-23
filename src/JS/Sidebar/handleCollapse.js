export const handleCollapse = () => {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");
  const saksham = document.querySelector(".saksham");
  const id = document.getElementsByClassName("text");
  const change = document.getElementsByClassName("change");
  const button = document.getElementsByClassName("btn-toggle");
  const cButton = document.getElementsByClassName("cButton");
  console.log(id);

  document.querySelector("#cButton").onclick = function () {
    sidebar.classList.toggle("sidebar_small");
    mainContent.classList.toggle("main-content_large");

    if (saksham.style.display === "none") {
      saksham.style.display = "inline-block";
    } else {
      saksham.style.display = "none";
    }

    for (var i = 0; i < id.length; ++i) {
      var s = id[i].style;
      s.display = s.display === "none" ? "inline-block" : "none";
    }
    // if (button.disabled === true) {
    //   button.disabled = false;
    // } else {
    //   button.disabled = "true";
    // }
  };
};
