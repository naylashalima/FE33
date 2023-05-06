const submit_button = document.querySelector('.button');
submit_button.onclick = (e) => {
    e.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const pass  = document.getElementById('pass').value;
    const cpass  = document.getElementById('cpass').value;
    
    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);

    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        swal('Opps..!', 'Kolom harus terisi!', 'error');
    }else{
        if(pass.length >= 6 && pass.length <= 20){
            if( pass !== cpass){
                swal('Opps..!', 'Password tidak sesuai!', 'error');
            }else{
                swal('Good job!', 'Berhasil Registrasi', 'success');
                setTimeout(()=>{
                    location.href = 'Login.html';
                },5000)
            }
        }else{
            swal('Opps..!', 'Masukan password minimal 6 digit!', 'error');
        }
    }
}

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();

    const emailAddress = document.getElementById('emailAddress').value;
    const passWord = document.getElementById('passWord').value;

    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if(emailAddress == "" && passWord == "") {
        swal('Opps..!', 'Kolom harus terisi', 'error');
    }else{
        if(emailAddress == Email && passWord == Password) {
            swal('Good job!', 'Login Berhasil!', 'success');
            setTimeout(()=>{
                location.href = 'https://www.google.com';
            },1000)
        }else{
            swal('Opps..!', 'Email atau Password yang anda masukan salah!', 'error')
        }
    }
}