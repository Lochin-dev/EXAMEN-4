$("#logout").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});


(function () {
  let userName = localStorage.getItem("user");
  let token = localStorage.getItem("token");
  $("#userLogin").innerHTML = `${userName}`;
  if (!token) {
    location.replace("./login.html");
  }
})();



$(".ikonka").addEventListener("click", () => {
  $(".div").setAttribute("class", "div_wrap");
});

$(".spann").addEventListener("click", () => {
  $(".div_wrap").setAttribute("class", "div");
});
