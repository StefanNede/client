import {useState, useEffect} from "react"
import { GetText } from "../scripts/getText"


const getLetters = (text) => {
    let letters = []
    for (let letter of text) {
            letters.push(letter)
    }
    return letters
}

const getElements = (letters) => {
    let lettersEls = []
    for (let letter of letters) {
        if (letter === " ") {
            lettersEls.push(<div className="w-1 opacity-50 text-lg" style={{width:"0.25rem"}}>{letter}</div>)
        } else {
            lettersEls.push(<div className="text-white opacity-50 text-lg">{letter}</div>)
        }
    }
    return lettersEls
}

export default function WordsTyper({ testLength }) {
    const [text, setText] = useState("")
    let words = text.split(" ")
    let letters = getLetters(text)
    const [lettersEls, setLettersEls] = useState([])
    
    const [char, setChar] = useState(0) // holds number of total characters typed
    const [correctChars, setCorrectChars] = useState(0) // holds number of correct characters typed
    const [index, setIndex] = useState(0) // holds the index of the word the person is on
    const [letterIndex, setLetterIndex] = useState(0) // holds the index of the letter the person is on

    const [startTime, setStartTime] = useState(0)
    const [timeTaken, setTimeTaken] = useState(0)

    useEffect(() => {
        setText(GetText(testLength))
    }, [testLength])

    useEffect(() => {
        words = text.split(" ")
        letters = getLetters(text)
        setLettersEls(getElements(letters))
    }, [text])

    function checkDeleted(event) {
        // only on key up will the resulting text after the deletion be present
        // on key down will see what was there before deletion making my system not work
        if (event.key === "Backspace" || event.key === "Delete") {
            // check what is currently in the input box because they could've done ctrl+backspace which deletes everything
            let wordTyped = event.target.value.trim() // this is the word left over after the backspace
            // wordTyped = wordTyped.substring(0, wordTyped.length-1)
            const previousLengths = getPreviousLengths(words, index)
            setLetterIndex(previousLengths + wordTyped.length)
            // console.log(previousLengths, wordTyped, letterIndex)

            // change the displayed letters (green or red or white letters) to updated version
            for (let li = previousLengths+wordTyped.length; li < previousLengths + words[index].length; li++) {
                if (letters[li] !== " ") { 
                    lettersEls[li] = <div key={li} className="text-white opacity-50">{letters[li]}</div>
                }
            }
        }
    }

    function checkCorrect(event) {
        // console.log(letterIndex)
        // console.log(letters)
        if (index == 0 && startTime === 0) {
            let start = new Date();
            setStartTime(start.getTime());
        }
        if (event.key === "Backspace" || event.key === "Delete") {
            // check what is currently in the input box because they could've done ctrl+backspace which deletes everything
            let wordTyped = event.target.value.trim() // this is the word left over after the backspace
            // wordTyped = wordTyped.substring(0, wordTyped.length-1)
            const previousLengths = getPreviousLengths(words, index)
            setLetterIndex(previousLengths + wordTyped.length)
            // console.log(previousLengths, wordTyped, letterIndex)

            // change the displayed letters (green or red or white letters) to updated version
            for (let li = previousLengths+wordTyped.length; li < previousLengths + words[index].length; li++) {
                if (letters[li] !== " ") { 
                    lettersEls[li] = <div key={li} className="text-white opacity-50">{letters[li]}</div>
                }
            }
        }
        else if (event.key === " ") {
            // console.log("space pressed")
            const wordTyped = event.target.value.trim()
            if (wordTyped == words[index]) {
                setChar(char+1)
                setCorrectChars(correctChars+1)
                setLetterIndex(letterIndex+1)
                setIndex(index+1)
                event.target.value = ""
            } else {
                // make the thing that was skipped red
                const wordTyped = event.target.value.trim();
                const previousLengths = getPreviousLengths(words, index)
                for (let li = previousLengths+wordTyped.length; li < previousLengths + words[index].length; li++) {
                    console.log(li)
                    if (letters[li] !== " ") { 
                        lettersEls[li] = <div className="text-red" style={{color: "red"}}>{letters[li]}</div>
                    }
                }
                setChar(char+1)
                // setCorrectChars(correctChars+1)
                setLetterIndex(getPreviousLengths(words, index+1))
                setIndex(index+1)
                event.target.value = ""
            }
        } 
        else {
            const wordTyped = event.target.value.trim() + event.key
            let letterTyped = wordTyped.charAt(letterIndex - getPreviousLengths(words, index)) // subtract the number of spaces 
            letterTyped = event.key
            // console.log(letterTyped, letters[letterIndex])
            if (letters[letterIndex] !== " ") { 
                if (letterTyped == letters[letterIndex]) {
                    setCorrectChars(correctChars+1)
                    lettersEls[letterIndex] = <div className="text-green" style={{color: "green"}}>{letters[letterIndex]}</div>
                } else {
                    lettersEls[letterIndex] = <div className="text-red" style={{color: "red"}}>{letters[letterIndex]}</div>
                }
            }
            setChar(char+1)
            setLetterIndex(letterIndex+1)
            // auto finish if the last word is right
            // if (letterIndex === letters.length-1) {
            //     event.target.value = ""
            //     setIndex(index+1)
            // }
        }
    }

    return (
        <div className="py-20 px-11 w-[95vw]">
            <div className="flex flex-row flex-wrap">
                {lettersEls.map((letterEl, idx) => {
                    return (
                        <div>
                            {letterEl}
                        </div>
                    )
                })}
            </div>
            <input onKeyDown={() => checkCorrect(event)} onKeyUp={() => checkDeleted(event)} 
                    autoFocus className="rounded" type="text" tabIndex={0} 
                    autoComplete="off" autoCapitalize="off" autoCorrect="off" 
                    data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" list="autocompleteOff"/>
        </div>
    )
}

