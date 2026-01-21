function simplifyPath(s: string): string {
  let sStack: string[] = [];

  const pathComponents: string[] = s.split("/");
  for (let i = 0; i < pathComponents.length; i++) {
    const component: string = pathComponents[i];
    if (component === "..") {
      if (sStack.length) {
        sStack.pop();
      }
    } else if (component === "." || !component) {
      continue;
    } else {
      sStack.push(component);
    }
  }
  return "/" + sStack.join("/");
}
