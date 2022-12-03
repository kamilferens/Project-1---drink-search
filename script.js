let search = document.querySelector(".search"); // ciekawe czy działa bez kropki
console.log(search);
const li = document.querySelectorAll("li");
console.log(li);

function searchEngine(x) {
  let text = x.target.value.toLowerCase();
  console.log(text); // wyświetla ciąg liter wpisany w input - wszystko wyświetla małymi literami niezależnie od tego czy wpiszę małymi czy dużymi

  li.forEach(function (el) {
    if (el.textContent.toLowerCase().indexOf(text) !== -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
}

search.addEventListener("keyup", searchEngine);
