const Api = "https://api.github.com/users/ElzeroWebSchool/repos";

/*
    for x of     (x === value)
        String
        array
        // NO  object 

    for x  in     (x === index)
        Array
        String
        object   (x === key)
*/
// Search =>  Cross Origin Api | Api authentication
/*
    XMLHTTPREQUEST
        request.readyState (0,1,2,3,4)
            0  =>    UNSENT
            1  =>    OPENED
            2  =>    HEADERS_RECEIVED: 
            3  =>    LOADING
            4  =>    DONE
        -----------------------
        request.responseText === request.response
            response text (html ,xml ,txt ,json)
        -------------
        request.status
            200     =>  success
            404     =>  Not Found...
        ---------------
        request.responseUrl
            get the used url in open( , url ,)   method
        ---------------
        request.onprogress = () => {} 
            on processing the request  readyState === 3 
        
*/
/*
    await           wait for and Get Promise result
*/

// getting all required elements
// function ( showTasks()  /  deleteTask() )

