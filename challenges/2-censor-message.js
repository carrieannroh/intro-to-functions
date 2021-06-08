function censorMessage() {
  let message = "Here is a really nice beautiful message";
  let banList = "nice";

  if (banList in message) {
    return message.pop;
  }
}

console.log(censorMessage());
