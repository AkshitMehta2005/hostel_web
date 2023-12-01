const firebaseConfig = {
    apiKey: "AIzaSyDm_6dfAbs3dnW_NCew6CpzDEYeTkD1EpE",
    authDomain: "hostelleaveformnew.firebaseapp.com",
    databaseURL: "https://hostelleaveformnew-default-rtdb.firebaseio.com",
    projectId: "hostelleaveformnew",
    storageBucket: "hostelleaveformnew.appspot.com",
    messagingSenderId: "880538258215",
    appId: "1:880538258215:web:ad65152ad187fccd057702"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var hostelleaveformDB = firebase.database().ref("hostelleaveform");
  
  document.getElementById("hostelleaveform").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("hostelleaveform").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newhostelleaveform= hostelleaveformDB.push();
  
    newhostelleaveform.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };