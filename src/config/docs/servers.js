const url = process.env.SERVER_URL || "http://localhost:3000"

module.exports = {
    servers:[
        {
            url:url,
            description:"Local server"
        },
    ]
}
