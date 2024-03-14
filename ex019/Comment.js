class Comment {
    constructor(username ,content) {
        this.username = username
        this.comments = content
        this.createdAt = new Date()
    }
}

module.exports = Comment