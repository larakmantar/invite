const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
  var oyun = ["kurt bey | i+davet","KMC-AT |i+help","kurtbey | i+"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], { type: "PLAYING" });
  }, 13000);
  client.user.setStatus("online");

  /*client.user.setActivity("!yardım | !davet | !prefix ☣", { type: "WATCHING" });*/
};
