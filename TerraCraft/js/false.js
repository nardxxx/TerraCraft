var splide = new Splide(".splide", {
  type: "loop",
  direction: "ttb",
  height: "420px",
  perPage: 7,
  pagination: !1,
  arrows: !1,
  isNavigation: !0,
  focus: "center",
  updateOnMove: !0,
  wheel: !0,
  fixedHeight: 60,
});
function makesome(e) {
  const t = document.querySelector(e + " .splide__slide.is-active");
  document.querySelectorAll(e + " .splide__slide").forEach((e) => {
    e.classList.remove("first"), e.classList.remove("afterfirst");
  }),
    t.previousElementSibling.previousElementSibling.previousElementSibling.classList.add(
      "first"
    ),
    t.previousElementSibling.previousElementSibling.classList.add("afterfirst"),
    t.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
      "first"
    ),
    t.nextElementSibling.nextElementSibling.classList.add("afterfirst");
}
splide.mount(),
  makesome(".splide"),
  splide.on("move", () => {
    makesome(".splide");
  }),
  splide.on("moved", () => {
    makesome(".splide");
  }),
  splide.on("dragging", (e) => {
    document
      .querySelectorAll(".splide .splide__slide")
      .forEach((e) => e.classList.remove("first", "afterfirst"));
  });
var splideBlocks = new Splide("#bloks-slider", {
  type: "fade",
  pagination: !1,
  arrows: !1,
});
splideBlocks.sync(splide), splideBlocks.mount();
const addon = document.querySelectorAll(".calculator__addon > div"),
  mainSlides = document.querySelectorAll(
    ".calculator__type .splide__slide span"
  ),
  typeS = document.querySelector(".calculator__type");
function hideList(e) {
  e.forEach((e) => (e.style.display = "none"));
}
function showList(e, t = 0) {
  e[t].style.display = "block";
}
function checkIfClickedTargetOnItem(e) {
  const t = e.target;
  t &&
    t.matches("span") &&
    (hideList(addon),
    addon[t.getAttribute("data-i") - 1]
      ? (addon[t.getAttribute("data-i") - 1].getAttribute("data-i") ==
          t.getAttribute("data-i") &&
          (addon[t.getAttribute("data-i") - 1].style.display = "initial"),
        typeS.classList.remove("alone"))
      : typeS.classList.add("alone"));
}
function webpAndAvifCheck() {
  function e(e) {
    document.body.classList.add(e);
  }
  var t = new Image();
  (t.src =
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
    (t.onload = function () {
      e("avif");
    }),
    (t.onerror = function () {
      var t = new Image();
      (t.src =
        "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="),
        (t.onload = function () {
          e("webp");
        });
    });
}
function ibg() {
  document.querySelectorAll(".ibg").forEach((e) => {
    e.querySelector("img") > 0 &&
      (e.style.backgroundImage = `url(${e
        .querySelector("img")
        .getAttribute("src")})`);
  });
}
addon.forEach((e, t) => {
  e.classList.add("splide" + (t + 1)),
    new Splide(".splide" + (t + 1), {
      type: "loop",
      direction: "ttb",
      height: "420px",
      perPage: 7,
      pagination: !1,
      arrows: !1,
      isNavigation: !0,
      focus: "center",
      updateOnMove: !0,
      wheel: !0,
      fixedHeight: 60,
    }).mount();
}),
  hideList(addon),
  showList(addon),
  mainSlides.forEach((e) => {
    e.addEventListener("click", checkIfClickedTargetOnItem);
  }),
  webpAndAvifCheck(),
  document.querySelector(".wrapper").classList.add("loaded");
const tags = document.querySelector(".main-form__tags"),
  inputs = document.querySelectorAll(".main-form__input"),
  mainForm = document.querySelector(".main-form"),
  calculator = document.querySelector(".calculator"),
  blocks = document.querySelector(".calculator__blocks"),
  calculatorType = document.querySelector(".calculator__type"),
  eyes = document.querySelectorAll(".eye"),
  selectHeader = document.querySelector(".select-header"),
  selectTitle = document.querySelector(".select-header__title"),
  selectOptions = document.querySelectorAll(".select-header__option"),
  formCancel = document.querySelector(".buttons-main-form__button"),
  formSubmit = document.querySelector(
    '.buttons-main-form__button[type="submit"]'
  );
function checkInput(e, t) {
  const l = e.querySelector("input"),
    i = e.querySelector(".withError");
  l.addEventListener("blur", (o) => {
    if (
      ((o.target.value = o.target.value.replace(/\s{1,}/g, " ")), "" == l.value)
    )
      e.style.boxShadow = "initial";
    else {
      function a(e) {
        if (e.match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/i)) return !0;
      }
      o.target.value.match(t)
        ? 1 == a(o.target.value)
          ? (e.style.boxShadow = "#C73131 0px 0px 0px 2px inset")
          : (e.style.boxShadow = "initial")
        : ((e.style.boxShadow = "#C73131 0px 0px 0px 2px inset"),
          1 == a(o.target.value) && (i.append(el), console.log("a")));
    }
  });
}
function calculatorMobileActions(e) {
  const t = e.querySelectorAll("[data-question"),
    l = e.querySelectorAll("[data-close]");
  t.forEach((e) => {
    e.addEventListener("click", (e) => {
      (blocks.style.visibility = "visible"),
        (blocks.style.opacity = 1),
        (calculatorType.style.overflow = "hidden");
    });
  }),
    l.forEach((e) => {
      e.addEventListener("click", (e) => {
        (blocks.style.visibility = "hidden"),
          (blocks.style.opacity = 0),
          (calculatorType.style.overflow = "auto");
      });
    });
}
function selectInit() {
  (selectTitle.textContent =
    selectOptions[0].querySelector("span").textContent),
    (selectTitle.style.backgroundColor = getComputedStyle(
      selectOptions[0].querySelector("span")
    ).backgroundColor),
    selectTitle.addEventListener("click", (e) => {
      selectHeader.classList.toggle("active");
    }),
    selectOptions.forEach((e) => {
      e.addEventListener("click", (e) => {
        (selectTitle.textContent = e.target.querySelector("span").textContent),
          (selectTitle.style.backgroundColor = getComputedStyle(
            e.target.querySelector("span")
          ).backgroundColor),
          selectHeader.classList.toggle("active");
      });
    }),
    document.addEventListener("click", (e) => {
      e.target != selectTitle && selectHeader.classList.remove("active");
    });
}
formCancel.addEventListener("click", (e) => {
  e.preventDefault(),
    inputs.forEach((e) => {
      e.style.boxShadow = "initial";
    }),
    mainForm.reset();
}),
  formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
  }),
  inputs.forEach((e) => {
    const t = e.querySelector("input");
    "pass" == t.getAttribute("data-input") && checkInput(e, /^.{7,20}$/),
      "tags" == t.getAttribute("data-input") && checkInput(e, /^\D{7,14}$/),
      "title" == t.getAttribute("data-input") &&
        checkInput(e, /^\D{2,20}$/, "write symbols beetwen 2-20"),
      "company" == t.getAttribute("data-input") && checkInput(e, /^.{2,30}$/);
  }),
  calculatorMobileActions(calculator),
  eyes.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.target.classList.contains("close-eye")
        ? (document.querySelector("[data-eyed]").type = "password")
        : (document.querySelector("[data-eyed]").type = "text"),
        eyes.forEach((e) => (e.hidden = !1)),
        (e.target.hidden = !0);
    });
  }),
  tags.addEventListener("click", (e) => {
    e.target.matches("img") && e.target.parentElement.remove();
  }),
  selectInit();
