export const state = () => ({
  grades: ["1", "2", "3", "4", "5", "6"]
});

export const getters = {
  grades(state) {
    return state.grades;
  }
};
