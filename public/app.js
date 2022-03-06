//Unique Firebase Object
var  firebaseConfig = {
    apiKey: "AIzaSyCEGp_cceCBfJC8vg8MUU-YFhuqmfTY9B8",
    authDomain: "nft-hci.firebaseapp.com",
    databaseURL: "https://nft-hci-default-rtdb.firebaseio.com",
    projectId: "nft-hci",
    storageBucket: "nft-hci.appspot.com",
    messagingSenderId: "733388433258",
    appId: "1:733388433258:web:845faacb248a7973d56713"
};

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("formData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()

    //Get Form Values
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let address = document.getElementById('address').value
    let contact = document.getElementById('contact').value


    //Save Form Data To Firebase
    db.doc().set({
        username: username,
        email: email,
        password: password,
        address: address,
        contact: contact,
    }).then(() => {
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })

    //alert
    alert("Your Form Has Been Submitted Successfully")
})


