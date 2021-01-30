//enter the number of pages 
const displayNumberOfPages = document.getElementById('numberOfPages');
const numberOfPages = prompt("Enter number of pages :");
displayNumberOfPages.innerHTML = `Number of pages : ${numberOfPages}`; 

//get the entered page numbers 
const enteredPageNumbers = document.getElementById('enteredPageNumbers');
let pageNumbers = [];
let numbers = [];
for (let i = 0; i < numberOfPages; i++){
     numbers = prompt(`Enter page numbers ${i+1}`); 
    pageNumbers.push(numbers);
}
console.log(pageNumbers);
//if the numberOfPages and the length of pageNumbers match do the following ..
numberOfPages == pageNumbers.length ? enteredPageNumbers.innerHTML = `Entered page numbers : ${pageNumbers}` : enteredPageNumbers.innerHTML = `Entered page numbers : Not Valid!!`;

//enter the number of frames 
const enterFrame = prompt("Enter number of frames : ");
const enteredFrame = document.getElementById('enteredFrame');
enteredFrame.innerHTML = `Entered Frame : ${enterFrame}`;

//displaying the results 
let pageFault = 0;
let pageHit = 0;
let frame = [];
console.log(`frame = ${frame}`);
console.log(`pagenum = ${pageNumbers}`);
const refrenceString = document.getElementById('referenceString');
for (let i = 0; i < pageNumbers.length; i++) {
    if (frame.indexOf(pageNumbers[i]) != pageNumbers.indexOf(pageNumbers[i])) {
        pageFault += 1
    }
    else if (frame.indexOf(pageNumbers[i]) == pageNumbers.indexOf(pageNumbers[i])){
        pageHit += 1;
    }
    frame[i] = pageNumbers[i] 
}
const pageHits = document.getElementById('pageHit');
pageHits.innerHTML = `Page Hit = ${pageHit}`;
const pageFaults = document.getElementById('pageFault');
pageFaults.innerHTML = `Page Fault = ${pageFault}`;
console.log(`Page Faults = ${pageFault}`)
console.log(`Page Hit = ${pageHit}`)
refrenceString.innerHTML = `Refrenced String: ${frame}`;

    