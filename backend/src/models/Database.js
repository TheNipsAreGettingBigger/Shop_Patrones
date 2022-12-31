const { MongoClient } = require("mongodb");
const { MongoConfig } = require("../config/mongo");

class MongoDB {
  static #client = null;
  static async #connect() {
    try {
      const client = new MongoClient(MongoConfig.URI);
      this.#client = await client.connect();
    } catch (error) {
      console.log(error);
    }
  }

  static async getConnection() {
    if (this.#client) {
      return this.#client.db("shop_db");
    }
    await this.#connect();
    return this.#client.db("shop_db");
  }
}

module.exports = {
  MongoDB,
};
