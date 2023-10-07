const myNums = [1,2,3,4,5,6,7,8,9,10]

// myNums.filter((i)=>i>4).forEach(i=>console.log(i))

// console.log(`================`);
// myNums.filter((i)=>{return i%2==0}).forEach(i=>console.log(i))

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   console.log(books);

let booksOfHistory = books.filter((bk)=>bk.genre==='History')
console.log(booksOfHistory);

// let booksPublish = books.filter(b=>{return (b.genre==='History' &&
//  2000>=b.publish)})
// console.log(booksPublish);


