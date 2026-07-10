const path = document.querySelector(".draw-path");

const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

path.classList.add("animate");

const replay = document.querySelector("#replay");

replay.onclick = () => {

replay.addEventListener("click", () => {

    path.classList.remove("animate");

    void path.offsetWidth;

    path.classList.add("animate");

});

};

document.querySelector("#slow")
.addEventListener("change",(e)=>{

document.body.classList.toggle("slow",e.target.checked);

});

document.querySelector("#reduced")
.addEventListener("change",(e)=>{

document.body.classList.toggle("reduce",e.target.checked);

});

const spinner = document.querySelector(".spinner");

document.querySelector("#fix")
.addEventListener("change",(e)=>{

spinner.classList.toggle("fix",e.target.checked);

});

spinner.classList.add("fix");