var express = require('express');
var app = express();
var Queue = require('./queue-es6');
var bodyParser = require('body-parser');
var failedMessageQueue = new Queue();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-message', function (req, res) {

	console.log('Message received from: ' + req.body.from + ' to '+ req.body.to  + ' with message '+ req.body.message);

	// try to send the message

	sendMessage(req.body)
		.then(function() {
			console.log("SUCCESS: " + msg.message);
			res.send('OK!')
		}, function(msg) {
			console.log('FAILURE: ' + msg.message);
			failedMessageQueue.add(msg);
			// trigger failure protocol
			triggerFailureProtocol();
			// send failure back
			res.status(500).send('Not OK!')
		});


	// for simplicity adding all functions inline

	function sendMessage(message) {
		return new Promise(function(resolve, reject) {
			// randomize successes and failures
			if(Math.random() < 0.8) {
				resolve(message)
			} else {
				reject(message);
			}
		});
	}

	function triggerFailureProtocol() {
		var msg = failedMessageQueue.front();
		sendMessage(msg)
			.then(function() {
				console.log("FP SUCCESS: " + msg.message);
				failedMessageQueue.remove();
			}, function(msg) {
				console.log('FP FAILURE: ' + msg.message);
				//retry failure protocol
				triggerFailureProtocol();
			});
	}

});

app.listen(3000, function () {
	console.log('Chat Application listening on port 3000!')
});