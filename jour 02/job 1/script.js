function citation() {
    const citationElement = document.getElementById('citation');
    console.log(citationElement.textContent);
}

document.getElementById('button').addEventListener('click', citation);