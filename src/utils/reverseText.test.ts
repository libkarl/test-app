import { describe, expect, it } from 'vitest'
import { reverseText } from './reverseText'

describe('reverseText function', () => {
  it('should reverse the text properly', () => {
    const inputText = 'Hello World'
    const expectedResult = 'Dlrow Olleh'

    const result = reverseText(inputText)

    expect(result).toEqual(expectedResult)
  })

  it('should handle empty string', () => {
    const inputText = ''
    const expectedResult = ''

    const result = reverseText(inputText)

    expect(result).toEqual(expectedResult)
  })

  it('should handle single word', () => {
    const inputText = 'Vue'
    const expectedResult = 'Euv'

    const result = reverseText(inputText)

    expect(result).toEqual(expectedResult)
  })

  it('should handle special characters', () => {
    const inputText = 'Hello! How are you?'
    const expectedResult = '?uoy Era Woh !olleh'

    const result = reverseText(inputText)

    expect(result).toEqual(expectedResult)
  })
})
