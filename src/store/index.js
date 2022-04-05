import { createStore } from 'vuex'

export default createStore({
  state: {
    Queso: 10,
    Chocolate: 10,
    Vainilla: 11,
    TresLeches: 12,
    Batido:10,
    Velas:10,
    Sarzamora:10,
    Fresas: 10,
    Pedidos: [] //Arreglo de pedidos
  },
  getters: {
  },
  mutations: {
    agregarPedido(state, pedido){
      state.Pedidos.push(pedido);
    },
    actualizarQueso(state, mas){
      
      if(mas){
        state.Queso++;
      }else state.Queso--;
    },
    actualizarChocolate(state, mas){
      
      if(mas){
        state.Chocolate++;
      }else state.Chocolate--;
    },
    actualizarVainilla(state, mas){
      
      if(mas){
        state.Vainilla++;
      }else state.Vainilla--;
    },
    actualizarTresLeches(state, mas){
      
      if(mas){
        state.TresLeches++;
      }else state.TresLeches--;
    },
    actualizarBatido(state, mas){
      
      if(mas){
        state.Batido++;
      }else state.Batido--;
    },
    actualizarFresas(state, mas){
      
      if(mas){
        state.Fresas++;
      }else state.Fresas--;
    }
    ,
    actualizarVelas(state, mas){
      
      if(mas){
        state.Velas++;
      }else state.Velas--;
    }
    ,
    actualizarSarzamora(state, mas){
      
      if(mas){
        state.Sarzamora++;
      }else state.Sarzamora--;
    }
  },
  actions: {
  },
  modules: {
  }
})
