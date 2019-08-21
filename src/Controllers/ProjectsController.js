const arrProject = [
    {
        id : 1,
        title: "Novo Projeto",
        tasks: []
    }
]

function index(request, response) {
    return response.status(200)
        .send(arrProject);    
}

module.exports = {
    index
};