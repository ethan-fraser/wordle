import React from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

// const fiveletterwords = ["abide", "about", "above", "added", "afore", "after", "again", "agony", "agree", "alarm", "alice", "alive", "allow", "alone", "along", "aloud", "among", "andoh", "anger", "angry", "annoy", "argue", "arrow", "arrum", "asked", "avoid", "backs", "baked", "balls", "banks", "beast", "began", "begin", "begun", "being", "below", "bills", "birds", "blame", "blown", "blows", "bones", "books", "boots", "bough", "bound", "bowed", "boxed", "brass", "brave", "break", "bring", "broke", "brown", "brush", "burnt", "burst", "bythe", "cakes", "cards", "cares", "carry", "catch", "cause", "cheap", "chief", "child", "choke", "chose", "civil", "claws", "clean", "clear", "climb", "clock", "close", "clubs", "coast", "coils", "comes", "could", "court", "crash", "crazy", "creep", "crept", "cried", "cries", "cross", "crowd", "crown", "curls", "curly", "dance", "dates", "dears", "delay", "didnt", "dinah", "doing", "doori", "doors", "doubt", "dream", "dried", "drink", "drive", "drunk", "dunce", "eager", "earls", "earth", "eaten", "edgar", "edwin", "elbow", "elses", "elsie", "empty", "enjoy", "every", "exact", "faces", "faint", "fancy", "fetch", "field", "fifth", "fight", "fills", "finds", "first", "fixed", "flame", "flock", "floor", "flown", "flung", "found", "front", "funny", "games", "giddy", "girls", "given", "glass", "globe", "going", "goose", "grand", "grant", "grass", "grave", "gravy", "great", "green", "grief", "grins", "growl", "grown", "grunt", "guard", "guess", "guilt", "hadnt", "hands", "happy", "hasnt", "haste", "hatec", "hated", "heads", "heard", "heart", "heavy", "hedge", "heels", "himit", "hoped", "hours", "house", "hurry", "idiot", "isthe", "judge", "juror", "kills", "kings", "knave", "kneel", "knelt", "knife", "knock", "known", "knows", "label", "lacie", "lamps", "large", "later", "latin", "laugh", "leant", "learn", "least", "leave", "ledge", "liked", "likes", "lines", "lived", "lives", "locks", "loose", "lower", "lying", "mabel", "madat", "magic", "makes", "march", "maybe", "maynt", "means", "meant", "might", "miles", "minea", "mixed", "month", "moral", "mouse", "mouth", "moved", "music", "names", "nasty", "needs", "never", "night", "noise", "nurse", "offer", "often", "older", "order", "other", "ought", "paint", "pairs", "paper", "paris", "parts", "party", "pause", "pence", "piece", "pinch", "place", "plate", "poker", "prize", "proud", "prove", "puppy", "queen", "queer", "quick", "quiet", "quite", "raven", "reach", "ready", "reply", "ridge", "right", "riper", "rises", "roast", "roots", "roses", "round", "royal", "rules", "sadly", "sands", "saves", "scaly", "seals", "seems", "sends", "sense", "seven", "shade", "shake", "shall", "shant", "shape", "share", "shark", "sharp", "shell", "shiny", "shock", "shoes", "shook", "shore", "short", "shyly", "sides", "sight", "since", "sizes", "skirt", "slate", "sleep", "small", "smile", "smoke", "snail", "snout", "soand", "soles", "solid", "sorry", "sorts", "sound", "speak", "speed", "spell", "spite", "spoke", "spoon", "stalk", "stand", "state", "stays", "stick", "stiff", "still", "stole", "stood", "stool", "stoop", "story", "stuff", "sugar", "sulky", "table", "tails", "taken", "takes", "tarts", "taste", "tears", "teeth", "tells", "terms", "thank", "thats", "their", "themi", "theni", "there", "these", "theyd", "thick", "thing", "think", "those", "three", "threw", "throw", "thump", "tight", "times", "timid", "tired", "toast", "today", "tones", "touch", "treat", "trees", "trial", "tried", "trims", "truth", "turns", "twice", "twist", "under", "until", "upset", "using", "usual", "vague", "verse", "visit", "voice", "waist", "wants", "wasnt", "waste", "watch", "water", "weeks", "whats", "where", "which", "while", "white", "whole", "whose", "wider", "wings", "woman", "words", "works", "world", "worry", "worse", "worth", "would", "write", "wrong", "wrote", "yards", "years", "yetoh", "youll", "young", "youre", "yours", "youth", "youve"]

function cellFactory() {
    return {
        evaluation: "empty",
        value: "",
    }
}

function keyboardFactory() {
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
    ]
    const rows = keys.map((row, i) => {
        return row.map((key, j) => {
                return {
                    value: key,
                    state: "empty"
                }
            });
    });

    return rows
}

class Game extends React.Component {

    constructor() {
        super();
        this.state = {
            cells: [],
            keys: [],
            correctWord: "abide",
        };
        for (let i = 0; i < 6; i++) {
            let temp = [];
            for (let i = 0; i < 5; i++) {
                temp.push(cellFactory())
            }
            this.state.cells.push(temp);
        }
        this.state.keys = keyboardFactory();

        this.boardRef = React.createRef();
    }

    render() {
        return (
            <div className="w-screen h-screen bg-grey grid grid-cols-1 content-evenly">
                <Board ref={this.boardRef} cells={this.state.cells} />
                <Keyboard boardRef={this.boardRef} keys={this.state.keys} sendKey={this.sendKey}/>
            </div>
        );
    }
}

export default Game;
