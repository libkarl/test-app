export function reverseText(text: string): string {
  const words = text.split(' ')

  const reversedWords = words.map((word: string) => {
    const reversedWord = word.toLowerCase().split('').reverse().join('')
    return reversedWord.charAt(0).toUpperCase() + reversedWord.slice(1)
  })

  return reversedWords.reverse().join(' ')
}
