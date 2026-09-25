const books = [
{
id: “beyond-fear”,
title: “Beyond Fear: Discovering Strength and Responsibility”,
author: “Atem Akol Agoth”,
category: “Personal Development”,
description:
“A journey about overcoming fear, rejection, responsibility, faith, and discovering the strength within you.”,
cover: “BEYOND FEAR”,
chapters: [
{
title: “Chapter 1 — Beyond Fear”,
text: `Fear can make us question ourselves, our future, and even our purpose. But fear does not have to control the direction of our lives.

Sometimes the greatest strength is not the absence of fear. It is the decision to keep moving forward even when fear is present.

Every person faces moments when they feel rejected, forgotten, or uncertain. Those moments can either become walls that stop us or lessons that help us grow.

Your story is not finished because you are facing a difficult chapter. Keep going. There may be strength inside you that you have not discovered yet.}, { title: "Chapter 2 — Responsibility", text:Responsibility begins when we understand that our choices matter.

We cannot control everything that happens around us, but we can learn to control how we respond. Our decisions today can influence the person we become tomorrow.

Growing in responsibility means becoming willing to learn, correct our mistakes, and keep moving forward.

Strength is not only about surviving difficult situations. It is also about becoming someone who can be trusted with greater opportunities.`
}
]
}
];

let selectedBook = null;
let currentChapter = 0;

const $ = (selector) => document.querySelector(selector);

