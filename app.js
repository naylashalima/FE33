const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass  = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email',email);
    localStorage.setItem('Pass',pass);
    localStorage.setItem('Cpass',cpass);

    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        swal("Opps..!", "Kolom Harus Diisi", "error");
    }
    else
    {
        if(pass !== cpass){
            swal("Opps..!", "Kata sandi tidak cocok", "error");
        }else{
            swal("Good job!", "Registrasi Berhasil!", "success");
        }
    }
}

const login = document.querySelector(".login");
login.onclick = (e) => {
    e.preventDefault();

    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;

    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if( emailAddress == "" && passWord == "") {
        swal("Opps..!", "Kolom Harus Diisi", "error");
    }else{
        if(emailAddress == Email && passWord == Password){
            swal("Good job!", "Login Berhasil!", "success");
        }else{
            swal("Opps..!", "Sepertinya ada yang salah", "error");
        }
    }
}