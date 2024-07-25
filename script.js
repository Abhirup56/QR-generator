let imgBox = document.getElementById("imgBox");
let qrimg = document.getElementById("qrimg");
let link = document.getElementById("link");
let note = document.getElementById("note");
let openlink = document.getElementById("openlink")


function generate(){
    if(link.value.length>0){
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + link.value;
        note.style.color="green";
        note.innerHTML="Your QR code is ready";

    }
    else{
        note.innerHTML="please paste a link";
        note.style.color="red";
        note.style.opacity=1;
        qrimg.src = "qr.png";
    }
}

function openQR(){
    openlink.href = link.value;
    window.open(link.value);
}
    


