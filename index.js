const summaryResults = [];

fetch("./data.json")
  .then((response) => response.json())
  .then((results) => summaryResults.push(...results));

window.onload = function (e) {
  //   e.preventDefault();
  const listItems = summaryResults
    .map((item) => {
      return `
    <li>
    <span class="category"><img src="${item.icon}"></img>
    ${item.category}</span>
    <span class="score"><span class="bold">${item.score}</span> / 100</span>
    </li>
    `;
    })
    .join("");

  document.getElementById("items").innerHTML = listItems;
};
