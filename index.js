function changeText() 
{
    var id=document.getElementsByName("button")[0].id;
    if(id==1)
    {
        document.getElementById("text").innerHTML = "I am currently learning HTML and CSS";
        document.getElementsByName("button")[0].id=0;
    }
    else
    {
        document.getElementById("text").innerHTML = "I am currently learning Javascript";
        document.getElementsByName("button")[0].id=1;
    }
}