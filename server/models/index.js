const { db } = require('./index');

module.exports = {
	models: {
	  Place,
	  Hotel,
	  Activity,
	  Restaurant
	}
}

const Place = db.define('places', {
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.BIGINT,
	},
	location: {
		type: Sequelize.RANGE(Sequelize.DECIMAL)
	}
})

const Hotel = db.define('hotels', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars: {
		type: Sequelize.FLOAT(1,5)
	},
	amenities: {
	  type: Sequelize.ARRAY(Sequelize.STRING),
  	  set: function(amenities) {
	    this.setDataValue('amenities', amenities.split(', '))
  	  },
  	  defaultValue: []
	}
})

const Activity = db.define('activities', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	age_range: {
		type: Sequelize.RANGE(Sequelize.BIGINT)
	}
})

const Restaurant = db.define('restaurants', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: {
	  type: Sequelize.ARRAY(Sequelize.STRING),
  	  set: function(cuisine) {
	    this.setDataValue('cuisine', cuisine.split(', '))
  	  },
  	  defaultValue: []
	},
	price: {
		type: Sequelize.INTEGER
	}
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

