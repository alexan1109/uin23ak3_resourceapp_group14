const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

    let listing = ""
    let titling = ""
    let texts = ""
    let titles = ""

    resources.map((e) => {
        listing += `<a class="category">${e.category}</a>`
    });
    resources.map((f) => {
        titling += `<h2 class="titleArticle">${f.category}</h2>`

    });

    resources.map((i) => {
        texts += `<p class="text">${i.text}</p>`

    });

    resources.map((g) => {
        titles += `<ul><li class="titleEach"><a target="_blank" href="${g.sources[0].url}">${g.sources[0].title}</a></li>
        <li class="titleEach"><a target="_blank" href="${g.sources[1].url}">${g.sources[1].title}</a></li>
        <li class="titleEach"><a target="_blank" href="${g.sources[2].url}">${g.sources[2].title}</a></li>
        <li class="titleEach"><a target="_blank" href="${resources[1].sources[3].url}">${resources[1].sources[3].title}</a></li>
        </ul>`
    });

    

document.querySelector("#listing-categories").innerHTML = listing;
document.querySelector(".main-content").innerHTML = titling + texts + titles;


document.getElementsByTagName("a")[0].href = "index.html";
document.getElementsByTagName("a")[1].href = "#css";
document.getElementsByTagName("a")[2].href = "#javascript";
document.getElementsByTagName("a")[3].href = "#react";
document.getElementsByTagName("a")[4].href = "#sanity";

document.querySelectorAll(".category")[1].addEventListener("click", cssClick);
document.querySelectorAll(".category")[2].addEventListener("click", jsClick);
document.querySelectorAll(".category")[3].addEventListener("click", reactClick);
document.querySelectorAll(".category")[4].addEventListener("click", sanityClick);

if(window.location.href.indexOf("index.html") > -1) {
document.getElementsByClassName("titleEach")[3].style.display = "none";
document.getElementsByClassName("titleEach")[4].style.display = "none";
document.getElementsByClassName("titleEach")[5].style.display = "none";
document.getElementsByClassName("titleEach")[6].style.display = "none";
document.getElementsByClassName("titleEach")[7].style.display = "none";
document.getElementsByClassName("text")[1].style.display = "none";
document.getElementsByClassName("titleArticle")[1].style.display = "none";
document.getElementsByClassName("text")[2].style.display = "none";
document.getElementsByClassName("titleArticle")[2].style.display = "none";
document.getElementsByClassName("titleEach")[8].style.display = "none";
document.getElementsByClassName("titleEach")[9].style.display = "none";
document.getElementsByClassName("titleEach")[10].style.display = "none";
document.getElementsByClassName("titleEach")[11].style.display = "none";
document.getElementsByClassName("text")[3].style.display = "none";
document.getElementsByClassName("titleArticle")[3].style.display = "none";
document.getElementsByClassName("titleEach")[12].style.display = "none";
document.getElementsByClassName("titleEach")[13].style.display = "none";
document.getElementsByClassName("titleEach")[14].style.display = "none";
document.getElementsByClassName("titleEach")[15].style.display = "none";
document.getElementsByClassName("text")[4].style.display = "none";
document.getElementsByClassName("titleArticle")[4].style.display = "none";
document.getElementsByClassName("titleEach")[16].style.display = "none";
document.getElementsByClassName("titleEach")[17].style.display = "none";
document.getElementsByClassName("titleEach")[18].style.display = "none";
document.getElementsByClassName("titleEach")[19].style.display = "none";

}

