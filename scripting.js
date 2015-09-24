function doFirst(){ /*gets called as soon as website loads*/
    maxBarSize=600; /*use in calculations later*/
    myMovie=document.getElementById('myMovie'); /*the video*/
    playButton=document.getElementById('playButton');
    playIcon=document.getElementById('playgly');
    bar=document.getElementById('defaultBar');
    progressBar=document.getElementById('progressBar');

    playButton.addEventListener('click', playOrPause, false); /*call when play button is pressed*/
    defaultBar.addEventListener('click', clickedBar, false); /*call when progress bar is clicked*/
}

function playOrPause(){
    if(!myMovie.paused && !myMovie.ended) { /*if movie is playing*/
            myMovie.pause(); /*built in, pauses media*/
            /*playButton.innerHTML='Play';*/ /*text on button*/
        playIcon.className='glyphicon glyphicon-play';
            window.clearInterval(updateBar); /*stop updating*/
    }else{
            myMovie.play(); /*is movie was paused or ended, play it*/
            /*playButton.innerHTML='Pause';*/ /*This line can also be used instead of the below used icon*/
        playIcon.className='glyphicon glyphicon-pause';
            updateBar=setInterval(update, 500); /*call "update" every 500 milliseconds*/
    }
}

function update(){
    if(!myMovie.ended){ /*if playing*/
            var size=parseInt(myMovie.currentTime*maxBarSize/myMovie.duration); /*calculate size of bar*/
            progressBar.style.width=size+'px'; /*change width in CSS*/
    }else{
            progressBar.style.width='0px';
            /*playButton.innerHTML='Play';*/
            playIcon.className='glyphicon glyphicon-play';
            window.clearInterval(updateBar); /*dont update when movie has ended*/
    }
}

function clickedBar(e){ /*called when progress bar is clicked*/
    if(!myMovie.paused && !myMovie.ended){ /*while playing*/
            var mouseX=e.pageX-bar.offsetLeft; /*calculate x-pos of mouse*/
            var newtime=mouseX*myMovie.duration/maxBarSize;
            myMovie.currentTime=newtime; /*start playing where they clicked*/
            progressBar.style.width=mouseX+'px'; /*change width of progress bar*/
    }
}
window.addEventListener('load', doFirst, false); /*call "doFirst" as soon as website loads*/