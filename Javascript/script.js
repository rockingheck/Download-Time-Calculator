let fileSize;
let networkSpeedInGBps;
let networkSpeed

//file size:

document.getElementById('fileSize').addEventListener('input', function() {
        getFileSize();    
});


function getFileSize() {
    fileSize = document.getElementById('fileSize').valueAsNumber;
  }

//network speed:

document.getElementById('networkSpeed').addEventListener('input', function() {
        getNetworkSpeed();
});

function getNetworkSpeed() {
    networkSpeed = document.getElementById('networkSpeed').valueAsNumber;
    if (!isNaN(networkSpeed) && networkSpeed > 0) {
        networkSpeedInGBps = networkSpeed / 1024;
    }
}

document.getElementById('submit').addEventListener('click', function() {
    getDownloadTime();
});

function getDownloadTime() {
    document.getElementById('seconds').style.display = "inline-block";
    
    if (fileSize > 0 && networkSpeedInGBps > 0) {
    
    let totalSeconds = Math.floor(fileSize / networkSpeedInGBps);
    let hours = Math.floor(totalSeconds / 3600);
    let remainingSeconds = totalSeconds % 3600
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60; 

    document.getElementById('hours').textContent = "Hours: " + hours
    document.getElementById('minutes').textContent = "Minutes: " + minutes
    document.getElementById('seconds').textContent = "Seconds: " + seconds

    document.getElementById('hours').style.display =  hours > 0 ? "inline-block" : "none"
    document.getElementById('minutes').style.display = minutes > 0 ? "inline-block" : "none"
    document.getElementById('seconds').style.display = minutes > 0 ? "inline-block" : "none"
    } else {
        document.getElementById('seconds').textContent = "Please enter both File Size and Network Speeds :)"
    }

}


