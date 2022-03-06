//---------------------CUSTOMER FEEDBACK------------------------//
 //Unique Firebase Object
var firebaseConfig = {
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


const db = firestore.collection("fomData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()

    //Get Form Values
    let cfemail = document.getElementById('cfemail').value
    let cfname = document.getElementById('cfname').value
    let cfcontact = document.getElementById('cfcontact').value
    let cfmessage = document.getElementById('cfmessage').value


    //Save Form Data To Firebase
    db.doc().set({
        cfname: cfname,
        cfemail: cfemail,
        cfcontact: cfcontact,
        cfmessage: cfmessage,
    }).then(() => {
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })

    //alert
    alert("Your Form Has Been Submitted Successfully")
})