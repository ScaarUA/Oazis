const fs = require('fs');

const envContent = `
	MONGO_USERNAME=${process.env.MONGO_USERNAME}
	MONGO_PASSWORD=${process.env.MONGO_PASSWORD}
	SESSION_SECRET=${process.env.SESSION_SECRET}
	NODE_ENV=${process.env.MODE}
`;

fs.writeFile('.env', envContent, function (err) {
	if (err) throw err;
	console.log('Saved env file');
});