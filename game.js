const game_status = document.querySelector(".game_status")
let started = false
let level1 = 0
let level = document.querySelector(".level-display")
let high_score = document.querySelector(".high_score")
let game_arr=[]
let user_arr=[]
let max_score=0
const btns = ["red","blue","yellow","green"]


document.addEventListener("keypress",function(){
    if(started == false){
        game_status.textContent="Game has been started!"
        started=true
        level_up()
        game_started()

    }
})

function btn_flash(b){
    b.classList.add("flash")
    setTimeout(function(){
        b.classList.remove("flash")
    },250)
}
function level_up(){
    level1++;
    user_arr = []
    level.textContent = `Level ${level1}`;

    let randint = Math.floor(Math.random()*4)
    let randcolor = btns[randint]
    let randcolorbtn = document.querySelector(`.${randcolor}`)
    btn_flash(randcolorbtn)
    game_arr.push(randcolor)
}

function btn_pressed(){
    btn_flash(this)
    let bb = this.classList[1]
    user_arr.push(bb)
    console.log(game_arr)
    console.log(user_arr)

    check_ans(user_arr.length-1)
    console.log(user_arr.length-1)
}

function game_started(){
    let all_btns = document.querySelectorAll(".btn")
    for(user_click of all_btns){
        user_click.addEventListener("click",btn_pressed)
    }
}

function check_ans(k){

    if(game_arr[k]===user_arr[k]){
        if(game_arr.length==user_arr.length){
        setTimeout(level_up,1000)}
    }else{
        document.body.style.backgroundColor ="red"
        setTimeout(function(){
            document.body.style.backgroundColor="white"
        },100)
        level.textContent = "Game Over! Press any button to re start"
        if (max_score<level1){
            max_score=level1
            high_score.innerHTML=`High score is <strong>${max_score}</strong>`}
        reset()
    }

}

function reset(){
    started = false
    user_arr = []
    level1 = 0
    game_arr = []
}