function cssClick() {

document.getElementsByClassName("titleEach")[0].style.display = "none";
document.getElementsByClassName("titleEach")[1].style.display = "none";
document.getElementsByClassName("titleEach")[2].style.display = "none";
document.getElementsByClassName("titleEach")[3].style.display = "none";
document.getElementsByClassName("text")[0].style.display = "none";
document.getElementsByClassName("titleArticle")[0].style.display = "none";
document.getElementsByClassName("titleEach")[4].style.display = "block";
document.getElementsByClassName("titleEach")[5].style.display = "block";
document.getElementsByClassName("titleEach")[6].style.display = "block";
document.getElementsByClassName("titleEach")[7].style.display = "block";
document.getElementsByClassName("text")[1].style.display = "block";
document.getElementsByClassName("titleArticle")[1].style.display = "block";
document.getElementsByClassName("text")[2].style.display = "none";
document.getElementsByClassName("titleArticle")[2].style.display = "none";
document.getElementsByClassName("titleEach")[8].style.display = "none";
document.getElementsByClassName("titleEach")[9].style.display = "none";
document.getElementsByClassName("titleEach")[10].style.display = "none";
document.getElementsByClassName("titleEach")[11].style.display = "none";
document.getElementsByClassName("text")[3].style.display = "none";
document.getElementsByClassName("titleArticle")[3].style.display = "none";
document.getElementsByClassName("titleEach")[12].style.display = "none";
document.getElementsByClassName("titleEach")[13].style.display = "none";
document.getElementsByClassName("titleEach")[14].style.display = "none";
document.getElementsByClassName("titleEach")[15].style.display = "none";
document.getElementsByClassName("text")[4].style.display = "none";
document.getElementsByClassName("titleArticle")[4].style.display = "none";
document.getElementsByClassName("titleEach")[16].style.display = "none";
document.getElementsByClassName("titleEach")[17].style.display = "none";
document.getElementsByClassName("titleEach")[18].style.display = "none";
document.getElementsByClassName("titleEach")[19].style.display = "none";
}

function jsClick() {

document.getElementsByClassName("titleEach")[0].style.display = "none";
document.getElementsByClassName("titleEach")[1].style.display = "none";
document.getElementsByClassName("titleEach")[2].style.display = "none";
document.getElementsByClassName("titleEach")[3].style.display = "none";
document.getElementsByClassName("text")[0].style.display = "none";
document.getElementsByClassName("titleArticle")[0].style.display = "none";
document.getElementsByClassName("titleEach")[4].style.display = "none";
document.getElementsByClassName("titleEach")[5].style.display = "none";
document.getElementsByClassName("titleEach")[6].style.display = "none";
document.getElementsByClassName("titleEach")[7].style.display = "none";
document.getElementsByClassName("text")[1].style.display = "none";
document.getElementsByClassName("titleArticle")[1].style.display = "none";
document.getElementsByClassName("text")[2].style.display = "block";
document.getElementsByClassName("titleArticle")[2].style.display = "block";
document.getElementsByClassName("titleEach")[8].style.display = "block";
document.getElementsByClassName("titleEach")[9].style.display = "block";
document.getElementsByClassName("titleEach")[10].style.display = "block";
document.getElementsByClassName("titleEach")[11].style.display = "none";
document.getElementsByClassName("text")[3].style.display = "none";
document.getElementsByClassName("titleArticle")[3].style.display = "none";
document.getElementsByClassName("titleEach")[12].style.display = "none";
document.getElementsByClassName("titleEach")[13].style.display = "none";
document.getElementsByClassName("titleEach")[14].style.display = "none";
document.getElementsByClassName("titleEach")[15].style.display = "none";
document.getElementsByClassName("text")[4].style.display = "none";
document.getElementsByClassName("titleArticle")[4].style.display = "none";
document.getElementsByClassName("titleEach")[16].style.display = "none";
document.getElementsByClassName("titleEach")[17].style.display = "none";
document.getElementsByClassName("titleEach")[18].style.display = "none";
document.getElementsByClassName("titleEach")[19].style.display = "none";
}

