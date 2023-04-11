Script 1
The function starts by using the prompt() function to display a dialog box to the user and ask for input. The user is prompted to enter student marks within the range of 0-100.

The input received from the user is then converted to a number using the Number() function and stored in a variable called marksNumber.

The function then checks if the input is a valid number between 0 and 100 using an if statement with three conditions:

isNaN(marksNumber) checks if marksNumber is not a valid number (e.g., if the user entered a non-numeric value).
marksNumber < 0 checks if marksNumber is less than 0.
marksNumber > 100 checks if marksNumber is greater than 100.
If any of these conditions are true, the function immediately returns a string message "Invalid input. Please enter a number between 0 and 100." indicating that the input is invalid.

If the input is valid, the function proceeds to determine the grade based on the marksNumber. It uses a series of if and else if statements to check the value of marksNumber against predefined grade ranges:

If marksNumber is greater than 79, the function returns "A".
If marksNumber is between 60 and 79 (inclusive), the function returns "B".
If marksNumber is between 50 and 59 (inclusive), the function returns "C".
If marksNumber is between 40 and 49 (inclusive), the function returns "D".
If none of the above conditions are met, the function returns "E".

Finally, the function is called with getGrade() to execute the code and get the result of the grade based on the input marks. The returned grade is printed to the console 


Script 2

Speed Limit Checker
This js function checks if a given speed exceeds the speed limit and calculates demerit points based on predefined rules. It is usable in scenarios where a speed limit needs to be enforced and demerit points need to be assigned for speeding violations.


If the speed is within the speed limit, the function returns "Ok".
If the speed exceeds the speed limit but does not reach the maximum demerit points allowed, the function returns "Points: " followed by the calculated demerit points.
If the speed exceeds the maximum demerit points allowed, the function returns "License suspended".

The function uses the following constants to define the rules for demerit points:

speedLimit (number): The maximum speed limit allowed in km/h. Default value is 70.
demeritPointsPerKmOverLimit (number): The number of demerit points incurred for every 1 km/h over the speed limit. Default value is 1.
maxDemeritPoints (number): The maximum number of demerit points allowed before the license is suspended. Default value is 12.




Script 3
Salary Calculator
This is a JavaScript program that provides functions to calculate various deductions from a gross salary, such as PAYE (tax), NHIF (National Hospital Insurance Fund) deductions, and NSSF (National Social Security Fund) deductions, to arrive at the net salary.


calculatePAYE(monthlyTaxablePay)
This function takes in the monthly taxable pay as an argument and calculates the PAYE (tax) based on the provided tax rates. It uses conditional statements to determine the appropriate tax rate based on the annual taxable pay, and calculates the PAYE accordingly.

calculateNHIFDeductions(grossPay)
 It takes in the gross pay as an argument and calculates the NHIF deductions based on the provided NHIF rates. It uses an array of rates and corresponding thresholds to determine the appropriate NHIF deduction based on the gross pay.

calculateNSSF(monthlyPensionablePay)
It takes in the monthly pensionable pay as an argument and calculates the NSSF (National Social Security Fund) deductions based on the provided NSSF rates. It uses conditional statements to determine the appropriate NSSF deduction based on the pensionable pay and applies different rates for different tiers of pensionable pay.

calculateGrossSalary(basicSalary, allowances)
 It takes in the basic salary and allowances as arguments and calculates the gross salary by adding the basic salary and allowances together.

calculateNetSalary(basicSalary, allowances): This function takes the basic salary and allowances as input and calculates the net salary by calling the other functions for PAYE, NHIF, and NSSF calculations, and subtracting them from the monthly taxable pay. The calculated net salary is returned.



