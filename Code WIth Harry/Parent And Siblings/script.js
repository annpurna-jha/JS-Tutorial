// $0 is used to display the current element you selected on web page
// $1 is used to display the previous element you selected on web page
// $0 = $1 can change the refrence means whichever element you selected in previous will now be selected

// DOM collections are read - only
// they are live , element.childNodes variable(reference) will automatically update if childNodes of element is changed
// they are iterable using for of loop means we can iterate using for of loop

// if we do $0.childNodes on console then it will return all child nodes present inside tnat selected element

// sibling and the parent

// siblings are nodes that are children of the same parent
// for example: <head> and <body> are sibling , they have same parent <html>

// <body> is said to be the "next" or "right" sibling of <head> , <head> is said to be the "previous" or "left" sibling of body

// we can access the next and prev sibling of current element using nextSibling and previousSibling , => for ex - $0.nextSibling

// parent can be accessed using "parentNode" it will return any node like comment node , spaces as text node and many more

// parentElement will return if it is a valid element of html or tag otherwise return null
console.log(document.documentElement)// html

console.log(document.documentElement.parentNode);//return document

console.log(document.documentElement.parentElement);//return null bcz html doesn't have any valid parent element

console.log(document.body.firstChild) // return div
a = document.body.firstChild;
console.log(a.parentNode); 
console.log(a.parentElement);
console.log(a.firstChild.nextSibling);