function reactClick() {

document.getElementsByClassName("titleEach")[0].style.display = "none";
document.getElementsByClassName("titleEach")[1].style.display = "none";
document.getElementsByClassName("titleEach")[2].style.display = "none";
document.getElementsByClassName("titleEach")[3].style.display = "none";
document.getElementsByClassName("text")[0].style.display = "none";
document.getElementsByClassName("titleArticle")[0].style.display = "none";
document.getElementsByClassName("titleEach")[4].style.display = "none";
document.getElementsByClassName("titleEach")[5].style.display = "none";
document.getElementsByClassName("titleEach")[6].style.display = "none";
document.getElementsByClassName("titleEach")[7].style.display = "none";
document.getElementsByClassName("text")[1].style.display = "none";
document.getElementsByClassName("titleArticle")[1].style.display = "none";
document.getElementsByClassName("text")[2].style.display = "none";
document.getElementsByClassName("titleArticle")[2].style.display = "none";
document.getElementsByClassName("titleEach")[8].style.display = "none";
document.getElementsByClassName("titleEach")[9].style.display = "none";
document.getElementsByClassName("titleEach")[10].style.display = "none";
document.getElementsByClassName("titleEach")[11].style.display = "none";
document.getElementsByClassName("text")[3].style.display = "none";
document.getElementsByClassName("titleArticle")[3].style.display = "none";
document.getElementsByClassName("titleEach")[12].style.display = "block";
document.getElementsByClassName("titleEach")[13].style.display = "block";
document.getElementsByClassName("titleEach")[14].style.display = "block";
document.getElementsByClassName("titleEach")[15].style.display = "none";
document.getElementsByClassName("text")[4].style.display = "block";
document.getElementsByClassName("titleArticle")[4].style.display = "block";
document.getElementsByClassName("titleEach")[16].style.display = "none";
document.getElementsByClassName("titleEach")[17].style.display = "none";
document.getElementsByClassName("titleEach")[18].style.display = "none";
document.getElementsByClassName("titleEach")[19].style.display = "none";
}

function sanityClick() {

document.getElementsByClassName("titleEach")[0].style.display = "none";
document.getElementsByClassName("titleEach")[1].style.display = "none";
document.getElementsByClassName("titleEach")[2].style.display = "none";
document.getElementsByClassName("titleEach")[3].style.display = "none";
document.getElementsByClassName("text")[0].style.display = "none";
document.getElementsByClassName("titleArticle")[0].style.display = "none";
document.getElementsByClassName("titleEach")[4].style.display = "none";
document.getElementsByClassName("titleEach")[5].style.display = "none";
document.getElementsByClassName("titleEach")[6].style.display = "none";
document.getElementsByClassName("titleEach")[7].style.display = "none";
document.getElementsByClassName("text")[1].style.display = "none";
document.getElementsByClassName("titleArticle")[1].style.display = "none";
document.getElementsByClassName("text")[2].style.display = "none";
document.getElementsByClassName("titleArticle")[2].style.display = "none";
document.getElementsByClassName("titleEach")[8].style.display = "none";
document.getElementsByClassName("titleEach")[9].style.display = "none";
document.getElementsByClassName("titleEach")[10].style.display = "none";
document.getElementsByClassName("titleEach")[11].style.display = "none";
document.getElementsByClassName("text")[3].style.display = "none";
document.getElementsByClassName("titleArticle")[3].style.display = "none";
document.getElementsByClassName("titleEach")[12].style.display = "none";
document.getElementsByClassName("titleEach")[13].style.display = "none";
document.getElementsByClassName("titleEach")[14].style.display = "none";
document.getElementsByClassName("titleEach")[15].style.display = "none";
document.getElementsByClassName("text")[4].style.display = "block";
document.getElementsByClassName("titleArticle")[4].style.display = "block";
document.getElementsByClassName("titleEach")[16].style.display = "block";
document.getElementsByClassName("titleEach")[17].style.display = "block";
document.getElementsByClassName("titleEach")[18].style.display = "block";
document.getElementsByClassName("titleEach")[19].style.display = "none";
}