const express = require('express');

const ProjectsController = require('../Controllers/ProjectsController');

const router = express.Router();

router.get('/', (request, response) => {
    return response.status(200).send({message : "Seja bem vindo"})
});

router.get('/projects', ProjectsController.index);
router.post('/projects', ProjectsController.store);
router.put('/projects/:id', ProjectsController.edit);
router.delete('/projects/:id', ProjectsController.destroy);
module.exports = router;