function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j+1]) {
           let temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        }
        console.log (arr)
    }

bubbleSort([4, 20, 12, 10, 7, 9])

bubbleSort([0, -10, 7, 4])
bubbleSort([1, 2, 3])

  function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) { 
    for (let j = 0; j < nums.length - 1 - i; j++) { 
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  console.log(nums);
}

bubbleSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]);

function merge(arr1, arr2) {
    const results = [ ];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
    } else {
        results.push(arr2[j]);
        j++;
    }
    }
        while(i < arr1.length) {
            results.push(arr1[i]);
            i++;
        }
        while(j < arr2.length) {
            results.push(arr2[j]);
            j++;
        }
        return results
    console.log (results)
}
merge([1, 3, 4, 5], [2, 4, 6, 8])
merge([-2,-1,0,4,5,6], [-3,-2,-1,2,3,5,7,8])
merge([3,4,5], [1,2])

function mergeSort(arr) {
if(arr.length <= 1) return arr;
const mid = Math.floor(arr.length/2);
const left = mergeSort( arr.slice(0,mid));
const right = mergeSort(arr.slice(mid));
const sorted = merge(left,right)
console.log(sorted)
return merge(left,right)
}




mergeSort([4, 20, 12, 10, 7, 9])
mergeSort([0, -10, 7, 4])
mergeSort([1, 2, 3])
mergeSort([])
mergeSort
    ([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
]);

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentValue) {
            arr[j+1] = arr[j]; 
            j--;
        }
        arr[j+1] = currentValue   
    }
    console.log(arr)
    return arr
}
insertionSort([4, 20, 12, 10, 7, 9])
insertionSort([0, -10, 7, 4])
insertionSort([1, 2, 3])
insertionSort([
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
])

function selectionSort(arr) {
   const n = arr.length;
   for(let i = 0; i < n-1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < n; j++) {
        if(arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }
    if(minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}
console.log(arr)
return arr;
}
selectionSort([4, 20, 12, 10, 7, 9])
selectionSort([0, -10, 7, 4])
selectionSort([1, 2, 3])
selectionSort([
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
]);
function pivot (arr, start=0, end=arr.length-1) {
    let pivotValue = arr[start];
    let swapIdx = start;

    for(let i=start+1; i<=end; i++) {
        if(pivotValue > arr[i]) {
            swapIdx++;
            let temp = arr[swapIdx];
            arr[swapIdx] = arr[i];
            arr[i] = temp
            arr.slice(0, 3).sort((a, b) => a - b);
            arr.slice(3).sort((a, b) => a - b);

}
}

            let temp = arr[start];
            arr[start] = arr[swapIdx];
            arr[swapIdx] = temp;
            
            console.log(arr)
            return swapIdx;
        }

pivot([5, 7, 3, 1, 2, 3, 11])
pivot([4, 2, 5, 3, 6])
pivot([8, 4, 2, 5, 0, 10, 11, 12, 13, 16])

function quickSort(arr) {
    if (arr.length <= 1) { 
        return arr; 
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else { 
            right.push(arr[i]); 
        } 
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}



console.log(quickSort([4, 20, 12, 10, 7, 9]))
console.log(quickSort([0, -10, 7, 4]))
console.log(quickSort([1, 2, 3]))
console.log(quickSort([
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23,
    2, 453, 546, 75, 67, 4342, 32
]))

function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) { 
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort (nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);

        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
console.log(radixSort([8, 6, 1, 12]))
console.log(radixSort([10, 100, 1, 1000, 10000000]))
console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]))
