import chillHop from "../assets/data";

const Music = () => {
    const musicData = chillHop();

    // update active music based on id
    // const updatedMusic = musicData.map((music) => {
    //     music.active = false;
    //     if (music.id === id) music.active = true;
    //     return music;
    // });

    const activeMusic = musicData.find((music) => music.active === true);
    const initID = activeMusic.id;
    console.log(initID);

    // playMusic
    const playMusic = function () {
        console.log("Music started playing!", this.currentSong);
    };

    // pauseMusic
    const pauseMusic = function () {
        console.log("Music paused!");
    };

    // stopMusic
    const stopMusic = function () {
        console.log("Music stopped!");
    };

    // resumeMusic
    const resumeMusic = function () {
        console.log("Music resumed!");
    };

    // music player state machine
    const musicPlayerMachine = {
        musicData: musicData,
        currentState: "stopped",
        currentSong: initID,
        transition(event, song = initID) {
            switch (this.currentState) {
                case "stopped":
                    if (event === "PLAY") {
                        this.currentState = "playing";
                        this.currentSong = song;
                        this.playMusic();
                    }
                    break;
                case "playing":
                    if (event === "PAUSE") {
                        this.currentState = "paused";
                        this.pauseMusic();
                    } else if (event === "STOP") {
                        this.currentState = "stopped";
                        this.stopMusic();
                    }
                    break;
                case "paused":
                    if (event === "PLAY") {
                        this.currentState = "playing";
                        this.resumeMusic();
                    } else if (event === "STOP") {
                        this.currentState = "stopped";
                        this.stopMusic();
                    }
                    break;
            }
        },
        playMusic,
        pauseMusic,
        stopMusic,
        resumeMusic
    };

    return musicPlayerMachine;
};

export default Music;
