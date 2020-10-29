toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

class person {
    constructor(id) {
      try {
        this.validate();
      } catch(error) {
        return error;
      }
      this.id = id;
      this.save(true);
    }
    save(constructor) {
      try{
        if(!constructor) this.validate()
        for (const input of personInputs) {
          this[input.name] = input.value;
        }
      } catch(error) {
        return error;
      }
    }
    validate() {
      if(Array.from(personInputs).every(input => input.value !== "")){
        console.log("Validate Passed")
        return true;
      } else {
        
      }
    }
  }
  
  let currentPerson = 1;
  
  const allPeople = [],
    personInputs = document.querySelectorAll(".phone-input"),
    plusEl = document.querySelector(".plus"),
    personNum = document.querySelector(".personNum"),
    titelEl = document.querySelector("h3"),
    feedbackEl = document.querySelector(".feedback"),
    addPerson = () => { // New person function

      const inputArray = Array.from(personInputs).slice(4);
      
      // Save the current person first  
      if (Array.from(inputArray).every(input => input.value !== "")) {
        // Save the current person first  
        savePerson(currentPerson); 
      
        // Create the new element and set it's text value (and that of the title), to the new number.
        const newPerson = document.createElement("div");
        newPerson.textContent = personNum.textContent = currentPerson =
          allPeople.length + 1;
          
        // Making the new person the selected one.
        document.querySelector(".added.selected").classList.remove("selected");
        newPerson.classList.add("added", "selected");
        
        // Inserting into the container and scrolling to it.
        plusEl.parentElement.insertBefore(newPerson, plusEl);
        newPerson.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start"
        });
        for (const input of personInputs) {
          input.value = "";
        }
        toastr.success("Persoon toegevoegd!");
      } else {
        toastr["error"]("Vul alstublieft alle velden in.", "Foutmelding!")
      }
      
      console.log("Current person = " + currentPerson);
    };
    const switchPerson = (e, save = true) => {
      const addedEls = document.querySelectorAll(".added");
  
      if (save) { // Adding or switching we want to save
        savePerson(currentPerson);
        currentPerson = parseInt(e.target.textContent); // Get the number of the clicked element
      } else{ // False when deleteing
        currentPerson = allPeople.length - 1;
        currentPerson = currentPerson + 1;    
      }
  
      Array.from(addedEls).find(el => el.classList.contains("selected") )?.classList.remove("selected")
      addedEls[currentPerson-1].classList.add("selected");
  
      const scrollSelected = document.querySelector(".added.selected");
      scrollSelected.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
  
      personNum.textContent = currentPerson;
      const currentPersonObj = allPeople.find((person) => person.id === currentPerson);
  
      for (const input of personInputs) {
        input.value = currentPersonObj[input.name];
      }
    },
    savePerson = (savePerson) => {
      
      if (allPeople.length < savePerson)  {
        //I'm sure this duplication could be tidied up;
        if (Array.from(personInputs).every(input => input.value == "")) {
          Array.from(personInputs).every(input => input.value += "Leeg")
        }
          try {
            allPeople.push(new person(savePerson));
          } catch(error){
            return; 
        }
      }else {
        try {
          allPeople.find((person) => person.id === savePerson).save();
        } catch(error){
          return;
        }     
      }
      console.log(allPeople);
    },
    removePerson = () => {
     if (currentPerson == 1) {
       console.log("Cant delete cus it is first input field");
       switchPerson(true);
       allPeople.length = 0;
     } else {
        plusEl.previousElementSibling.remove();   
        if (Array.from(personInputs).every(input => input.value == "")) {
          console.log("input field is empty");
        }else{
          allPeople.pop()
          console.log("Deleting input field")
          
        }
     }
     switchPerson(null, false);
    },
    delegatedClicks = [
      { selector: ".add, .add *", function: addPerson },
      { selector: ".added", function: switchPerson },
      { selector: ".remove *", function: removePerson }
      ];
  
  document.addEventListener("click", (e) => {
    const funcObj = delegatedClicks.find((obj) => e.target.matches(obj.selector));
      if (funcObj) funcObj.function.call(this, e);
  });
  
  
  // drag and mouse moving js
  dragElement(document.querySelector("#phone"));
  
  function dragElement(elmnt) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
  const moveEl = elmnt.querySelector(`#${elmnt.id}Move`) ?? elmnt;
        // if present, the header is where you move the DIV from:
        // otherwise, move the DIV from anywhere inside the DIV:
        moveEl.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = `${(elmnt.offsetTop - pos2)}px`;
        elmnt.style.left = `${(elmnt.offsetLeft - pos1)}px`;
    }
  
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
  }
  
  // delete button js
  document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if (!button.classList.contains('delete')) {
  
        button.classList.add('delete');
  
        setTimeout(() => button.classList.remove('delete'), 2200);
  
    }
    e.preventDefault();
  }));