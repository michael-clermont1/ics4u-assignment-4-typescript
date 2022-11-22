/**
 * This is a hourglass program.
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

import promptSync from 'prompt-sync'

function hourGlass (userNum: number, spaces: number = 0): string {
  if (userNum === 1) {
    return '*\n'
  } else if (userNum > 1) {
    const star = userNum
    let string = ''
    for (let counter1 = 0; counter1 < spaces; counter1++) {
      string += ' '
    }
    for (let counter = 0; star > counter; counter++) {
      string += '* '
    }
    console.log(string + '\n')
    return hourGlass(userNum - 1, spaces + 1)
  } else {
    return 'ERROR'
  }
}

function reverseHourGlass (userNum: number, tempNum: number, spaces: number = 0): string {
  if (tempNum > userNum) {
    return 'Done.'
  } else if (userNum >= tempNum) { 
    const star = tempNum
    let string = ''
    for (let counter1 = 0; counter1 < spaces; counter1++) {
      string += ' '
    }
    for (let counter = 0; star > counter; counter++) {
      string += '* '
    }
    console.log(string + '\n')
    return reverseHourGlass(userNum, tempNum + 1, spaces + 1)
  } else {
    return 'ERROR'
  }
}

function main (): void {
  const prompt = promptSync()
  const userString = prompt('Enter the hourglass length: ')
  console.log('')
  const userNumber = parseInt(userString)
  const hourResult = hourGlass(userNumber)
  console.log(hourResult) 
  const reverseHourResult = reverseHourGlass(userNumber, 1)
  console.log(reverseHourResult)
}
main()
