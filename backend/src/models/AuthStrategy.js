const { MongoDB } = require("./Database");
const bcrypt = require("bcryptjs");
class EmailAuthentication {
  static async verify(email, password) {
    const dbCon = await MongoDB.getConnection();
    const userCollection = dbCon.collection("users");
    const filteredDocs = await userCollection.find({ email }).toArray();
    if (filteredDocs.length == 0) return null;
    const isMatch = bcrypt.compareSync(password, filteredDocs[0].password);
    return isMatch;
  }
}

class UsernameAuthentication {
  static async verify(username, password) {
    const dbCon = await MongoDB.getConnection();
    const userCollection = dbCon.collection("users");
    const filteredDocs = await userCollection.find({ username }).toArray();
    if (filteredDocs.length == 0) return null;
    const isMatch = bcrypt.compareSync(password, filteredDocs[0].password);
    return isMatch;
  }
}

module.exports = {
  EmailAuthentication,
  UsernameAuthentication,
};
