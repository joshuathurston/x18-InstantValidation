function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(userEntered.length >= 6)
  {
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameError").classList.remove("show-message");
    document.getElementById("usernameError").classList.add("hidden-message");
  }
  else
  {
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("show-message");   
  }
  if(userEntered.indexOf(' ') >= 0)
  {
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="can't contain whitespaces";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("show-message");  
  }
  
  if(passEntered != "password" && passEntered != "PASSWORD" && passEntered != userEntered)
  {
    if(passEntered.length >= 6 && passEntered.length <= 20)
    {
      document.getElementById("passwordGroup").classList.remove("has-error");
      document.getElementById("passwordGroup").classList.add("has-success");
      document.getElementById("passwordError").classList.remove("show-message");
      document.getElementById("passwordError").classList.add("hidden-message");
    }
    else
    {
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      
    }
  }
  else
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password can't be password, PASSWORD, OR " + userEntered;
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("show-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
}
