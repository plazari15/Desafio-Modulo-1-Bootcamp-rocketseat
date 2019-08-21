// const express = require('express');

// const Middleware = express.Middleware();

const { arrProjects } = require('../Controllers/ProjectsController');

let countTotalCalls = 0;

function MiddlewareGeneral(req, resp, next){
    countTotalCalls++;

    console.log(`Até o momento foram feitas ${countTotalCalls} requisições`);

    return next();
}

function checkProjectsMiddleware(req, resp, next) {
    const {id} = req.params;

    const proj = arrProjects.findIndex(project => project.id == id);

    if(proj < 0){
        return resp.status(404)
            .send({error: 'This project was not found'});
    }

    return next();

}

function checkIfExistsMiddleware(req, resp, next) {
    const {id} = req.body;

    const proj = arrProjects.findIndex(project => project.id == id);

    if(proj > 0){
        return resp.status(400)
            .send({error: `This ID ${id} already exists`});
    }

    return next();

}


module.exports = {
    MiddlewareGeneral,
    checkProjectsMiddleware,
    checkIfExistsMiddleware
};