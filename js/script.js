const toggleLink = document.getElementById("toggleLink");
const postsGrid = document.getElementById("postsGrid");

toggleLink.addEventListener("click", function (e) {
    e.preventDefault();
  
    postsGrid.classList.toggle("expandido");
  
    if (postsGrid.classList.contains("expandido")) {
      toggleLink.textContent = "Mostrar menos";
    } else {
      toggleLink.textContent = "Ver todos";
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const categorias = {};

    cards.forEach(card => {
        const content = card.querySelector(".card-content");
        const categoria = content.dataset.categoria;
        const titulo = content.querySelector(".card-title").innerText;

        if (!categorias[categoria]) {
        categorias[categoria] = [];
        }

        categorias[categoria].push(titulo);
    });

    const ul = document.getElementById("category-list");

    Object.entries(categorias).forEach(([categoria, titulos]) => {
        const li = document.createElement("li");
        li.innerHTML = `> ${categoria} <span>(${titulos.length})</span>`;

        const subList = document.createElement("ul");
        subList.classList.add("categories-title");

        titulos.forEach(titulo => {
        const item = document.createElement("li");
        item.textContent = titulo;
        subList.appendChild(item);
        });

        li.addEventListener("click", () => {
        subList.style.display = subList.style.display === "block" ? "none" : "block";
        });

        ul.appendChild(li);
        ul.appendChild(subList);
    });
  });
  