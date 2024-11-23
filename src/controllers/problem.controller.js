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

async function getProblem(req,res){
    try {
        // throw new NotImplemented('addProblem');
        const response = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Successfully fetched problem with id',
            error:{},
            data:response
        })
    } catch (error) {
        next(error);
    }
}

async function getProblems(req,res,next){
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Successfully fetched all the problems',
            error:{},
            data:response
        });
        // throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

async function deleteProblem(req,res,next){
    try {
        const response = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Successfully deleted the problem with id',
            error:{},
            data:response
        })
        // throw new NotImplemented('addProblem');
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