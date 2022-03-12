function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  // first solution below, commented out
  /* if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  } */

  // second solution (refactoring?), still works
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  } else {
    return "I can't hear you!";
  }
}

console.log(shout("OIIIII!!!"));
console.log(whisper("um, hello?"));
logShout("YOOOO!!");
logWhisper("Hi there!");
console.log(sayHiToHeadphonedRoommate("hey there!"));
