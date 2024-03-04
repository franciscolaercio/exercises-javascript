const dayjs = require("dayjs")

function birthday(date) {
    const today = dayjs()
    const ageInYears = today.diff(date, 'year')
    const nextBirthday = dayjs(date).add(ageInYears + 1, 'year')
    const daysToNextBirthday = dayjs(nextBirthday).diff(today, 'days') + 1

    console.log(`Idade: ${ageInYears}`)
    console.log(`Próxima data de aniversário: ${dayjs(nextBirthday).format('DD/MM/YYYY')}`)
    console.log(`Dias para o próximo aniversário: ${daysToNextBirthday}`)
}

console.log(birthday('2000-12-31'))