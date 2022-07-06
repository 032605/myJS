const canvas = document.getElementById("jsCanvas");
const range = document.getElementById("jsRange");
const colors = document.getElementsByClassName("jsColor"); 
const modeBtn = document.getElementById("jsMode");

let drawYn=false;
let filling=false;

const ctx = canvas.getContext("2d"); // 2d모드의 그리기 객체
canvas.width = 700;	//실제 컨버스 사이즈 세팅
canvas.height = 700;

ctx.strokeStyle  = "#2c2c2c";
ctx.lineWidth = 2.5;

function mousedown(event){
	drawYn = true;	
};

//마우스 움직일 때 계속 발생 (begining point / end point 개념 X)
function mousemove(event){

	const x = event.offsetX;
	const y = event.offsetY;

	if(!drawYn){
		// 클릭하지 않으면 path만 생성됨
		ctx.beginPath();	//세션 그리기 설정
		ctx.moveTo(x, y);	// 출발점 
	} else {
		ctx.lineTo(x, y); // 도착점
		ctx.stroke();
	}
}

function stopPainting(){
	drawYn = false;
}

// 브러쉬 크기 변환
function changeRange(event){
	console.log(event.target.value);
	ctx.lineWidth = range.value;
};

// 브러쉬 색상 변환
function changeColor(event){
	const color = event.target.style.backgroundColor;
	ctx.strokeStyle  = color;
}

function onClickFillBtn(event){
	if(filling === true){
		filling = false;
		modeBtn.innerText = "Fill";
	} else{
		filling = true;
		modeBtn.innerText = "Paint";

		canvas.style.backgroundColor = 'green';
	}
}

if(canvas){
	canvas.addEventListener('mousedown', mousedown);	//클릭
	canvas.addEventListener('mousemove', mousemove);	//움직
	canvas.addEventListener('mouseup', stopPainting);
	canvas.addEventListener('mouseleave', stopPainting);
}

if(range){
	range.addEventListener('change', changeRange);	//change > input도 가능
}

//Array.from() - object로 부터 array를 만드는 메소드
Array.from(colors).forEach(color => { color.addEventListener('click', changeColor) });

if(modeBtn){
	modeBtn.addEventListener('click', onClickFillBtn);
}