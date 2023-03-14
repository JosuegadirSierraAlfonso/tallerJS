
const jos = [
    {traditional : "90-100", PointRange : "12-14", Letter : "A", SBGRating : "4", ProfiencyLevelWithStandard : "Exceeds profiency"} ,
    {traditional : "80-89", PointRange : "9-11", Letter : "B", SBGRating : "3", ProfiencyLevelWithStandard : "Demonstrates profiency"},
    {traditional : "70-79", PointRange : "6-8", Letter : "C", SBGRating : "2", ProfiencyLevelWithStandard : "Approaches profiency"},
    {traditional : "60-69", PointRange : "3-5", Letter : "D", SBGRating : "1", ProfiencyLevelWithStandard : "Falls well belor profiency"},
    {traditional : "<60", PointRange : "1-2", Letter : "E", SBGRating : "0", ProfiencyLevelWithStandard : "Lacks all profiency"},
    {traditional : "0", PointRange : "0", Letter : "F", SBGRating : "4", ProfiencyLevelWithStandard : "No attempt made"}   
]
console.table(jos)

const notas = prompt("Ingrese su nota: ")

if (notas >= 90 && notas <= 100){
    console.log("Letter: A\n Exceeds proficiency")
}
else if (notas >= 80 && notas < 90){
    console.log("Letter: B\n Demonstrates profiency")
}
else if (notas >= 70 && notas < 80){
    console.log("Letter: C\n Approaches proficiency")
}
else if (notas >= 60 && notas < 70){
    console.log("Letter: D\n Falls well below proficiency")
}
else if (notas < 60 && notas != 0){
    console.log("Letter: E\n Lacks all profiency")
}
else if (notas == 0){
    console.log("Letter: F\n No attempt made")
}
else{
    console.log("ingrese una nota valida")
}