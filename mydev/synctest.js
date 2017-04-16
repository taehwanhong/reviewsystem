/**
 * Created by davidhong on 15/04/2017.
 */
var fs = require('fs');

//sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);


//async
console.log(2); //------1번실행
fs.readFile('data.txt',{encoding:'utf8'}, function (err, dt) {
    console.log(3); // ---------3번 실행
    console.log(dt);
});
console.log(4); // ------2번실행