let ul = document.getElementsByTagName('ul')[0];
let layer = document.getElementById('layer')
console.log(ul.offsetWidth,ul.offsetHeight);
let x= ul.offsetWidth;

function Hidden(){
    if(ul.offsetLeft == 0){
        ul.style.left = -x + 'px';
        ul.style.top = -x +'px';
        ul.style.borderBottomRightRadius = '0%';
        layer.style.display = 'none';
        console.log('an')
    }
    else{
        ul.style.left = 0;
        ul.style.top = 0;
        ul.style.borderBottomRightRadius = '50%';
        layer.style.display = 'block';
        console.log('hien')
    }
}
