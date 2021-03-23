const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require('path');

// const pdf = fs.createReadStream('./CPerez_Resume.pdf');

// app.get('/download', (req, res) => {
// 	res.setHeader('Content-Type', 'application/pdf');
// 	res.setHeader(
// 		'Content-Disposition',
// 		'attachment; filename=DeveloperResFINALReactNot.pdf'
// 	);
// 	pdf.pipe(res);
// });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
