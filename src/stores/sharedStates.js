import { reactive, readonly } from "vue";

const translatestates = reactive({
  source: "",
  byFirst: "",
  bySecond: "",
  byMe: "",
});

const festivalLists = reactive({});

export default { translatestates, festivalLists };
