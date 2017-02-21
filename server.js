var express = require('express');
var path = require('path');

var app = express();

//ROTTA PRINCIPALE CHE SERVE LA INDEX
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

//ROTTA UTENTI CHE SERVE LA LISTA UTENTI CON UN JSON
app.get('/utenti', function (req, res) {
	res.json({
		"utenti": [{
			"nome": "Paolo",
			"cognome": "Calvaresi"
		}, {
			"nome": "Michele",
			"cognome": "Domesi"
		}]
	});
});

//SEND STATUS 404 ESEMPIO RISORSA NON TROVATA
app.get('/404', function (req, res) {
	res.status(404).send("ERRORE 404 : RISORSA NON TROVATA");
});

//REINDIRIZZAMENTO
app.get('/google', function (req, res) {
	res.redirect("https://www.google.it");
});

//APERTURA FILE
app.get('/open', function (req, res) {
	res.sendFile(path.join(__dirname + '/brochure.pdf'));
});

//DOWNLOAD FILE
app.get('/download', function (req, res) {
	res.download(path.join(__dirname + '/brochure.pdf'));
});

//AVVIO DEL SERVER ALLA PORTA 3000
app.listen(3000, function () {
	console.log('Listening alla porta 3000');
});