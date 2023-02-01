audio = new Audio('/assets/loop.mp3');
audio.loop = true;
audio.play()

const urlParams = new URLSearchParams(window.location.search);
const save_id = urlParams.get("id");

cash_element = document.getElementById("cash");
loan_element = document.getElementById("loan");
office_element = document.getElementById("office");
team_element = document.getElementById("team");
contract_element = document.getElementById("contracts");

choice_element = document.getElementById("choice-modal")
choice_title = document.getElementById("choice-title")
choice_text = document.getElementById("choice-text")
choice_button1 = document.getElementById("choice-1")
choice_button2 = document.getElementById("choice-2")
choice_button3 = document.getElementById("choice-3")
choice_button4 = document.getElementById("choice-4")

fetch('saves.json')
  .then(response => response.json())
  .then(data => {

    function reload_data() {
      cash_element.innerHTML = cash
      loan_element.innerHTML = loan
      office_element.innerHTML = office
      team_element.innerHTML = team
      contract_element.innerHTML = contracts
    }

    cash = data[save_id].treasury
    loan = data[save_id].kindLoan
    office = data[save_id].headOffice
    team = data[save_id].team
    contracts = data[save_id].contractListing
    reload_data()

    function modal(state) {
      if (state == 0) {
        choice_title.innerHTML = "Choix de l'emprunt"
        choice_text.innerHTML = "Choisissez votre emprunt, cela définiera la difficulté de votre partie. Plus celui-ci est elevé plus la difficulté augmenetra."
        choice_button1.innerHTML = "10 000 €"
        choice_button2.innerHTML = "20 000 €"
        choice_button3.innerHTML = "30 000 €"
        choice_button4.innerHTML = "40 000 €"
        choice_element.classList.remove("hidden");
      }
      else if (state == 1) {
        choice_title.innerHTML = "Choix d'un employé"
        choice_text.innerHTML = "Choisissez bien votre premier employé sinon vous risquez d'être rapidement en difficulté. Plus ce dernier à un bon niveau, plus il vous aidera longtemps."
        choice_button1.innerHTML = "Noah"
        choice_button2.innerHTML = "Gabriel"
        choice_button3.innerHTML = "Dany"
        choice_button4.innerHTML = "Alexandre"
        choice_element.classList.remove("hidden");
      }
      else if (state == 2) {
        choice_title.innerHTML = "Choix d'un contrat"
        choice_text.innerHTML = "Il est temps désormais de choisir un premier contrat ! Choisissez-en un avec des demande en corrélation avec vos équipes."
        choice_button1.innerHTML = "Développement"
        choice_button2.innerHTML = "Graphisme"
        choice_button3.innerHTML = "Chefferie de projet"
        choice_button4.innerHTML = "Graphisme & Développement"
        choice_element.classList.remove("hidden");
        if (choice == 1) {
          cash = 10000
          loan = "Facile"
          reload_data()
        } else if (choice == 2) {
          cash = 20000
          loan = "Intermédiaire"
        } else if (choice == 3) {
          cash = 30000
          loan = "Difficile"
        } else if (choice == 4) {
          cash = 40000
          loan = "Extrême"
        }
      }
    }
      

    if (loan == 0) {
      for (i = 0; i < 3; i++) {
        modal(i)
        choice_button1.addEventListener("click", function(event) {
          event.preventDefault();
          choice = 1
          choice_element.classList.add("hidden");
          reload_data()
        });
  
        choice_button2.addEventListener("click", function(event) {
          event.preventDefault();
          choice = 2
          choice_element.classList.add("hidden");
          reload_data()
        });
  
        choice_button3.addEventListener("click", function(event) {
          event.preventDefault();
          choice = 3
          choice_element.classList.add("hidden");
          reload_data()
        });
  
        choice_button4.addEventListener("click", function(event) {
          event.preventDefault();
          choice = 4
          choice_element.classList.add("hidden");
          reload_data()
        });
      }
    }
  })
  .catch(error => {
    console.error(error);
  });