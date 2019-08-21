const express = require('express');

const ProjectsController = require('../Controllers/ProjectsController');

const { checkProjectsMiddleware } = require('../Middleware');

const router = express.Router();

router.get('/', (request, response) => {
    return response.status(200).send({message : "Seja bem vindo"})
});

router.get('/projects', ProjectsController.index);
router.get('/projects/:id', checkProjectsMiddleware, ProjectsController.show);
router.post('/projects', ProjectsController.store);
router.put('/projects/:id', checkProjectsMiddleware, ProjectsController.edit);
router.delete('/projects/:id', checkProjectsMiddleware, ProjectsController.destroy);
router.post('/projects/:id/tasks', checkProjectsMiddleware, ProjectsController.postTask);
module.exports = router;