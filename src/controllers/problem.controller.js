const NotImplemented = require("../errors/notimplemented.error");

function pingProblemController(req,res){
    return res.json({message:"Ping Problem Controller"});
}

function addProblem(req,res,next){
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req,res){

}

function getProblems(req,res){

}

function deleteProblem(req,res){

}

function updateProblem(req,res){

}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}