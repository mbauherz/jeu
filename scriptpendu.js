let para = document.getElementById("para")
para.style.fontSize = "100px"
let arr = ["lion", "chat", "chien"]
let rndNum = Math.floor(Math.random() * 3)
let mot = "piscine"

let bouton = document.getElementById("bouton")
let input = document.getElementById("input")

const paraLives = document.getElementById("lives")
let lives = 7

let motDebut = mot.split("").map((element)=> element = "_")
para.textContent = motDebut.join("")
let display = para.textContent
let display2 = display.split("")

let indiceimg = document.getElementById("indice")
let indic = document.getElementById("indic")
function imgp(event){

        indiceimg.style.display = "block"
    
}
indic.addEventListener("click", imgp)


let boutonA = document.getElementById("a")
let boutonB = document.getElementById("b")
let boutonC = document.getElementById("c")
let boutonD = document.getElementById("d")
let boutonE = document.getElementById("e")
let boutonF = document.getElementById("f")
let boutonG = document.getElementById("g")
let boutonH = document.getElementById("h")
let boutonI = document.getElementById("i")
let boutonJ = document.getElementById("j")
let boutonK = document.getElementById("k")
let boutonL = document.getElementById("l")
let boutonM = document.getElementById("m")
let boutonN = document.getElementById("n")
let boutonO = document.getElementById("o")
let boutonP = document.getElementById("p")
let boutonQ = document.getElementById("q")
let boutonR = document.getElementById("r")
let boutonS = document.getElementById("s")
let boutonT = document.getElementById("t")
let boutonU = document.getElementById("u")
let boutonV = document.getElementById("v")
let boutonW = document.getElementById("w")
let boutonX = document.getElementById("x")
let boutonY = document.getElementById("y")
let boutonZ = document.getElementById("z")

