document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const wordCountDisplay = document.getElementById('wordCount');

    textInput.addEventListener('input', function() {
        const text = textInput.value;
        const wordCount = countWords(text);
        wordCountDisplay.textContent = `Word Count: ${wordCount}`;
    });

    function countWords(text) {
        const words = text.trim().split(/\s+/);
        return words.filter(word => word.length > 0).length;
    }
});
