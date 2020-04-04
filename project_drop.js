document.getElementById("project-dropdown").addEventListener("click" , function(){
    var content = document.getElementById("project-content");
        if(content.style.display == "none")
        {
            content.style.display = "block"
        }
        else{
            content.style.display = "none"
        }
}) ;