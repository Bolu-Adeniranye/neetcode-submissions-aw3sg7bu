class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        this.left = new Node(0, 0);   // dummy head
        this.right = new Node(0, 0);  // dummy tail

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        const prevNode = node.prev;
        const nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    insert(node) {
        const firstRealNode = this.left.next;

        node.next = firstRealNode;
        node.prev = this.left;

        this.left.next = node;
        firstRealNode.prev = node;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);

        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.capacity) {
            const lru = this.right.prev;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}