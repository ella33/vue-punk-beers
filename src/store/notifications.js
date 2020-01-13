import _ from 'lodash';

let ID = 1;

const store = {
  state: {
    list: [{ id: 0, Component: 'Hello World' }],
  },
  mutations: {
    add(state, notif) {
      notif.ID = ID;
      ID++;
      state.list = [...state.list, notif];
    },
    remove(state, id) {
      state.list = _.filter(state.list, n => n.id !== id);
    },
  },
  actions: {
    add(context, notif) {
      context.commit('add', notif);
    },
    remove(context, notif) {
      context.commit('remove', notif.id);
    },
  },
};

export default store;