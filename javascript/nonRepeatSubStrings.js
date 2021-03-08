
/**
  Code by Kevin

  Question: Given string return substrings such that there are no repeating letters
  Test Cases:
 */


function returnNonRepeatSubstrings(inputString) {
  occurred = {}
  subStringArray = []
  subStringBuilder = ""
  for (let i = 0; i < inputString.length; i++) {
    if (occurred[inputString[i]]) {
      subStringArray.push(subStringBuilder)
      occurred = {}
      subStringBuilder = ""
    } else {
      subStringBuilder += inputString[i]
      occurred[inputString[i]] = 1
    }
  }
  return subStringArray
}

console.log(returnNonRepeatSubstrings('aaaaaa'))