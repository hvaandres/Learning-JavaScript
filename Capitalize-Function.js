const betterCapital = str => {
    const words = str.split(" ");
    return words.map(word => word[0].toUpperCase () + word.slice(1)).join(" ");
};

const shortSentence = "Hello world";
betterCapital(shortSentence);

const longSentence = "the quick brown fox jumped over the lazy dog";
betterCapital(longSentence);
