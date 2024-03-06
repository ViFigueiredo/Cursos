import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Requisição');
      return state;
    }

    case types.BOTAO_CLICADO_SUCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      const newState = { ...state };
      console.log('Falha');
      return newState;
    }

    default:
      return state;
  }
}
