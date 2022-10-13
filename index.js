function scuberGreetingForFeet(value) {

  let greeting;

  if (value <= 400 ){
  greeting = ("This one is on me!")
  } else if (value >= 401 && value <= 2000 ){
  greeting = ("That will be twenty bucks.")
  } else if (value >= 2000 && value <=2499){
  greeting = ("I will gladly take your thirty bucks.")
  } else if (value >= 2500){
    greeting = ("No can do.")
  }
  return greeting
}


function ternaryCheckCity() {
 const city = "NYC"
const cityCheck = city >= "Pittsburgh" ? "Ok, sounds good." : "No go."
return cityCheck
}


function switchOnCharmFromTip(){
 
  const tip = "generous";
  let charm;

 switch(tip) {
  case "generous":
    charm = "Thank you so much.";
    break;
  case "not as generous":
    charm = "Thank you.";
  default:
    charm = "Bye."
  
 }
return charm;
}
