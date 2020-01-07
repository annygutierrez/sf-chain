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

    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'todo-hash';

        return new this(timestamp, lastHash, hash, data);
    }
}

module.exports = Block;