console.log("ZaVi Library script is running!");

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMiNKWxiyvJ-4rq9QK7WThpV-l4vGJlWc",
  authDomain: "zavi-library.firebaseapp.com",
  projectId: "zavi-library",
  storageBucket: "zavi-library.firebasestorage.app",
  messagingSenderId: "941986850970",
  appId: "1:941986850970:web:958033f6db9b4944d79723",
  measurementId: "G-L0MZ3EW486"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  console.log("Firebase connected successfully!");
  const books = [
{
id: "Beyond-Fear",
title: “Beyond Fear: Discovering Strength and Responsibility”,
author: “Atem Akol Agoth”,
category: “Personal Development”,
description:
“A journey about overcoming fear, rejection, responsibility, faith, and discovering the strength within you.”,
cover: “BEYOND FEAR”,
chapters: [
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
    title: "Chapter 1 — It's Up to You",
    text: `

<p>It’s up to you to become a failure, and it’s up to you to become successful.</p>


<p>Success does not happen by chance; it depends on the choices you make. Life is like an adventure. It is full of challenges, pressures and opportunities. If you want a better life, you must be willing to take risks, make wise decisions and face reality. Running away from problems will never solve them; it only makes them worse.</p>


<p>When you face your problems with courage, you will realise something important: Every problem has a solution. Escaping from reality is not the answer. Instead, learn to face your problems and deal with them. Over time, you will grow stronger and wiser, able to handle anything that comes your way.</p>


<p>If you were born poor, it is not your fault. But if you live and die poor without trying to change, then it becomes your choice. That’s why your life is in your hands.</p>


<p>Don’t let life defeat you. Stand strong and fight with confidence, courage, and determination. Ask yourself every day: <strong>Am I just living without purpose, or do I have a goal to achieve?</strong></p>


<p>Always remember: God will provide the best for those who work hard and trust Him. But the first step must come from you. Your life will not change by luck; it will change only by choice.</p>


<p>It’s up to you; nobody is coming to save you. You are responsible for your own life and your own growth.</p>


<p>If you want to reach your destination, you must first know where you are today and accept it. Accepting it shows that you’ve held yourself accountable for everything that happened in the past and the present, and you allow yourself and your brain to breathe and start afresh. Be honest with yourself and about your current situation.</p>


<p>Be grateful for how far you’ve come; even if you’re not where you want to be, you’re not where you used to be.</p>


<p>You were created for a reason. Your life has meaning, and your purpose is uniquely yours.</p>


<p>Everyone has a different purpose and a mission, so don’t compare your journey to anyone else’s. Walk on your own road.</p>


<p>Learn from your past, but don’t live in it. Learn from those lessons and leave them behind you, because your power is in the present.</p>


<p>Don’t let your past define your future. Mistakes, pain, and failures don’t have to be chains; let them be your stepping stones.</p>


<p>What you choose to do now matters more than what happened before.</p>


<p>You have the power to change your life or to ruin it; the choices are yours, but choose life. Start making up your mind and make one decision, which can change your life once and for all.</p>


<p>Your future is not waiting for someone else; it’s waiting for you.</p>


<h3>Take Responsibility</h3>


<p>Everything begins with you and you alone. If you do not know your starting point, then how will you know your ending point?</p>


<p>Knowing your starting point is the foundational step in building a growth mindset because it allows you to honestly assess your current skills, resources and limitations, which are necessary for creating a realistic and purposeful path towards your destiny.</p>


<p>By acknowledging where you begin, you can develop a “growth mindset” that views challenges as opportunities for refinement rather than setbacks, enabling you to build resilience and mental toughness.</p>


<p>So, stop being stuck on your past, stop saying things like, “it’s their fault,” “they did it,” or “it’s not me,” and start taking responsibility for it all upon yourself.</p>


<p>A responsible mindset says, <strong>“I will fix it. I own this.”</strong> And that can help you achieve whatever you want.</p>


<p>The truth is that no one is coming to save you. You are responsible for your growth, your emotions and your outcomes. When you accept this truth, you will stop blaming others and start building yourself.</p>


<h3>Own Your Choices and Mistakes</h3>


<p>To own your choices and mistakes means to take full responsibility for your life: the good, the bad and everything in between.</p>


<p>It’s not about blaming yourself or feeling ashamed of the bad choices or mistakes you once made, but it’s about being honest enough to say: <strong>“Yes, I chose that.” “Yes, I did that.” “And yes, I can choose differently next time.”</strong></p>


<p>Taking responsibility is good and it is powerful. It means you recognise that you have the ability to respond, not just react to what life brings your way. That’s why it’s called <strong>response-ability.</strong></p>


<p>Mistakes are part of life; they don’t make you a failure, they make you human. What truly matters is how you own them, learn from them and grow because of them.</p>


<p>When you take responsibility, you stop waiting for someone to rescue you or fix things for you. You begin to reclaim your power and become the author of your own story.</p>


<p>Owning your choices is the first step towards real change, and owning your mistakes? That’s the first step towards real growth.</p>


<h3>Accept Your Current Position Without Excuses</h3>


<p>The first step towards real change is accepting where you are right now, not where you wish you were, not where you think you should be but where you actually are.</p>


<p>It’s easy to make excuses like:</p>


<ul>
<li>“If only I had more support…”</li>
<li>“If my past were different…”</li>
<li>“If people understood me better…”</li>
</ul>


<p>Excuses don’t move you forward; they keep you stuck.</p>


<p>To accept your current position means being honest with yourself. It means taking a clear look at your life, your habits, your mindset and your situation, without blaming anyone, without running from it and without pretending.</p>


<p>It doesn’t mean that you have given up, but it is a sign that shows you are getting grounded.</p>


<p>When you stop making excuses, you start gaining power. You shift from saying <strong>“I can’t because…”</strong> to asking <strong>“What can I do now?”</strong></p>


<p>That shift is the beginning of growth and it’s the growth itself.</p>


<h3>Why Is Accepting Your Current Position So Important?</h3>


<p>Because you can’t change something you won’t admit exists.</p>


<p>If you’re always pointing fingers or denying reality, you’ll stay where you are forever. But when you look at your current situation with honesty and courage, you open the door to possibility.</p>


<p>You’re not accepting defeat, you’re accepting reality, so you can rise from it.</p>


<p>Your current position doesn’t define your destination; it simply shows you where to begin.</p>


<p>So, take a deep breath, stand where you are and say:</p>


<blockquote>“This is where I am and I’m ready to grow from here.”</blockquote>


<h3>Shift from Victim Mentality to Empowerment</h3>


<p>You are not stuck, you are not helpless and you are not powerless.</p>


<p>Many people walk through life feeling like victims of their past, some think that they’re the problem of their circumstances or the people around them.</p>


<p>This mindset often sounds like:</p>


<ul>
<li>“Nothing ever works out for me.”</li>
<li>“People always let me down.”</li>
<li>“I can’t do anything because of what happened to me.”</li>
</ul>


<p>Blaming yourself every time won’t help you in any way and while it’s completely valid to feel pain, disappointment or frustration, staying stuck in the victim role keeps you small. It keeps you waiting, and it keeps you silent.</p>


<p>Worst of all, it convinces you that you’re not in control of your life.</p>


<p>But let me tell you the truth: <strong>You are more powerful than you’ve been led to believe.</strong></p>


<h3>What Is Victim Mentality?</h3>


<p>It’s a mindset where you believe that life is happening to you and that you have no control or responsibility over what happens next.</p>


<p>You feel trapped, you over-blame yourself and feel hopeless.</p>


<p>But this mindset robs you of the very thing that can change everything in your life, your power to choose.</p>


<h3>What Is Empowerment?</h3>


<p>Empowerment is realising that you might not have any control over everything that happens to you, but you have full control over how you respond to every situation.</p>


<p>To tell yourself that <strong>“My story is not yet over, that I have the power to take action, to grow and to move forward”</strong> is what empowerment is.</p>


<p>When you stop saying <strong>“Why me?”</strong> and start asking <strong>“What now?”</strong> is when you will find the real solution to your life.</p>


<p>No one is coming to rescue you, so empowering yourself is important, because you came alone and that’s how things are going to be.</p>


<p>No one dares to stop you and no one will. There are only two things that can stop you: You and God, but God will never stop you because he created you on purpose.</p>


<h3>The Shift Begins with You</h3>


<ul>
<li>You don’t need permission to rise.</li>
<li>You don’t need perfect circumstances to take your next step.</li>
<li>You only need one thing: the decision to take back your power — one choice, one day, one mindset.</li>
</ul>


<h3>Write Your Answers Honestly</h3>


<p><strong>1. Where in my life do I feel like a victim — stuck, helpless or powerless?</strong></p>


<p>__________________________________________________</p>


<p><strong>2. What story am I telling myself that keeps me small?</strong></p>


<p>__________________________________________________</p>


<p><strong>3. What would it look like to take ownership in this situation?</strong></p>


<p>__________________________________________________</p>


<p><strong>4. What’s one action I can take today that shifts me towards empowerment?</strong></p>


<p>__________________________________________________</p>


<p><strong>5. Who do I become when I stop waiting and start leading my life?</strong></p>


<p>__________________________________________________</p>


<p>Your life is not only about what’s happening to you right now. It’s about what you choose to do next.</p>


<p>Life is waiting for you to take the lead. So stop blaming yourself or others.</p>


<p>Take back your power: the power to choose, the power to change and the power to move forward.</p>


<p><strong>Because that power has always been with you, the power of choice.</strong></p>


<p>Ask yourself daily, <strong>“Why am I giving away my power by blaming others?”</strong></p>
`
      },

     {
        title: "Chapter 2 — Decide What’s Important",
        text: `
          <h2>DECIDE WHAT’S IMPORTANT</h2>

          <p>You are the one who should decide what’s important and right for yourself and for the transformation of your future. To start is not hard, you just need some practical steps:</p>

          <h3>1. Manage Your Time</h3>

          <p>Start by managing your time because your time is a precious treasure; once it is gone, it will not repeat itself for you. E.g., in the 21st century, a lot of people spend hours on social media or on activities which are not important to them at all. And then later they complain that they do not have enough time to study, or they do not work properly on their goals, or on improving themselves.</p>

          <p>But let me tell you this, managing your time isn’t about isolation, but it’s about choosing what truly deserves your attention. If you waste your time on meaningless things, you will eventually face a lifetime of regret.</p>

          <h3>2. Invest Your Time in Growth</h3>

          <p>Invest your time in things that can change you and develop you. To shift the course of your life, you must categorise your time towards essential and beneficial goals. E.g., investing your time in reading, learning new skills and improving your mindset may help you build meaningful relationships and shape your future.</p>

          <h3>3. Time Is Wealth</h3>

          <p>Your time is your true wealth. Now, look around you. Do you see anyone who wishes for their wealth to decrease? Of course not, everyone strives to increase it, right? This is why successful people feel that time is never enough for them; they race against it as if in a marathon towards victory.</p>

          <p>Remember this: never compare money with time, because money might be lost and earned again, but when time is lost, it’s gone forever. So, treat your time as your greatest investment.</p>

          <h3>The Foundations of Priorities</h3>

          <p>Everything has its time, but the greatest portion should be dedicated to God and yourself because that’s where life starts. Spending time with God is very important because he is the source of life, wisdom, and strength.</p>

          <p>The Bible reminds us that “To everything there’s a season, and a time for every purpose under heaven.” <strong>Ecclesiastes 3:1</strong></p>

          <p>The Bible teaches us that life is built on stages. There is a time to grow, a time to wait and a time to succeed. So, if you want to reach what you aspire to achieve and complete, then you need God to guide you and protect you in every season. When you give God your time, he helps you understand the right season and leads you forward with peace.</p>

          <p><strong>Ask yourself these questions:</strong></p>

          <ul>
            <li>Which stage am I in right now?</li>
            <li>Am I in a stage of self-transformation or not?</li>
          </ul>

          <p>Deciding what is truly important does not happen by chance; it requires a firm decision and a commitment with no turning back. There are certain principles that you must lay down before making any decision.</p>

          <ul>
            <li><strong>Focus on the essentials:</strong> Focusing on the essential things gives you energy to focus on the things that matter to you, which may lead to the results that change your life.</li>

            <li><strong>Focus on priorities:</strong> Keep your eyes fixed solely on the results you want for yourself, and do not allow anything to distract you, so that you won’t change your direction.</li>

            <li><strong>Master your time:</strong> Time is the greatest treasure a person could ever have, but mastering it is the best thing you can ever do. In the end, you will either blame yourself for how you wasted it or be proud of yourself because of how you used it.</li>
          </ul>

          <h3>Take Control</h3>

          <p>Persevere for yourself, and your adventures will be a means to reach what you want. Why do you regret the time you wasted, when you are the only person who has the ability to control it to attract the things that benefit you?</p>

          <p>In this life, you are the driver of your life; you are responsible for anything or everything that may happen in your life. Drive the “car” (yourself) as you wish, but make sure you reach your destination safely.</p>

          <p>Take full control of your life and gain your time to gain everything else. Make the most of your time, for what is most important is to gain a lot.</p>

          <p><strong>Remember:</strong> No one will be with you during your struggles, or when you’re taking risks, or during suffocation. True friends will be there in every situation, but others will only show up for the celebration once you’ve succeeded.</p>

          <p>Life is strange; therefore, you may give your time to others if you wish, but never give them more time than you give your own priorities, except for the “family.” Eliminate anything that stands against your goals, your priorities and your success, so that you don’t stay stuck and regret for the rest of your life.</p>

          <h3>Build Your Legacy</h3>

          <p>Your ability to endure and overcome difficulties is the result of your effort and your time. We become experts by focusing on what matters and repeating the process until we find solutions.</p>

          <p>Scientists and philosophers did not reach their status by coincidence; they became icons because they gave themselves enough time to find answers and conduct experiments.</p>

          <p>You draw your history with your time. You can create a legacy that people will remember long after you are gone. With your time, you prove to the world who you are and leave behind an eternal symbol.</p>

          <p>Your name will be mentioned from generation to generation because you left behind a treasure, your dream and a clear vision that you realised.</p>

          <p><strong>The opportunity of a lifetime comes only once.</strong></p>

          <p>Keep your life balanced, with your time and your dream. Give yourself enough time to grow your ambitions, goals, and successes in life.</p>

          <p>Be exceptional with yourself and your time, and use your time wisely, because blaming others for your wasted time won’t help you in the future.</p>

          <p>If you can’t control your own time, who else will do it for you? Blaming others for not controlling your own time is the biggest mistake. What is their fault then, for what could have been your responsibility?</p>

          <p>Deal with your difficult problems and challenges by dedicating time to extracting the right solutions. Be a sniper: Target your goals, whether they are distant or small, with a sharp focus. Be a sniper when it comes to your objectives and your success in life.</p>

          <h3>Design Your Life</h3>

          <p>Your life won’t get better by accident; it will get better because of who you’re becoming. You can’t become what you want if you don’t accept where you’re at.</p>

          <p>Note this: if you want your life to get better, it won’t just get better, but it will get better by design. And a design starts with a choice, a choice to decide what matters most.</p>

          <p>Every day you have a chance to make a choice about where you will invest your time, your energy and your love. Those choices might seem like they are not important when viewed in isolation, but when they are combined, they will write the script of your life.</p>

          <p>If you don’t know what you value, you will say yes to everything and everyone. And in the process, you will risk everything, leaving little room for what really counts.</p>

          <p>This is why the greatest gift you can give yourself is clarity. Clarity of values, clarity of priorities and clarity of purpose.</p>

          <p>Because without clarity, life will be a motion without meaning, and it will be a time which is being filled but not used.</p>

          <p>People become busy 24/7 for 365 days because they need to be productive. But if our schedules and lives are full and not fulfilling, then what’s the point of living a busy life?</p>

          <p>Think of values as your compass, because they’re going to guide you when life gets hard. When distractions multiply in your life, it’s value that draws you back to the track.</p>

          <p>When opportunities that don’t align with your purpose appear, your values redirect you. So, without values, you wander aimlessly, but with values, you walk with direction.</p>

          <p><strong>Ask yourself:</strong></p>

          <ul>
            <li>What do I stand for?</li>
            <li>What matters most to me?</li>
          </ul>

          <p>These questions might sound simple, but take your time to answer them honestly. Many people build lives based on other people’s expectations—chasing careers, possessions or recognition—only to discover later that they feel empty inside.</p>

          <p>By asking yourself these questions, you will help yourself reflect on your true self and identify what you truly want or need.</p>

          <p>Imagine climbing a ladder your whole life, only to realise that it was leaning against the wrong wall. It’s bad, right? That’s what happens when you don’t build your life on values.</p>

          <p>But when you build your life on values, you create alignment between your heart and your actions. Your life will gain depth when you build it on values, not just decoration.</p>

          <p>If you want to know your true priorities, don’t just listen to your words; look at your calendar. Your time reveals what matters to you more clearly than your promises.</p>

          <p><strong>For example:</strong></p>

          <ul>
            <li>If you say family is important but spend all your evenings buried in work emails, then your actions don’t match your words.</li>
            <li>If you say health matters but consistently neglect sleep, exercise or nutrition, you’re out of alignment.</li>
            <li>If you say personal growth is your focus but rarely read, learn or challenge yourself, then growth is just an idea, not a priority.</li>
          </ul>

          <p>Every “yes” you say is also a “no” to something else. When you say yes to staying late at work, you may be saying no to dinner with your children.</p>

          <p>When you say yes to scrolling on social media, you might be saying no to reading that book that could change your mindset.</p>

          <p>The question is not whether you are saying no, it’s whether you’re saying no to the right things.</p>

          <p>People often imagine priorities as something grand, but in reality, they are revealed in daily habits. It’s not what you dream about but what you consistently choose that defines your values.</p>

          <p>Some fear that defining priorities will limit them. They think, <em>If I commit to one path, I’ll lose out on others.</em> But the opposite is true. Clarity doesn’t confine you—it liberates you.</p>

          <p>When you know what matters most, decisions become easier. You stop chasing everything and start pursuing the right things. You waste less time, energy, and money because you’re focused. Clarity brings peace.</p>

          <p><strong>For instance:</strong></p>

          <ul>
            <li>If faith is your priority, you will carve out time for prayer, reflection and spiritual growth.</li>
            <li>If family is your priority, you’ll intentionally schedule time to be present with them.</li>
            <li>If growth is your priority, you’ll choose learning, mentorship and skill-building over fleeting distractions.</li>
          </ul>

          <p>Without clarity, everything feels urgent. With clarity, only the essential things feel urgent. That shift changes everything.</p>

          <h3>CLARITY BEGINS WITH SELF-REFLECTION.</h3>

          <p>Take a few minutes and write down your top five values—the nonnegotiables of your life.</p>

          <p><strong>Reflection:</strong></p>

          <ol>
            <li>________________________</li>
            <li>________________________</li>
            <li>________________________</li>
            <li>________________________</li>
            <li>________________________</li>
          </ol>

          <p>Once you have them, ask yourself:</p>

          <ul>
            <li>Does my daily life reflect these values?</li>
            <li>If not, what changes can I make?</li>
          </ul>

          <p>For example, if you write “family” as a top value, but your calendar shows no family time, you need to realign.</p>

          <p>If you value “health” but live on junk food and stress, a shift is required. The goal is not perfection but progress—bringing your life closer and closer to the vision your values create.</p>

          <h3>Story: Sarah’s Wake-Up Call</h3>

          <p>Sarah was a high achiever, climbing the corporate ladder with speed and determination. Her colleagues admired her drive, her boss praised her dedication, and her bank account was growing. On the outside, she looked like the picture of success.</p>

          <p>But at home, the story was different. Her young daughter often asked, “Mommy, why are you never home?” That innocent question pierced Sarah’s heart in a way no performance review or paycheck ever could.</p>

          <p>In that moment, she realised that while she was winning in the office, she was losing in the place that mattered most—her family.</p>

          <p>This was her wake-up call. Sarah realised she had to decide what was truly important. Success without fulfilment was empty.</p>

          <p>So, she made a bold choice: she left her high-pressure job and started a business that allowed her flexibility. She earned less money at first, but she gained something far more valuable—time with her daughter, peace of mind, and alignment between her values and her actions.</p>

          <p>Today, Sarah doesn’t measure her worth by her job title or her salary but by the quality of her relationships and the joy of living in harmony with her values.</p>

          <p>Her turning point wasn’t about opportunity, it was about clarity.</p>

          <h3>Why You Must Decide</h3>

          <p>If you don’t decide what’s important, the world will decide for you. Your boss will fill your calendar. Advertisers will shape your desires. Social media will steal your time.</p>

          <p>And slowly, you’ll drift into a life that doesn’t reflect who you are.</p>

          <p>But when you choose your values, you take back control. You stop living reactively and start living intentionally.</p>

          <p>You build a foundation that anchors you in storms and a compass that directs you in confusion.</p>

          <p><strong>Clarity is power. And that power lies in your hands.</strong></p>

          <h3>Taking Action</h3>

          <ol>
            <li><strong>Define your values.</strong> Write them down. Make them visible. Keep them in front of you.</li>
            <li><strong>Audit your time.</strong> For one week, track how you spend your hours. Does it reflect your values? If not, adjust.</li>
            <li><strong>Say no more often.</strong> Every no to the unimportant is a yes to the important.</li>
            <li><strong>Create rituals.</strong> Build daily or weekly habits that honour your values—family dinners, journaling, workouts, or prayer.</li>
            <li><strong>Review regularly.</strong> Life changes, and so do priorities. Revisit your values every few months to ensure you’re still aligned.</li>
          </ol>

          <p>Designing a meaningful life begins with a decision. Not a complicated one, but a courageous one: to decide what is important.</p>

          <p>When you choose your values, you choose your direction. When you live by them, you create alignment, peace, and purpose.</p>

          <p>You stop scattering your energy and start building a life that reflects who you are and what you stand for.</p>

          <p>Sarah’s story shows us that success without alignment is hollow. But when clarity shapes your choices, your life becomes not only successful but significant.</p>

          <p>So ask yourself today: What really matters to me? Write it down. Align your days with it. Protect it fiercely.</p>

          <p>Because at the end of life, no one regrets not working harder or earning more. What people regret is failing to live in alignment with their deepest values.</p>

          <p><strong>Clarity is power. Decide what matters and let it shape the life you build.</strong></p>
        `
      }


let selectedBook = null;
let currentChapter = 0;

const $ = selector => document.querySelector(selector);

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
    <button class="favorite-btn">
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

emptyState.classList.toggle(“hidden”, filteredBooks.length === 0);
}

function openBook(book) {
selectedBook = book;

localStorage.setItem(“zaviLastBook”, book.id);

modalCover.innerHTML = <span>ZaVi</span> <b>${book.cover}</b> <small>${book.author}</small>;

modalCategory.textContent = book.category;
modalTitle.textContent = book.title;
modalAuthor.textContent = By ${book.author};
modalDescription.textContent = book.description;

updateFavoriteButton();

bookModal.classList.remove(“hidden”);
}

function updateFavoriteButton() {
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

if (selectedBook && selectedBook.id === bookId) {
updateFavoriteButton();
}
}

function startReading(book) {
selectedBook = book;

localStorage.setItem(“zaviLastBook”, book.id);

const savedChapter = Number(
localStorage.getItem(zavi-progress-${book.id}) || 0
);

currentChapter = Math.min(
savedChapter,
book.chapters.length - 1
);

readerModal.classList.remove(“hidden”);

renderChapter();
}

function renderChapter() {
const chapter = selectedBook.chapters[currentChapter];

readerTitle.textContent = selectedBook.title;
chapterLabel.textContent =
${chapter.title} — ${currentChapter + 1} of ${selectedBook.chapters.length};

readerText.innerHTML = chapter.text;

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
if (selectedBook) {
toggleFavorite(selectedBook.id);
}
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

const darkMode =
document.body.classList.contains(“dark”);

localStorage.setItem(
“zaviDarkMode”,
darkMode ? “on” : “off”
);

themeBtn.textContent = darkMode ? “☀” : “☾”;
};

function loadTheme() {
const darkMode =
localStorage.getItem(“zaviDarkMode”) === “on”;

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

$(”#year”).textContent =
new Date().getFullYear();
}

initialize();

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMiNKWxiyvJ-4rq9QK7WThpV-l4vGJlWc",
  authDomain: "zavi-library.firebaseapp.com",
  projectId: "zavi-library",
  storageBucket: "zavi-library.firebasestorage.app",
  messagingSenderId: "941986850970",
  appId: "1:941986850970:web:958033f6db9b4944d79723",
  measurementId: "G-L0MZ3EW486"
};
 
async function testFirebaseConnection() {
  try {
    const snapshot = await getDocs(collection(db, "books"));

    console.log("Firebase connected successfully!");
    console.log("Books found:", snapshot.size);

    snapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  } catch (error) {
    console.error("Firebase connection failed:", error);
  }
}

testFirebaseConnection();
