const auth = async (req, res, next) => {
	if (req.headers["x-api-key"] === process.env.API_KEY) {
		next()
	} else {
		res.status(401).send({ error : "Nope! You don't know how beautiful James is"})
	}
}

module.exports = auth