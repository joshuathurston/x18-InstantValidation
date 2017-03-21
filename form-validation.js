function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(userEntered.length >= 6)
  {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  //else if(userEntered.indexOf(' ') >= 0)
  //{
    //Turn the username items red
    //document.getElementById("usernameGroup").classList.add("has-error");
    //Show message that there is an error with the username...
    //document.getElementById("usernameError").innerHTML="Username must not contain whitespaces";
    //document.getElementById("usernameError").classList.remove("hidden-message");
    //document.getElementById("usernameError").classList.add("show-message"); 
  //{
  else
  {
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must be more than 6 Characters";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("show-message"); 
  }
  if(passEntered != "password")
  {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  else
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password Must not contain "password"";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("show-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
}
