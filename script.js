

function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI !

      let journal = data.journal;

      // TODO 1: REMPLIR LE HEADER

      //le nom du journal

      document.getElementById("nom-journal").textContent = journal.nomJournal;

      //la phrase d'accroche

      document.getElementById("phrase-accroche").textContent = journal.phraseAccroche;
      
      
      // TODO 2: REMPLIR LA NAVIGATION

      let themesNav = document.getElementById("themes-nav");

      //un bouton **Tous**

      let btnTous = document.createElement("button");

      btnTous.className = "nav-theme-btn active";
      btnTous.textContent = "Tous";
      btnTous.addEventListener("click", () => {
        setActiveNavBtn (btnTous);
        renderArticles(journal.articles);
      });

      themesNav.appendChild(btnTous);


      //un bouton par thème

      let themes = ["Espèces & controverses", "Classements & découvertes", "Terrains & fossiles", "Anatomie & évolution", "Culture & pop science", "Héritage & science moderne"];

      themes.forEach(theme => {
        let btn = document.createElement("button");
        btn.className = "nav-theme-btn";
        btn.textContent = theme;
        btn.addEventListener("click", () => {
          setActiveNavBtn (btn);

        let filtered = journal.articles.filter 

        renderArticles(filtered);
      });

      themesNav.appendChild(btn);

    });

      function setActiveNavBtn(activeBtn) {
        themesNav.querySelectorAll(".nav-theme-btn").forEach (b => b.classList.remove("active" ));
        activeBtn.classList.add("active");
      }

      

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      //Afficher une image

      let ap = journal.articlePrincipal;

      let articlePrincipal = document.getElementById ("article-principal");

      articlePrincipal.innerHTML = `
      <img id="hero-image" src= "${ap.image}" alt="${ap.titre}">

      <div class="hero-info">
        <span class="theme-badge">${ap.theme}</span>
        <h2 id ="hero-titre">${ap.titre}</h2>
        <p id ="hero-description"> ${ap.description}</p>
        <span class="date">${ap.date}</span>
      </div>
      `;
    


      //Affihcer un badge de thème


      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
      
      function renderArticles(articles) {
        let grid = document.getElementById("articles-grid");

        grid.innerHTML = sorted.map (article =>`
          <div class = "article-card">
          <img src= "${article.image}" alt = "${article.titre}"
          <div class= "article-content">
          <span class = "theme-badge">${article.theme} </span>
          <h3>${article.titre}</h3>
          <span class = "date">${article.date}</span>
          <button class="read-btn">Lire l'article</button>

          </div>
          </div>

        `)
        renderArticles(journal.articles);



      
      // TODO 5: REMPLIR LES THEMES

      let themesList = document.getElementById("themes-list");

      themesList.innerHTML = journal.themes.map (themes`
        <div class ="theme-item">
        <h3>${theme.nom}</h3>
        <p>${theme.description}</p>
        </div>
      `)


      // TODO 6: REMPLIR LES AUTEURS

      let authorsList = document.getElementById("authors-list");

      authorsList.innerHTML = journal.auteurs.map (auteur =>`
        <div class= "author-Card">
        <img class="author-img" src ="${auteur.photo}" alt="${auteur.prenom}">
        <h3>${auteur.prenom}</h3>
        <p class= "author-role"">${auteur.typeExprience}</p>
        <p class= "author-bio"">${auteur.presentation}</p>
        </div>
        `);



      // TODO 7: REMPLIR LE CALL TO ACTION

      let cta = document.getElementById("call-to-action");

      cta.innerHTML=`
      <p>${journal.texteAppelAction}</p>
      < button class= "cta-button" id="cta-btn"> S'abboner maintenant </button>
      `;

    

    }


      /// FIN DU CODE

      // BONUS 1 : Alert sur le bouton CTA

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité

  })
}


getData();