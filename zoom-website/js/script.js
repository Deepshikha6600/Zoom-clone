function search() {
  let myDiv = document.getElementById("searchDiv");
  document.getElementById("searchBtn").style.display = "none";
  document.getElementById("searchText").style.display = "none";
  myDiv.style.marginRight = "20px";
  myDiv.style.display = "block";
}
function hideSearch() {
  // console.log("i called");
  let myDiv = document.getElementById("searchDiv");
  myDiv.style.display = "none";
  document.getElementById("searchBtn").style.display = "block";
  document.getElementById("searchText").style.display = "block";
}

//fill color in search icon

const searchInput = document.getElementById("srchInput");
const onChangeSearch = (e) => {
  // console.log("searched");
  const searchButton = document.getElementById("srchBtn");
  if (searchInput.value.length > 0) {
    document.getElementById("searchGlass").style.fill = "white";
    searchButton.style.backgroundColor = "#0b5cff";
  } else {
    document.getElementById("searchGlass").style.fill = "rgb(151, 148, 148)";
    searchButton.style.backgroundColor = "white";
  }
};
searchInput.addEventListener("input", onChangeSearch);

const slideObject = [
  {
    varKey: "connect",
    img1: "/images/slide1-1.jpg",
    img2: "/images/slide1-2.png",
    img2Width: "400",
    img2Height: "90",
    img3: "/images/slide1-3.png",
    img3Width: "80",
    img3Height: "80",
    img4: "/images/slide1-4.jpg",
  },
  {
    varKey: "create",
    img1: "/images/slide2-1.jpg",
    img2: "/images/slide2-2.png",
    img2Width: "300",
    img2Height: "100",
    img3: "/images/slide2-3.png",
    img3Width: "300",
    img3Height: "80",
    img4: "/images/slide2-4.jpg",
  },
  {
    varKey: "innovate",
    img1: "/images/slide3-1.jpg",
    img2: "/images/slide3-2.png",
    img2Width: "400",
    img2Height: "170",
    img3: "/images/slide3-3.png",
    img3Width: "180",
    img3Height: "120",
    img4: "/images/slide3-4.jpg",
  },
];

const animateMotto = () => {
  let count = 1;
  // console.log(count);
  return () => {
    const changeStatem = document.getElementById("changeMotto");
    const img1 = document.querySelector(".specificationImg1");
    const img2 = document.querySelector(".specificationImg2slide1 ");
    const img3 = document.querySelector(".specificationImg3slide1");
    const img4 = document.querySelector(".specificationImg4");

    changeStatem.innerText = slideObject[count % 3].varKey;
    img1.src = slideObject[count % 3].img1;
    img2.src = slideObject[count % 3].img2;
    img2.style.height = slideObject[count % 3].img2Height + "px";
    img2.style.width = slideObject[count % 3].img2Width + "px";
    img3.src = slideObject[count % 3].img3;
    img3.style.height = slideObject[count % 3].img3Height + "px";
    img3.style.width = slideObject[count % 3].img3Width + "px";
    img3.style.position = "absolute";
    img3.style.left = "1110px";
    img3.style.top = "510px";

    img4.src = slideObject[count % 3].img4;

    // img2.style.animationPlayState = "running";
    // img3.style.animationPlayState = "running";
    count++;
  };
};

const startTimebar = () => {
  const myBar = document.getElementById("timeBarInner");
  myBar.addEventListener("animationiteration", animateMotto());
};
window.addEventListener("load", startTimebar);

//btns position change in solutions section

