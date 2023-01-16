// A simple arra to store goods in a shop


//we've created a container/array called books
// And we did not specify the lenght, so meaning we can keep adding to it

var books =[];

const lecturers = new Array("Appiahene", "Quayson", "Songose");

books[0]='ego is the enemy';
books[1]='rich dad poor dad';


//lets try printing out some values from our books array
console.log(books[0]);


//lets try printing out some values from our lecturers array
//we can create an html file and show the content of the array on the site

//document.getElementById("demo").innerHTML = lecturers;

const  ages=[3,2,5,78,91];

//arranging the elements in the array in ascending order
var sorting = ages.sort(function(a,b){ return b - a});


//arranging the elements in the array in descending order
var descend = ages.sort(function(a,b){ return a - b});

//reversing the elements in the array
var reversing = ages.reverse();



console.log(sorting);

console.log(descend);

console.log(reversing);

//we can sort arrays in random numbers too.. the best is by using the fisher iray method

function randsort(){
    for(let i = ages.length-1; i > 0; i--){
      let j = Math.floor(Math.random() * (i+1));
      let k = ages[i];
      ages[i] = ages[j];
      ages[j] = k;
    }

    console.log(" the random values "+ ages);
}

randsort();
