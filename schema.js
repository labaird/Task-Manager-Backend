const { gql } = require("apollo-server");

module.exports = {
    typeDefs : gql`
        type Task {
            id: ID
            desc: String
            isComplete: Boolean
        }
        
        type List {
           id: ID
           title: String
        }
        
        type Query {
            getTasks: [Task]
            getLists: [List]
        }
        
        type Mutation {
            addTask(desc: String, isComplete: Boolean): Task!
            updateTaskStatus(id: ID, newStatus: Boolean): Task!
            updateTaskDescription(id: ID, newDescription): Task!
            deleteTask(id: ID): Task!
        }
    `
};

