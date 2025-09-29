function firstWord(s) {
  if (s === "") return ""; // handle empty string

  s = s.trimStart(); // remove leading spaces

  let spaceIndex = s.indexOf(" ");
  if (spaceIndex === -1) {
    return s; // no space → whole string
  }
  return s.slice(0, spaceIndex); // return part before first space
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
