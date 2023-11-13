import { Sequelize } from 'sequelize';

import { UsuarioModel } from '../models/UsuarioModel';
import { ClienteModel } from '../models/ClienteModel';
import { EnderecoModel } from '../models/EnderecoModel';
import { TelefoneModel } from '../models/TelefoneModel';
import { EmailModel } from '../models/EmailModel';
import { RepresentanteModel } from '../models/RepresentanteModel';

export class Models {
  /* Coloque aqui o nome das suas entidades como o exemplo abaixo */
  public usuario: typeof UsuarioModel = UsuarioModel;
  public cliente: typeof ClienteModel = ClienteModel;
  public representante: typeof RepresentanteModel = RepresentanteModel;
  public endereco: typeof EnderecoModel = EnderecoModel;
  public telefone: typeof TelefoneModel = TelefoneModel;
  public email: typeof EmailModel = EmailModel;

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
