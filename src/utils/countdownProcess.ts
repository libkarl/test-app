import type { Ref } from 'vue'
import { reverseText } from './reverseText'

export function countdownProcess(
  seconds: Ref<number>,
  remainingSeconds: Ref<number>,
  progressWidth: Ref<number>,
  showReversedText: Ref<boolean>,
  reversedText: Ref<string>,
  inputText: Ref<string>
) {
  let currentSeconds = seconds.value

  const intervalId = setInterval(() => {
    remainingSeconds.value = currentSeconds
    progressWidth.value = (currentSeconds / seconds.value) * 100
    currentSeconds--

    if (currentSeconds < 0) {
      clearInterval(intervalId)
      showReversedText.value = true
      reversedText.value = reverseText(inputText.value)
    }
  }, 1000)
}
