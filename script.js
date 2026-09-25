const books = [
  {
    id:"beyond-fear",
    title:"Beyond Fear: Discovering Strength and Responsibility",
    author:"Atem Akol Agoth",
    category:"Personal Growth",
    description:"A journey through fear, rejection, responsibility, faith, and the strength to keep moving forward.",
    chapters:[
      "Fear can make a person believe that the road ahead is impossible. But courage does not mean the absence of fear. It means choosing to move even when fear is present. Every difficult season can teach us something about ourselves.",
      "Responsibility begins when we stop waiting for someone else to change our lives. We may not control every circumstance, but we can control the next decision. Small decisions repeated with discipline can become a completely different future."
    ]
  },
  {
    id:"true-poverty",
    title:"The True Poverty",
    author:"Atem Akol Agoth",
    category:"Mindset",
    description:"A reflection on poverty beyond money, focusing on mindset, purpose, faith, and the way people understand their own possibilities.",
    chapters:[
      "Many people define poverty only by the lack of money or material things. Those realities matter, but poverty can also affect the way a person thinks about possibility, responsibility, purpose, and hope.",
      "Acceptance does not mean giving up. It means seeing reality clearly enough to decide what can be changed. Once we stop denying where we are, we can begin building a path toward where we want to go."
    ]
  },
  {
    id:"positive-mindset",
    title:"Positive Mindset",
    author:"Atem Akol Agoth & Achuil Mabek",
    category:"Self Development",
    description:"Practical conversations about discipline, money, choices, growth, and building a healthier mindset.",
    chapters:[
      "A positive mindset is not pretending that everything is easy. It is learning to look at difficulty without allowing difficulty to define your entire future.",
      "The way we handle small things often prepares us for bigger responsibilities. Discipline with time, money, relationships, and learning creates habits that can carry us into the future."
    ]
  },
  {
    id:"body-mind-spirit",
    title:"Body, Mind, and Spirit",
    author:"Atem Akol Agoth & Achuil Mabek",
    category:"Spiritual Growth",
    description:"A spiritual exploration of the connection between the body, mind, character, purpose, and faith.",
    chapters:[
      "A person is more than what can be seen from the outside. The body needs care, the mind needs wisdom, and the spirit needs purpose. Growth becomes stronger when these areas are not treated as separate worlds.",
      "Faith can become a source of direction when life feels uncertain. Asking, learning, reflecting, and taking action can help us move from confusion toward a clearer sense of purpose."
    ]
  }
];

const $ = s => document.querySelector(s);
const favorites = JSON.parse(localStorage.getItem("zaviFavorites") || "[]");
let selectedBook = null;
let currentChapter = 0;

function saveFavorites(){ localStorage.setItem("zaviFavorites", JSON.stringify(favorites)); updateStats(); renderBooks(); }
function isFav(id){ return favorites.includes(id); }

function updateStats(){
  $("#bookCount").textContent = books.length;
  $("#categoryCount").textContent = new Set(books.map(b=>b.category)).size;
  $("#favoriteCount").textContent = favorites.length;
}

function setupCategories(){
  const cats = [...new Set(books.map(b=>b.category))].sort();
  $("#categoryFilter").innerHTML = '<option value="all">All categories</option>' + cats.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
}

function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function renderBooks(){
  const q = $("#searchInput").value.toLowerCase().trim();
  const cat = $("#categoryFilter").value;
  const list = books.filter(b => (cat==="all" || b.category===cat) && `${b.title} ${b.author}`.toLowerCase().includes(q));
  $("#bookGrid").innerHTML = list.map(b=>`
    <article class="book-card">
      <div class="mini-cover">${escapeHtml(b.title)}</div>
      <div class="card-meta">
        <p class="eyebrow">${escapeHtml(b.category)}</p>
        <div class="card-row">
          <h3>${escapeHtml(b.title)}</h3>
          <button class="heart" data-fav="${b.id}" aria-label="Favorite">${isFav(b.id)?"♥":"♡"}</button>
        </div>
        <p class="muted">${escapeHtml(b.author)}</p>
        <button class="btn primary" data-open="${b.id}">View Book</button>
      </div>
    </article>`).join("");
  $("#emptyState").classList.toggle("hidden", list.length!==0);
}

function openBook(id){
  selectedBook = books.find(b=>b.id===id);
  if(!selectedBook)return;
  $("#modalCategory").textContent = selectedBook.category;
  $("#modalTitle").textContent = selectedBook.title;
  $("#modalAuthor").textContent = `By ${selectedBook.author}`;
  $("#modalDescription").textContent = selectedBook.description;
  $("#modalCover").innerHTML = `<span>ZaVi</span><b>${escapeHtml(selectedBook.title)}</b>`;
  $("#favBtn").textContent = isFav(id) ? "♥ Favorited" : "♡ Favorite";
  $("#bookModal").classList.remove("hidden");
}
function closeBook(){ $("#bookModal").classList.add("hidden"); }

function toggleFavorite(){
  if(!selectedBook)return;
  const i=favorites.indexOf(selectedBook.id);
  i>=0?favorites.splice(i,1):favorites.push(selectedBook.id);
  $("#favBtn").textContent = isFav(selectedBook.id) ? "♥ Favorited" : "♡ Favorite";
  saveFavorites();
}

function openReader(book, chapter=0){
  selectedBook=book; currentChapter=chapter;
  $("#readerTitle").textContent=book.title;
  renderChapter();
  $("#readerModal").classList.remove("hidden");
  localStorage.setItem("zaviLastBook", book.id);
}
function renderChapter(){
  const total=selectedBook.chapters.length;
  $("#chapterLabel").textContent=`Chapter ${currentChapter+1} of ${total}`;
  $("#readerText").textContent=selectedBook.chapters[currentChapter];
  $("#progressBar").style.width=`${((currentChapter+1)/total)*100}%`;
  $("#prevChapter").disabled=currentChapter===0;
  $("#nextChapter").textContent=currentChapter===total-1?"Finish":"Next →";
}
function closeReader(){ $("#readerModal").classList.add("hidden"); }

document.addEventListener("click", e=>{
  const open=e.target.closest("[data-open]"), fav=e.target.closest("[data-fav]");
  if(open)openBook(open.dataset.open);
  if(fav){
    const b=books.find(x=>x.id===fav.dataset.fav); if(!b)return;
    const i=favorites.indexOf(b.id); i>=0?favorites.splice(i,1):favorites.push(b.id);
    saveFavorites();
  }
});
$("#closeModal").onclick=closeBook;
$("#favBtn").onclick=toggleFavorite;
$("#readBtn").onclick=()=>{closeBook();openReader(selectedBook,0)};
$("#closeReader").onclick=closeReader;
$("#nextChapter").onclick=()=>{if(currentChapter<selectedBook.chapters.length-1){currentChapter++;renderChapter();}};
$("#prevChapter").onclick=()=>{if(currentChapter>0){currentChapter--;renderChapter();}};
$("#searchInput").oninput=renderBooks;
$("#categoryFilter").onchange=renderBooks;

$("#continueBtn").onclick=()=>{
  const last=localStorage.getItem("zaviLastBook");
  const book=books.find(b=>b.id===last)||books[0];
  openReader(book,0);
};

$("#themeBtn").onclick=()=>{
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("zaviDark",document.documentElement.classList.contains("dark"));
};
if(localStorage.getItem("zaviDark")==="true")document.documentElement.classList.add("dark");

$("#year").textContent=new Date().getFullYear();
setupCategories(); updateStats(); renderBooks();