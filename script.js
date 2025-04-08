const translations = {
    de: {
        heroText: "Eliah Gut",
        heroSubText: "Informatiker | Applikationsentwickler",
        aboutMe: "Ich bin im 1. Lehrjahr als Informatiker Applikationsentwickler. Ich wohne im Kanton Freiburg und habe meine Lehre gerade begonnen. Ich setze gerne meine Ideen in Projekte um.",
        aboutTitle: "Über mich",
        frontendTitle: "Frontend",
        backendTitle: "Backend",
        otherSkillsTitle: "Sonstiges",
        projectsTitle: "Projekte",
        hobbiesTitle: "Meine Hobbys",
        contactTitle: "Kontakt",
        projectF1: "F1 Angular Webseite",
        projectLocoGeo: "Loco Geo",
        projectFerrariAPI: "Ferrari Rest API",
        tennis: "Tennis",
        hockey: "Eishockey",
        ski: "Ski",
        travel: "Reisen",
        photos: "Fotos",
        pc: "PC",
        phone: "Telefon",
        email: "E-Mail",
        linkedin: "LinkedIn"
    },
    en: {
        heroText: "Eliah Gut",
        heroSubText: "Computer Scientist | Application Developer",
        aboutMe: "I am in the 1st year as a computer scientist application developer. I live in the canton of Fribourg and have just started my apprenticeship. I love implementing my ideas into projects.",
        aboutTitle: "About Me",
        frontendTitle: "Frontend",
        backendTitle: "Backend",
        otherSkillsTitle: "Other Skills",
        projectsTitle: "Projects",
        hobbiesTitle: "My Hobbies",
        contactTitle: "Contact",
        projectF1: "F1 Angular Website",
        projectLocoGeo: "Loco Geo",
        projectFerrariAPI: "Ferrari Rest API",
        tennis: "Tennis",
        hockey: "Ice Hockey",
        ski: "Skiing",
        travel: "Traveling",
        photos: "Photography",
        pc: "PC",
        phone: "Phone",
        email: "E-Mail",
        linkedin: "LinkedIn"
    }
};

function switchLanguage(language) {
    document.querySelector(".hero-text").textContent = translations[language].heroText;
    document.querySelector(".hero-subtext").textContent = translations[language].heroSubText;
    document.querySelector("#about .section-title").textContent = translations[language].aboutTitle;
    document.querySelector("#about p").textContent = translations[language].aboutMe;
    document.querySelector("#skills .section-title").textContent = translations[language].frontendTitle;
    document.querySelector("#skills + .section .section-title").textContent = translations[language].backendTitle;
    document.querySelector("#skills + .section + .section .section-title").textContent = translations[language].otherSkillsTitle;
    document.querySelector("#projects .section-title").textContent = translations[language].projectsTitle;
    document.querySelector("#hobbies .section-title").textContent = translations[language].hobbiesTitle;
    document.querySelector("#contact .section-title").textContent = translations[language].contactTitle;

    // Projects Text
    document.querySelector(".card:nth-child(1) h3").textContent = translations[language].projectF1;
    document.querySelector(".card:nth-child(1) p").textContent = "A website built with Angular that connects to an F1 API. It displays all drivers or tracks, with a detailed view for each.";

    document.querySelector(".card:nth-child(2) h3").textContent = translations[language].projectLocoGeo;
    document.querySelector(".card:nth-child(2) p").textContent = "An Angular website where you can take a flag quiz. At the end, it shows a score with the number of correct answers and the time taken.";

    document.querySelector(".card:nth-child(3) h3").textContent = translations[language].projectFerrariAPI;
    document.querySelector(".card:nth-child(3) p").textContent = "A REST API built with Java Spring Boot, featuring various Ferrari models. It includes several endpoints where Ferraris can be sorted and filtered.";

    // Hobbies Text
    document.querySelector(".hobby:nth-child(1) h3").textContent = translations[language].tennis;
    document.querySelector(".hobby:nth-child(2) h3").textContent = translations[language].hockey;
    document.querySelector(".hobby:nth-child(3) h3").textContent = translations[language].ski;
    document.querySelector(".hobby:nth-child(4) h3").textContent = translations[language].travel;
    document.querySelector(".hobby:nth-child(5) h3").textContent = translations[language].photos;
    document.querySelector(".hobby:nth-child(6) h3").textContent = translations[language].pc;

    // Contact Text
    document.querySelector("section#contact p:nth-child(1)").innerHTML = "<strong>" + translations[language].phone + ":</strong> 079 xxx xx xx";
    document.querySelector("section#contact p:nth-child(2)").innerHTML = "<strong>" + translations[language].email + ":</strong> eliah.gut@gmx.ch";
    document.querySelector("section#contact p:nth-child(3)").innerHTML = "<strong>" + translations[language].linkedin + ":</strong> <a href='https://www.linkedin.com/in/eliah-gut-0a7541322/' target='_blank'>Eliah Gut LinkedIn</a>";
}
