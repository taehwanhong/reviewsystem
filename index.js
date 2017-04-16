// default code for express//
// const http = require('http');
// const o = require('os');
// const express = require('express');
// const app = express()
//
// console.log(o.platform());
//
// app.get('/', function(req, res) {
//     res.send('Hello World!')
// })
//
// app.listen(3000, function() {
//     console.log('Example app listening on port 3000!')
// })

// 생활코딩 강의
const express = require('express'); //가져온 express모듈은 함수라서
const app = express(); // 이렇게 담아줘야함 이건 메뉴얼에 있다
// express를 담은 app에는 listen, get등이 있음
app.listen(3000, function(){
    console.log("connect 3000 port");
})
// listen은, 포트를 설정해서 청취함

// get 방식으로 접속. 이런 메소드를 호출

app.get('/', function(req, res){
    //get 방식으로 접속한 사람중, 홈페이지로 접속한 사람들을 고르기 위함
    //인자로 들어오는건 메뉴얼에 약속된게 있음, 첫번째는 req, 두번째는 res가 들어옴
    //그러면 get이 함수를 실행하면서 req로, 사용자가 요청한 req가 실행
    //res는 사용자의 요청에 응답에 대한 객체를 전달해 주도록 약속이 된것임
    //이런 형식의 콜백함수를 정의하면 됌
    //자 응답해보자
    res.send("<h1>hello world</h1>");
})
app.get('/login', function(req, res){
    res.send("login plx");
})