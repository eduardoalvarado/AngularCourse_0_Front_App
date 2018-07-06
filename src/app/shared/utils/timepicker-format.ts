/**
 * Interface for the structure of the native model of NgbTimepicker
 */
interface TimeStructure {
  hour: number;
  minute: number;
  second: number;
}

/**
 * Left-pads single-digit number with 0, to format 6 as '06', for example
 */
function pad(number): string {
  return number < 10 ? `0${number}` : number;
}

/**
 * Tests if two TimeStructure are both falsy, or equal
 */
function equal(t1: TimeStructure, t2: TimeStructure): boolean {
  if (!t1) {
    return !t2;
  }
  return (!t1 && !t2) || (t1 && t2 && t1.hour === t2.hour && t1.minute === t2.minute && t1.second === t2.second);
}

/**
 * Class allowing to transform a TimeStructure to a string, and vice-versa.
 */
export class NgbdTimepickerFormat {
  private currentValue: TimeStructure;

  toStructure(timeAsString: string): TimeStructure {
    if (!timeAsString) {
      this.currentValue = null;
    } else {
      const parts = timeAsString.split(':');
      const newValue = {
        hour: +parts[0],
        minute: +parts[1],
        second: +parts[2],
      };

      if (!equal(this.currentValue, newValue)) {
        this.currentValue = newValue;
      }
    }
    return this.currentValue;
  }

  fromStructure(t: TimeStructure): string { return t && `${pad(t.hour)}:${pad(t.minute)}:${pad(t.second)}`; }
}