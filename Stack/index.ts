function isValid(s: string): boolean {
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (current == "(" || current == "{" || current == "[") {
      stack.push(current);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const last = stack.pop();
      if (last == "(" && current != ")") {
        return false;
      }
      if (last == "{" && current != "}") {
        return false;
      }
      if (last == "[" && current != "]") {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
}

const s = "(]";
console.log(isValid(s));
