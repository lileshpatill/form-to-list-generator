const namee = document.querySelector(".name");
const age = document.querySelector(".age");
const nameDisp = document.querySelector(".name-disp");
const ageDisp = document.querySelector(".age-disp");
const submit = document.querySelector(".sub");

// let naam;
// let umar;

// function storeValue() {
//   naam = namee.value;
//   umar = age.value;
// }

submit.addEventListener("click", () => {
  // storeValue();
  if (namee.value !== "" && age.value !== "") {
    var li = document.createElement("li");
    li.innerHTML = namee.value;
    var lis = document.createElement("li");
    lis.innerHTML = age.value;
    nameDisp.appendChild(li);
    ageDisp.appendChild(lis);
    namee.value = "";
    age.value = "";
  } else {
    if (namee.value === "" && age.value === "") {
      window.alert("Please enter Name and Age");
    } else if (age.value === "") {
      window.alert("Please enter your age");
    } else if (namee.value === "") {
      window.alert("Please enter the name");
    }
  }
});
