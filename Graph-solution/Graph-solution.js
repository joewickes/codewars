function solve_graph(start, end, arcs) {
  const directedPaths = {};

  // if the start and end nodes are identical then the end node is trivially considered to be reachable
  if (start === end) return true;

  directedPaths[start] = [];

  for (let i = 0; i < arcs.length; i++) {
    if (!directedPaths.hasOwnProperty(arcs[i].start)) {
      directedPaths[arcs[i].start] = [];
    }

    if (arcs[i].start !== arcs[i].end && !directedPaths[arcs[i].start].includes(arcs[i].end) && arcs[i].end !== start) {
      directedPaths[arcs[i].start].push(arcs[i].end);
    }
  }

  // if the start and end nodes are distinct and either node does not appear in arcs then you should return false
  let startAppears = false;
  let endAppears = false;

  for (const key in directedPaths) {
    if (!startAppears || !endAppears) {
      if (key === start) startAppears = true;
      for (let i = 0; i < directedPaths[key].length; i++) {
        if (directedPaths[key][i] === end) {
          endAppears = true;
        }
      }
    }
  }

  if (!startAppears || !endAppears) return false;

  const used = [];
  let current = start;

  while (current !== end && directedPaths[current].length) {
    if (directedPaths[current].includes(end)) {
      current = end;
      return true;
    } else {
      current = directedPaths[current][0];
    }
  }

  return false;
}