const bookGrid = $(”#bookGrid”);
const searchInput = $(”#searchInput”);
const categoryFilter = $(”#categoryFilter”);
const emptyState = $(”#emptyState”);

const bookModal = $(”#bookModal”);
const closeModal = $(”#closeModal”);
const modalCover = $(”#modalCover”);
const modalCategory = $(”#modalCategory”);
const modalTitle = $(”#modalTitle”);
const modalAuthor = $(”#modalAuthor”);
const modalDescription = $(”#modalDescription”);
const readBtn = $(”#readBtn”);
const favBtn = $(”#favBtn”);

const readerModal = $(”#readerModal”);
const closeReader = $(”#closeReader”);
const readerTitle = $(”#readerTitle”);
const readerText = $(”#readerText”);
const chapterLabel = $(”#chapterLabel”);
const progressBar = $(”#progressBar”);
const prevChapter = $(”#prevChapter”);
const nextChapter = $(”#nextChapter”);

const themeBtn = $(”#themeBtn”);
const continueBtn = $(”#continueBtn”);

function getFavorites() {
return JSON.parse(localStorage.getItem(“zaviFavorites”) || “[]”);
}

function saveFavorites(favorites) {
localStorage.setItem(“zaviFavorites”, JSON.stringify(favorites));
}

function isFavorite(bookId) {
return getFavorites().includes(bookId);
}

function updateStats() {
$(”#bookCount”).textContent = books.length;

const categories = new Set(books.map(book => book.category));
$(”#categoryCount”).textContent = categories.size;

$(”#favoriteCount”).textContent = getFavorites().length;
}

function setupCategories() {
const categories = […new Set(books.map(book => book.category))];

categories.forEach(category => {
const option = document.createElement(“option”);
option.value = category;
option.textContent = category;
categoryFilter.appendChild(option);
});
}

function createBookCard(book) {
const article = document.createElement(“article”);
article.className = “book-card”;

article.innerHTML = `

ZaVi
${book.cover}
${book.author}


<div class="book-info">
  <p class="eyebrow">${book.category}</p>
  <h3>${book.title}</h3>
  <p class="muted">By ${book.author}</p>

  <div class="card-actions">
    <button class="btn primary details-btn">Book Details</button>
    <button class="favorite-btn" aria-label="Favorite">
      ${isFavorite(book.id) ? "♥" : "♡"}
    </button>
  </div>
</div>

`;

article.querySelector(”.details-btn”).onclick = () => openBook(book);
article.querySelector(”.favorite-btn”).onclick = () => toggleFavorite(book.id);

return article;
}

function renderBooks() {
const search = searchInput.value.toLowerCase().trim();
const category = categoryFilter.value;

const filteredBooks = books.filter(book => {
const matchesSearch =
book.title.toLowerCase().includes(search) ||
book.author.toLowerCase().includes(search) ||
book.category.toLowerCase().includes(search);

const matchesCategory =
  category === "all" || book.category === category;

return matchesSearch && matchesCategory;

});

bookGrid.innerHTML = “”;

filteredBooks.forEach(book => {
bookGrid.appendChild(createBookCard(book));
});

emptyState.classList.toggle(“hidden”, filteredBooks.length !== 0);
}

function openBook(book) {
selectedBook = book;

modalCover.innerHTML = <span>ZaVi</span> <b>${book.cover}</b> <small>${book.author}</small>;

modalCategory.textContent = book.category;
modalTitle.textContent = book.title;
modalAuthor.textContent = By ${book.author};
modalDescription.textContent = book.description;

updateFavoriteButton();

bookModal.classList.remove(“hidden”);
}

function updateFavoriteButton() {
if (!selectedBook) return;

favBtn.textContent = isFavorite(selectedBook.id)
? “♥ Remove Favorite”
: “♡ Favorite”;
}

function toggleFavorite(bookId) {
let favorites = getFavorites();

if (favorites.includes(bookId)) {
favorites = favorites.filter(id => id !== bookId);
} else {
favorites.push(bookId);
}

saveFavorites(favorites);

updateStats();
renderBooks();
updateFavoriteButton();
}

function startReading(book) {
selectedBook = book;

const savedChapter = Number(
localStorage.getItem(zavi-progress-${book.id}) || 0
);

currentChapter = Math.min(savedChapter, book.chapters.length - 1);

readerModal.classList.remove(“hidden”);

renderChapter();
}

function renderChapter() {
if (!selectedBook) return;

const chapter = selectedBook.chapters[currentChapter];

readerTitle.textContent = selectedBook.title;
chapterLabel.textContent =
Chapter ${currentChapter + 1} of ${selectedBook.chapters.length};

readerText.innerHTML = chapter.text
.split(”\n\n”)
.map(paragraph => <p>${paragraph}</p>)
.join(””);

const progress =
((currentChapter + 1) / selectedBook.chapters.length) * 100;

progressBar.style.width = ${progress}%;

prevChapter.disabled = currentChapter === 0;
nextChapter.disabled =
currentChapter === selectedBook.chapters.length - 1;

localStorage.setItem(
zavi-progress-${selectedBook.id},
currentChapter
);
}

readBtn.onclick = () => {
if (!selectedBook) return;

bookModal.classList.add(“hidden”);
startReading(selectedBook);
};

favBtn.onclick = () => {
if (!selectedBook) return;

toggleFavorite(selectedBook.id);
};

prevChapter.onclick = () => {
if (currentChapter > 0) {
currentChapter–;
renderChapter();
}
};

nextChapter.onclick = () => {
if (
selectedBook &&
currentChapter < selectedBook.chapters.length - 1
) {
currentChapter++;
renderChapter();
}
};

closeModal.onclick = () => {
bookModal.classList.add(“hidden”);
};

closeReader.onclick = () => {
readerModal.classList.add(“hidden”);
};

bookModal.onclick = event => {
if (event.target === bookModal) {
bookModal.classList.add(“hidden”);
}
};

readerModal.onclick = event => {
if (event.target === readerModal) {
readerModal.classList.add(“hidden”);
}
};

searchInput.addEventListener(“input”, renderBooks);
categoryFilter.addEventListener(“change”, renderBooks);

continueBtn.onclick = () => {
const lastBookId = localStorage.getItem(“zaviLastBook”);

if (lastBookId) {
const book = books.find(item => item.id === lastBookId);

if (book) {
  startReading(book);
  return;
}

}

document.querySelector(”#library”).scrollIntoView({
behavior: “smooth”
});
};

themeBtn.onclick = () => {
document.body.classList.toggle(“dark”);

const darkMode = document.body.classList.contains(“dark”);

localStorage.setItem(“zaviDarkMode”, darkMode ? “on” : “off”);

themeBtn.textContent = darkMode ? “☀” : “☾”;
};

function loadTheme() {
const darkMode = localStorage.getItem(“zaviDarkMode”) === “on”;

if (darkMode) {
document.body.classList.add(“dark”);
themeBtn.textContent = “☀”;
}
}

function initialize() {
setupCategories();
renderBooks();
updateStats();
loadTheme();

$(”#year”).textContent = new Date().getFullYear();
}

initialize();
