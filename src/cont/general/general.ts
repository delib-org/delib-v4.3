
export function updateArray(
  oldArray: Array<any>,
  newElement: any,
  toDelete?: boolean
): Array<any> {
  try {
    if(!('id' in newElement)) throw new Error('new element is missing id')
 

    const _oldArray = [...oldArray];
    const index = _oldArray.findIndex((elm) => elm.id === newElement.id);

    if (toDelete) {
      //delete
      _oldArray.splice(index, 1);
    } else {
      //update or add
      if (index === -1) _oldArray.push(newElement);
      else _oldArray[index] = newElement;
    }
    return _oldArray;
  } catch (error) {
    console.error(error);
    return oldArray;
  }
}
