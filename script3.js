// Function to calculate PAYE (Tax) based on monthly taxable pay
function calculatePAYE(monthlyTaxablePay) {
    let annualTaxablePay = monthlyTaxablePay * 12;
    let paye = 0;
  
    if (annualTaxablePay <= 288000) {
      paye = annualTaxablePay * 0.1;
    } else if (annualTaxablePay <= 388000) {
      paye = (annualTaxablePay - 288000) * 0.25 + 28800;
    } else {
      paye = (annualTaxablePay - 388000) * 0.3 + 63800;
    }
  
    return paye;
  }
  
  // Function to calculate NHIF Deductions based on gross pay
  function calculateNHIFDeductions(grossPay) {
    let nhifDeductions = 0;
    let nhifRates = [
      [5999, 150],
      [7999, 300],
      [11999, 400],
      [14999, 500],
      [19999, 600],
      [24999, 750],
      [29999, 850],
      [34999, 900],
      [39999, 950],
      [44999, 1000],
      [49999, 1100],
      [59999, 1200],
      [69999, 1300],
      [79999, 1400],
      [89999, 1500],
      [99999, 1600],
      [Infinity, 1700]
    ];
  
    for (let i = 0; i < nhifRates.length; i++) {
      if (grossPay <= nhifRates[i][0]) {
        nhifDeductions = nhifRates[i][1];
        break;
      }
    }
  
    return nhifDeductions;
  }
  
  // Function to calculate NSSF Deductions based on pensionable pay
  function calculateNSSF(monthlyPensionablePay) {
    let nssfTier1Limit = 6000;
    let nssfTier2Limit = 18000;
    let nssfEmployeeRate = 0.06;
    let nssfEmployerRate = 0.06;
    let nssfDeductions = 0;
  
    if (monthlyPensionablePay <= nssfTier1Limit) {
      nssfDeductions = monthlyPensionablePay * nssfEmployeeRate + monthlyPensionablePay * nssfEmployerRate;
    } else if (monthlyPensionablePay <= nssfTier2Limit) {
      nssfDeductions = nssfTier1Limit * nssfEmployeeRate + nssfTier1Limit * nssfEmployerRate;
      nssfDeductions += (monthlyPensionablePay - nssfTier1Limit) * nssfEmployeeRate;
    } else {
      nssfDeductions = nssfTier1Limit * nssfEmployeeRate + nssfTier1Limit * nssfEmployerRate;
      nssfDeductions += (nssfTier2Limit - nssfTier1Limit) * nssfEmployeeRate;
      nssfDeductions += (monthlyPensionablePay - nssfTier2Limit) * nssfEmployeeRate;
    }
  
    return nssfDeductions;
  }
  
  // Function to calculate gross salary
  function calculateGrossSalary(basicSalary, allowances) {
    return basicSalary +allowances;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, allowances) {
let monthlyTaxablePay = calculateGrossSalary(basicSalary, allowances);
let paye = calculatePAYE(monthlyTaxablePay);
let nhifDeductions = calculateNHIFDeductions(monthlyTaxablePay);
let monthlyPensionablePay = basicSalary;
let nssfDeductions = calculateNSSF(monthlyPensionablePay);

let netSalary = monthlyTaxablePay - paye - nhifDeductions - nssfDeductions;

return netSalary;
}


console.log("Net Salary: Ksh " + netSalary.toFixed(2));
  