const zodiac_signs = 
 
    [{sign: "Capricorn",
    id: "capricorn",
    jelly: "Pinecone Tree",
    start_month: 12,
    start_day: 22,
    end_month: 1,
    end_day: 19,
    sound: "audio/cap.mp3",
    image_id: "jellies/bagel.jpg",
    image_alt: "smiling pinecone tree stuffed animal",
    description: "ambitious, disciplined, reserved"},

    {sign: "Aquarius",
    id: "aquarius",
    jelly: "Ort and Tum Acorns",
    start_month: 1,
    start_day: 20,
    end_month: 2,
    end_day: 18,
    sound: "audio/aqua.mp3",
    image_id: "jellies/acorns.jpg",
    image_alt: "2 smiling acorn stuffed animals",
    description: "unconventional, intellectual, independent"},

    {sign: "Pisces",
    id: "pisces",
    jelly: "Coral",
    start_month: 2,
    start_day: 19,
    end_month: 3,
    end_day: 20,
    sound: "audio/pisc.mp3",
    image_id: "jellies/coral.jpg",
    image_alt: "pink smiling coral stuffed animal",
    description: "empathetic, imaginative, dreamy"},

    {sign: "Aries",
    id: "aries",
    jelly: "Boiled Egg Geek",
    start_month: 3,
    start_day: 21,
    end_month: 4,
    end_day: 19,
    sound: "audio/aries.mp3",
    image_id: "jellies/egg.jpg",
    image_alt: "smiling boiled egg with glasses stuffed animal",
    description: "bold, impulsive, passionate"},

    {sign: "Taurus",
    id: "taurus",
    jelly: "Soyella Edamame Bean",
    start_month: 4,
    start_day: 20,
    end_month: 5,
    end_day: 20,
    sound: "audio/taur.mp3",
    image_id: "jellies/soyella.jpg",
    image_alt: "smiling edamame bean stuffed animal",
    description: "loyal, grounded, stubborn"},

    {sign: "Gemini",
    id: "gemini",
    jelly: "Pebble",
    start_month: 5,
    start_day: 21,
    end_month: 6,
    end_day: 20,
    sound: "audio/gem.mp3",
    image_id: "jellies/pebble.jpg",
    image_alt: "smiling pebble stuffed animal",
    description: "witty, curious, adaptable"},

    {sign: "Cancer",
    id: "cancer",
    jelly: "Sports Kettlebell",
    start_month: 6,
    start_day: 21,
    end_month: 7,
    end_day: 22,
    sound: "audio/canc.mp3",
    image_id: "jellies/kettleboard.jpg",
    image_alt: "smiling kettlebell stuffed animal",
    description: "nurturing, intuitive, sentimental"},

    {sign: "Leo",
    id: "leo",
    jelly:"Egglantine Egg on Toast",
    start_month: 7,
    start_day: 23,
    end_month: 8,
    end_day: 22,
    sound: "audio/leo.mp3",
    image_id: "jellies/eggToast.jpg",
    image_alt: "smiling egg on toast stuffed animal",
    description: "charismatic, confident, dramatic"},

    {sign: "Virgo",
    id: "virgo",
    jelly: "Bagel",
    start_month: 8,
    start_day: 23,
    end_month: 9,
    end_day: 22,
    sound: "audio/virg.mp3",
    image_id: "jellies/bagel.jpg",
    image_alt: "smiling bagel stuffed animal",
    description: "analytical, meticulous, practical"},

    {sign: "Libra",
    id: "libra",
    jelly: "Happy Raindrop",
    start_month: 9,
    start_day: 23,
    end_month: 10,
    end_day: 22,
    sound: "audio/lib.mp3",
    image_id: "jellies/raindrop.jpg",
    image_alt: "smiling blue raindrop stuffed animal",
    description: "charming, diplomatic, indecisive"},

    {sign: "Scorpio",
    id: "scorpio",
    jelly: "Space Comet",
    start_month: 10,
    start_day: 23,
    end_month: 11,
    end_day: 21,
    sound: "audio/scorp.mp3",
    image_id: "jellies/comet.jpg",
    image_alt: "smiling orange space comet stuffed animal",
    description: "intense, mysterious, magnetic"},

    {sign: "Sagittarius",
    id: "sagittarius",
    jelly: "Eggetha Egg and Lance Soldier",
    start_month: 11,
    start_day: 22,
    end_month: 12,
    end_day: 21,
    sound: "audio/sag.mp3",
    image_id: "jellies/eggetha.jpg",
    image_alt: "smiling egg and egg holder stuffed animal",
    description: "adventurous, optimistic, restless"}];

    console.log(zodiac_signs)

    function welcome() {
        console.log("Welcome, enter your birthday.");
    }
    function play_sign_sound() {
        console.log("play_sign_sound: plays selected sign's audio clip");
    }
  
    function open_help() {
        console.log("open_help: opens help page")
    }
    
    function save_last_sign() {
        console.log("save_last_sign: saves last sign")
    }




const number_of_zodiac = zodiac_signs.length

for (let i=0; i < number_of_zodiac; i++) {
    console.log(`${i+1}. ${zodiac_signs[i].sign}`)
};
  
function get_sign(month, day) {
    for (const sign of zodiac_signs) {
        if(month === sign.start_month && day >= sign.start_day || month === sign.end_month && day <= sign.end_day){
            return sign.sign;
        }
    }
    return null;
    };


const text_ul = document.querySelector('#output_text');
const date = document.querySelector('#search');
const input = document.querySelector('input#new-input');

//const text_box = document.querySelector('#text');
//zodiac_signs.forEach(jelly => {
   //console.log(jelly.textContent);
//});

//console.log(zodiac_signs[0].textContent);


zodiac_signs.forEach(zodiac => {
    const p = document.createElement('p');
    p.textContent = zodiac.jelly;
    const text = document.querySelector('#text');
    text.appendChild(p);
});




//const text = input.value;

//if (text.length > 0) {
  //  const words = document.createElement('words')
    //words.textContent = help;
//}


//function print_text(date) {
    //const text = document.querySelector('#output_text')
  //  if (date) {
      //  text.textContent = get_sign()
   // }
//}

//function add_name(name) {
    //const li = document.createElement('li')
    //li.textContent = name
   // if (list_ul) {
      //  list_ul.append(li)
   // }
   // else {

   // }
//}

//for (const name of zodiac_signs) {
    //add_name(name.sign)
//}




console.log(get_sign(5,1));
console.log(get_sign(1,27));
console.log(get_sign(12,28));
console.log(get_sign(1,2));