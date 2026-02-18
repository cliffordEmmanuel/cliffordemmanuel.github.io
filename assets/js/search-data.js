// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my experimentations",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-can-machine-learning-help-predict-heart-disease-a-data-science-exploration",
        
          title: "Can Machine Learning Help Predict Heart Disease? A Data Science Exploration",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/heart-disease-pred/";
          
        },
      },{id: "post-predicting-house-prices-mlr-vs-rfr",
        
          title: "Predicting House Prices; MLR vs RFR",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/regression-comparative-analysis/";
          
        },
      },{id: "post-predicting-house-prices-svc-vs-random-forest",
        
          title: "Predicting House Prices; SVC vs Random Forest",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/classification-comparative-analysis/";
          
        },
      },{id: "post-learning-while-working",
        
          title: 'Learning while working. <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ce_akainettey/learning-while-working-e1f05e067ce4?source=rss-a144a988cc65------2", "_blank");
          
        },
      },{id: "post-failing-forward-lessons-from-airflow-error-alerts",
        
          title: 'Failing forward; Lessons from Airflow error alerts. <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ce_akainettey/failing-forward-lessons-from-airflow-error-alerts-4f1ea3d6ae45?source=rss-a144a988cc65------2", "_blank");
          
        },
      },{id: "post-6-months-a-data-engineer",
        
          title: '6 months a data engineer… <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ce_akainettey/6-months-a-data-engineer-10692d525cb9?source=rss-a144a988cc65------2", "_blank");
          
        },
      },{id: "post-basic-repetitive-linux-cmds",
        
          title: "Basic repetitive linux cmds",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/linux-cmds/";
          
        },
      },{id: "post-weird-sqlalchemy-error-passing-a-query-with-python",
        
          title: "Weird SQLAlchemy error passing a query with python",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/sqlalchemy-error/";
          
        },
      },{id: "post-the-alter-command-for-redshift",
        
          title: "The Alter Command for Redshift",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/alter-cmd/";
          
        },
      },{id: "post-conda-virtual-environments-handy-commands",
        
          title: "Conda virtual environments; handy commands",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/conda-commands/";
          
        },
      },{id: "post-deleting-rows-from-a-table",
        
          title: "Deleting rows from a table",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/delete-records-sql/";
          
        },
      },{id: "post-updating-a-column-based-on-condition-on-another-column",
        
          title: "Updating a column based on condition on another column",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/update-table-sql/";
          
        },
      },{id: "post-stepping-back-in-time-using-python",
        
          title: "Stepping back in time using python",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/stepping-back-in-time-python/";
          
        },
      },{id: "post-getting-the-difference-between-two-dates",
        
          title: "Getting the difference between two dates",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/subracting-dates-sql/";
          
        },
      },{id: "post-the-sql-grant-statement",
        
          title: "The SQL Grant statement",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/grant-access-sql/";
          
        },
      },{id: "post-string-concatenation-in-redshift",
        
          title: "String concatenation in Redshift",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/joining-strings-sql/";
          
        },
      },{id: "post-what-to-do-when-you-commit-to-a-wrong-branch",
        
          title: "What to do when you commit to a wrong branch",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/commit-wrong-branch/";
          
        },
      },{id: "post-unzipping-compressed-files-in-linux",
        
          title: "Unzipping compressed files in linux",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/compress-linux/";
          
        },
      },{id: "post-copying-files-between-to-servers",
        
          title: "Copying files between to servers",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/transfer-remote-local/";
          
        },
      },{id: "post-sql-order-by-1",
        
          title: "SQL order by 1",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/sql-orderby1/";
          
        },
      },{id: "post-sql-distinct-on",
        
          title: "SQL distinct on",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/sql-distinct-on/";
          
        },
      },{id: "post-checking-if-a-directory-is-empty-using-bash-script",
        
          title: "Checking if a directory is empty using bash script",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/empty-dir-bash/";
          
        },
      },{id: "post-understanding-airflow-39-s-timing",
        
          title: "Understanding airflow&#39;s timing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/airflow-timing/";
          
        },
      },{id: "post-intro-to-apache-airflow",
        
          title: "Intro to Apache Airflow",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/airflow-intro/";
          
        },
      },{id: "post-web-scrapping",
        
          title: "Web Scrapping.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/scrapping/";
          
        },
      },{id: "post-the-genetic-algorithm",
        
          title: "The Genetic Algorithm",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/ga/";
          
        },
      },{id: "projects-heart-disease-prediction",
          title: 'Heart Disease Prediction!',
          description: "This project uses machine learning to predict the likelihood of heart disease in patients based on various health metrics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-comparative-analysis-mlr-vs-rfr",
          title: 'Comparative Analysis; MLR vs RFR',
          description: "Comparing Multiple Linear Regression (MLR) and Random Forest Regression (RFR) for house price prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-comparative-analysis-svc-vs-random-forest",
          title: 'Comparative Analysis; SVC vs Random Forest',
          description: "Comparing SVC and Random Forest for heart disease prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-cleanup-with-click",
          title: 'Cleanup with Click!',
          description: "Organises messy folders",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-stringify",
          title: 'Stringify!',
          description: "Converts a collection of objects into string versions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-web-scraping-api-less",
          title: 'Web Scraping API-less.',
          description: "Scraping an e-commerce site using requests and beautiful soup",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-end-to-end-etl-pipeline",
          title: 'End to End ETL Pipeline',
          description: "Implementing an end to end ETL pipeline.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Clifford%20E.%20Akai-Nettey_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6C%69%66%66%65%6D%6D%61%6E%75%65%6C%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/cliffordemmanuelakai-nettey", "_blank");
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
