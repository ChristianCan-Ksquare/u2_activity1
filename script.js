document.getElementById("ActionButton").addEventListener("click", function_1);

//Function 1
function function_1() {
  var input = document.getElementById("InputText").value;

  if (input.length > 0 && isNaN(input)) {
    console.log(input);

    //Function 2
    (function (string) {
      console.log(string.split("a").length - 1);
    })(input);

    console.log(function_3(input));
  } else {
    console.log("Please fill the input with a text");
  }
}

//Function 3
var function_3 = (string) => {
  if (
    string.charAt(0) === "a" ||
    string.charAt(0) === "A" ||
    string.charAt(0) === "e" ||
    string.charAt(0) === "E" ||
    string.charAt(0) === "i" ||
    string.charAt(0) === "I" ||
    string.charAt(0) === "o" ||
    string.charAt(0) === "O" ||
    string.charAt(0) === "u" ||
    string.charAt(0) === "U"
  ) {
    return "an";
  } else {
    return "a";
  }
};
