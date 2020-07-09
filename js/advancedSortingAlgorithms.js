function choose_pivot(elementList, pivotType, left, right) {
    if (typeof (left) === 'undefined') {
        left = 0;
    }
 
    if (typeof (right) === 'undefined') {
        right = elementList.length - 1;
    }

    var pivot = null;

    if (pivotType === 'random') {
        pivot = Math.floor(Math.random() * (right - left + 1) + left);;
    } else if (pivotType === 'first') {
        pivot = left;
    } else if (pivotType === 'last') {
        pivot = right;
    } else if (pivotType === 'middle') {
        pivot = Math.round((left + right) / 2);
    }

    return pivot;
}


async function partition(elementList, pivotType, left, right) {
    var pivot = choose_pivot(elementList, pivotType, left, right);

    // pivotIndex = pivot;
    // await delay(1000);

    // console.log("here!")

    swap(elementList, pivot, right);

    // Partition the array around the pivot.
    pivot = left;
    for (var i = left; i < right; i++) {
        if (elementList[i] < elementList[right]) {
            if (i != pivot) {
                swap(elementList, i, pivot);
            }
            pivot += 1
        }
    }
    swap(elementList, right, pivot);

    return pivot;
}


async function quicksort(elementList, pivotType, left, right) {
    if (typeof (left) === 'undefined') {
        left = 0;
    }
 
    if (typeof (right) === 'undefined') {
        right = elementList.length - 1;
    }

    if (left >= right) return;

    var pivot = partition(elementList, pivotType, left, right);

    // await delay(1000);

    quicksort(elementList, pivotType, left, pivot - 1);

    quicksort(elementList, pivotType, pivot + 1, right);
}

async function quicksortmain(elementList, pivotType) {
    await quicksort(elementList, pivotType);

    return elementList;
}