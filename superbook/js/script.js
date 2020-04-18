$("#add-book-form").submit(function( event ){

    $("#addBook-Alert").addClass("hide");

    if ($("#bookInput").val() == "")
    {
        $("#addBook-Alert").removeClass("hide");
        $("#addBook-Alert").text("You did not enter anything")
    } else
    {
        $("#book-list").append("<li class='list-group-item'>" + $("#bookInput").val() + "</li>");
        $("#bookInput").val("")
    }


    event.preventDefault();
 });   

 $("#vote-form").submit(function( event ){
       var book1Votes = $("#bookVotes1").text()
       var book2Votes = $("#bookVotes2").text()
       var book3Votes = $("#bookVotes3").text()
       var book4Votes = $("#bookVotes4").text()
       var book5Votes = $("#bookVotes5").text()

       $("#vote-form").addClass("hide")
       $("#vote-alert").removeClass("hide")
       
       if ($("#heroMovieRadio1").is(":checked"))
       {
           book1Votes = parseInt(book1Votes) + 1 
           $("#bookVotes1").text(book1Votes)
       }
       else  if ($("#heroMovieRadio2").is(":checked"))
       {
           book2Votes = parseInt(book2Votes) + 1 
           $("#bookVotes2").text(book2Votes)
       }
       else   if ($("#heroMovieRadio3").is(":checked"))
       {
           book3Votes = parseInt(book3Votes) + 1 
           $("#bookVotes3").text(book3Votes)
       }
       else  if ($("#heroMovieRadio4").is(":checked"))
       {
           book4Votes = parseInt(book4Votes) + 1 
           $("#bookVotes4").text(book4Votes)
       }
       else  if ($("#heroMovieRadio5").is(":checked"))
       {
           book5Votes = parseInt(book5Votes) + 1 
           $("#bookVotes5").text(book5Votes)
       }


    event.preventDefault();

});   


$("#search-form").submit(function( event ){

    if($("#search-box-input").val() == "" )
    {

    }
    else if ($("#search-box-input").val().toLowerCase() == "you" )
    {
        alert("You are awesome!")
    }
    else
    {
        alert("Your search for " + $("#search-box-input").val() + "returned no results. Try something else." )
    }

    event.preventDefault();

});   


$("#form-login").submit(function( event ){


    if ($("#loginEmail").val() == "" || $("#loginPassword").val() == "")
    {
        $("#login-alert").removeClass("hide")
    }
    else
    {
        if ($("#rememberLoginCheck").is(":checked"))
        {
            var email  = $("#loginEmail").text()
            var password = $("#loginPassword").text()
        }
        else 
        {
            $("#loginEmail").val("")
            $("#loginPassword").val("")
        }
        $("#overlay").addClass("hide")
    }
    event.preventDefault();

});   

function logout()
{
    $("#overlay").removeClass("hide")
    $("#loginEmail").val(email)
    $("#loginPassword").val(password)
}

