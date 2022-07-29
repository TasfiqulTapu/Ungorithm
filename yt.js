let infiniteLoop = setInterval(()=>{
if(location.pathname == '/'){
    toggleVisibility('#chips')
    toggleVisibility('#contents')
}
if(location.pathname.startsWith('/watch')){
    toggleVisibility('#related')
    toggleVisibility('#secondary')
    // toggleVisibility('#panels')
    // toggleVisibility('#comments')   
}
if(location.pathname.startsWith('/shorts')){
    for(var i=1; i<=9; i++) {
        toggleVisibility(`#${i}`)
    }
}
},500)

function toggleVisibility(query){
    const elm = document.querySelector(query);
    elm.style.display = 'none';
    return true;
}

