const Project = require('../models/Project');

module.exports = {
    index: (req, res) => {
        Project.find().then(projects => {
            return res.render('project/index', {'projects': projects});
        }).catch(err => {
            return res.send("error");
        });
    },
    createGet: (req, res) => {
        res.render('project/create');
    },
    createPost: (req, res) => {
        let project = req.body;
        Project.create(project).then(project => {
            res.redirect("/");
        }).catch(err => {
            project.error = 'Cannot create film.';
            res.render('project/create', project);
        });
    },
    editGet: (req, res) => {
        let project = req.params.id;
        Project.findById(project).then(project => {
            if (project) {
                res.render('project/edit', project );
            }
            else {
                res.redirect('/');
            }
        }).catch(err => res.redirect('/'));
    },
    editPost: (req, res) => {
        let projectId = req.params.id;
        let project = req.body;

        Project.findByIdAndUpdate(projectId, project, {runValidators: true}).then(project => {
            res.redirect("/");
        }).catch(err => {
            project.id = projectId;
            project.error = "Cannot edit film.";
            return res.render("project/edit", project);
        });
    },
    deleteGet: (req, res) => {
        let id = req.params.id;
        Project.findById(id).then(project => {
            if (project) {
                return res.render('project/delete', project);
            }
            else {
                return res.redirect('/');
            }
        }).catch(err => res.redirect('/'));
    },
    deletePost: (req, res) => {
        let id = req.params.id;
        Project.findByIdAndRemove(id).then(data => {
            res.redirect('/');
        }).catch(err => res.redirect('/'));
    }
};