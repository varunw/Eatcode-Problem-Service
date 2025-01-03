const logger = require("../config/logger.config");
const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models");

class ProblemRepository{
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title:problemData.title,
                description:problemData.description,
                codeStubs:problemData.codeStubs,
                testCases:(problemData.testCases) ? problemData.testCases : []
            });

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFound("Problem",id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            // const problemTobedeleted = await Problem.findById(id);
            const problem = await Problem.findByIdAndDelete(id);
            if(!problem){
                logger.error(`Problem with id ${id} not found in db`)
                throw new NotFound("Problem",id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id,updatedProblemData){
        try {
            const problemToBeUpdated = await Problem.updateOne({_id:id},updatedProblemData);
            if(!problemToBeUpdated){
                throw new NotFound("Problem",id);
            }
            return problemToBeUpdated;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;