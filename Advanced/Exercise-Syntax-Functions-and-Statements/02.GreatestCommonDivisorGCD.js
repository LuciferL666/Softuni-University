    function gcd(a, b) {
        if (b !== 0) {
            return gcd (b, a % b);
        } else {
            console.log(a);
        }
    }
    gcd(15, 5);