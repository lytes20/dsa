function removeDuplicates(s: string): string {
  if (s.length < 1) {
    return s;
  }
  const stack: string[] = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    const current = s[i];
    const last = stack[stack.length - 1];

    if (current === last) {
      stack.pop();
    } else {
      stack.push(current);
    }
  }

  return stack.join("");
}

export default removeDuplicates;
