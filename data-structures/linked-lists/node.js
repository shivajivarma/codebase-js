class Node {

    constructor(d, n) {
        if (d) {
            this.data = d;
            this.link = n;
        } else {
            this.link = null;
            this.data = 0;
        }
    }



    setLink(n) {
        this.link = n;
    }

    setData(d) {
        this.data = d;
    }

    getLink() {
        return this.link;
    }

    getData() {
        return this.data;
    }
}

module.exports = Node;
