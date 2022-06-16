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
        request.response
        
*/

/*
    await           wait for and Get Promise result

*/

let download = document.querySelector('.download');
let input = document.querySelector('.url');


async function downloafFunction(link) {
    let fetchedData = await fetch(link);
    let fileInfo = await fetchedData.blob()
    let tempUrl = URL.createObjectURL(fileInfo);

    let downloadBtn = document.createElement('a')
    downloadBtn.setAttribute('href', tempUrl)
    downloadBtn.setAttribute('download', "filename");
    document.body.append(downloadBtn)
    downloadBtn.click();
    downloadBtn.remove();

    console.log(tempUrl)
}


download.addEventListener('click', (e) => {
    e.preventDefault();
    let url = input.value;
    downloafFunction(url)
})