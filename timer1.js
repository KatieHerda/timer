//impliment an alarm clock / timer which will beep after a specified amount of time has passed.
const args = process.argv.slice(2);

//If no numbers provided, do not beep
if (args.length < 1) {
  return;
}
//If negative number or not a number, ignore/skip
const result = args.filter(num => num > 0);

const beepTimer = function(result) {
  for (const el of result) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, el * 1000);
  }
};

beepTimer(result);

