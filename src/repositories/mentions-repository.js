const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');
// Se algum dia precisarmos modificar algo na nossa regra de negócios, vamos direto ao nosso repository e não a todos os controllers que chamam nosso model.
exports.listMentions = async () => {
  const res = await Mentions.find({}, 'friend mention -_id');
  return res;
};

exports.createMention = async data => {
  const mention = new Mentions(data);
  await mention.save();
};