function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	avg = parseFloat((sum / arr.length).toFixed(2))
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = arr[0];
  let max = arr[0];
  if(arr.length === 0){
    return 0;
  }
  for (let i=0;i<arr.length;i++){
    if(arr[i]> max){
      max = arr[i]
    }
    if(arr[i]< min){
      min = arr[i];
    }
    
      
  }
  let dif = max-min;
  return dif;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) sumEvenElement += arr[i];
		else sumOddElement += arr[i];
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);
	for (let i = 1; i < arrOfArr.length; i++) {
		const funcResult = func(...arrOfArr[i]);
		if (funcResult > maxWorkerResult){
      maxWorkerResult = funcResult;

    } 
	}
	return maxWorkerResult;
}
