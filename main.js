function print(n) {
    for (var i = 1; i <= n; i++) {
        for (var x = 0; x < n - i; x++) {
            console.log("");
        }
        for (var y = 0; y < i; y++) {
            console.log("*");
        }
    }
}
var n = process.argv[2];
print(parseInt(n));
