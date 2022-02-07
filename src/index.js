const line = document.getElementById("line");
const pathLength = line.getTotalLength();

line.style.strokeDasharray = pathLength + 100;
line.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", showLine);

function showLine() {
  const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  const draw = pathLength * scrollPercent;
  line.style.strokeDashoffset = pathLength - draw;
}
