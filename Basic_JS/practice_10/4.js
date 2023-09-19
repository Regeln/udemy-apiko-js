function calculateWordsInString(string) {
    const wordsArray = string.split(/\s+/);
    console.log(wordsArray.length);
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");