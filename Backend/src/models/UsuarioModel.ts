import { Model, DataTypes, Sequelize } from 'sequelize';
import { Models } from '../database/models';

export class UsuarioModel extends Model {
  /* Coloque aqui suas entidades. Use o exemplo a
  seguir para criar suas próprias entidades */

  public idUsuario!: string;
  public name!: string;
  public email!: string;
  public senha!: string;

  static initialization(db: Sequelize) {
    this.init(
      {
        idUsuario: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        senha: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },

      {
        sequelize: db,
        modelName: 'Usuario', // O nome da tabela
      },
    );
  }

  /* Coloque aqui suas associações */

  static association(models: Models) {
    this.belongsTo(models.cliente, {
      as: 'clientes',
      foreignKey: {
        field: 'idUsuario',
        name: 'idUsuario',
      },
    });
  }
}
