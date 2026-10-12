const first_name = 'Evie'
const last_name = 'Seetoo'
const age = 40;
const greeting = 'Hello, ${first_name} ${last_name} (${age}).'
const is_adult = age >= 18
const hobbies = ['coding',
    'sailing',
    'swimming']

const profile = {
    age,
    first_name,
    hobbies,
    is_adult
}
console.log(profile)
console.log(`${profile.first_name} is an adult: ${profile.is_adult}`)

const default_tip_rate = 0.18;

function calc_tip(amount, rate = default_tip_rate) {
    return amount * rate;
}

function calc_total(amount, rate = default_tip_rate) {
    const tip = calc_tip(amount, rate)
    return tip + amount;
}

console.log(calc_total(50, 0.25))


