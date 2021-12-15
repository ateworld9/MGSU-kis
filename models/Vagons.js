import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Vagons extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        type: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        modelNumber: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        length: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        width: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        height: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        imgPath: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        frameMaterial: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'Vagons',
        schema: 'dbo',
        timestamps: false,
        indexes: [
          {
            name: 'PK__Vagons__3213E83F1820B72A',
            unique: true,
            fields: [{ name: 'id' }],
          },
        ],
      }
    );
  }
}
