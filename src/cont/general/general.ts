export function updateArray(oldArray:Array<any>, newElement:any):Array<any>{
    try {
      const index = oldArray.findIndex(elm=>elm.id === newElement.id);
      if(index === -1) oldArray.push(newElement)
      else oldArray[index] = newElement;
  return oldArray;
    } catch (error) {
      console.error(error);
      return oldArray;
      
    }
  }