module.exports = layout => {
  if (!layout.height) return false;
  if (!layout.width) return false;
  if (!layout.cells) return false;
  if (!layout.startPoints) return false;

  // Cell amount matches with height and width
  if (layout.height * layout.width !== layout.cells.length) return false;

  // Starting points are inside board height and width
  let overBoard = false;
  layout.startPoints.forEach(current => {
    if (current.x > layout.width || current.y > layout.height) overBoard = true;
  });
  if (overBoard) return false;

  return true;
};
