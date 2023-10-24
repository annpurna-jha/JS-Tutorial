// certain DOM elements may provide additional properties specific to their type for convenience
// table element support the following properties:
let table= document.body.firstElementChild.firstElementChild;
console.log(table);
console.log(table.rows) //collection of tr elements in the form of html collection
console.log(table.caption) //reference to <caption>
console.log(table.tHead )//reference to <thead>
console.log(table.tHead.firstElementChild )
console.log(table.tFoot) //reference to <tfoot>
console.log(table.tBodies) //collection of <tbody> elements

console.log(table.firstElementChild.nextElementSibling.rows); // it is basically tbody.rows , which is collection of <tr> inside

// tr.cells //collection of td and th
// tr can be wriiten as table.rows[0] 
console.log(table.rows[0].cells)

// tr.sectionRowIndex // index of tr inside enclosing element
// tr.rowIndex;

// td.cellIndex //no. of cells inside enclosing <tr>

console.log(typeof document);//object

