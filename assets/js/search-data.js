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
  },{id: "nav-selected-work",
          title: "Selected Work",
          description: "Selected professional delivery, independent research, and practical data and AI experiments.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-writing",
          title: "Writing",
          description: "Practical notes on data engineering, AI systems, and trustworthy AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Professional experience, education, certifications, and technical skills of Clifford Emmanuel Akai-Nettey.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-when-the-explanation-is-the-target-building-a-reproducible-xai-robustness-benchmark",
        
          title: "When the Explanation Is the Target: Building a Reproducible XAI Robustness Benchmark",
        
        description: "How I designed a reproducible benchmark to test whether AI explanations remain dependable when an attacker can influence them, and what it showed.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/when-explanation-is-the-target/";
          
        },
      },{id: "post-grounded-by-design-building-a-self-hosted-assistant-for-health-supply-planning",
        
          title: "Grounded by Design: Building a Self-Hosted Assistant for Health-Supply Planning",
        
        description: "How a narrow, traceable conversational assistant can help planners explore model outputs without inventing figures or making decisions for them.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/grounded-by-design/";
          
        },
      },{id: "post-the-foundation-before-the-forecast-building-a-governed-data-platform-for-supply-planning",
        
          title: "The Foundation Before the Forecast: Building a Governed Data Platform for Supply Planning...",
        
        description: "How a shared, traceable data foundation brings forecasting and procurement intelligence into one dependable planning platform.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/foundation-before-the-forecast/";
          
        },
      },{id: "post-what-shap-and-lime-explain-and-what-they-do-not",
        
          title: "What SHAP and LIME Explain—and What They Do Not",
        
        description: "A plain-language guide to what two common explanation methods reveal—and the limits of their claims.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/shap-lime/";
          
        },
      },{id: "post-heart-disease-classification-with-public-data-an-experiment",
        
          title: "Heart-Disease Classification with Public Data: An Experiment",
        
        description: "A public-dataset learning exercise and a reflection on why unusually strong validation results require scrutiny.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/heart-disease-pred/";
          
        },
      },{id: "post-house-price-prediction-linear-regression-vs-random-forest",
        
          title: "House-Price Prediction: Linear Regression vs Random Forest",
        
        description: "A public-dataset comparison of linear and random-forest regression for house-price prediction.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/regression-comparative-analysis/";
          
        },
      },{id: "post-heart-disease-classification-svc-vs-random-forest",
        
          title: "Heart-Disease Classification: SVC vs Random Forest",
        
        description: "A public-dataset comparison of support-vector and random-forest classifiers; not a clinical model.",
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
      },{id: "post-a-practical-introduction-to-apache-airflow",
        
          title: "A Practical Introduction to Apache Airflow",
        
        description: "A practical introduction to representing, scheduling, and observing data workflows with Apache Airflow.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/airflow-intro/";
          
        },
      },{id: "post-web-scraping",
        
          title: "Web Scraping.",
        
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
      },{id: "projects-explainability-under-pressure",
          title: 'Explainability Under Pressure',
          description: "An interactive toy model that runs three tests on one alert explanation, matching the three properties measured in my MSc research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/00-explainability-under-pressure/";
            },},{id: "projects-rwanda-data-genai-amp-devops-delivery",
          title: 'Rwanda: Data, GenAI &amp;amp; DevOps Delivery',
          description: "Designing and building a governed data platform, a self-hosted grounded assistant, and the infrastructure beneath both, for a national public-health supply chain.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01-rwanda-data-ai-delivery/";
            },},{id: "projects-can-an-attacker-rewrite-an-ai-explanation",
          title: 'Can an Attacker Rewrite an AI Explanation?',
          description: "MSc research. A reproducible benchmark that tests whether SHAP and LIME explanations in ML intrusion detection stay reliable under attack.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/05-xai-tamper-resistance/";
            },},{id: "projects-heart-disease-prediction",
          title: 'Heart Disease Prediction',
          description: "A machine-learning project exploring heart-disease prediction from health metrics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_heart_pred/";
            },},{id: "projects-house-price-model-comparison",
          title: 'House-Price Model Comparison',
          description: "A comparison of multiple linear regression and random-forest regression for house-price prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_comp_mlr_rfr/";
            },},{id: "projects-classification-model-comparison",
          title: 'Classification Model Comparison',
          description: "A comparison of support-vector and random-forest classifiers for heart-disease prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_comp_svc_rf/";
            },},{id: "projects-cleanup-with-click",
          title: 'Cleanup with Click',
          description: "A small command-line experiment for organising messy folders.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_cleanup/";
            },},{id: "projects-stringify",
          title: 'Stringify',
          description: "A compact utility experiment for converting collections of objects into string representations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_stringify/";
            },},{id: "projects-api-free-web-scraping",
          title: 'API-Free Web Scraping',
          description: "A learning project using Requests and Beautiful Soup to explore e-commerce web scraping.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_web_scraper/";
            },},{id: "projects-end-to-end-etl-pipeline",
          title: 'End-to-End ETL Pipeline',
          description: "A public learning project that demonstrates the fundamentals of an end-to-end data pipeline.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_etl/";
            },},{id: "projects-glass-box-loan-classifier",
          title: 'Glass Box Loan Classifier',
          description: "A public explainable-AI dashboard for exploring credit-scoring model decisions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_loan_classifier/";
            },},{
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
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/cliffordEmmanuel", "_blank");
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
