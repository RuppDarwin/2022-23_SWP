for(var i = 1; i <= 4; i++){
    if(i%2 == 0){
        console.log("O O O O")
    }else{
        console.log("X X X X")
    }
}

var zähler = 0

for(var i = 1; i <= 100; i++){
    if(i%2 == 0){
        zähler += i
    }
}

process.stdout.write("\n")
console.log("Weg 1:" + zähler)

zähler = 0

for(var i = 1; i <= 100; i+=2){
        zähler += i
}

process.stdout.write("\n")
console.log("Weg 2:" + zähler)
process.stdout.write("\n")

for(var row = 1; row <= 5; row++){
    if(row < 2 || row > 4){
        for(var i = 1; i <= 4; i++){
            process.stdout.write("X")
        }
        process.stdout.write("\n")
    }else if(row > 1 || row < 5){
        for(var i = 1; i <= 5; i++){
            if(i == "1" || i == "5"){
                process.stdout.write("X")
            }else{
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}