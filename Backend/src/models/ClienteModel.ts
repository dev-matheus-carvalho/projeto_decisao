import { Model, DataTypes, Sequelize } from 'sequelize';
import { Models } from '../database/models';
import { EnderecoInterface } from '../interfaces/EnderecoInterface';
import { TelefoneInterace } from '../interfaces/TelefoneInterface';
import { EmailInterface } from '../interfaces/EmailInterface';

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
  public endereco!: Array<EnderecoInterface>;
  public telefone!: Array<TelefoneInterace>;
  public email!: Array<EmailInterface>;

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
        endereco: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        telefone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
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
    this.belongsTo(models.usuario, {
      as: 'usuario',
      foreignKey: {
        field: 'idUsuario',
        name: 'idUsuario',
      },
    });
  }
}
