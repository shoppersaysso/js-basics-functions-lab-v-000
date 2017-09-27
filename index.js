function calculateVertical(start, destination) {
  return ((destination - start)* 264)
}

function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}


function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;

}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(((destination - start)* 264))
}


function calculatesFarePrice(start, destination) {
  if distanceTravelledInFeet(start)
}
