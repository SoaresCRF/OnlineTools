const quote = document.querySelector("#quote");
const input = document.querySelector("#input");
const reset = document.querySelector("#reset");
const result = document.querySelector("#result");
const history = document.querySelector("#history");
const changeThemeBnt = document.querySelector("#changeTheme");

const quotes = [
    "I touched the stars, and saw the glorious light of a thousand suns! Now, blinded by this elegance, how could my purpose be anything. But dark.",

    "The words on their tombstones will be my new mantras.",

    "The bad part about having friends? Always having to avenge them.",

    "Mess with the bull and you get the horns!",

    "I am the snow, wind, and ice.",

    "Even when the moon is new, it is there. A whisper to the shadows of your soul. I am with you.",

    "You do not aim a bow at the target, you fire knowing where the target will be. This is vision.",

    "They call me a comet. They call me a dragon. They have no words for my true form.",

    "What is the desert, but the ashes of my enemies?",

    "Loading. Recommend program: Enjoy Selves!",

    "I am the fire that cleanses the world!",

    "Today we fight each other. Tomorrow, we may fight together.",

    "You call us nothing, yet we are everything. Every place, every time… we are you.",

    "Precision is the difference between a butcher and a surgeon.",

    "There is no antidote for me.",

    "Who will be eaten first?",

    "This is Major Tom to ground control!",

    "A wolf knows the scent of fear, royals are covered in it.",

    "The moon will rise. The night will last forever.",

    "Dear medical journal. Mundo attempt brain transplant on Mundo today. Me think it go good.",

    "Welcome to the League of Draven.",

    "Story of my life. I got no rivals. They all died upon my arrival.",

    "Only the spider is safe in her web.",

    "Every smile is just a frown waiting to be turned upside down.",

    "Maybe the real surprise was the friends we killed along the way.",

    "I am an artist with a sword, in more ways than one.",

    "The mighty shark stalks his prey.",

    "Somehow I always end up in the center of everything.",

    "Words mean nothing. Flesh carries weight.",

    "A lion is made from the wolves he has eaten.",

    "The only time I have a drinking problem is when I spill it!",

    "I remember when she sewed my dress with these scissors. Now, they cut a different cloth.",

    "Your life is a burden. I bring you freedom!",

    "If I hate something, I destroy it. If I want something, I take it.",

    "I find that the stranger life gets, the more it seems to make sense.",

    "Imagine if I had a real weapon!",

    "I fight for a brighter tomorrow!",

    "Each bullet is a piece of my soul. Each shot is a piece of me.",

    "Predators become prey, as quickly as night becomes day.",

    "This skin taught me how to survive. I will show it how to live.",

    "Our fates are intertwined.",

    "Never become a monster to defeat one.",

    "Death is a song all will hear.",

    "The balance of power must be preserved.",
];

function newQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
}

function updateTest() {
    start();

    if (input.value == quote.textContent) {
        check();
    }
}

function start() {
    // JSON.parse está passando a string que vem do localStorage.getItem para bool
    const statusTest = JSON.parse(localStorage.getItem("testInProgress"));

    if (!statusTest) {
        localStorage.setItem("startTime", new Date().getTime());
        localStorage.setItem("testInProgress", true);
    }
}

function check() {

    const finalTime = new Date().getTime();
    const startTime = parseInt(localStorage.getItem("startTime"));
    const timeSpent = (finalTime - startTime) / 1000;

    result.textContent = "Congratulations! You spent " + timeSpent + " seconds!";

    addToHistory(quote.textContent, timeSpent);

    localStorage.setItem("testInProgress", false);
    input.value = "";
    newQuote();
}

function addToHistory(typedQuote, timeSpent) {
    const itemHistory = document.createElement("p");

    itemHistory.textContent = 'Quote "' + typedQuote + '" - Time: ' + timeSpent;

    history.appendChild(itemHistory);
}

function resetTest() {
    input.value = "";
    result.textContent = "";
    newQuote();
    localStorage.setItem("testInProgress", false);
    history.innerHTML = "";
}

function changeTheme() {
    const body = document.body;

    body.classList.toggle("light");
    body.classList.toggle("dark");
}

input.addEventListener("keyup", updateTest);
reset.addEventListener("click", resetTest)

changeThemeBnt.addEventListener("click", changeTheme);

newQuote();

/* Bloquear ctrl + v (colar) */
input.addEventListener("paste", function (e) {
    e.preventDefault();
});