module.exports = {
  name: "roll",
  execute(message, args) {
    const number = Math.floor(Math.random() * 6) + 1;
    message.reply("🎲 You rolled: " + number);
  }
};
