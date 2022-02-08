const lineDesktop = document.getElementById("line");
const lineMobile = document.getElementById("lineMobile");

const lineDesktopLength = lineDesktop.getTotalLength();
const lineMobileLength = lineMobile.getTotalLength();

lineDesktop.style.strokeDasharray = lineDesktopLength;
lineDesktop.style.strokeDashoffset = lineDesktopLength;

lineMobile.style.strokeDasharray = lineMobileLength;
lineMobile.style.strokeDashoffset = lineMobileLength;

function showLine(line) {
  const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  if (line.getTotalLength() > 3000) {
    const draw = lineMobileLength * scrollPercent;
    line.style.strokeDashoffset = lineMobileLength - draw;
  }
  const draw = lineDesktopLength * scrollPercent;
  line.style.strokeDashoffset = lineDesktopLength - draw;
}

window.addEventListener("scroll", () => { showLine(lineDesktop); });
window.addEventListener("scroll", () => { showLine(lineMobile); });

/* scrolling part */
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.75)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
