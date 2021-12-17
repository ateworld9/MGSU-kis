import _sequelize from 'sequelize';
const DataTypes = _sequelize.DataTypes;
import _Orders from './Orders.js';
import _Vagons from './Vagons.js';

export default function initModels(sequelize) {
  const Orders = _Orders.init(sequelize, DataTypes);
  const Vagons = _Vagons.init(sequelize, DataTypes);

  Orders.belongsTo(Vagons, { as: 'Vagons', foreignKey: 'vagon_id' });
  Vagons.hasMany(Orders, { as: 'Orders', foreignKey: 'vagon_id' });

  return {
    Orders,
    Vagons,
  };
}
