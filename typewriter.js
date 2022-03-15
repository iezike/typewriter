const sentence = "I love Canada, it is a great nation with diverse group of happy people";

let count = 0
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), count);
  count = count + 45;
} ;
setTimeout(() => {
  console.log('')
}, count)