function calculateBMI(weight: number, height: number): number {
    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
    return weight / (height * height);
}

function interpretBMI(bmi: number): string {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Example usage:
const weight = 70; // in kilograms
const height = 1.7; // in meters
const bmi = calculateBMI(weight, height);
const interpretation = interpretBMI(bmi);
console.log("BMI:", bmi);
console.log("Interpretation:", interpretation);