document.addEventListener("scroll", (scroll) => {
  // console.log(this.scrollY);
  if (this.scrollY > 220) {
    //moves the buttons
    document.querySelector("#solheadDisp").style.visibility = "hidden";

    document.getElementById("btnZoomone").classList.add("btnzone");
    document.getElementById("btnSpaces").classList.add("btnzspa");
    document.getElementById("btnEvents").classList.add("btnzeve");
    document.getElementById("btnCon").classList.add("btnzcon");
    document.getElementById("btnDev").classList.add("btnzdev");
    //color change in the buttons
    document.getElementById("btnSpaces").style.backgroundColor =
      "rgb(13, 11, 42)";
    document.getElementById("btnEvents").style.backgroundColor =
      "rgb(13, 11, 42)";
    document.getElementById("btnCon").style.backgroundColor = "rgb(13, 11, 42)";
    document.getElementById("btnDev").style.backgroundColor = "rgb(13, 11, 42)";

    // document.getElementById("solBtnsRitDiv").style.backgroundColor = "white";

    //removes span text and adjusts width
    const classItems = document.querySelectorAll(".zoomSpan");
    for (let i = 0; i < classItems.length; i++) {
      if (i != 0) {
        classItems[i].textContent = "";
      }
    }
    document.getElementById("btnSpaces").style.width = "120px";
    document.getElementById("btnEvents").style.width = "120px";
    document.getElementById("btnCon").style.width = "190px";
    document.getElementById("btnDev").style.width = "150px";
  }
  if (this.scrollY > 300) {
    //color change of sol right
    // console.log(this.scrollY);
    document.getElementById("solRight").style.transition = "all 1s";
    document.getElementById("solBtnsRitDiv").style.backgroundColor = "white";

    document.getElementById("solRight").style.backgroundColor = "white";
    // setTimeout(() => {
    document.getElementById("solRight").style.display = "block";
    // }, 3000);
  }
  if (this.scrollY < 200) {
    document.getElementById("solRight").style.display = "none";
    document.getElementById("solBtnsRitDiv").style.backgroundColor =
      "rgb(13, 11, 42)";
    document.querySelector("#solheadDisp").style.visibility = "visible";
    document.getElementById("solRight").style.backgroundColor =
      "rgb(13, 11, 42)";
    document.getElementById("btnZoomone").classList.remove("btnzone");
    document.getElementById("btnSpaces").classList.remove("btnzspa");
    document.getElementById("btnEvents").classList.remove("btnzeve");
    document.getElementById("btnCon").classList.remove("btnzcon");
    document.getElementById("btnDev").classList.remove("btnzdev");

    document.getElementById("btnZoomone").style.backgroundColor =
      "rgba(254, 253, 253, 0.18)";

    //recovery of btns' original background colours
    document.getElementById("btnSpaces").style.backgroundColor =
      " rgba(254, 253, 253, 0.18)";
    document.getElementById("btnEvents").style.backgroundColor =
      " rgba(254, 253, 253, 0.18)";
    document.getElementById("btnCon").style.backgroundColor =
      " rgba(254, 253, 253, 0.18)";
    document.getElementById("btnDev").style.backgroundColor =
      " rgba(254, 253, 253, 0.18)";

    //recovery of btns' width and addition of span text
    const classItems = document.querySelectorAll(".zoomSpan");
    for (let i = 0; i < classItems.length; i++) {
      if (i != 0) {
        classItems[i].textContent = "Zoom ";
      }
    }
    document.getElementById("btnSpaces").style.width = "160px";
    document.getElementById("btnEvents").style.width = "160px";
    document.getElementById("btnCon").style.width = "230px";
    document.getElementById("btnDev").style.width = "200px";
  }
});

//Setting initial slide position

const slides = document.querySelectorAll(".solRight");
// console.log("slides", slides);
slides.forEach((slide, index) => {
  // console.log("hello");
  slide.style.transform = `translateX(${index * 100}%)`;
});

