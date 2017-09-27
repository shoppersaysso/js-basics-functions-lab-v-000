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
  return Math.abs(calculateVertical(destination, start))
}


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if distance >= 400 && distance <= 2000 {
    return distance * .02
  }
  // else {
//     if distance > 2000 {
//       return 25
//     } else {
//       return 'cannot travel that far'
//     }
//   }
//
}
