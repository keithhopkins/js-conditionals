var input = prompt("Please enter your phone number","xxx-xxx-xxxx");
var yes = "That input is valid";
var no = "That input is invalid";
if (input.charAt(3)==='-'&&input.charAt(7)==='-'){
  alert(yes);
}
else {
  alert(no);
}

input = prompt("Please enter your birth date","(xx/xx/xx)");
if (input.charAt(2)==='/'&&input.charAt(5)==='/'){
  alert(yes);
}
else {
  alert(no);
}

input = prompt("Please enter your postal code","xxxxx-xxxx");
if(input.length===5 || input.charAt(5)==='-') {
  alert(yes);
}
else {
  alert(no);
}

input = prompt("Please enter your state abbreviation","XX");
if(input.length!==2 || input!==input.toUpperCase()){
  alert(no);
}
else {
  alert(yes);
}

input = prompt("Are you married");
if(input.toUpperCase()==='YES'||input.toUpperCase()==='NO') {
  alert(yes);
}
else {
  alert(no);
}
