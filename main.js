function print(n) {
    for (var i = 1; i <= n; i++) {
        for (var x = 0; x < n - i; x++) {
            document.write("");
        }
        for (var y = 0; y < i; y++) {
            document.write("*");
        }
        document.write("\n");
    }
}
