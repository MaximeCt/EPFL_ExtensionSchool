var userInput1 = window.prompt("Do you want to convert a value ? (yes or no) ");
var userInput2 = window.prompt("Which measure do you want to convert ? (Bitcoin / Euros / Celcius) ")
var userInput = true;


while (userInput != false){  
    if (userInput1 = "yes"){
        }else if (userInput2 = "Bitcoin"){
            userInput=true
            var B = prompt("How many Bitcoin do you want to convert in CHF ? ");
            function BitcoinToCHF(B) {
                var Bitcoin = B;
                var conversion = B * 36682;
                console.log(B.toString() + " Bitcoins converted in CHF is " +  conversion.toString() + " CHF."); 
                              
            }
            BitcoinToCHF(B);
            var userInput1 = window.prompt("Do you want to convert a value ? (yes or no) ");

            
        
        }else if (userInput2 = "Euros"){
            userInput=true
            var E = prompt("How many Euros do you want to convert in CHF ? ");
            function EurosToCHF(E) {
                var Euros = E;  
                var conversion = E * 1.03;
                console.log(E.toString() + " Euros converted in CHF is " + conversion.toString() + " CHF.")              
            }
            EurosToCHF(E);
            var userInput1 = window.prompt("Do you want to convert a value ? (yes or no) ");



        }else if (userInput2 = "Celcius"){
            userInput=true
            var c = prompt("How many Celcius degrees do you want to convert in Fahrenheit ? ");
            function CelciusToFahrenheit(c) {
                var Celcius = c;
                var conversion = c * 9/5 + 32;
                console.log(E.toString() + " Celcius converted in Fahrenheit is " + conversion.toString() + " Fahrenheit.");
            }
            CelciusToFahrenheit(c);
            var userInput1 = window.prompt("Do you want to convert a value ? (yes or no) ");
        

        }else {
            console.log("Sorry, this convertion is not possible !");     // I can't understand why this sentence do not show up in the console when I mispell a measure
            userInput = false
        
        }
    
    }else {             // Why is this syntax wrong ? To me } before the else, closes the if condition
        return          // Here I used return to close the program (like quit() for Python)
    }

}                       // Same here: for me } makes sense as it closes the while condition

