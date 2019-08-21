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

function store(request, response) {
    const {id, title } = request.body;
    
    const newArray = {
        id,
        title, 
        tasks: []
    }

    arrProjects.push(newArray);

    return response.status(201)
    .json(arrProjects);
}

module.exports = {
    index,
    store
};