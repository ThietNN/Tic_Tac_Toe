let game = document.getElementById("game");
let board = [];
let i;
let j;
let data = "";

for (i=0;i<3;i++) {
    board[i]=[".",".","."]
}
for (i=0;i<3;i++){
    data += "<br/>"
    for(j=0;j<3;j++){
        data += board[i][j] + "&nbsp;&nbsp"
    }
}
game.innerHTML=data;

function changeValue() {
    let positionX = Number(prompt("nhập số hàng"));
    let positionY = Number(prompt("nhập số cột"));
    let XO = prompt("Nhập X hoặc O");
    data = " "
    board[positionX - 1][positionY - 1] = XO
    for (i = 0; i < 3; i++) {
        data += "<br/>"
        for (j = 0; j < 3; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp"
        }
    }
    game.innerHTML = data;
}

