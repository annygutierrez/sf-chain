class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        // Hash will be about 32 characters normally
        return `
          Timestamp: ${this.timestamp}
          Last Hash: ${this.lastHash.substring(0, 10)}
          Hash: ${this.hash.substring(0, 10)}
          Data: ${this.data}
        `;
    }

    static genesis() {
        return new this('genesis time', '-----', 'f1rtsh-h45h', []);
    }
}

module.exports = Block;