var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
      return s.length
  }
  let start = 0, maxLength = 0;
  let map = new Map;
  
  for (let i = 0; i < s.length; i++) {
      let character = s[i]
      
      if (map.get(character) >= start) {
          start = map.get(character) + 1
      }
      map.set(character, i)
      if ( i - start + 1 > maxLength) {
          maxLength = i - start + 1;
      }
  }
  return maxLength
};