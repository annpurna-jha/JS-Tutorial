// direct as well as deeply nested elements of an element are called its children

// Elements that are direct children are called child nodes => for ex - head and body are children of <html> , head and body are siblings

// descendent nodes -> all nested element , children their children and so on are descendent nodes = for ex -
{/* <div>
        <p>Child of <em> div</em></p>
        <span>child of div , & sibling of p tag</span>
</div> */}
// descendent nodes of div is - <p> , <span>  , <em> 

// access firstchild , lastchild , childNodes

console.log(document.body.firstChild);//it will give #text bcz div is after body and a space if we remove space then it will give div tag
console.log(document.body.lastChild);//it will give script tag bcz in body at last script tag is present

// it will return a collection not an array
console.log(document.body.childNodes);//it will only give all child nodes of body tag (not the child node of child nodes like <p> an <span> is child node of div so it will not given p and span tag) like text bcz of spaces , div , script

// to convert it into array to perform some operation we can do like this
let arr = Array.from(document.body.childNodes)
console.log(arr);


// following is always true
// elem.childNodes[0] === elem.firstChild; // bt elem.childNodes[0] will access all childNodes but elem.firstChild will only access one node
// elem.childNodes[elem.childNodes.length-1] === elem.lastChild;

// elem.hasChildNodes() to check whether there any child odes or not
console.log(document.body.hasChildNodes());
