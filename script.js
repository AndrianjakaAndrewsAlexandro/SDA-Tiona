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
    if (section1.classList.contains("active")){
        section1.classList.remove("active");
    }
    else{
        section1.classList.add("active");
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
let listes = [
  "001_1", "002_1", "003_1", "004_1", "005_1", "006_1", "007_1", "008_1", "009_1", "009_2",
  "010_1", "011_1", "011_2", "012_1", "012_2", "013_1", "013_2", "014_1", "015_1", "016_1",
  "017_1", "018_1", "019_1", "020_1", "021_1", "022_1", "023_1", "024_1", "024_2", "025_1",
  "025_2", "026_1", "027_1", "028_1", "029_1", "030_1", "031_1", "032_1", "033_1", "034_1",
  "035_1", "036_1", "037_1", "038_1", "039_1", "039_2", "040_1", "043_1", "044_1", "045_1",
  "045_2", "047_1", "048_1", "049_1", "050_1", "051_1", "052_1", "052_2", "053_1", "053_2",
  "054_1", "054_2", "055_1", "056_1", "056_2", "057_1", "058_1", "059_1", "060_1", "061_1",
  "062_1", "063_1", "064_1", "065_1", "066_1", "067_1", "068_1", "069_1", "070_1", "071_1",
  "072_1", "073_1", "074_1", "075_1", "075_2", "076_1", "077_1", "078_1", "079_1", "080_1",
  "081_1", "082_1", "083_1", "084_1", "085_1", "086_1", "087_1", "088_1", "089_1", "090_1",
  "091_1", "092_1", "093_1", "094_1", "094_2", "095_1", "096_1", "097_1", "098_1", "099_1",
  "099_2", "100_1", "101_1", "102_1", "103_1", "104_1", "105_1", "106_1", "106_2", "107_1",
  "108_1", "109_1", "110_1", "110_2", "111_1", "112_1", "112_2", "113_1", "114_1", "115_1",
  "116_1", "117_1", "118_1", "118_2", "119_1", "120_1", "121_1", "122_1", "123_1", "123_2",
  "124_1", "125_1", "126_1", "127_1", "128_1", "129_1", "130_1", "131_1", "132_1", "133_1",
  "134_1", "135_1", "136_1", "137_1", "139_1", "140_1", "141_1", "141_2", "142_1", "143_1",
  "144_1", "145_1", "146_1", "147_1", "148_1", "148_2", "149_1", "149_2", "150_1", "151_1",
  "152_1", "153_1", "154_1", "155_1", "156_1", "157_1", "158_1","159_1", "159_2", "160_1", 
  "160_2", "161_1", "162_1", "162_2", "163_1", "164_1", "164_2", "165_1", "166_1", "167_1", 
  "168_1", "169_1", "169_2", "170_1", "171_1", "171_2", "172_1", "173_1", "173_2", "174_1", 
  "175_1", "176_1", "177_1", "178_1", "179_1", "180_1", "181_1", "182_1", "183_1", "184_1", 
  "185_1", "186_1", "187_1", "188_1", "189_1", "189_2", "190_1", "191_1", "192_1", "193_1", 
  "194_1", "194_2", "195_1", "196_1", "197_1", "197_2", "198_1", "199_1", "200_1", "200_2",
  "201_1", "202_1", "203_1", "204_1", "205_1", "206_1", "207_1", "208_1", "209_1", "210_1", 
  "211_1", "212_1", "213_1", "214_1" 
];


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
    
});







