
function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <=0 ){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
        var interest = principal * years * rate / 100;


        document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${interest}</mark>,<br>
    in the year <mark>${ parseInt(new Date().getFullYear()) +parseInt(years)}</mark>`
    }
}

function rangeSlider() {
    var slider = document.getElementById("slider").value;
    document.getElementById("new").innerHTML = slider;
}



