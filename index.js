let div = document.getElementById("videodiv");
//let apiKey = "AIzaSyD8SchgzM22v2l8-1Htpb6gn99efOaff94";

async function display(){
    document.getElementById("videodiv").innerHTML = "";
    let video= "popular%20tech%20videos"
    let res = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${video}&key=AIzaSyD8SchgzM22v2l8-1Htpb6gn99efOaff94`);
    let data = await res.json();
    for({
        id:{videoId}} of data.items){
                let videodiv = document.createElement("iframe")
                videodiv.setAttribute("class","mons")
                videodiv.src = `https://www.youtube.com/embed/${videoId}`;
                videodiv.allow='fullscreen'
                div.append(videodiv)
        }
}
display();

async function searchVideos(){
    document.getElementById("videodiv").innerHTML = "";
    let video= document.getElementById("video").value;
    let res = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${video}&key=AIzaSyD8SchgzM22v2l8-1Htpb6gn99efOaff94`);
    let data = await res.json();
    for({
        id:{videoId}} of data.items){
                let videodiv = document.createElement("iframe")
                videodiv.setAttribute("class","mons")
                videodiv.src = `https://www.youtube.com/embed/${videoId}`;
                videodiv.allow='fullscreen'
                div.append(videodiv)
        }
    
    
}

