import { Sequelize } from 'sequelize';

import { UsuarioModel } from '../models/UsuarioModel';
import { ClienteModel } from '../models/ClienteModel';

export class Models {
  /* Coloque aqui o nome das suas entidades como o exemplo abaixo */
  public usuario: typeof UsuarioModel = UsuarioModel;
  public cliente: typeof ClienteModel = ClienteModel;

  constructor(db: Sequelize) {
    Object.keys(this).forEach((pModel: string) => {
      if (
        this[pModel] !== undefined &&
        this[pModel].initialization !== undefined
      ) {
        this[pModel].initialization(db);
      }
    });

    Object.keys(this).forEach((pModel: string) => {
      if (
        this[pModel] !== undefined &&
        this[pModel].association !== undefined
      ) {
        this[pModel].association(this);
      }
    });
  }
}
