export const state = () => ({
  grades: ["1", "2", "3", "4", "5", "6"]
});

export const actions = {
  async nuxtServerInit({ commit }, { app: { $axios } }) {
    let kanjiObj = {};
    
    for (let i = 0; i < 6; i++) {
      let kanjiData = await $axios.$get(`/kanji/grade-${i + 1}`);

      kanjiObj[i + 1] = kanjiData;
    }

    commit("kanjis/setKanjis", kanjiObj);
  }
};

export const getters = {
  grades(state) {
    return state.grades;
  }
};
