function SendMail() {
    const hisName=document.getElementById('SenderName').value;
    const hisMail = document.getElementById('SenderMail').value;
    const bodyMessage = document.getElementById('messBody').value;

    if (hisMail==''||bodyMessage=='') {
        swal("Error!",'Empty values' , "error");
        return;
    }


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "RuppinCgroup41@gmail.com",
        Password : "CA3FCC1F7DF0B02FBBFD989AC0F89CA2587A",
        To : 'RuppinCgroup41@gmail.com',
        From : 'RuppinCgroup41@gmail.com',
        Subject : 'Dear Team You got new message From '+ hisName,
        Body : '<P style="font-size:50px">From : '+hisMail+'<br>body : '+bodyMessage+'</P>'
    }).then(
      message => {console.log(message);
        if (message=='OK') {
            swal("Success!", "Your mail is sent!", "success");

        }
        else{
            swal("Error!",message , "error");

        }
    }
    );
}