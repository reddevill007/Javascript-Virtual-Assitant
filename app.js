const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const audio = document.getElementById('audio');

const greetings = [
    'Hello boss',
    'Hello sir',
    'hi master'
];

var music = new Array(
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3"
);

const texts = document.querySelector('.text');

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

window.addEventListener("load", function () {
    // alert("Activate inertia");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
    speak('Activating inertia');
    speak('going online');
    wishMe();
});

const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric"});
document.getElementById("CurDate").innerHTML = date;

const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
document.getElementById("CurTime").innerHTML = time;


recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    recognition.start();
});


function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what you said';

    if (message.includes('hi') || message.includes('hello') || message.includes('hii') || message.includes('hey')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    else if (message.includes('how are you') || message.includes('whats up')) {
        const finalText = 'I am fine boss tell me how can i help you';
        speech.text = finalText;
    }

    else if (message.includes('reality')) {
        const finalText = 'Wake up to reality. Nothing ever goes as planned in this world. The longer you live,the more you realize that only pain, suffering and futility in this reality. In this world, wherever there is light, there are always shadows. As long as there is a concept of victory, the vanquished will also exist. The selfish desire for peace give rise to war. And hatred is born in order to protect love. These are all nexuses, causal relationships that cannot be separated';
        speech.text = finalText;
    }

    else if (message.includes('name')) {
        const finalText = 'My name is inertia';
        speech.text = finalText;
    }

    else if (message.includes('play music')) {
        const finalText = 'Playing music';
        speech.text = finalText;
        audio.src = music[Math.floor(Math.random() * music.length)];
        audio.play();
    }

    else if (message.includes('pause music')) {
        audio.pause();
        const finalText = 'Music paused';
        speech.text = finalText;
    }

    else if (message.includes('open google')) {
        window.open(`http://google.com`, "_blank");
        const finalText = 'opening google';
        speech.text = finalText;
    }

    else if (message.includes('open instagram')) {
        window.open(`http://instagram.com`, "_blank");
        const finalText = 'opening google';
        speech.text = finalText;
    }

    else if (message.includes('open youtube')) {
        window.open(`http://youtube.com`, "_blank");
        const finalText = 'opening google';
        speech.text = finalText;
    }

    else if (message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('why')) {
        window.open(`http://google.com/search?q=${message.replace("search", "")}`, "_blank");
        const finalText = "This is what i found on google related to " + message;
        speech.text = finalText;
    }

    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "showing result for " + message.replace("wikipedia", "") + " on wikipedia";
        speech.text = finalText;
    }

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined,  { month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if (message.includes('open calculator') || message.includes('calculate')) {
        window.open('Calculator:///');
        const finalText = "opening calculator";
        speech.text = finalText;
    }

    else {
        window.open(`http://google.com/search?q=${message.replace("search", "")}`, "_blank");
        const finalText = "I found some information for " + message + "on Google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

function speak(sentence) {
    const utterance = new SpeechSynthesisUtterance(sentence)

    utterance.rate = 1
    utterance.pitch = 1

    window.speechSynthesis.speak(utterance)
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        speak('Good Morning boss');
    } 
    else if (hr == 12) {
        speak('Good Noon boss');
    } 
    else if (hr >= 12 && hr <= 17) {
        speak('Good Afternoon boss');
    } 
    else {
        speak('Good Evening boss');
    }
}
