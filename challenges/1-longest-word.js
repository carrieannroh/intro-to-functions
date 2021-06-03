
function longestInList() {
    let words = ["England", "Wales", "Scotland", "Northern Ireland"]
    let longest = words[0];
    //console.log(longest);
    for (word of words) {
        if (word.length > longest);
        longest = word
    }
    return word
};

console.log(longestInList());