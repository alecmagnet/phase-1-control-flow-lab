function scuberGreetingForFeet(rideLength){
  // Write your code here!
  if (rideLength < 400) {
    return ("This one is on me!")
  } else if (rideLength > 2500) {
    return ("No can do.")
  } else if (rideLength > 2000) {
    return ("I will gladly take your thirty bucks.")
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const cityMessage = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return cityMessage;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip == 'generous') {
    return ('Thank you so much.')
  } else if (tip == 'not as generous') {
    return ('Thank you.')
  } else {
    return ('Bye.')
  }
}