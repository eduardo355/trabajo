function error(){
    div = document.getElementById("err");
    div.style.display = "block";

    setTimeout(
        function error(){
            div = document.getElementById("err");
            div.style.display = "none";
        },2000
    )
}
