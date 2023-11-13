import { Model, DataTypes, Sequelize } from 'sequelize';
import { Models } from '../database/models';

export class ClienteModel extends Model {
  /* Coloque aqui suas entidades. Use o exemplo a
  seguir para criar suas próprias entidades */

  public idCliente!: string;
  public name!: string;
  public readonly identificacao!: string;
  public nome_fantasia?: string;
  public nome_mae?: string;
  public inscricao_municipal?: string;
  public inscricao_estadual?: string;
  public data_cadastro!: Date;
  public situacao!: string;

  public idUsuario!: string;

  static initialization(db: Sequelize) {
    this.init(
      {
        idCliente: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        identificacao: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nome_fantasia: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        nome_mae: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        inscricao_municipal: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        inscricao_estadual: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        data_cadastro: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        situacao: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        idUsuario: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },

      {
        sequelize: db,
        modelName: 'Clientes', // O nome da tabela
      },
    );
  }

  /* Coloque aqui suas associações */

  static association(models: Models) {
    this.hasMany(models.usuario, {
      as: 'usuario',
      foreignKey: {
        field: 'idUsuario',
        name: 'idUsuario',
      },
    });

    this.belongsTo(models.endereco, {
      as: 'endereco',
      foreignKey: {
        field: 'idCliente',
        name: 'idCliente',
      },
    });

    this.belongsTo(models.telefone, {
      as: 'telefone',
      foreignKey: {
        field: 'idCliente',
        name: 'idCliente',
      },
    });

    this.belongsTo(models.email, {
      as: 'email',
      foreignKey: {
        field: 'idCliente',
        name: 'idCliente',
      },
    });
  }
}
