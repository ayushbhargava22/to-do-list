document.getElementById("fliter-dropdown").addEventListener("click", function(){
    var box = document.getElementById("filter-content") ;
    if(box.style.display == "none")
    {
        box.style.display = "block"
    }
    else
    {
        box.style.display = "none"
    }
}) ;

