const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService{
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){


        try {
                    // Sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);

            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem = await this.problemRepository.getProblem(id);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            const problem = await this.problemRepository.deleteProblem(id);
            return problem
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;