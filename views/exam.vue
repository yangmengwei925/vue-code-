<template>
  <div class="exam">
    <div class="header">
      <div class="title">2021年9月普法培训考试内容</div>
      <div class="time">
        <span class="start-time">开始日期：2021-08-21 10:00</span>&nbsp;<span
          class="end-time"
          >结束日期：2021-08-21 10:00</span
        >
      </div>
      <div class="time-count-wrap">倒计时：{{ restTime }}</div>
    </div>
    <section
      class="content"
      v-for="(item, index) in examList"
      v-show="index == currendIndex"
      :key="index"
    >
      <label
        >题目{{ index + 1 }}：
        <span>
          {{ item.title }}
          <!-- ({{ item.score }}分) -->
        </span>
      </label>
      <div class="item-options">
        <RadioGroup v-model="selectedValue" @on-change="changeCurrentAnswer">
          <Radio
            v-for="(option, listIndex) in item.options"
            :label="listIndex + 1"
            :key="listIndex"
            ><span v-html="option"></span
          ></Radio>
        </RadioGroup>
      </div>
    </section>

    <div class="buttons-group">
      <Button
        type="error"
        size="large"
        @click.native="prevItem"
        v-if="currendIndex > 0"
        >上一题</Button
      >
      <Button
        type="error"
        size="large"
        @click.native="nextItem"
        v-if="currendIndex != examList.length - 1"
        >下一题</Button
      >
      <Button
        size="large"
        type="error"
        @click.native="modal1 = true"
        v-if="currendIndex == examList.length - 1"
        >交卷</Button
      >
    </div>
    <div class="index-footer">
      <div
        v-for="index in examList.length"
        :class="{
          item: true,
          currendIndex: currendIndex >= index - 1,
        }"
        @click="SELECT_ITEM(index - 1)"
        :key="index"
      >
        {{ index }}
      </div>
    </div>
    <Modal v-model="modal1" width="360">
      <!-- <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
      </p> -->
      <div class="modal-text" style="text-align:center">
        <p>您的考卷还有两道题没有答完，是否继续答题？</p>
      </div>
      <div slot="footer">
        <div class="buttons-group">
          <Button size="large" type="error" @click.native="modal1 = false"
            >继续答题</Button
          >
          <Button size="large" type="error" @click.native="handleSubmit"
            >交卷</Button
          >
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { getNumberPrefix, getCurrentDate } from "../utils/common";

export default {
  data() {
    return {
      currentDate: getCurrentDate(),
      //选中的答案
      selectedValue: "",
      //初始化时间戳
      currentTime: new Date().getTime(),
      restTime: "",
      timer: "",
      modal1: false,
    };
  },
  mounted() {
    this.countTime();
    // console.log(this.examList)
  },
  computed: {
    examList() {
      const vm = this;
      return vm.$store.state.examList[vm.$route.query.id - 1];
    },
    time() {
      const vm = this;
      return vm.$store.state.time[vm.$route.query.id - 1];
    },
    ...mapState(["currendIndex", "saveAnswer"]),
  },
  methods: {
    ...mapMutations([
      "NEXT_ITEM",
      "PREV_ITEM",
      "USE_TIME",
      "EXAM_ID",
      "SELECT_ITEM",
    ]),
    //下一题
    nextItem() {
      if (!this.selectedValue) {
        this.$Message.warning("请先选择答案！");
        return;
      }
      this.selectedValue = "";
      this.NEXT_ITEM();
      this.getCurrentAnswer();
    },
    //上一题
    prevItem() {
      this.PREV_ITEM();
      this.getCurrentAnswer();
    },
    //提交答案
    handleSubmit() {
      this.modal1 = false;
      this.EXAM_ID(this.$route.query.id);
      this.USE_TIME(new Date().getTime() - this.currentTime);
      clearTimeout(this.timer);
      this.$router.push({ name: "Result" });
    },
    //更改当前题目的答案
    changeCurrentAnswer() {
      this.saveAnswer[this.currendIndex] = this.selectedValue;
    },
    //获取当前题目填写的答案
    getCurrentAnswer() {
      const currentAnswer = this.saveAnswer[this.currendIndex];
      if (currentAnswer) {
        this.selectedValue = currentAnswer;
      } else {
        this.saveAnswer[this.currendIndex] = this.selectedValue;
      }
      console.log(this.saveAnswer);
    },
    //倒计时
    countTime() {
      const vm = this,
        endTime = vm.time * 60 * 1000 + vm.currentTime,
        currentTime = new Date().getTime(),
        restTime = endTime - currentTime,
        hours = getNumberPrefix(
          parseInt((restTime / (1000 * 60 * 60)) % 24, 10)
        ),
        minutes = getNumberPrefix(parseInt((restTime / (1000 * 60)) % 60, 10)),
        seconds = getNumberPrefix(parseInt((restTime / 1000) % 60, 10));
      vm.restTime = `${hours}:${minutes}:${seconds}`;
      vm.timer = setTimeout(function() {
        if (restTime > 0) {
          vm.countTime();
        } else if (restTime <= 0) {
          clearTimeout(vm.timer);
          vm.$Message.warning("交卷时间已到，系统将帮您自动交卷");
          setTimeout(() => {
            vm.handleSubmit();
          }, 2000);
        }
      }, 1000);
    },
  },
};
</script>

<style>
.exam {
  width: 100%;
  height: 100%;
  font-size: 1rem;
  text-align: left;
}
.exam .header .title {
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  padding: 10px 0px;
}
.exam .header .time {
  color: #b5b5b5;
  display: flex;
}
.exam .header .time span {
  justify-content: space-between;
  width: 50%;
  font-size: 12px;
  text-align: center;
}
.time-count-wrap {
  font-size: 17px;
  font-weight: 700;
  color: #e30073;
  padding: 10px;
}
.exam .content {
  padding: 0px 10px;
}
.exam .content .ivu-radio-group-item {
  padding: 5px;
  width: 100%;
}
.exam .content .ivu-radio-group {
  padding-left: 10px;
  width: 100%;
}
.exam .item-options {
  padding: 20px 0;
}
.buttons-group {
  display: flex;
  justify-content: space-around;
  padding-right: 10px;
}
.buttons-group .ivu-btn {
  width: 100%;
  margin-left: 10px;
  background-color: #e30073;
}
.exam .index-footer {
  margin-top: 30px;
  background-color: #fafafa;
  padding: 5px;
}
.exam .index-footer .item {
  background-color: #37ad62;
  border-radius: 5px;
  line-height: 30px;
  height: 30px;
  text-align: center;
  display: inline-block;
  color: aliceblue;
  padding: 0 15px;
  margin: 5px;
  border: 1px #b5b5b5 solid;
}
.exam .index-footer .currendIndex {
  background-color: #999999;
}
.modal-text {
  font-size: 15px;
  padding-top: 50px;
}
.ivu-modal-header,
.ivu-modal-footer {
  border: 0px;
}
.ivu-modal-body {
  padding-top: 0;
}
.ivu-modal-close {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 2px solid #b5b5b5;
  right: 10px;
  text-align: center;
}
.ivu-modal-close .ivu-icon-ios-close-empty {
  margin-top: -5px;
  font-size: 20px;
  font-weight: 700;
}
</style>
