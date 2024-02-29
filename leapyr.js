let dd = 20, mm = 5, yy = 2000;

if (yy > 1900 && yy <= 9999) {
  if (mm >= 1 && mm <= 12) {
    if ((dd >= 1 && dd <= 31) && (mm === 1 || mm === 3 || mm === 5 || mm === 7 || mm === 8 || mm === 10 || mm === 12)) {
      console.log("Valid");
    } else if ((dd >= 1 && dd <= 30) && (mm === 4 || mm === 6 || mm === 9 || mm === 11)) {
      console.log("Valid");
    } else if ((dd >= 1 && dd <= 29) && mm === 2 && ((yy % 4 === 0 && yy % 100 !== 0) || (yy % 400 === 0))) {
      console.log("Valid");
    } else if ((dd >= 1 && dd <= 28) && mm === 2) {
      console.log("Valid");
    } else {
      console.log("Invalid");
    }
  } else {
    console.log("Invalid month");
  }
} else {
  console.log("Invalid year");
}
