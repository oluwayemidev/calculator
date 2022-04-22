document.addEventListener("DOMContentLoaded", () => {
    var btn = document.getElementsByTagName("input");
    var display = document.getElementById("display");

    function delNum(){
        y = display.value.slice(0,-1);
        display.value = y;
    }

    btn[1].addEventListener("click", delNum);
    btn[2].addEventListener("click", function(){display.value = ""});
    btn[3].addEventListener("click", function(){display.value += "/";});
    btn[4].addEventListener("click", function(){display.value += "+";});
    btn[5].addEventListener("click", function(){display.value += "1";});
    btn[6].addEventListener("click", function(){display.value += "2";});
    btn[7].addEventListener("click", function(){display.value += "3";});
    btn[8].addEventListener("click", function(){display.value += "-";});
    btn[9].addEventListener("click", function(){display.value += "4";});
    btn[10].addEventListener("click", function(){display.value += "5";});
    btn[11].addEventListener("click", function(){display.value += "6";});
    btn[12].addEventListener("click", function(){display.value += "*";});
    btn[13].addEventListener("click", function(){display.value += "7";});
    btn[14].addEventListener("click", function(){display.value += "8";});
    btn[15].addEventListener("click", function(){display.value += "9";});
    btn[16].addEventListener("click", function(){display.value = eval(display.value);});
    btn[17].addEventListener("click", function(){display.value += "00";});
    btn[18].addEventListener("click", function(){display.value += "0";});
    btn[19].addEventListener("click", function(){display.value += ".";});

});