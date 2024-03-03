// utility file that returns testLength number of randomly selected words
// from the 200 most common english words which I store in english.json
import english from "./data/english.json"

export const GetText = (textLength) => {
    let res= ""
    let words = english.words
    while (textLength >= 2) {
        res += words[Math.floor(Math.random() * (words.length-1))] + " "
        textLength--
    }
    res += words[0]
    return res
}