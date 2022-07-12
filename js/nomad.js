// object 선언
const player = {
	name : "John",
	point : 100,
	fat : true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.lastName = "potato";
//const로 선언? player = false; (X)
//object의 한 요소를 수정하는 것이기 때문에 문제 X
player.fat = false;
console.log(player);