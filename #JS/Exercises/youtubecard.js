console.log("JS is initializing...");

function changeviews(views) {
    views = Number(views);

    if (views >= 1000000) {
        return "• " + (views / 1000000).toFixed(1) + "M views • ";
    }
    else if (views >= 1000) {
        return "• " + (views / 1000).toFixed(1) + "K views • ";
    }

    else {
        return "• " +views + " " + (views == 1 ? "view •" : "views •");
    }
}

function changedate(months) {
    months = Number(months);
    if (months >= 12) {
        return Math.floor(months / 12) + " " + (Math.floor(months / 12) == 1 ? "year" : "years") + " ago";
    }
    else {
        return months + " " + "months ago";
    }
}

function getDetails() {
    const title = prompt("Enter Title of the video : ");
    const channelName = prompt("Enter the channel name : ");
    const views = prompt("Enter number of views : ");
    const months = prompt("How many months old the video is : ");
    const duration = prompt("Enter duration of video (HH:MM:SS) : ");
    const thumbnail = prompt("Enter thumbnail address : ");

    return { title, channelName, views, months, duration, thumbnail };
}



function ytcard(data) {
    const container = document.getElementById("cardContainer")

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="thumbnail">
    <img src="${data.thumbnail}" alt="yt-image">
    <div class="duration">${data.duration}</div>
    </div>
    <div class = "video-info">
        <div class="title"><h3>${data.title}</h3></div>
        <div class = "meta">
        <div class="channelName">${data.channelName}</div>
        <div class="views">${changeviews(data.views)}</div>
        <div class="months">${changedate(data.months)}</div>
        </div>
        </div>
        
    `  ;
    container.appendChild(card);
}
let isTrue;
do {
    const video = getDetails();
    ytcard(video);
    isTrue = confirm("Want to add more videos?");
} while (isTrue);