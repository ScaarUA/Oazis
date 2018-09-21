const fs = require('fs');

const envContent = `
	MONGO_USERNAME=${process.env.MONGO_USERNAME}	
	MONGO_PASSWORD=${process.env.MONGO_PASSWORD}	
`;

fs.writeFile('.env', envContent, function (err) {
	if (err) throw err;
	console.log('Saved env file');
});