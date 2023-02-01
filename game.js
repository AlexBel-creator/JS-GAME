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

    

    if (data[save_id].kindLoan == "") {
      
      choice_title.innerHTML = "Choix de l'emprunt"
      choice_text.innerHTML = "Choisissez votre emprunt, cela définiera la difficulté de votre partie. Plus celui-ci est elevé plus la difficulté augmenetra."
      choice_button1.innerHTML = "10 000 €"
      choice_button2.innerHTML = "20 000 €"
      choice_button3.innerHTML = "30 000 €"
      choice_button4.innerHTML = "40 000 €"
      
      choice_element.classList.remove("hidden");

      choice_button1.addEventListener("click", function(event) {
        event.preventDefault();
        cash = 10000
        loan = 10000
        choice_element.classList.add("hidden");
        reload_data()
      });

      choice_button2.addEventListener("click", function(event) {
        event.preventDefault();
        cash = 20000
        loan = 20000
        choice_element.classList.add("hidden");
        reload_data()
      });

      choice_button3.addEventListener("click", function(event) {
        event.preventDefault();
        cash = 30000
        loan = 30000
        choice_element.classList.add("hidden");
        reload_data()
      });

      choice_button4.addEventListener("click", function(event) {
        event.preventDefault();
        cash = 40000
        loan = 40000
        choice_element.classList.add("hidden");
        reload_data()
      });
    }

    if (team == []) {
      console.log("test")
      choice_title.innerHTML = "Recrutement"
      choice_text.innerHTML = "Choisissez votre premier employé, choisissez bien, c'est lui qui devra rendre les premiers contrats."
      choice_element.classList.remove("hidden");
    }

  })
  .catch(error => {
    console.error(error);
  });