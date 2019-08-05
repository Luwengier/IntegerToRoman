const refen = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

function toRoman(n) {
  nStr = n.toString()
  nArr = nStr.split('')

  let roman = ''
  let count = 0

  while (nArr.length >= 1) {
    roman = singleToRoman(Number(nArr.pop()), refen[count], refen[count + 1], refen[count + 2]) + roman

    count += 2
  }

  return roman
}

function singleToRoman(i, j, k, f) {
  let singleRoman = ''
  switch (i) {
    case 0:
      singleRoman += ''
      break
    case 1:
      singleRoman += j
      break
    case 2:
      singleRoman += j + j
      break
    case 3:
      singleRoman += j + j + j
      break
    case 4:
      singleRoman += j + k
      break
    case 5:
      singleRoman += k
      break
    case 6:
      singleRoman += k + j
      break
    case 7:
      singleRoman += k + j + j
      break
    case 8:
      singleRoman += k + j + j + j
      break
    case 9:
      singleRoman += j + f
  }

  return singleRoman
}