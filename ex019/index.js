const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do post", "...", john)
post.addComments("Fernando", "Muito bom!")
post.addComments("Lucas", "Interessante.")

console.log(john)
console.log(post)