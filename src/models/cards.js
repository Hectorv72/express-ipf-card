'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      cards.belongsTo(models.students, {
        as: 'students',
        foreignKey: 'student_id'
      });
    }
  }
  cards.init({
    birth_date: DataTypes.DATE,
    sex: DataTypes.CHAR,
    phone: DataTypes.STRING,
    about: DataTypes.TEXT,
    knowledges: DataTypes.STRING,
    social: DataTypes.TEXT,
    academic: DataTypes.TEXT,
    profile_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cards'
  });
  return cards;
};
