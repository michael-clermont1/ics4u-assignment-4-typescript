/**
 * This is a hourglass program.
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

import promptSync from 'prompt-sync'

/**
 * The hourGlass() function.
 *
 * @param {number} userNum - number from user
 * @param  {number} spaces - spaces from user
 */
function hourGlass (userNum: number, spaces: number = 0): void {
  let string = ''
  for (let counter: number = 0; counter < spaces; counter++) {
    string += ' '
  }
  for (let counter1: number = 0; counter1 < userNum; counter1++) {
    string += '* '
  }
  console.log(string + '\n')
  if (userNum > 1) {
    hourGlass(userNum - 1, spaces + 1)
  }
  console.log(string + '\n')
}

/**
 * The main() function.
 *
 */
function main (): void {
  const prompt = promptSync()
  const userString = prompt('Enter the hourglass length: ')
  console.log('')
  const userNumber = parseInt(userString)
  if (isNaN(userNumber)) {
    console.log('Not an number.')
  } else if (userNumber <= 0) {
    console.log('That is an invalid number')
  }
  hourGlass(userNumber)
}
main()
