exports.handler = function (event, contect, callback) {
    callback(null, {
        statusCode: 200,
        body: "Welcome to the super secret area"
    })
}