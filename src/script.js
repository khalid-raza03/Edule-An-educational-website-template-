// scroll to top button
document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("eduleScrollBtn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//onscroll navbar function
var onscrollNav = document.getElementById("onScrollNavBar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    onscrollNav.classList.add("active");
  } else {
    onscrollNav.classList.remove("active");
  }
});

//edule accordion script
var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Close all accordions first
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.maxHeight = null;
      }
    }

    // Toggle the clicked accordion
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//course slider
var swiper = new Swiper(".eduleSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5, // large screens (tablets, etc.)
    },

    992: {
      slidesPerView: 4, // Medium screens (tablets, etc.)
    },
    768: {
      slidesPerView: 3, // Smaller screens (mobile)
    },
    568: {
      slidesPerView: 2, // Smaller screens (mobile)
    },
    320: {
      slidesPerView: 1, // Smaller screens (mobile)
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//tabs script
function openCourse(evt, courseName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(courseName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//feedback swiper

var swiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1, // Adjust for small screens
      spaceBetween: 20, // Adjust spacing for better fit
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10, // Reduce spacing for very small screens
    },
  },
});

//brands slider

var swiper = new Swiper(".brandSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5, // large screens (tablets, etc.)
    },

    992: {
      slidesPerView: 5, // Medium screens (tablets, etc.)
    },
    768: {
      slidesPerView: 4, // Smaller screens (mobile)
    },
    568: {
      slidesPerView: 3, // Smaller screens (mobile)
    },
    320: {
      slidesPerView: 2, // Smaller screens (mobile)
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var darkModeBtn = document.getElementById("darkMode");
var sections = document.querySelectorAll(".section"); // easier

darkModeBtn.addEventListener("click", () => {
  darkModeBtn.classList.toggle("turn-on");

  sections.forEach((section) => {
    section.classList.toggle("dark");
  });
});
