function message(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var phone = document.getElementById('phone');
    var company = document.getElementById('company');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(name.value === '' || email.value === '' || message.value === '' || phone.value === '' || company.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            name.value = '';
            email.value = '';
            message.value = '';
            phone.value = '';
            company.value = '';
        }, 2000 );

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}