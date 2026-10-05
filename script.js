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
          "Conception d'API REST (Node.js, Symfony) et intégration avec les interfaces utilisateur.",
          "Pour implémenter des applications web robustes et maintenables, utilisez TypeScript et React, ou PHP et Symfony.",
        ],
        Analyse: [
          "Optimisation des performances d'interface avec React DevTools.",
          "Analyse du code de bibliothèques existantes (e.g. Shadcn) pour corriger des problèmes de mise en page.",
        ],
        Pédagogie: [
          "Formation technique de 500 personnes en Python et JavaScript.",
          "Expérience en éducation thérapeutique pour patients diabétiques (ancien métier d'infirmière).",
        ],
        Autonomie: [
          "Gestion autonome de projets internationaux entre le Japon et la France (multilingue).",
        ],
      },
      Expériences: {
        Développeuse_Fullstack: [
          "<span class='content-list-subtitle'>« De juil. 2026 à sept. 2026 | TRIYO LAB Paris | France »</span>",
          "Développement d'applications full-stack avec PHP, Symfony et MySQL pour améliorer les services de formation.",
          "Collaboration avec une équipe de développement française dans un environnement multiculturel.",
          "Participation aux réunions hebdomadaires en français et échanges sur les spécifications techniques.",
        ],
      },
      Diplômes: {
        Fullstack_Engineering_Boot_camp: [
          "<span class='content-list-subtitle'>« Oct. 2020Code Chrysalis Tokyo, Japon »</span>",
          "Méthodes de développement agile",
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