//changes slides on click
function showSlides(slideCount) {
  // console.log("hey m clicked");
  let zoomSpans = document.querySelectorAll(".zoomSpan");
  let solBtns = document.querySelectorAll(".sol-btn");
  let slides = document.querySelectorAll(".solRight");

  //btns' span addition
  solBtns.forEach((btn, index) => {
    if (slideCount == index) {
      solBtns[index].style.backgroundColor = "rgba(254, 253, 253, 0.18)";
      // solBtns[index].style.width = "200px";
      // solBtns[index].style.right = "1200px";
      // solBtns[index].style.width = "160px";
      zoomSpans[index].innerText = "Zoom ";
    } else {
      if (index == 0) {
        // zoomSpans[index].innerText = "Zoom ";
      } else {
        zoomSpans[index].innerText = "";
      }
      btn.style.backgroundColor = "rgb(13, 11, 42)";
    }
  });

  //slides the slides to respective positions on click
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideCount) * 100}%)`;
  });
}

//fields-used section

const fieldsUsedGallery = [
  {
    varKey: "Retail",
    img1: "../images/industry1.jpg",
    heading: "Because learning happens everywhere",
    para: "Design remote and hybrid learning environments, empower teachers and students, and create more equitable educational opportunities.",
    btnText: "Zoom for Education",
    secBtnText: "of the Top 100 global universities choose Zoom",
    num: "89",
  },
  {
    varKey: "Financial Services",
    img1: "../images/industry2.jpg",
    heading: "Trusted solutions for the finance sector",
    para: "Secure communications and collaboration technology designed for a complex regulatory landscape.",
    btnText: "Zoom for Financial Services",
    secBtnText: "Of the 10 largest U.S. Banks choose Zoom",
    num: "8",
  },
  {
    varKey: "Government",
    img1: "../images/industry3.jpg",
    heading: "Communications for the people",
    para: "Improve access and information sharing, build stronger relationships, and better serve your constituents",
    btnText: "Zoom for Government",
    secBtnText:
      "of government workers felt favorable toward Zoom for video communications",
    num: "87%",
  },
  {
    varKey: "Healthcare",
    img1: "../images/industry4.jpg",
    heading: "Connect everyone in your health organization",
    para: "Communicate across the continuum of care, meet patients where they are, and enable an agile, connected workforce.",
    btnText: "Zoom for Healthcare",
    secBtnText: "of the Top 10 U.S. Hospitals Choose Zoom",
    num: "9",
  },
  {
    varKey: "Manufacturing",
    img1: "../images/industry5.jpg",
    heading: "Real-time communication, anywhere in the world",
    para: "Reliably connect global staff, designers, factories, supply chains, and more to keep production moving.",
    btnText: "Zoom for Manufacturing",
    secBtnText: "of the 10 top global pharmaceutical companies choose Zoom",
    num: "7",
  },
  {
    varKey: "Retail",
    img1: "../images/industry6.jpg",
    heading: "Bridging the in-store and online experiences",
    para: "Use video to reimagine e-commerce and unlock new revenue opportunities.",
    btnText: "Zoom for Retail",
    secBtnText: "of the 10 largest U.S. retailers choose Zoom",
    num: "8",
  },
];

let wrapperActiveArray = [false, false, false, false, false, false];
function appearDiv(btnCount) {
  let btnsDiv = document.querySelector(".fields-used-btns");
  let btns = document.querySelectorAll(".fields-used-main-btn");
  let wrapperSlider = document.querySelector(".fields-used-wrapper-div");
  let btnsSvg = document.querySelectorAll(".fields-used-main-btn-svg");
  let image1 = document.querySelector("#wrapper-img");
  let heading1 = document.querySelector("#heading");
  let para1 = document.querySelector("#para");
  let btnInnerText = document.querySelector("#btn-text");
  let secBtnHeading1 = document.querySelector("#sec-btn-heading");
  wrapperActiveArray.forEach((_, index) => {
    if (index == btnCount) {
      wrapperActiveArray[index] = !wrapperActiveArray[index];
      return;
    }
    wrapperActiveArray[index] = false;
  });

  // btnsDiv.style.width = "30%";
  // btnsDiv.style.float = "right";

  btns.forEach((btn, index) => {
    image1.src = fieldsUsedGallery[btnCount].img1;
    heading1.innerText = fieldsUsedGallery[btnCount].heading;
    para1.innerText = fieldsUsedGallery[btnCount].para;
    btnInnerText.innerText = fieldsUsedGallery[btnCount].btnText;
    secBtnHeading1.innerText = fieldsUsedGallery[btnCount].secBtnText;
  });
  //btn styles
  if (wrapperActiveArray.includes(true)) {
    btnsDiv.style.paddingLeft = "350px";
    btnsDiv.style.transition = "all 0.3s";
    wrapperSlider.style.visibility = "visible";
    btns.forEach((btn, index) => {
      btn.style.width = "182px";
      if (index == btnCount) {
        btns[index].style.backgroundColor = "blue";
        btns[index].style.color = "white";
        btnsSvg[index].style.fill = "white";
      }
    });

    // btnsSvg[btnCount].style.fill = "white";
    // console.log(wrapperActiveArray);
  } else {
    wrapperSlider.style.visibility = "hidden";
    btnsDiv.style.paddingLeft = "0";
    btns.forEach((btn, index) => {
      btn.style.width = "280px";
    });
  }

  wrapperActiveArray.forEach((value, index) => {
    if (value == false) {
      btns[index].style.backgroundColor = "white";
      btns[index].style.color = "black";
      btnsSvg[index].style.fill = "black";
    }
  });
}

// new-products section
let products = document.querySelectorAll(".feature");
products.forEach((slide, index) => {
  // console.log(index);
  slide.style.transform = `translateX(${index * 110}%)`;
});

let a = 0;

if (a == 0) {
  document.getElementById("left-arrow-svg").style.fill = "gray";
}
function slideto(btnClick) {
  let leftBtn = document.getElementById("slide-left-btn");
  let rightBtn = document.getElementById("slide-right-btn");

  // console.log("hey");
  if (btnClick == "r" && a < 3) {
    a++;
    let p = 1;
    products.forEach((slide, index) => {
      slide.style.transition = "all 0.5s";
      if (index < a) {
        slide.style.transform = `translateX(${-(a - index) * 110}%)`;
      } else if (index == a) {
        slide.style.transform = `translateX(${0}%)`;
      } else {
        slide.style.transform = `translateX(${p * 110}%)`;
        p++;
      }
    });
  } else if (btnClick == "l" && a > 00) {
    a--;
    let p = 1;
    products.forEach((slide, index) => {
      // console.log("hey");

      // console.log(slide);
      // slide.style.transform += `translateX(${products.length - index + 110}%)`;
      if (index < a) {
        slide.style.transform = `translateX(${-(a - index) * 110}%)`;
      } else if (index == a) {
        slide.style.transform = `translateX(${0}%)`;
      } else {
        slide.style.transform = `translateX(${p * 110}%)`;
        p++;
      }
    });
  }
  //change the color of the btns
  if (a == 3) {
    document.getElementById("right-arrow-svg").style.fill = "gray";
  } else if (a > 0) {
    document.getElementById("left-arrow-svg").style.fill = "white";
  } else if (a == 0) {
    document.getElementById("left-arrow-svg").style.fill = "gray";
    document.getElementById("right-arrow-svg").style.fill = "white";
  }
}
