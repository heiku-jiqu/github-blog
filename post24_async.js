function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds / 1000));
}
async function goodCitizen(name) {
  console.log(`GOOD citizen ${name} starting`);
  for (let i = 0; i < 5; i++) {
    console.log(`GOOD citizen ${name}: `, i);
    // This 'await' yields control, allowing other tasks to run.
    await sleep(0.001);
  }
  console.log(`GOOD citizen ${name} ending`);
}
async function fakeAsync(x) {
  console.log("running fake async");
  var throwaway = 0;
  for (let i = 0; i < 1230000000; i++) {
    throwaway += i;
  }
  return x;
}
// Equivalent to Python's bad_citizen
async function badCitizen() {
  console.log("BAD citizen starting");
  for (let i = 0; i < 100; i++) {
    console.log("BAD citizen: ", i);
    await fakeAsync(i);
  }
  console.log("BAD citizen ending");
}
async function main() {
  const good1 = goodCitizen("John");
  const bad = badCitizen();
  const good2 = goodCitizen("Mary");
  await Promise.all([good1, good2, bad]);
}

main();
