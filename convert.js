function convert(type, num) {
    let from, to;
    switch (type) {
        case "bin-dec":
            from = parseInt(num, 2).toString(2)
            to = parseInt(num, 2).toString(10)
            return { from: from, to: to }
        case "bin-oct":
            from = parseInt(num, 2).toString(2)
            to = parseInt(num, 2).toString(8)
            return { from: from, to: to };
        case "bin-hex":
            from = parseInt(num, 2).toString(2)
            to = parseInt(num, 2).toString(16).toUpperCase()
            return { from: from, to: to };
        case "dec-bin":
            from = parseInt(num, 10).toString(10)
            to = parseInt(num, 10).toString(2)
            return { from: from, to: to };
        case "dec-oct":
            from = parseInt(num, 10).toString(10)
            to = parseInt(num, 10).toString(8)
            return { from: from, to: to };
        case "dec-hex":
            from = parseInt(num, 10).toString(10)
            to = parseInt(num, 10).toString(16).toUpperCase()
            return { from: from, to: to };
        case "hex-dec":
            from = parseInt(num, 16).toString(16).toUpperCase()
            to = parseInt(num, 16).toString(10)
            return { from: from, to: to };
        case "hex-bin":
            from = parseInt(num, 16).toString(16).toUpperCase()
            to = parseInt(num, 16).toString(2)
            return { from: from, to: to };
        case "oct-bin":
            from = parseInt(num, 8).toString(8)
            to = parseInt(num, 8).toString(2)
            return { from: from, to: to };
        case "oct-dec":
            from = parseInt(num, 8).toString(8)
            to = parseInt(num, 8).toString(10)
            return { from: from, to: to };

        default:
            return { from: 0, to: 0 };
    }
}

module.exports = convert