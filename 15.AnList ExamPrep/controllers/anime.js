const Anime = require('../models/Anime');

module.exports = {
	index: (req, res) => {
        Anime.find().then(animes =>{
        	return res.render('anime/index',{'animes':animes});
		});
	},
	createGet: (req, res) => {
       res.render('anime/create');
	},
	createPost: (req, res) => {
        let anime = req.body;
        Anime.create(anime).then(anime =>{
        	res.redirect("/");
		});
	},
	deleteGet: (req, res) => {
        let id = req.params.id;
        Anime.findById(id).then(anime =>{
        	return res.render('anime/delete',anime);
		});
	},
	deletePost: (req, res) => {
        let id = req.params.id;
        Anime.findByIdAndRemove(id).then(anime =>{
        	res.redirect('/');
		});
	}
};