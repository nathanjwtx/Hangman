// XMLHTTPRequest method
// const getPuzzle = (value, callback) => { // eslint-disable-line no-unused-vars
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.status === 200 && e.target.readyState === 4) {
//             let data = JSON.parse(e.target.responseText);
//             callback(data.puzzle, undefined);
//         } else if (e.target.readyState === 4) {
//             callback('Error message', undefined);
//         }
//     });
    
//     // to specify a specific number of words put ?wordCount= on the end of the url
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${value}`);
//     request.send();
// };

// using async/await
const getPuzzleFromWeb = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error("Unable to get puzzle");
    }
};

// using promises/then
const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error;
        }
    }).then((data) => {
        return data.puzzle;
    }).catch((error) => {
        console.log(error);
    });
};