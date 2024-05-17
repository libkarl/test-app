<template>
  <div class="app">
    <div class="controll-elements-container">
      <div class="input-container">
        <input type="text" placeholder="Enter text..." v-model="inputText" />
        <input type="number" placeholder="Seconds..." v-model.number="seconds" />
      </div>

      <div class="progress-button-container" v-if="inputText">
        <button @click="resetCountdown" class="reset-button">Reset</button>
        <div
          class="progress-button"
          :style="{ width: progressWidth + 'px', height: progressWidth + 'px' }"
          @click="startCountdown"
          v-if="inputText"
        >
          <span class="start-label" v-if="!remainingSeconds">Start</span>
          <span class="countdown" v-show="remainingSeconds > 0">{{ remainingSeconds }}</span>
        </div>
      </div>
    </div>

    <div class="reversed-text" v-if="showReversedText">{{ reversedText }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { countdownProcess } from './utils/countdownProcess'

export default {
  setup() {
    const inputText = ref('')
    const seconds = ref(0)
    const progressWidth = ref(100)
    const remainingSeconds = ref(seconds.value)
    const showReversedText = ref(false)
    const reversedText = ref('')

    const startCountdown = () =>
      countdownProcess(
        seconds,
        remainingSeconds,
        progressWidth,
        showReversedText,
        reversedText,
        inputText
      )

    const resetCountdown = () => {
      location.reload()
    }

    return {
      inputText,
      seconds,
      startCountdown,
      remainingSeconds,
      showReversedText,
      reversedText,
      progressWidth,
      resetCountdown
    }
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.controll-elements-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
}

.input-container input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.progress-button-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.reset-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #134814;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: #517b54;
}

.progress-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #cc3838;
  transition:
    width 1s ease,
    height 1s ease; /* Added height transition */
  cursor: pointer;
  position: relative;
  overflow: hidden; /* Hide the overflowing countdown */
}

.start-label {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}

.countdown {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.reversed-text {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #f3f3f3;
}
</style>
