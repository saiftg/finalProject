var express = require('express');
var router = express.Router();


var config = require('../config/config');
var request_module = require('request');
var mysql = require('mysql');

var randToken = require('rand-token');
var bcrypt = require('bcrypt-nodejs');
/* GET home page. */


var connection = mysql.createConnection(config)
connection.connect();



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/login', (req,res,next)=>{
	console.log(req.body);
	console.log("check for req.sexybody");

	const email = req.body.email;
	const password = req.body.password;

	const checkLoginQuery = `SELECT * FROM users
	WHERE users.email = ?`;

	connection.query(checkLoginQuery, [email], (error, results)=>{
		if (error){
			throw error;
		}
		if (results.length === 0){
			res.json({
				msg: "badUsrMofo"
			})
		}else{
			const checkHash = bcrypt.compareSync(password, results[0].password)
			// const name = results[0].name;

			if(checkHash){
				const newToken = randToken.uid(100);
				const updateToken = `UPDATE users SET token = ?
									WHERE email = ?`;
				connection.query(updateToken, [newToken, email],(error)=>{
					if (error){
						throw error;
					}else{
						res.json({
							msg: "successss",
							token: newToken,
							name: results[0].name, 
							email: results[0].email,
							phone: results[0].phone,
							city: results[0].city,
							state: results[0].state,
							zipcode: results[0].zip_code,
							insurance: results[0].insurance,
						})
					}
				})
			}else{
				res.json({
					msg: "wrongPassword"
				})
			}
		}
	})


});

router.post('/register', function(req,res,next){
	const userData = req.body;
	let name = userData.name;
	let email = userData.email;
	let password = userData.p
	const selectQuery = "SELECT * FROM users WHERE email = ?;";
	connection.query(selectQuery,[email],(error,results)=>{
		if(results.length != 0){
			console.log("EMAIL REG ALREADY");
			

		}else{
			const hash = bcrypt.hashSync(password);
			const token = randToken.uid(60);

			const insertQuery = `INSERT INTO users 
			(name, email, password, city, state, zip_code, phone, insurance, token) 
			VALUES (?,?,?,?,?,?,?,?);`;
		

		connection.query(insertUsers,[name,email,hash,city, state, zipcode, phone, insurance, token],(error,results)=>{
	 			if(error){
	 				throw error;
	 			}else{
	 				res.json({
	 					token: token,
	 					name: userData.name,
	 					msg: 'successss'
	 			})
	 		}
	 	})
	}

})





});







module.exports = router;
