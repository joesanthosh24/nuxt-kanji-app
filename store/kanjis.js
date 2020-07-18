export const state = () => ({
  kanjis: {}
});

export const mutations = {
  setKanjis(state, data) {
    state.kanjis = data;
  }
};

export const getters = {
  getKanjis: (state, grade) => {
    return state.kanjis[grade];
  }
};
