let weight= prompt("weight");
let height= prompt("height");
let bmi = weight / Math.sqrt(height);
if (bmi < 18)
    document.write("Underweight");
else if (bmi < 25.0)
    document.write("Normal");
else if (bmi < 30.0)
    document.write("Overweight");
else
    document.write("Obese");
