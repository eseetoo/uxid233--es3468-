console.log('hello world');

const zodiac_signs = 
 
    [{sign: "Capricorn",
    start_month: 12,
    start_day: 22,
    end_month: 1,
    end_day: 19,
    sound: "audio/cap.mp3",
    image: "image/cap.png",
    description: "ambitious, disciplined, reserved"},

    {sign: "Aquarius",
    start_month: 1,
    start_day: 20,
    end_month: 2,
    end_day: 18,
    sound: "audio/aqua.mp3",
    image: "image/aqua.png",
    description: "unconventional, intellectual, independent"},

    {sign: "Pisces",
    start_month: 2,
    start_day: 19,
    end_month: 3,
    end_day: 20,
    sound: "audio/pisc.mp3",
    image: "image/pisc.png",
    description: "empathetic, imaginative, dreamy"},

    {sign: "Aries",
    start_month: 3,
    start_day: 21,
    end_month: 4,
    end_day: 19,
    sound: "audio/aries.mp3",
    image: "image/aries.png",
    description: "bold, impulsive, passionate"},

    {sign: "Taurus",
    start_month: 2,
    start_day: 20,
    end_month: 5,
    end_day: 20,
    sound: "audio/taur.mp3",
    image: "image/taur.png",
    description: "loyal, grounded, stubborn"},

    {sign: "Gemini",
    start_month: 5,
    start_day: 21,
    end_month: 6,
    end_day: 20,
    sound: "audio/gem.mp3",
    image: "image/gem.png",
    description: "witty, curious, adaptable"},

    {sign: "Cancer",
    start_month: 6,
    start_day: 21,
    end_month: 7,
    end_day: 22,
    sound: "audio/canc.mp3",
    image: "image/canc.png",
    description: "nurturing, intuitive, sentimental"},

    {sign: "Leo",
    start_month: 7,
    start_day: 23,
    end_month: 8,
    end_day: 22,
    sound: "audio/leo.mp3",
    image: "image/leo.png",
    description: "charismatic, confident, dramatic"},

    {sign: "Virgo",
    start_month: 8,
    start_day: 23,
    end_month: 9,
    end_day: 22,
    sound: "audio/virg.mp3",
    image: "image/virg.png",
    description: "analytical ,meticulous, practical"},

    {sign: "Libra",
    start_month: 9,
    start_day: 23,
    end_month: 10,
    end_day: 22,
    sound: "audio/lib.mp3",
    image: "image/lib.png",
    description: "charming, diplomatic, indecisive"},

    {sign: "Scorpio",
    start_month: 10,
    start_day: 23,
    end_month: 11,
    end_day: 21,
    sound: "audio/scorp.mp3",
    image: "image/scorp.png",
    description: "intense, mysterious, magnetic"},

    {sign: "Sagittarius",
    start_month: 11,
    start_day: 22,
    end_month: 12,
    end_day: 21,
    sound: "audio/sag.mp3",
    image: "image/sag.png",
    description: "adventurous, optimistic, restless"}];

    console.log(zodiac_signs)

    function welcome() {
        console.log("Welcome, enter your birthday.");
    }
    function play_sign_sound() {
        console.log("play_sign_sound: plays selected sign's audio clip");
    }
    function find_sign() {
        console.log("find_sign: finds user's sign based off of date")
    }
    function display_sign() {
        console.log("display_sign: displays user's sign")
    }
    function open_help() {
        console.log("open_help: opens help page")
    }
    function save_last_sign() {
        console.log("save_last_sign: saves last sign")
    }

welcome()
play_sign_sound()
find_sign()
display_sign()
open_help()
save_last_sign()
  

