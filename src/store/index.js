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
    }
  },
  actions: {
  },
  modules: {
  }
})
