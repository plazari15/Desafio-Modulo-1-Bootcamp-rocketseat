const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    return response.status(200).send({message : "Seja bem vindo"})
})

module.exports = router;