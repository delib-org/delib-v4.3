import { TimeSchema } from "../../model/generalModel";

export function updateArray(
  oldArray: Array<any>,
  newElement: any,
  toDelete?: boolean
): Array<any> {
  try {
    if (!("id" in newElement)) throw new Error("new element is missing id");

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

export function timeParse(time: Date): string {
  try {
  
    const {error} = TimeSchema.validate(time);
    if(error) throw error;
    
    const dif = new Date().getTime() - time.getTime();
    const hourDif = Math.floor((dif/1000)/(60*60));

    return (
      `${hourDif>24?time.toDateString():''}` +
      " " +
      ("0" + time.getHours()).slice(-2) +
      ":" +
      ("0" + time.getMinutes()).slice(-2)
    );
  } catch (e) {
    console.error(e);
    return " -- ";
  }
}

export function getRandomColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}
