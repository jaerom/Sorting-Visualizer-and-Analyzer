var SortingAlgorithm = /** @class */ (function () {
    function SortingAlgorithm(sort) {
        this.sort = sort;
    }
    // Generates an array of numbers.
    SortingAlgorithm.prototype.generateArray = function (length, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 10; }
        var array = [];
        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * max) + min;
            array.push(randomNumber);
        }
        return array;
    };
    // Returns a copy of 'array'.
    SortingAlgorithm.prototype.makeCopy = function (array) {
        return array.slice(0);
    };
    // Checks if array is in non-decreasing order.
    SortingAlgorithm.prototype.isSorted = function (array) {
        for (var i = 0; i < array.length - 1; i++)
            if (array[i] > array[i + 1])
                return false;
        return true;
    };
    // Checks if all numbers in 'array1' are in 'array2'.
    SortingAlgorithm.prototype.sameElements = function (array1, array2) {
        // TODO: implement
        return true;
    };
    // Makes a test case and returns it.
    SortingAlgorithm.prototype.makeTestCase = function (length, outputSteps) {
        // Generate an array and sort it.
        var array = this.generateArray(length);
        var output = this.sort(this.makeCopy(array), outputSteps);
        // Check if sorted and same elements in both arrays.
        var isSorted = this.isSorted(output.array);
        var sameElements = this.sameElements(array, output.array);
        var passed = isSorted && sameElements;
        return {
            array: array,
            sortingOutput: output,
            isSorted: isSorted,
            sameElements: sameElements,
            passed: passed
        };
    };
    // Test sorting algorithm.
    SortingAlgorithm.prototype.testSorting = function (n, outputSteps) {
        var testCases = [];
        var amountPassed = 0;
        for (var i = 0; i < n; i++) {
            // Make test case.
            var testCase = this.makeTestCase(i, outputSteps);
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
    };
    return SortingAlgorithm;
}());
function bubbleSort(list, outputSteps) {
    var steps = new Array();
    if (outputSteps)
        steps.push(list.slice(0));
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length; j++) {
            if (list[j] > list[j + 1]) {
                var temp = list[j];
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
var bubble = new SortingAlgorithm(bubbleSort);
