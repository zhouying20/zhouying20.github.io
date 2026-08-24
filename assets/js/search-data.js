// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "* equal contribution, † corresponding author",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-activities",
          title: "Activities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-joined-school-of-artificial-intelligence-shandong-university",
          title: 'I joined School of Artificial Intelligence, Shandong University',
          description: "",
          section: "News",},{id: "news-awarded-with-young-scholar-future-program-by-shandong-university",
          title: 'Awarded with Young Scholar Future Program by Shandong University',
          description: "",
          section: "News",},{id: "news-1-paper-is-accepted-by-ijcai-2026",
          title: '1 paper is accepted by IJCAI 2026.',
          description: "",
          section: "News",},{id: "news-1-paper-is-accepted-by-icml-2026",
          title: '1 paper is accepted by ICML 2026.',
          description: "",
          section: "News",},{id: "news-1-paper-is-accepted-by-cikm-2026",
          title: '1 paper is accepted by CIKM 2026.',
          description: "",
          section: "News",},{id: "news-2-papers-are-accepted-by-emnlp-2026-congratulations-to-fangan",
          title: '2 papers are accepted by EMNLP 2026. Congratulations to Fangan.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%69%6E%67%7A%68%6F%75@%73%64%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zhouying20", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gN73NTMAAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
