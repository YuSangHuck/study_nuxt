const state = {
  isAuthorized: false,
  userID: undefined,
};
const mutations = {
  SIGN_IN: (state, userID) => {
    state.isAuthorized = true;
    state.userID = userID;
  },
  SIGN_OUT: state => {
    state.isAuthorized = false;
    state.userID = null;
  },
};
const actions = {
  signIn({ commit }, $data) {
    commit('SIGN_IN', $data)
  },
  signOut({ commit }) {
    commit('SIGN_OUT')
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
