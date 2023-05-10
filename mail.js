const firebaseConfig = {
    apiKey: "AIzaSyCMfRvpHDviRS0Jyb6fxo31Nslrk6ca4gw",
    authDomain: "contactform-17af7.firebaseapp.com",
    databaseURL: "https://contactform-17af7-default-rtdb.firebaseio.com",
    projectId: "contactform-17af7",
    storageBucket: "contactform-17af7.appspot.com",
    messagingSenderId: "13944586362",
    appId: "1:13944586362:web:18dcdb0955d40c2dab7bc3"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
var ContactformDB = firebase.database().ref("Contactform");

document.getElementById("contact").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var number = getElementVal("number");
  var subject = getElementVal("subject");

  var msgcontent = getElementVal("msgcontent");

  saveMessages(name, emailid, number, subject, msgcontent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contact").reset();
}

const saveMessages = (name, emailid, number, subject, msgcontent) => {
  var newContactform = ContactformDB.push();

  newContactform.set({
    name: name,
    emailid: emailid,
    number: number,
    subject: subject,
    msgcontent: msgcontent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};