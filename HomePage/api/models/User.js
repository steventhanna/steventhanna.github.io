/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	adapter: 'mongo',

	attributes: {
		adminAccount: {
			model: 'Admin'
		},
		clientAccount: {
			model: 'Client'
		}

		uid: {
			type: 'integer',
			unique: true
		},
		email: {
			type: 'email',
			unique: true,
			required: true
		},
		password: 'string',
		username: {
			type: 'string',
			required: true;
			unique: true
		}

  }
};

