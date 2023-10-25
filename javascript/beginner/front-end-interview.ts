const add = (n1: number, n2:number) => {
return n1 + n2;
}

const sum = (...numbers) => {
  return numbers.reduce((acc, currValue) => acc + currValue);
}

const stringIncludes = (a : string, b : string) {
	//check if b is in a
  return a.toLowerCase().includes(b.toLowerCase());
}

const getNames = (objArr : object[]) => {
	let tempArr = [];
  objArr.map((item) => {
  	if(item.hasOwnProperty("name") tempArr.push(item["name"]);
  })
  return tempArr;
}

const getLargestNumberIndex = (numArr : number[]) => {
	//let maxNumber = Math.max(...numArr);
 	let maxNumber=0;
  for(let i=0; i < numArr.length ; i++){
  	if(numArr[i] > maxNumber) maxNumber = numArr[i];
  }
	return numArr.indexOf(maxNumber);
}

//console.log("add : ", add(2,3));
//console.log("sum : ", sum(2,3,4,5));
//console.log("stringIncludes : ", stringIncludes("I drove to New York in a van wtih my friend", "new"));
//console.log("getNames : ", getNames([{"name": "Vivek"}, {"name": "Maulik", "age": 28}, {"age" : 30}, {}]));
//console.log("getLargestNumberIndex : ", getLargestNumberIndex([7,1,4,12,9]);
