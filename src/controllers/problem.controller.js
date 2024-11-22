const NotImplemented = require("../errors/notimplemented.error");
const {ProblemService} = require('../services');
const {ProblemRepository} = require('../repositories');
const { StatusCodes } = require("http-status-codes");


const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
    return res.json({message:"Ping Problem Controller"});
}

async function addProblem(req,res,next){
    try {
        // throw new NotImplemented('addProblem');
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'Succesfully Created a new problem ',
            error:{},
            data:newProblem
            
        })
    } catch (error) {
        next(error);
    }
}

function getProblem(req,res){
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req,res){
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req,res){
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req,res){
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}