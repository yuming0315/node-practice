/*
^^...
douzone-math 파일 모듈 테스트
하나의 프로젝트 안의 모듈간 export/import

로컬 패키지 배포
    $[project-ex02] npm i ../douzone-math
    명령으로 설치 한 후 테스트
    
*/
var math = require("douzone-math");

console.log(math.PI);
console.log(math.max(150, 200, 30, 40, 50));

console.log(math.min(150, 200, 30, 40, 50));
