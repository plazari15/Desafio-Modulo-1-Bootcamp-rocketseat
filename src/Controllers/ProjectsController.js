const arrProjects = [
    {
        id : 1,
        title: "Novo Projeto",
        tasks: []
    }
]

function index(request, response) {
    return response.status(200)
        .send(arrProjects);    
}

function show(request, response) {
    const {id} = request.params;

    const project = arrProjects.find(p => p.id == id);

    return response.status(200)
    .send(project);
}

function store(request, response) {
    const {id, title } = request.body;
    
    const newArray = {
        id,
        title, 
        tasks: []
    }

    //Buscar um projeto com este id
    const project = arrProjects.find(p => p.id == newArray.id); 

    console.log(project);

    if(project > -1){
        newArray.id = newArray.id + (project + 1)
    }
    arrProjects.push(newArray);

    return response.status(201)
    .json(arrProjects);
}

function edit(request, response) {
    const { id } = request.params;

    const {title } = request.body;

    const projectToUpdate = arrProjects.find(project => project.id == id);

    projectToUpdate.title = title;

    return response.status(200)
        .json(projectToUpdate);
}

function destroy(request, response) {

    const {id} = request.params;

    const projectToDelete = arrProjects.findIndex(project => project.id == id);

    arrProjects.splice(projectToDelete);
    
    return response.status(200)
        .json(arrProjects);

}

function postTask(request, response) {
    const {id } = request.params;

    const { title } = request.body;

    const arrProject = arrProjects.find(project => project.id == id);

    arrProject.tasks.push(title);

    return response.status(200)
        .json(arrProjects);
}

module.exports = {
    index,
    show,
    store,
    edit,
    destroy,
    postTask,
    arrProjects
};