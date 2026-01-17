function simplifyPath(s: string): string {
  let sStack: string[] = [];

  function stackPop() {
    if (sStack.length > 0) {
      sStack.pop();
    }
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    switch (char) {
      case ".":
        stackPop();
        break;
      case "..":
        stackPop();
        stackPop();
        break;

      default:
        break;
    }
  }
  return "";
}
