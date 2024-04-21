const App = require("./App");

App.createUser('Ruan Borges', 'ruan@email.com')
App.createUser('Maria Eduarda', 'maria@email.com')
App.createUser('Lucas Moura', 'lucas@email.com')

App.deposit('ruan@email.com', 200)
App.deposit('maria@email.com', 700)

App.transfer('maria@email.com', 'ruan@email.com', 200)

App.changeLoanFee(10)
App.takeLoan('lucas@email.com', 2000, 24)

console.log(App.findUser('ruan@email.com'))
console.log(App.findUser('ruan@email.com').account)
console.log(App.findUser('maria@email.com'))
console.log(App.findUser('maria@email.com').account)
console.log(App.findUser('lucas@email.com'))
console.log(App.findUser('lucas@email.com').account)
console.log(App.findUser('lucas@email.com').account.loans[0].installments)