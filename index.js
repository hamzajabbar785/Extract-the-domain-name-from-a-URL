// Write a function that when given a URL as a string, parses out just the domain name and returns it as a
// string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


const domainName = (url) => {
    let firstSlashIndex = url.indexOf("/")
    let secondSlashIndex = url.indexOf("/", firstSlashIndex + 1) 
    if(url[secondSlashIndex + 1] === "w"){
        let firstDotIndex =  url.indexOf(".")
        let secondDotIndex = url.indexOf(".", firstDotIndex + 1)
        return url.slice(firstDotIndex + 1, secondDotIndex)
    }else if(!url[secondSlashIndex + 1]){
        return url.slice(0 , url.indexOf("."))
    }else{
        let firstDotIndex =  url.indexOf(".")
        return url.slice(secondSlashIndex + 1, firstDotIndex)
    }
}

domainName("http://www.144hub.com/carbonfive/raygun/")

//Solution 2

const domainName = (url) => {
    return url.replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0];
}

domainName("http://www.144hub.com/carbonfive/raygun/")