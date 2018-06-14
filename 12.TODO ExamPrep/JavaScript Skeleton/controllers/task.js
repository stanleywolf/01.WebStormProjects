const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
        Task.find().then(tasks => {
            res.render('task/index', {'tasks': tasks});
        });
    },

	createGet: (req, res) => {
        res.render('task/create');
	},

	createPost: (req, res) => {
    	if(!req.body.title || !req.body.comments){
    		return res.redirect('/create');
		}

        Task.create({
            title:req.body.title,
            comments:req.body.comments
		}).then(task =>{
			res.redirect('/');
		});
	},

	deleteGet: (req, res) => {
    	Task.findById(req.params.id).then(task => {
    		if(!task){
    			return res.redirect('/');
			}
    		res.render('task/delete',task);
		});
	},

	deletePost: (req, res) => {
        Task.findByIdAndRemove(req.params.id).then(task =>{
        	res.redirect('/');
		}).catch(err =>{
			console.log(err);
			return res.redirect('/');
		});
	}
};