export const getPaths = async (contents: string) => {
  const imports = [];
  const iterators = [
    contents.matchAll(/.*from '(.*)'.*/g),
    contents.matchAll(/import '(.*).*'/g),
  ];
  for (const iterator of iterators) {
    let match = iterator.next();
    while (!match.done) {
      const importPath = match.value?.[1];
      if (importPath && !importPath.startsWith('.')) {
        imports.push(importPath);
      }
      match = iterator.next();
    }
  }
  return imports;
};
