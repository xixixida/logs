<template>
  <el-container>
    <el-main>
      <el-button type="primary" circle size="mini" v-for="item in 33" :key="`1doublechromosphere${item}`" v-text="item<10?'0'+item:item"></el-button>
      <el-input v-model="num" type="text"></el-input>
      <el-button @click="start">开始</el-button>
      {{data}}
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "doublechromosphere"
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  num: string = "";
  get double() {
    const { num } = this;
    const arr = num.split("");
    const brr = arr.map(v => Number(v));
    return brr;
  }
  data: number[] = [];
  async start() {
    const { double } = this;
    this.data = [];
    const redArray = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33
    ];
    const blueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    for (let v = 0; v < 6; v++) {
      const d = redArray[Math.floor(Math.random() * redArray.length)];
      this.data.push(d);
      redArray.splice(d, 1);
      // await this.pause(1000);
    }
    const d = blueArray[Math.floor(Math.random() * blueArray.length)];
    this.data.push(d);
  }

  pause(num: number) {
    return new Promise(res => {
      setTimeout(() => res(), num);
    });
  }
}
</script>