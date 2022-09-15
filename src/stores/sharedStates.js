import { reactive, readonly } from "vue";

const states = reactive({
  isLoading: false,
  people: {
    name: "",
    description: "",
  },
});

const translatestates = reactive({
  source: [],
  byGoogle: [],
  byPapago: [],
  byMe: [],
});

export default { states, translatestates };
