/*
 * @Author: Qun
 * @Date: 2021-09-23 06:50:38
 * @LastEditTime: 2021-09-25 14:06:27
 * @LastEditors: Qun
 * @Description:
 * @FilePath: \vue-demo\src\store\mutation.js
 *
 */
const NEXT_ITEM = "NEXT_ITEM";
const PREV_ITEM = "PREV_ITEM";
const USE_TIME = "USE_TIME";
const EXAM_ID = "EXAM_ID";
const SELECT_ITEM = "SELECT_ITEM";

export default {
  [NEXT_ITEM](state) {
    state.currendIndex += 1;
  },
  [PREV_ITEM](state) {
    state.currendIndex -= 1;
  },
  [USE_TIME](state, useTime) {
    state.useTime = useTime;
  },
  [EXAM_ID](state, id) {
    state.examId = id;
  },
  [SELECT_ITEM](state, index) {
    state.currendIndex = index;
  }
};