function filtre(value, index) {
if (value === mot[index]) {
    display[index] = value
}
}
function test3 () {
for (i = 0; i<mot.length; i++)  {
    if (input.value === mot[i]) {
       display2[i] = input.value
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes(input.value) == false)
    {
        lives--
    }
}
 function bouta() {
    for (i = 0; i<mot.length; i++)  {
    if ("a" === mot[i]) {
       display2[i] = "a"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("a") == false)
    {
        lives--;
        testLives()
    }
   testLives() 
}
 function boutb() {
    for (i = 0; i<mot.length; i++)  {
    if ("b" === mot[i]) {
       display2[i] = "b"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("b") == false)
    {
        lives--
        testLives()
    }
    
}
 function boutc() {
    for (i = 0; i<mot.length; i++)  {
    if ("c" === mot[i]) {
       display2[i] = "c"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("c") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
 function boutd() {
    for (i = 0; i<mot.length; i++)  {
    if ("b" === mot[i]) {
       display2[i] = "d"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("d") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
 function boute() {
    for (i = 0; i<mot.length; i++)  {
    if ("e" === mot[i]) {
       display2[i] = "e"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("e") == false)
    {
        lives--
        testLives()
    }
   testLives() 
}
 function boutf() {
    for (i = 0; i<mot.length; i++)  {
    if ("f" === mot[i]) {
       display2[i] = "f"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("f") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
 function boutg() {
    for (i = 0; i<mot.length; i++)  {
    if ("g" === mot[i]) {
       display2[i] = "g"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("g") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
 function bouth() {
    for (i = 0; i<mot.length; i++)  {
    if ("h" === mot[i]) {
       display2[i] = "h"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("h") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function bouti() {
    for (i = 0; i<mot.length; i++)  {
    if ("i" === mot[i]) {
       display2[i] = "i"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("i") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutj() {
    for (i = 0; i<mot.length; i++)  {
    if ("j" === mot[i]) {
       display2[i] = "j"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("j") == false)
    {
        lives--
        testLives()
    }
    
}
function boutk() {
    for (i = 0; i<mot.length; i++)  {
    if ("k" === mot[i]) {
       display2[i] = "k"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("k") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutl() {
    for (i = 0; i<mot.length; i++)  {
    if ("l" === mot[i]) {
       display2[i] = "l"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("l") == false)
    {
        lives--
        testLives()
    }
 testLives()   
}
function boutm() {
    for (i = 0; i<mot.length; i++)  {
    if ("m" === mot[i]) {
       display2[i] = "m"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("m") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutn() {
    for (i = 0; i<mot.length; i++)  {
    if ("n" === mot[i]) {
       display2[i] = "n"
     
        para.textContent = display2.join("")

    }
   
    }
    if (mot.includes("n") == false)
    {
        lives--
        testLives()
    }

    testLives()
}
function bouto() {
    for (i = 0; i<mot.length; i++)  {
    if ("o" === mot[i]) {
       display2[i] = "o"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("o") == false)
    {
        lives--
        testLives()
    }
 testLives()   
}
function boutp() {
    for (i = 0; i<mot.length; i++)  {
    if ("p" === mot[i]) {
       display2[i] = "p"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("p") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutq() {
    for (i = 0; i<mot.length; i++)  {
    if ("q" === mot[i]) {
       display2[i] = "q"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("q") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutr() {
    for (i = 0; i<mot.length; i++)  {
    if ("r" === mot[i]) {
       display2[i] = "r"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("r") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function bouts() {
    for (i = 0; i<mot.length; i++)  {
    if ("s" === mot[i]) {
       display2[i] = "s"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("s") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutt() {
    for (i = 0; i<mot.length; i++)  {
    if ("t" === mot[i]) {
       display2[i] = "t"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("t") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutu() {
    for (i = 0; i<mot.length; i++)  {
    if ("u" === mot[i]) {
       display2[i] = "u"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("u") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutv() {
    for (i = 0; i<mot.length; i++)  {
    if ("v" === mot[i]) {
       display2[i] = "v"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("v") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutw() {
    for (i = 0; i<mot.length; i++)  {
    if ("w" === mot[i]) {
       display2[i] = "w"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("w") == false)
    {
        lives--
        testLives()
    }
    testLives()
}
function boutx() {
    for (i = 0; i<mot.length; i++)  {
    if ("x" === mot[i]) {
       display2[i] = "x"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("x") == false)
    {
        lives--
        testLives()
    } 
    testLives()  
}
function bouty() {
    for (i = 0; i<mot.length; i++)  {
    if ("y" === mot[i]) {
       display2[i] = "y"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("y") == false)
    {
        lives--
        testLives()
    }   
    testLives()
}
function boutz() {
    for (i = 0; i<mot.length; i++)  {
    if ("z" === mot[i]) {
       display2[i] = "z"
     
        para.textContent = display2.join("")
    }
   
    }
    if (mot.includes("z") == false)
    {
        lives--
        testLives()
    }   
    testLives()
}

function testLives() {
    paraLives.textContent = `LIVES : ${lives}`
    image.src=`pendu${lives}.jpg`
    
if (mot === para.textContent) {
    
  
    para.textContent = "GAGNEEEEEEE"

    display2.join("") = "GAGNEEEEEEE"
    
    
    

}
else if (lives === 0)
{
    para.textContent = "LOOOOOOOOOOOOSEEEEEEEEEEEEEEEEEEEEER"
  
}
}

function dernierTest () {
    bouton.addEventListener("click", test3) 
bouton.addEventListener("click", testLives) 
boutonA.addEventListener("click", bouta ) 
boutonB.addEventListener("click", boutb ) 
boutonC.addEventListener("click", boutc ) 
boutonD.addEventListener("click", boutd ) 
boutonE.addEventListener("click", boute ) 
boutonF.addEventListener("click", boutf ) 
boutonG.addEventListener("click", boutg ) 
boutonH.addEventListener("click", bouth ) 
boutonI.addEventListener("click", bouti ) 
boutonJ.addEventListener("click", boutj ) 
boutonK.addEventListener("click", boutk ) 
boutonL.addEventListener("click", boutl ) 
boutonM.addEventListener("click", boutm ) 
boutonN.addEventListener("click", boutn ) 
boutonO.addEventListener("click", bouto ) 
boutonP.addEventListener("click", boutp ) 
boutonQ.addEventListener("click", boutq ) 
boutonR.addEventListener("click", boutr ) 
boutonS.addEventListener("click", bouts ) 
boutonT.addEventListener("click", boutt ) 
boutonU.addEventListener("click", boutu ) 
boutonV.addEventListener("click", boutv ) 
boutonW.addEventListener("click", boutw ) 
boutonX.addEventListener("click", boutx ) 
boutonY.addEventListener("click",  bouty ) 
boutonZ.addEventListener("click", boutz ) 


}

dernierTest ()


