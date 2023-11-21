const leha = document.getElementById("leha");

const vacuum = document.getElementById("vacuum");

document.addEventListener("keypress", function (event) {
  jump();
});


function jump() {
  if (leha.classList != "jump") {
    leha.classList.add("jump")
  }
  setTimeout(function () {
    leha.classList.remove("jump")
  }, 300)
}

let isImpact = setInterval(function () {
  let boyTop = parseInt(window.getComputedStyle(leha).getPropertyValue("top"))
  let vacuumLeft = parseInt(window.getComputedStyle(vacuum).getPropertyValue("left"))
  if (vacuumLeft < 40 && vacuumLeft > 0 && boyTop >= 140) {
    alert("YOU'WE BEEN CATHED by VACUUM CLEANER!")
  }

}, 20)