async function getResults() {
  let url = "data.json";
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderResults() {
  let results = await getResults();
  const listItems = results
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
}

renderResults();
