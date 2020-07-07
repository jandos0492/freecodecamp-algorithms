// function addTogether(first, second) {
// if (typeof(first) == "number" && typeof(second) == "number") {
//   return first + second;
// } else  if (typeof(first) != "number" && typeof(second) != "number") {
//     return undefined;
//   }
// else if (first && second === undefined && second != "string") {
//   return (second) => first + second;
//   }
// }

function addTogether() {

    var args = Array.prototype.slice.call(arguments);

    function validNumber(test){
        if (typeof test !== 'number'){
            return false;
        }else{
            return true;
        }
    }

    if(args.length >=2){
        if(validNumber(args[0]) && validNumber(args[1])){
            return args[0] + args[1];
        }
    }else{
        if(!validNumber(args[0])){
            //if not a valid number
            return undefined;
        }else{
            return function(newNumber){
                if(validNumber(newNumber)){
                    return args[0] + newNumber;
                }else{
                    return undefined;
                }

            };
        }
    }


}

console.log(addTogether(2, "3"));
