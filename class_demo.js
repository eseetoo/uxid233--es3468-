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


const students = [
    {name: 'meow' , score: 10}
    {name: 'bob' , score: 99}
]

function grade_for(score)

    if (score >=90) {
        return 'A'
    }
    else if (score >=80) {
        return 'B'
    }
    else {
        return 'womp'
    }

    console.log(grade_for(80))

for (const student of students) {
    const letter = grade_for(student.score)
    console.log(letter)
}

const number_of_students = students.length
for (let i =0; i < number_of_students; i++ ) {
    console.log(students[i=1])
}

for (const sign_name in zodiac_signs) {
    if zodiac_sign[sign.name].element === 'Air' {
        console.log('air sign: ${sign_name}')
    }
    
}