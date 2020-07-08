async function bubblesort(elementList) {
  let numberOfElements = elementList.length;

  for (let outerLoop = 0; outerLoop < numberOfElements; outerLoop++) {
    for (let innerLoop = 0; innerLoop < numberOfElements - 1; innerLoop++) {
      swapIndex1 = -1;
      swapIndex2 = -1;

      comparingIndex1 = innerLoop;
      comparingIndex2 = innerLoop + 1;

      await delay(1000);

      if (elementList[innerLoop + 1] < elementList[innerLoop]) {
        comparingIndex1 = -1;
        comparingIndex2 = -1;

        swapIndex1 = innerLoop;
        swapIndex2 = innerLoop + 1;

        swap(elementList, innerLoop, innerLoop + 1);

        await delay(1000);
      }

      await delay(2000);
    }
  }

  comparingIndex1 = -1;
  comparingIndex2 = -1;
  swapIndex1 = -1;
  swapIndex2 = -1;

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

      await delay(1000);

      if (elementList[innerLoop + 1] < elementList[innerLoop]) {
        comparingIndex1 = -1;
        comparingIndex2 = -1;

        swapIndex1 = innerLoop;
        swapIndex2 = innerLoop + 1;

        swap(elementList, innerLoop, innerLoop + 1);
        swapped = true;

        await delay(1000);
      }

      await delay(2000);
    }

    if (!swapped) {
      break;
    }
  }

  comparingIndex1 = -1;
  comparingIndex2 = -1;
  swapIndex1 = -1;
  swapIndex2 = -1;

  return elementList;
}

async function selectionsort(elementList) {
  let numberOfElements = elementList.length;

  for (let outerLoop = 0; outerLoop < numberOfElements - 1; outerLoop++) {
    comparingIndex1 = -1;
    comparingIndex2 = -1;
    swapIndex1 = -1;
    swapIndex2 = -1;

    let minElement = outerLoop;

    for (let innerLoop = outerLoop; innerLoop < numberOfElements; innerLoop++) {
      swapIndex1 = -1;
      swapIndex2 = -1;

      comparingIndex1 = innerLoop;
      comparingIndex2 = minElement;

      await delay(1000);

      if (elementList[innerLoop] < elementList[minElement]) {
        minElement = innerLoop;
      }
    }

    comparingIndex1 = -1;
    comparingIndex2 = -1;

    swapIndex1 = outerLoop;
    swapIndex2 = minElement;

    swap(elementList, outerLoop, minElement);

    await delay(1000);

    await delay(2000);
  }

  comparingIndex1 = -1;
  comparingIndex2 = -1;
  swapIndex1 = -1;
  swapIndex2 = -1;

  return elementList;
}

async function insertionsort(elementList) {
  let numberOfElements = elementList.length;

  for (let outerLoop = 1; outerLoop < numberOfElements; outerLoop++) {
    comparingIndex1 = -1;
    comparingIndex2 = -1;
    swapIndex1 = -1;
    swapIndex2 = -1;

    await delay(1000);

    for (let innerLoop = outerLoop; innerLoop > 0;  innerLoop--) {
      swapIndex1 = -1;
      swapIndex2 = -1;
      
      comparingIndex1 = innerLoop;
      comparingIndex2 = innerLoop - 1;

      await delay(1000);
      
      if (elementList[innerLoop] < elementList[innerLoop - 1]) {
        comparingIndex1 = -1;
        comparingIndex2 = -1;

        swapIndex1 = innerLoop;
        swapIndex2 = innerLoop - 1;
        
        await delay(1000);
        
        swap(elementList, innerLoop, innerLoop - 1);
      } else {
        break;
      }
      
      await delay(2000);
    }
  }

  comparingIndex1 = -1;
  comparingIndex2 = -1;
  swapIndex1 = -1;
  swapIndex2 = -1;

  return elementList;
}