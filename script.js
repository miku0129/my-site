const BIO = () => {
  return {
    info: {
      baseInfo: {
        Origine: "Japonaise",
        Email: "",
      },
      lang: {
        JP: "Langue maternelle",
        EN: "Courant",
        FR: "Intermédiaire (B1)",
      },
      skill: {
        Lang: ["TypeScript", "JavaScript", "Python", "PHP", "HTML/CSS"],
        Lib: [
          "Next.js",
          "React",
          "Vue.js",
          "Nestjs",
          "prisma",
          "TypeORM",
          "Jest",
          "Playwright",
          "Laravel",
          "Symfony",
          "Storybook",
          "Tailwind CSS",
        ],
        DB: ["PostgreSQL", "MySQL", "Firestore"],
        Plus: [
          "Docker",
          "Vite",
          "OVH",
          "Portainer",
          "IONOS",
          "Firebase",
          "AWS",
          "GCP",
          "npm",
          "WordPress",
          "Wix",
        ],
      },
      hobby: {
        Loisirs: "Jogging; Je cours environ 50 minutes par jour.",
      },
    },
  };
};
const PRESENTATION = () => {
  return {
    info: {
      Atouts: {
        Développement: [
          "<br>📌 Pour implémenter des applications web robustes et maintenables, utilisez <strong>TypeScript</strong>/<strong>React</strong>, ou <strong>PHP</strong>/<strong>Symfony</strong>.",
          "<br>📌 Conception d'<strong>API REST</strong> (Node.js, Symfony) et intégration avec les interfaces utilisateur.<hr>",
        ],
        Analyse: [
          "<br>📌 Optimisation des performances d'interface avec React DevTools.",
          "<br>📌 Analyse du code de bibliothèques existantes (e.g. Shadcn) pour corriger des problèmes de mise en page.<hr>",
        ],
        Pédagogie: [
          "<br>📌 Formation technique de 500 personnes en <strong>Python</strong> et <strong>JavaScript</strong>.",
          "<br>📌 Expérience en éducation thérapeutique pour patients diabétiques (ancien métier d'<strong>infirmière</strong>).<hr>",
        ],
        Autonomie: [
          "<br>📌 <strong>Gestion autonome</strong> de projets internationaux entre le Japon et la France (<strong>multilingue</strong>).",
        ],
      },
      Expériences: {
        Développeuse_Fullstack: [
          "<br><span class='content-list-subtitle'>De juil. 2026 à sept. 2026 | TRIYO LAB | Paris, France</span>",
          "<br>✅ Développement d'applications full-stack avec <strong>PHP</strong>, <strong>Symfony</strong> et <strong>MySQL</strong> pour améliorer les services de formation.",
          "<br>✅ Collaboration <strong>avec une équipe de française</strong> dans un environnement multiculturel.<hr>",
        ],
        Développeuse_Frontend: [
          "<br><span class='content-list-subtitle'>De mai 2025 à mars 2026 | SOFNET KK | Fukuoka, Japon</span>",
          "<br>✅ Développement front-end avec <strong>TypeScript</strong>, <strong>Next.js</strong> et <strong>React</strong>.",
          "<br>✅ Configuration de <strong>devcontainers</strong> pour l'équipe.",
          "<br>✅ Intégration des designs <strong>Figma</strong> en collaboration à distance avec des développeurs japonais.<hr>",
        ],
        Développeuse_Frontend_: [
          "<br><span class='content-list-subtitle'>De nov. 2024 à mars 2025 | Pragtech | Tokyo, Japon</span>",
          "<br>✅ Développement de modules npm réutilisables avec <strong>TypeScript</strong>, <strong>React</strong> et <strong>Storybook</strong> à partir de maquettes <strong>Figma</strong>",
          "<br>✅ Collaboration à distance avec une équipe japonaise pour standardiser les composants front-end.<hr>",
        ],
        Stage_de_Développeuse_Web: [
          "<br><span class='content-list-subtitle'>Juil. 2024 | Artéfacts | Tours, France</span>",
          "<br>✅ Développement d’une application en <strong>PHP/Laravel</strong>.",
          "<br>✅ Présentation technique en français sur les tests frontend.<hr>",
        ],
        Éducatrice_Technique: [
          "<br><span class='content-list-subtitle'>De mai 2022 à juin 2023 | Code Chrysalis | Tokyo, Japon</span>",
          "<br>✅ Formation personnalisée en <strong>Python</strong> et <strong>JavaScript</strong> pour 500 employés.",
          "<br>✅ Accélération de la numérisation du plus grand constructeur automobile japonais.<hr>",
        ],
        Développeur_de_Logiciels: [
          "<br><span class='content-list-subtitle'>De fev. 2021 à mai 2022 | CARECOM | Tokyo, Japon</span>",
          "<br>✅ Grâce à des tests manuels rigoureux effectués sur les <strong>logiciels Java</strong> fournis, nous avons amélioré la qualité et la précision des données chez 500 clients.<hr>",
        ],
        Infirmière: [
          "<br><span class='content-list-subtitle'>D'avr. 2013 à jan. 2021 | Oota Hospital | Tokyo, Japon</span>",
          "<br>✅ Éduquée et conseillée en moyenne 70 patients par mois sur la gestion du diabète, incluant l’utilisation de l’insuline et l’autosurveillance glycémique.",
        ],
      },
      Diplômes: {
        Fullstack_Engineering_Boot_camp: [
          "<br><span class='content-list-subtitle'>Oct. 2020Code Chrysalis Tokyo, Japon</span><br>",
          "Méthodes de Développement Agile",
        ],
      },
    },
  };
};

const createElm = (tagName) => document.createElement(tagName);

const formatContent = (key, val, titleClass, contentClass) => {
  return `<span><span class=${titleClass}>${key.replaceAll("_", " ")}</span>: <span class=${contentClass}>${Array.isArray(val) ? val.reduce((accum, current) => accum + ` ${current}`, "") : val}</span></span>`;
};

const createList = (obj, titleClass, contentClass) => {
  const ul = createElm("ul");
  for (const [key, val] of Object.entries(obj)) {
    if (val === "") {
      continue;
    }
    const li = createElm("li");
    const formattedContent = formatContent(key, val, titleClass, contentClass);
    li.innerHTML = formattedContent;
    ul.appendChild(li);
  }
  return ul;
};

const fillSidebar = () => {
  const data = BIO().info;
  const section = document.querySelector("#base-info");
  for (const val of Object.values(data)) {
    const ul = createList(val, "", "sidebar-list");
    section.appendChild(ul);
  }
};

const fillPage = () => {
  const feat = PRESENTATION().info;
  const strengthSection = document.querySelector("#strength");
  for (const [key, val] of Object.entries(feat)) {
    const headder = document.createElement("h2");
    headder.textContent = key;
    const ul = createList(val, "content-list-title", "");
    strengthSection.appendChild(headder);
    strengthSection.appendChild(ul);
  }
};

fillSidebar();
fillPage();
