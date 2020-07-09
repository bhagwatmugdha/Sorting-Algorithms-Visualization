async function bubblesort(elementList) {
  let numberOfElements = elementList.length;

  for (let outerLoop = 0; outerLoop < numberOfElements; outerLoop++) {
    for (let innerLoop = 0; innerLoop < numberOfElements - 1; innerLoop++) {
      swapIndex1 = -1;
      swapIndex2 = -1;

      comparingIndex1 = innerLoop;
      comparingIndex2 = innerLoop + 1;

      algorithmStep = 'Comparing elements: ' + elementList[comparingIndex1] + ' and ' + elementList[comparingIndex2];

      await delay(1000);

      algorithmStep = '';

      if (elementList[innerLoop + 1] < elementList[innerLoop]) {
        comparingIndex1 = -1;
        comparingIndex2 = -1;

        swapIndex1 = innerLoop;
        swapIndex2 = innerLoop + 1;

        algorithmStep = 'Swapping elements: ' + elementList[swapIndex1] + ' and ' + elementList[swapIndex2];

        swap(elementList, innerLoop, innerLoop + 1);

        await delay(1000);

        algorithmStep = '';
      }
    }
  }

  comparingIndex1 = -1;
  comparingIndex2 = -1;
  swapIndex1 = -1;
  swapIndex2 = -1;

  algorithmStep = 'Sorting complete!';

  return elementList;
}

async function optimizedbubblesort(elementList) {
  let numberOfElements = elementList.length;

  for (let outerLoop = 0; outerLoop < numberOfElements; outerLoop++) {
    let swapped = false;

    for (let innerLoop = 0; innerLoop < numberOfElements - outerLoop - 1; innerLoop++) {
      swapIndex1 = -1;
      swapIndex2 = -1;

      comparingIndex1 = innerLoop;
      comparingIndex2 = innerLoop + 1;

      algorithmStep = 'Comparing elements: ' + elementList[comparingIndex1] + ' and ' + elementList[comparingIndex2];

      await delay(1000);

      algorithmStep = '';

      if (elementList[innerLoop + 1] < elementList[innerLoop]) {
        comparingIndex1 = -1;
        comparingIndex2 = -1;

        swapIndex1 = innerLoop;
        swapIndex2 = innerLoop + 1;

        algorithmStep = 'Swapping elements: ' + elementList[swapIndex1] + ' and ' + elementList[swapIndex2];

        swap(elementList, innerLoop, innerLoop + 1);
        swapped = true;

        await delay(1000);

        algorithmStep = '';
      }
    }

    algorithmStep = "Checking whether any elements were swapped: " + swapped;
    await delay(1000);

    if (!swapped) {
      algorithmStep = 'No elements were swapped, breaking out of loop';
      await delay(1500);
      break;
    }

    algorithmStep = '';
  }

  comparingIndex1 = -1;
  comparingIndex2 = -1;
  swapIndex1 = -1;
  swapIndex2 = -1;

  algorithmStep = 'Sorting complete!';

  return elementList;
}

async function selectionsort(elementList) {
  let numberOfElements = elementList.length;

  for (let outerLoop = 0; outerLoop < numberOfElements - 1; outerLoop++) {
    comparingIndex1 = -1;
    comparingIndex2 = -1;
    swapIndex1 = -1;
    swapIndex2 = -1;

    algorithmStep = 'Searching for the minimum element';

    let minElement = outerLoop;

    for (let innerLoop = outerLoop; innerLoop < numberOfElements; innerLoop++) {
      swapIndex1 = -1;
      swapIndex2 = -1;

      comparingIndex1 = innerLoop;
      comparingIndex2 = minElement;

      algorithmStep = 'Comparing current minimum element: ' + elementList[minElement] + ' to ' + elementList[innerLoop];

      await delay(1000);

      if (elementList[innerLoop] < elementList[minElement]) {
        minElement = innerLoop;
        algorithmStep = 'New minimum element is: ' + elementList[minElement];
        await delay(1500);
      }
    }

    comparingIndex1 = -1;
    comparingIndex2 = -1;

    swapIndex1 = outerLoop;
    swapIndex2 = minElement;

    algorithmStep = 'Swapping elements: ' + elementList[outerLoop] + ' and ' + elementList[minElement];

    swap(elementList, outerLoop, minElement);

    await delay(1000);
  }

  comparingIndex1 = -1;
  comparingIndex2 = -1;
  swapIndex1 = -1;
  swapIndex2 = -1;

  algorithmStep = 'Sorting complete!';

  return elementList;
}

async function insertionsort(elementList) {
  let numberOfElements = elementList.length;

  for (let outerLoop = 1; outerLoop < numberOfElements; outerLoop++) {
    comparingIndex1 = -1;
    comparingIndex2 = -1;
    swapIndex1 = -1;
    swapIndex2 = -1;

    algorithmStep = 'Inserting ' + elementList[outerLoop] + ' into its place';
    await delay(1000);

    for (let innerLoop = outerLoop; innerLoop > 0;  innerLoop--) {
      swapIndex1 = -1;
      swapIndex2 = -1;
      
      comparingIndex1 = innerLoop;
      comparingIndex2 = innerLoop - 1;

      algorithmStep = 'Comparing elements: ' + elementList[comparingIndex1] + ' and ' + elementList[comparingIndex2];
      
      await delay(1000);
      
      if (elementList[innerLoop] < elementList[innerLoop - 1]) {
        comparingIndex1 = -1;
        comparingIndex2 = -1;

        swapIndex1 = innerLoop;
        swapIndex2 = innerLoop - 1;

        algorithmStep = 'Swapping elements: ' + elementList[swapIndex1] + ' and ' + elementList[swapIndex2];
        
        await delay(1000);
        
        swap(elementList, innerLoop, innerLoop - 1);
      } else {
        break;
      }
    }
  }

  comparingIndex1 = -1;
  comparingIndex2 = -1;
  swapIndex1 = -1;
  swapIndex2 = -1;

  algorithmStep = 'Sorting complete!';

  return elementList;
}