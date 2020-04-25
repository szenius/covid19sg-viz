export const filterData = (data, maxCaseNum) => {
  data.nodes = data.nodes
    .filter(
      (node) =>
        (node.caseNum > 0 && node.caseNum <= maxCaseNum) ||
        (node.caseNum === -1 && node.minCaseNum <= maxCaseNum)
    )
    .map((filteredNode) => ({
      ...filteredNode,
      ...Object.create(filteredNode),
    }));
  data.edges = data.edges
    .filter(
      (edge) =>
        edge.sourceMinCaseNum <= maxCaseNum &&
        edge.targetMinCaseNum <= maxCaseNum
    )
    .map((filteredEdge) => ({
      source: filteredEdge.source,
      target: filteredEdge.target,
      label: filteredEdge.label,
      ...Object.create(filteredEdge),
    }));
  return data;
};
