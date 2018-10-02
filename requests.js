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

const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error;
        }
    }).then((data) => {
        return data.puzzle;
    });
};