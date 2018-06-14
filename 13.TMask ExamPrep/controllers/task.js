const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
        //       let taskPromises = [Task.find({status: "Open"}),
//            Task.find({status: "InProgress"}),
//            Task.find({status: "Finished"}),
//            Task.find({status: "Open"})]

        Task.find().then(tasks => {
            res.render('task/index', {
                'inProgressTasks': tasks.filter(t => t.status === "In Progress"),
                'openTasks': tasks.filter(t => t.status === "Open"),
                'finishedTasks': tasks.filter(t => t.status === "Finished"),
            })
        });
    },
    createGet: (req, res) => {
        res.render('task/create');
    },
    createPost: (req, res) => {
        let task = req.body;

        Task.create(task).then(task => {
            res.redirect('/');
        });
    },
    editGet: (req, res) => {
        let id = req.params.id;

        Task.findById(id).then(task => {
            res.render('task/edit', task);
        });
    },
    editPost: (req, res) => {
        let id = req.params.id;
        let task = req.body;

        Task.findByIdAndUpdate(id, task).then(task => {
            res.redirect('/');
            }
        );
    }
};