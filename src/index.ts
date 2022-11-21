/**
 * This is a hourglass program.
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

import promptSync from 'prompt-sync'

function hourGlass (userNum: number): string {
  if (userNum === 1) {
    return '*\n\n*'
  } else if (userNum > 1) {
    const star = userNum
    let string = ''
    for (let counter = 0; star > counter; counter++) {
      string = '*' + string
    }
    console.log(string + '\n')
    return hourGlass(userNum -1)
  } else {
    return 'ERROR'
  }
}

function reverseHourGlass (userNum: number): string {
  let tempNum = 3
  if (userNum === tempNum) {
    return '\nDone.'
  } else if (userNum > tempNum) { 
    const star = tempNum
    let string = ''
    for (let counter = 0; star > counter; counter++) {
      string = '*' + string
    }
    console.log(string + '\n')
    return hourGlass(tempNum +1)
  } else {
    return 'ERROR'
  }
}

function main (): void {
  const prompt = promptSync()
  const userString = prompt('Enter the hourglass length: ')
  const userNumber = parseInt(userString)
  const hourResult = hourGlass(userNumber)
  console.log(hourResult) 
  const reverseHourResult = reverseHourGlass(userNumber)
  console.log(reverseHourResult)
}
main()
