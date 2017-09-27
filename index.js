function calculateVertical(origin, destination) {
  return ((destination - origin)* 264)
}

function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}


function distanceFromHqInFeet() {
  distanceFromHqInBlocks();

}

function distanceTravelledInFeet() {

}

function calculatesFarePrice() {

}
