const userInfo = {
    // name: "",
    // primaryEmail: "",
    additionalEmails: [],
    additionalPhone: []
    // phone: ""
};




const pushData = () => {
    // get value the input text
    let inputtext = document.getElementById('name').value;
    userInfo.name = inputtext;
    // primary email
    let email = document.getElementById('email').value;
    userInfo.primaryEmail = email;

    // additional email 
    const additionalEmails = document.getElementsByName("additionalEmail")
    for (let i = 0; i < additionalEmails.length; i++) {
        if (additionalEmails[i].value) {
            userInfo.additionalEmails.push(additionalEmails[i].value)
        }
    }

    // additional phone
    const additionalPhone = document.getElementsByName('additionalPhone');
    for (let i = 0; i < additionalPhone.length; i++) {
        if (additionalPhone[i].value) {
            userInfo.additionalPhone.push(additionalPhone[i].value)

        }
    }





    // primary phone
    let phoneNumber = document.getElementById('phone').value;
    userInfo.phone = phoneNumber;

    // append data to the array
    console.log(userInfo)

    //    show dispay code
    let display = document.getElementById('display');
    let row = '<tr>';
    row += `<td>${userInfo.name}</td>`
    row += `<td>${userInfo.primaryEmail}</td>`
    row += `<td>${userInfo.additionalEmails.join(', \n')}</td>`
    row += '<td>' + userInfo.additionalPhone.join(', \n') + "</td>"
    // for(let i = 0 ; i<userInfo.additionalEmails.length; i++){
    //     row += userInfo.additionalEmails[i] + ', ';
    // }
    row += `<td>${userInfo.phone}</td>`

    // display additional emaail show
    display.innerHTML += row

    if (userInfo.additionalEmails.length > 0) {
        document.getElementById("addEmails").style.removeProperty("display")
    }

    if (userInfo.additionalPhone.length > 0) {
        document.getElementById("addPhones").style.removeProperty("display")
    }
    
    document.getElementById('myform').reset();


}

function createEmail() {
    // <div class=" d-flex col-md-12">
    //                 <input class="form-control" id="email" type="email" name="email"
    //                     placeholder="E-mail Address" required>
    //                 <button onclick="createemail()">+</button>
    //             </div>

    let eparent = document.getElementById('inputbtn');

    let container = document.createElement('div')
    container.setAttribute("class", "d-flex col-md-12")


    let inputemail = document.createElement('input');
    inputemail.type = "email";
    inputemail.name = "additionalEmail";
    inputemail.placeholder = "enter your email";

    let removeBtn = document.createElement('button')
    removeBtn.innerHTML = '-'
    removeBtn.setAttribute('onclick', 'removeEmailField()')

    container.append(inputemail)
    container.append(removeBtn)
    eparent.append(container);
}

function removeEmailField() {
    event.target.parentNode.remove()
}



function createPhone() {
    const phoneParent = document.getElementById('addphone');

    let inputPhone = document.createElement('input')
    inputPhone.type = "number";
    inputPhone.placeholder = "enter your extra phone";
    inputPhone.name = 'additionalPhone';
    phoneParent.append(inputPhone);



}

