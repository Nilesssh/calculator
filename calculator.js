var str = "";

function calc(omg) {
    let calculated = eval(str += omg) ;
    document.getElementById("string").innerHTML = str;
    document.getElementById("ans").innerHTML = calculated;
}



function hope(){
    document.getElementById("string").innerHTML = 0;
    document.getElementById("ans").innerHTML = 0;
    str = "";
}