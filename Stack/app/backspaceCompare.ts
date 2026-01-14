function backspaceCompare(s: string, t: string): boolean {
  let sStack: string[] = [];
  let tStack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char == "#") {
      if (sStack.length > 0) {
        sStack.pop();
      }
    } else {
      sStack.push(char);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (char == "#") {
      if (tStack.length > 0) {
        tStack.pop();
      }
    } else {
      tStack.push(char);
    }
  }

  if (sStack.join("") == tStack.join("")) {
    return true;
  }
  return false;
}

export default backspaceCompare;
