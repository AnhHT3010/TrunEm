function send(){
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var pass = arr[1].value;
    if(name == ""){
        alert("Input your username");
    }
    else if(pass == ""){
        alert("Input your passwork");
    }
    else alert("Sign in successfully");
}