// config/auth.js

//expose our config directly to our application using module.exports
module.exports = {
	'facebookAuth' : {
		'clientID'     : '1363662163713515', // your App ID
		'clientSecret' : '1518c4d98f997bcc2086ef95c4af761d', // your App Secret
		'callbackURL'  : 'http://localhost:8080/auth/facebook/callback'
	}
};