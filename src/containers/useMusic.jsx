import { useState, useRef, useEffect } from "react";
import chillHop from "../data/data";

function useMusic () {
    const musicData = chillHop();
    const initActive = musicData.find(music => music.active === true);

    // *** states
    const [playlist, setPlaylist] = useState(musicData);
    const [activeMusic, setActiveMusic] = useState(initActive);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState();
    const [progress, setProgress] = useState();
    const audioElementRef = useRef(new Audio(activeMusic.audio));

    // *** get duration
    audioElementRef.current.addEventListener("loadedmetadata", () => {
        const minutes = Math.floor(audioElementRef.current.duration / 60);
        const seconds = Math.floor(audioElementRef.current.duration % 60);
        const formattedDuration = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        setDuration(formattedDuration);
    });

    // *** get progress
    audioElementRef.current.addEventListener("timeupdate", () => {
        const currentTime = Math.floor(audioElementRef.current.currentTime);
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        const formattedProgress = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        setProgress(formattedProgress);
    });

    // *** clear audio element
    const clearAudioElement = (audioElement) => {
        audioElement.pause();
        audioElement.src = null;
    }

    // *** update active 
    const updateActive = (newActive) => {
        playlist.map((music) => {
            music.active = false;

            if (newActive === music) {
                music.active = true
            }
        });

        return playlist;
    }

    // *** play music
    const play = () => {
        const audioElement = audioElementRef.current;

        if (audioElement.paused) {
            audioElement.play();
            setIsPlaying(true);
        } else {
            audioElement.pause();
            setIsPlaying(false);
        }
    }

    // *** prev
    const prev = () => {
        const audioElement = audioElementRef.current;
        clearAudioElement(audioElement);
        const currentIndex = playlist.findIndex((music) => music.active === true);
        const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
        const prevMusic = playlist[prevIndex];

        setPlaylist(updateActive(prevMusic));
        setActiveMusic(prevMusic);
    }

    // *** next
    const next = () => {
        const audioElement = audioElementRef.current;
        clearAudioElement(audioElement);
        const currentIndex = playlist.findIndex((music) => music.active === true);
        const nextIndex = (currentIndex + 1) % playlist.length;
        const nextMusic = playlist[nextIndex];
        
        setPlaylist(updateActive(nextMusic));
        setActiveMusic(nextMusic);
    }

    useEffect(() => {
        audioElementRef.current.src = activeMusic.audio
        if (isPlaying) {
            audioElementRef.current.play(); 
        }
    }, [activeMusic]);
    
    return { playlist, activeMusic, progress, duration, play, isPlaying, next, prev }
};

export default useMusic;
