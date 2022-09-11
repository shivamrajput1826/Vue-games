<template>
  <div
    v-if="!gameIsWon"
    class="bg-blue-500 h-[100vh] w-[100vw] text-white flex justify-center items-center"
  >
    <div class="game grid bg-white h-[50vh] w-[50vh] grid-cols-3 text-black">
      <button
        @click="changeDesign(1)"
        class="grid-item border-[1px] border-black hover:bg-black"
      >
        <div v-show="isActive[1]">
          <div v-if="isCross[1]">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div v-if="isZero[1]">
            <i class="fa-light fa-0"></i>
          </div>
        </div>
      </button>
      <button
        @click="changeDesign(2)"
        class="grid-item border-[1px] border-black hover:bg-black"
      >
        <div v-show="isActive[2]">
          <div v-if="isCross[2]">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div v-if="isZero[2]">
            <i class="fa-light fa-0"></i>
          </div>
        </div>
      </button>
      <button
        @click="changeDesign(3)"
        class="grid-item border-[1px] border-black hover:bg-black"
      >
        <div v-show="isActive[3]">
          <div v-if="isCross[3]">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div v-if="isZero[3]">
            <i class="fa-light fa-0"></i>
          </div>
        </div>
      </button>
      <button
        @click="changeDesign(4)"
        class="grid-item border-[1px] border-black hover:bg-black"
      >
        <div v-show="isActive[4]">
          <div v-if="isCross[4]">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div v-if="isZero[4]">
            <i class="fa-light fa-0"></i>
          </div>
        </div>
      </button>
      <button
        @click="changeDesign(5)"
        class="grid-item border-[1px] border-black hover:bg-black"
      >
        <div v-show="isActive[5]">
          <div v-if="isCross[5]">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div v-if="isZero[5]">
            <i class="fa-light fa-0"></i>
          </div>
        </div>
      </button>
      <button
        @click="changeDesign(6)"
        class="grid-item border-[1px] border-black hover:bg-black"
      >
        <div v-show="isActive[6]">
          <div v-if="isCross[6]">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div v-if="isZero[6]">
            <i class="fa-light fa-0"></i>
          </div>
        </div>
      </button>
      <button
        @click="changeDesign(7)"
        class="grid-item border-[1px] border-black hover:bg-black"
      >
        <div v-show="isActive[7]">
          <div v-if="isCross[7]">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div v-if="isZero[7]">
            <i class="fa-light fa-0"></i>
          </div>
        </div>
      </button>
      <button
        @click="changeDesign(8)"
        class="grid-item border-[1px] border-black hover:bg-black"
      >
        <div v-show="isActive[8]">
          <div v-if="isCross[8]">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div v-if="isZero[8]">
            <i class="fa-light fa-0"></i>
          </div>
        </div>
      </button>
      <button
        @click="changeDesign(9)"
        class="grid-item border-[1px] border-black hover:bg-black"
      >
        <div v-show="isActive[9]">
          <div v-if="isCross[9]">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div v-if="isZero[9]">
            <i class="fa-light fa-0"></i>
          </div>
        </div>
      </button>
    </div>
  </div>
  <div v-else>
    <p>{{ winner }} won the game</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const counter = ref(1);
    const isActive = ref([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
    const isCross = ref([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
    const isZero = ref([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
    const gameOver: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    const crossArr = ref<number[]>([]);
    const zeroArr = ref<number[]>([]);
    const gameIsWon = ref<boolean>(false);
    const winner = ref<string>("");
    const changeDesign = (val: number) => {
      isActive.value[val] = true;
      if (counter.value % 2 === 0) {
        isZero.value[val] = true;
        zeroArr.value.push(val);
      } else {
        isCross.value[val] = true;
        crossArr.value.push(val);
      }
      counter.value++;

      isGameOver();
    };
    const isGameOver = () => {
      //for cross
      for (let i = 0; i < 8; i++) {
        const isMatch = ref<boolean>(true);
        for (let j = 0; j < 3; j++) {
          if (!crossArr.value.includes(gameOver[i][j])) {
            isMatch.value = false;
            continue;
          }
        }
        if (isMatch.value === true) {
          gameIsWon.value = true;
          winner.value = "cross";
          break;
        }
      }
      //for zero
      for (let i = 0; i < 8; i++) {
        const isMatch = ref<boolean>(true);
        for (let j = 0; j < 3; j++) {
          if (!zeroArr.value.includes(gameOver[i][j])) {
            isMatch.value = false;
            continue;
          }
        }
        if (isMatch.value === true) {
          gameIsWon.value = true;
          winner.value = "zero";
          break;
        }
      }
    };
    return {
      counter,
      changeDesign,
      isZero,
      isCross,
      isActive,
      gameOver,
      gameIsWon,
      winner,
    };
  },
});
</script>
<style scoped></style>
