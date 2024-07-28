const max_consecutive_elements = (str) => {
  let result = 0;
  let cur_letter_idx = 0;

  while (cur_letter_idx < str.length) {
    let next_letter_idx = cur_letter_idx;
    while (next_letter_idx < str.length &&
      str[next_letter_idx] == str[cur_letter_idx]) {
      ++next_letter_idx;
    }
    result = Math.max(result, next_letter_idx - cur_letter_idx);
    cur_letter_idx = next_letter_idx;
  }
  return result;
}


console.log(max_consecutive_elements('aaassxsssssssqqp'))
