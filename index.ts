#!/usr/bin/env node
import inquirer from "inquirer";

const currency:any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280
};

let urea_anwere = await inquirer.prompt(
  [
    {
     name:'from',
      message:'Enter from amount',
      type:'list',
      choices:['USD','EUR','GBP','INR','PKR']
     },
      {
         name:'to',
         message:'Enter to amount',
         type:'list',
         choices:['USD','EUR','GBP','INR','PKR']
      },
      {
         name:'amount',
         message:'Enter your Amount',
         type:'number'
      }
   ]
)
      
    let fromAmount = currency[urea_anwere.from]
    let toAmount = currency[urea_anwere.to]
    let amount = urea_anwere.amount
    let baseAmount = amount / fromAmount
    let convertedAmount = baseAmount * toAmount
    console.log(convertedAmount);

   console.log(fromAmount);
   console.log(toAmount);
   console.log(amount)  
     
  
  
  
  