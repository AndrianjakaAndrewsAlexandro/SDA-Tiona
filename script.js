// Code Javascript


// Création des objets
const un = document.getElementById("1");
const deux = document.getElementById("2");
const trois = document.getElementById("3");
const quatre = document.getElementById("4");
const cinq = document.getElementById("5");
const six = document.getElementById("6");
const sept = document.getElementById("7");
const huit = document.getElementById("8");
const neuf = document.getElementById("9");
const backspace = document.getElementById("clean");
const zero = document.getElementById("0");
const ok = document.getElementById("confirm");

const entree = document.getElementById("entree");
const form = document.getElementById("form");
const dialpad = document.getElementById("dialpad");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3"); 

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");



// règle d'affichage du clavier numérique
dialpad.addEventListener("click", function(){
    if (form.classList.contains("active")){
        form.classList.remove("active");
    }
    else{
        form.classList.add("active");
    }
    
});




// Règle d'entrée du numéro de chant
if ((entree.value.length) < 3){
    un.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "1";
        };
    });
    deux.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "2";
        };
    });
    trois.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "3";
        };
    });
    quatre.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "4";
        };
    });
    cinq.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "5";
        };
    });
    six.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "6";
        };
    });
    sept.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "7";
        };
    });
    huit.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "8";
        };
    });
    neuf.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "9";
        };
    });
    backspace.addEventListener("click", function(){
        entree.value = ""
    });
    zero.addEventListener("click", function(){
        if ((entree.value.length) < 3){
            entree.value += "0";
        };
    });
};

// la liste des chansons existantes
let listes = ["001_1", "009_1", "009_2"];


// Règle de valisation du numéro de chant
ok.addEventListener("click", function(){
    if (entree.value.length < 2){
        entree.value  = "00" + entree.value;
    };
    if (entree.value.length < 3){
        entree.value = "0" + entree.value;
    };

    console.log(entree.value);


    pk1 = "TIONA/" + entree.value + "_1.jpg";
    pk2 = "TIONA/" + entree.value + "_2.jpg";
    pk3 = "TIONA/" + entree.value + "_3.jpg";
                        
    
    if (listes.includes(entree.value + "_1")){
        img1.src= pk1;
    }
    else{
        alert("Miala tsiny fa tsy ato anaty base de donnée ny hira izay tadiavinareo tompoko")
    }

    if (listes.includes(entree.value + "_2")){
        img2.src= pk2;
    }

    if (listes.includes(entree.value + "_3")){
        img3.src= pk3;
    }
    
    section2.classList.add("active");
    section1.classList.add("active");
    
});