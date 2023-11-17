//TYPING ANIMATION
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "Web Developer",
    "WordPress Specialist",
    "PHP Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
//ACTIVE NAVIGATION FEATURE
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    //FOR ACTIVE SECTION START
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back_section");
    }
    //FOR ACTIVE SECTION END

    for (let j = 0; j < totalNavList; j++) {
      //FOR ACTIVE SECTION START
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back_section");
      }
      //FOR ACTIVE SECTION END
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");

    showSection(this); //FOR ACTIVE SECTION
  });
}
//ACTIVE SECTION FEATURE
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];

  document.querySelector("#" + target).classList.add("active");
}
