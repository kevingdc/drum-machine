export const audioMapper = text => {
  switch (text) {
    case "Q":
      return {
        file: `${process.env.PUBLIC_URL}/audio/beep.mp3`,
        description: "Beep",
      };
    case "W":
      return {
        file: `${process.env.PUBLIC_URL}/audio/car-alarm.mp3`,
        description: "Car Alarm",
      };
    case "E":
      return {
        file: `${process.env.PUBLIC_URL}/audio/click.mp3`,
        description: "Click",
      };
    case "A":
      return {
        file: `${process.env.PUBLIC_URL}/audio/fart.mp3`,
        description: "Fart",
      };
    case "S":
      return {
        file: `${process.env.PUBLIC_URL}/audio/fire-crackers.mp3`,
        description: "Fire Crackers",
      };
    case "D":
      return {
        file: `${process.env.PUBLIC_URL}/audio/pew.mp3`,
        description: "Pew",
      };
    case "Z":
      return {
        file: `${process.env.PUBLIC_URL}/audio/short-circuit.mp3`,
        description: "Short Circuit",
      };
    case "X":
      return {
        file: `${process.env.PUBLIC_URL}/audio/snap.mp3`,
        description: "Snap",
      };
    case "C":
      return {
        file: `${process.env.PUBLIC_URL}/audio/whack.mp3`,
        description: "Whack",
      };
  }
};
