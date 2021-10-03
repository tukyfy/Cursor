let X_pointer = -1 ;
let Y_pointer = -1 ; 

let Custom_cursor = document.querySelector('#Custom_cursor');
let monitor = document.querySelector('.monitor');


function runA (selector , duration) {
    gsap.to(selector , {
        duration : duration,
        top : `${Y_pointer}px` ,
        left : `${X_pointer}px`
    });
}

document.onmousemove = (event)=>{
    X_pointer = event.pageX;
    Y_pointer = event.pageY;

    gsap.to('#Custom_cursor' , {
        duration : .15,
        top : `${Y_pointer}px` ,
        left : `${X_pointer}px`
    });

    runA('.dot' , 1);
    runA('.dot1' , 2);
    runA('.dot2' , 3);
    runA('.dot3' , 4);
    runA('.dot4' , 5);
    runA('.dot5' , 6); 
    runA('.dot6' , 7);
    runA('.dot7' , 8);
    runA('.dot8' , 9);
    runA('.dot9' , 10);
    runA('.dot10' , 11);
    runA('.dot11' , 12);
    runA('.dot12' , 13);
    runA('.dot13' , 14);
    runA('.dot14' , 15);
    runA('.dot15' , 2);


   /*  Custom_cursor.style.top = `${Y_pointer}px`;
    Custom_cursor.style.left = `${X_pointer}px`; */
    monitor.textContent = `X: ${X_pointer} -- Y: ${Y_pointer}`;
}