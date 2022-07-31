var express = require('express');
var router = express.Router();

function BMI_Category_Cal(bmi) {
  if(bmi < 18.5){
    return ["Underweight","Malnutrition risk"];

  }
  if(bmi < 25 ){
    return ["Normal weight","Low risk"]
  }
  if(bmi < 30.0){
    return ["Overweight","Enhanced risk"]
  }
  if(bmi < 35.0){
    return ["Moderately obese ","Medium risk"]
  }
  if(bmi < 40.0){
    return ["Severel obese","High risk"]
  }
  else{
    return ["Very severely obese","Very high risk"]
  }

} 


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post ('/', function(req, res, next) {
  console.log(req.body,"req body.")
  var Result = [] 
  patientsList = req.body.body;
  patientsList.forEach(element =>{
    console.log(element,"ele")
    try{
      var ele = element
      Gender = element.Gender;
      Height = (element.HeightCm)/100;
      Weight = (element.WeightKg);
      var BMI = Weight /(Height*Height);
      BMI_Category = BMI_Category_Cal(BMI)
      ele.BMI = BMI
      ele.BMI_Category = BMI_Category[0]
      ele.Health_Risk = BMI_Category[1]
      Result.push(ele)
      console.log("BMI : ",BMI)
      
    

    }catch(error){
      console.log(error)
    }
    finally {
      console.log("");
    }
    


  })

  console.log(Result)
  // res.send('respond with a resource : '+Result);
  res.send(Result)
});

module.exports = router;
