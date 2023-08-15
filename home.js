$("#logout").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});


(function () {
  let userName = localStorage.getItem("user");
  $("#userLogin").innerHTML = `${userName}`
  console.log(userName);
  if (userName === null) {
    $("#userLogin").innerHTML = `Sign in`;
  }

  let token = localStorage.getItem("user");
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
