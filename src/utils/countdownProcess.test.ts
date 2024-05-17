import { ref } from 'vue'
import { countdownProcess } from './countdownProcess'
import { reverseText } from './reverseText'
import { describe, expect, it } from 'vitest'

describe('countdownProcess', () => {
  it('updates refs properly after countdown ends', async () => {
    const seconds = ref(5)
    const remainingSeconds = ref(5)
    const progressWidth = ref(0)
    const showReversedText = ref(false)
    const reversedText = ref('')
    const inputText = ref('Hello World')


    countdownProcess(
      seconds,
      remainingSeconds,
      progressWidth,
      showReversedText,
      reversedText,
      inputText
    )

    setTimeout(() => {
      expect(remainingSeconds.value).toBe(0)
      expect(progressWidth.value).toBe(100)
      expect(showReversedText.value).toBe(true)
      expect(reversedText.value).toBe(reverseText(inputText.value))
    }, 7000)
  })
})
