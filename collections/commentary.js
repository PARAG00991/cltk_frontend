this.Commentary = new Meteor.Collection('commentary');

Schemas.Commentary = new SimpleSchema({
	author: {
		type: String,
		max: 60,
	},
	year: {
		type: String,
		max: 60,
	},
	ref: {
		type: String,
		max: 60,
	},
	content: {
		type: String,
	},
	work: {
		type: String,
		max: 60,
	},

	createdAt: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isInsert) {
				return new Date();
			}
			return null;
		},
		autoform: {
			type: 'hidden',
			label: false,
		},
	},
	updatedAt: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isUpdate) {
				return new Date();
			}
			return null;
		},
		autoform: {
			type: 'hidden',
			label: false,
		},
	},


});

Commentary.attachSchema(Schemas.Commentary);
