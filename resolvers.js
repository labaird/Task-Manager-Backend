const { tasks } = require('./tasksDataSource');
const { lists } = require('./listsDataSource');

module.exports = {
    resolvers: {
        Query: {
            getTasks: () => tasks,
            getLists: () => lists,
        }
    }
};
