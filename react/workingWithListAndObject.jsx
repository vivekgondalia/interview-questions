import React, {useState} from 'react';

const calls = [
  {name: "Jaime", numOfCalls: 7},
  {name: "Anna", numOfCalls: 2},
  {name: "Sam", numOfCalls: 3},
  {name: "Tony", numOfCalls: 8},
  {name: "Jaime", numOfCalls: 7},
  {name: "Anna", numOfCalls: 1},
  {name: "Sam", numOfCalls: 16},
  {name: "Tony", numOfCalls: 1},
  {name: "James", numOfCalls: 1},
];

/**
	Problem : Given above calls list. Identify, who called you the most. And then, apply search functionality for the list.
*/

//STEP 1: Reduce the list so we have total numOfCalls per person 
const totalCallsPerPerson = calls.reduce((callsByName, item) => {
  const currentName = item.name;

  if(callsByName.hasOwnProperty(currentName)){
    callsByName[currentName] = callsByName[currentName] + item.numOfCalls;
  } else {
    callsByName[currentName] = item.numOfCalls;
  }

  return callsByName;
}, {});;

console.log("Reduced List : " + totalCallsPerPerson);

//Step 2: Modify Object into a List for sorting 
const sortedArray = [];

for(const name in totalCallsPerPerson) {
  sortedArray.push({name: name, numOfCalls: totalCallsPerPerson[name]});
}

//Step 3: Apply array sorting
//sort() - returns a number -ve if a < b, +ve if a > b, ZERO if a = b
sortedArray.sort((a, b) => {
  return b.numOfCalls - a.numOfCalls;
});

export function App(props) {
	//Step 4: Use filter method to enable search on the list of calls
	const [searchTerm, setSearchTerm] = useState('');
	const filteredArray = sortedArray.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
	console.log(filteredArray);

	const listOfCalls = filteredArray.map((item, index) => {
		return <li key={index}>{item.name} : {item.numOfCalls}</li>;
	});

	return (
		<div className='App'>
			<input type="text" name="search" onChange={(e) => setSearchTerm(e.target.value)} />
			<ul>{listOfCalls}</ul>
		</div>
	);
}
