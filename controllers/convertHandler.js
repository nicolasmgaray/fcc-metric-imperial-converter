/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    let result = input.replace(/([a-zA-z])/g, "");
    
    if(result.length==0) return 1;
    
    if (result.includes("/")) {
      let numbers = result.split("/");
      if(numbers.length!=2) return "invalid number";
      let a = parseFloat(numbers[0]);
      let b = parseFloat(numbers[1]);
      return a / b;
    }
    return parseFloat(result, 10);
  };

  this.getUnit = function(input) {
    var validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
   
    let result = input.replace(/([^a-zA-z])/g, "");
  
    if(validUnits.indexOf(result)<0) return 'invalid unit'
    return result;
  };

  this.getReturnUnit = function(initUnit) {
   
    const input = ['gal','l','mi','km','lbs','kg'];
    const expect = ['l','gal','km','mi','kg','lbs'];
    
    return(expect[input.indexOf(initUnit.toLowerCase())])    
   
  };

  this.spellOutUnit = function(unit) {
   const input = ['gal','l','mi','km','lbs','kg'];
   const expect = ['gallons','liters','miles','kilometers','pounds', 'kilograms'];

    return(expect[input.indexOf(unit)])    
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch(initUnit){
      case 'L':
          return initNum / galToL;
        break;
      case 'gal':
          return initNum * galToL;
        break;
         case 'mi':
          return initNum * miToKm;
        break;
         case 'km':
          return initNum / miToKm;
        break;
         case 'kg':
          return initNum / lbsToKg;
        break;
         case 'lbs':
          return initNum * lbsToKg;
        break;
    }     

  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {  
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${parseFloat(returnNum).toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
