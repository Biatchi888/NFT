// function onClick(){
//     alert("got clicked");
// }

// var biobtn = document.getElementById("jbio_btn");
// biobtn.addEventListener("click", function(){
//    alert("got clicked"); 
// });

//simple bio script xdddd
var bio = document.getElementById("josh_bio");
var new_bio = document.getElementById("new_bio")
var save_bio = document.getElementById("save_bio");

save_bio.addEventListener("click", function(){
    bio.innerHTML = new_bio.value;
});
