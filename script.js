// Create an audio element
const audioPlayer = new Audio("https://api.fabdl.com/spotify/download-mp3/e65420afe2705892047451ef0e50b71a");

// Function to play the audio
function playMusic() {
    audioPlayer.play()
        .then(() => {
            console.log("Music is playing.");
        })
        .catch((error) => {
            console.error("Error playing music:", error);
        });
}

// Function to pause the audio
function pauseMusic() {
    audioPlayer.pause();
    console.log("Music is paused.");
}

// Play the music when you call the playMusic function
playMusic();

// If you want to pause, you can call the pauseMusic function
// pauseMusic();
