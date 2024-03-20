var floor = Math.floor(1.8);
    var ceiling = Math.ceil( Math.PI );
    var random = Math.random();
        
    // console.log(floor);
    // console.log(ceiling);
    // console.log(random);

    function test() {
        var a= Math.random();
        a = a * 6;
        // return Math.floor(a);
        return Math.ceil(a)
    }
    console.log(test());

    // ? [3, 9]

    function interval() {
        // var d = Math.floor(Math.random( max - min + 1 ) + min);
        var d = Math.floor(Math.random() * ( 9 - 3 + 1 ) + 3);
        console.log(d);
    }