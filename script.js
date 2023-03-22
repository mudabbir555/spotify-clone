console.log("Welcome to spotify");
//initialize the varibles
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songItems=Array.from(document.getElementsByClassName('songitem'));


let songs=[
    {songname:"Salam-e-Ishq",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Salam-e-Ishq",Filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Salam-e-Ishq",Filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Salam-e-Ishq",Filepath:"songs/3.mp3",coverpath:"covers/4.jpg"},
    {songname:"Salam-e-Ishq",Filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Salam-e-Ishq",Filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
]
//  audioElement=new Audio('1.mp3');


//listen to events
// document.addEventListener('time')

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

}) 

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    Progress=parseInt((audioElement.currentTime/audioElement.duration*100))
    console.log(Progress);
    myprogressBar.value=Progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})