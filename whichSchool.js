
import java.util.Scanner;
public class Number {
  Scanner user_input = new Scanner(System.in);
  Number age;
  System.out.print("Enter your age: ");
  age = user_input.next();
}

  if (!isNaN(age)) {
    console.whichSchool(age);
    } else {
    alert ("Please give me a valid age in number form")}

function whichSchool(age) {
   if (age < 13) {
    console.log("Elementary School");
  } else if (age < 18) {
    console.log("Secondary School");
  } else {
    console.log("Lighthouse Labs");
  }
}

