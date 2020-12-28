interface sortingResults
{
	array: Array<number>,
	steps: Array<Array<number>>
}

interface testCase 
{
	array: Array<number>,
	sortingOutput: sortingResults,
	isSorted: boolean,
	sameElements: boolean,
	passed: boolean
}

interface testResults
{
	testCases: Array<testCase>,
	total: number,
	amountPassed: number,
	amountFailed: number
}

class SortingAlgorithm
{
	sort: (array: Array<number>, outputSteps?:boolean) => sortingResults
	constructor(sort: (array: Array<number>, outputSteps?:boolean) => sortingResults)
	{
		this.sort = sort;
	}

	// Generates an array of numbers.
	generateArray(length: number, min: number = 0, max: number = 10): Array<number>
	{
		let array : Array<number> = [];
		for (let i = 0; i < length; i++)
		{
			let randomNumber = Math.floor(Math.random() * max) + min;
			array.push(randomNumber);
		}
		return array;
	}

	// Returns a copy of 'array'.
	makeCopy(array: Array<number>): Array<number>
	{
		return array.slice(0);
	}

	// Checks if array is in non-decreasing order.
	isSorted(array: Array<number>): boolean
	{
		for (let i = 0; i < array.length - 1; i++)
			if (array[i] > array[i + 1])
				return false;
		return true;
	}

	// Checks if all numbers in 'array1' are in 'array2'.
	sameElements(array1: Array<number>, array2: Array<number>): boolean
	{
		// TODO: implement
		return true;
	}

	// Makes a test case and returns it.
	makeTestCase(length: number, outputSteps?: boolean): testCase
	{
		// Generate an array and sort it.
		let array: Array<number> = this.generateArray(length);
		let output: sortingResults = this.sort(this.makeCopy(array), outputSteps);

		// Check if sorted and same elements in both arrays.
		let isSorted: boolean = this.isSorted(output.array);
		let sameElements: boolean = this.sameElements(array, output.array);
		let passed: boolean = isSorted && sameElements;

		return {
			array: array,
			sortingOutput: output,
			isSorted: isSorted,
			sameElements: sameElements,
			passed: passed
		};
	}

	// Test sorting algorithm.
	testSorting(n: number, outputSteps?: boolean): testResults
	{
		let testCases: Array<testCase> = [];
		let amountPassed: number = 0;

		for (let i = 0; i < n; i++)
		{
			// Make test case.
			let testCase: testCase = this.makeTestCase(i, outputSteps);

			// Increment counter if passed.
			if (testCase.passed)
				amountPassed++;

			// Add testcase.
			testCases.push(testCase);
		}

		return {
			testCases: testCases,
			total: n,
			amountPassed: amountPassed,
			amountFailed: n - amountPassed
		};
	}
}

function bubbleSort(list: Array<number>, outputSteps?: boolean): sortingResults
{
	let steps: Array<Array<number>> = new Array();
	
	if (outputSteps)
		steps.push(list.slice(0));

	for (let i = 0; i < list.length; i++)
	{
		for (let j = 0; j < list.length; j++)
		{
			if (list[j] > list[j + 1])
			{
				let temp: number = list[j];
				list[j] = list[j + 1];
				list[j + 1] = temp;
			}

			if (outputSteps)
				steps.push(list.slice(0));
		}
	}

	return {
		array: list,
		steps: steps
	};
}
