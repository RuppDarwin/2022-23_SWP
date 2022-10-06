var month = 0
var startday = -1
var days = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"]
var rows = Math.floor(31/7)+1

console.log("\n");
process.stdout.write("1:");
console.log("\n");

for(var row = 0; row <= rows; row++){
    if(row == 0){
        for(var i = 0; i <= days.length - 1; i++){
            process.stdout.write(" | " + days[i]);
        }
        process.stdout.write(" | ")
    }else{
        process.stdout.write("\n")
        for(var i = 1; i <= 7; i++){
            if(startday > 0 && startday <= 9){
                process.stdout.write(" | " + (startday++) + " ");
            }else if(startday > 9 && startday <= 31){
                process.stdout.write(" | " + (startday++));
            }
            else{
                startday++;
                process.stdout.write(" |   ");
            }
        }
        process.stdout.write(" | ")
    }
}

console.log("\n");
process.stdout.write("2:");
console.log("\n");

var month = 0
var startday = -1

for(var row = 0; row <= rows; row++){
    if(row == 0){
        for(var i = 0; i <= days.length - 1; i++){
            process.stdout.write(" | " + days[i]);
        }
        process.stdout.write(" | ")
    }else{
        process.stdout.write("\n")
        for(var i = 1; i <= 7; i++){
            if(startday > 0 && startday <= 9){
                if(i >= 6){
                    startday++;
                    process.stdout.write(" | " + "WE");
                }else{  
                    process.stdout.write(" | " + (startday++) + " ");
                }
            }else if(startday > 9 && startday <= 31){
                if(i >= 6){
                    startday++;
                    process.stdout.write(" | " + "WE");
                }else{
                    process.stdout.write(" | " + (startday++));
                }
            }else{
                startday++;
                process.stdout.write(" |   ");
            }
        }
        process.stdout.write(" | ")
    }
}