<h1>lets understand why we are building this backend server</h1>
here we will try to understand different HTTP Status code


//HTTP Status Codes
// 2xx -> Success -> Everything went fine
// 3xx -> Redirection -> Go somewhere else
// 4xx -> Cilent Error -> Something went wrong on the client side
// 5xx -> Server Error -> Something went wrong on the server side

example 
200 -> we got our response successfully
201 -> something has ben created
400 -> resoponse from cilent is not understood
403 -> there is some authenication error
404 -> something doesn't exist
500 -> server broke (database error, it might be some 3rd service failing)