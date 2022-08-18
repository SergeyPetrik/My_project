send = function(){
    let name = document.querySelector('input[name="name"]').value;
    let mail = document.querySelector('input[name="mail"]').value;
    let subject = document.querySelector('input[name="subject"]').value;
    let message = document.querySelector('textarea[name="message"]').value;
    let error_name = "";
    let error_mail = "";
    let error_subject = "";
    let error_message = "";

    if(name.length == 0){
        error_name = "The Name field cannot be empty";
    }
    else{
        if(/[^A-Z]/.test(name[0])){
            error_name = "The first letter of the Name field must be capitalized";
        }
        if(/[^A-Za-z]/.test(name)){
            error_name = "The Name field must contain ONLY latin letters";
        }
        if(/[0-9\s]/.test(name)){
            error_name = "The Name field must not contain numbers or space";
        }
    }
    if(error_name.length != 0){
        document.querySelector('input[name="name"]').style = "background-color: #ffb4b4;";
        nameDiv.innerHTML = error_name;
    }
    else{
        document.querySelector('input[name="name"]').style = "background-color: white;";
        nameDiv.innerHTML = "";
    }

    if(mail.length == 0){
        error_mail = "The Email field cannot be empty";
    }
    else{
        if(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(mail) == false){
            error_mail = "Incorrect Email addres!";
        }
    }
    if(error_mail.length != 0){
        document.querySelector('input[name="mail"]').style = "background-color: #ffb4b4;";
        mailDiv.innerHTML = error_mail;
    }
    else{
        document.querySelector('input[name="mail"]').style = "background-color: white;";
        mailDiv.innerHTML = "";
    }

    if(subject.length == 0){
        error_subject = "The subject field cannot be empty";
    }
    else{
        for(let i = 0; i < subject.length; i++){
            if(/[^A-Za-zА-Яа-я\s]/.test(subject[i]))
            {
                error_subject = "The Subject field must contain only letters";
                break;
            }
        }
    }
    if(error_subject.length != 0){
        document.querySelector('input[name="subject"]').style = "background-color: #ffb4b4;";
        subjectDiv.innerHTML = error_subject;
    }
    else{
        document.querySelector('input[name="subject"]').style = "background-color: white;";
        subjectDiv.innerHTML = "";
    }

    if(message.length == 0){
        error_message = "Write us something please";
    }
    if(error_message.length != 0){
        document.querySelector('textarea[name="message"]').style = "background-color: #ffb4b4;";
        messageDiv.innerHTML = error_message;
    }
    else{
        document.querySelector('textarea[name="message"]').style = "background-color: white;";
        messageDiv.innerHTML = "";
    }
    
    if(error_name.length == 0 && error_mail.length == 0 && error_subject.length == 0 && error_message.length == 0){
        localStorage.setItem('name', name);
        localStorage.setItem('mail', mail);
        localStorage.setItem('subject', subject);
        localStorage.setItem('message', message);
        if(subject.toLowerCase().includes("зробити замовлення") || subject.toLowerCase().includes("сделать заказ") || subject.toLowerCase().includes("make an order")){
            FunnyAni();
        }
    }
}