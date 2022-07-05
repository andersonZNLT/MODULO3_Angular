import { UpperCasePipe } from "@angular/common";
import { Pipe } from "@angular/core";

@Pipe({
  name: 'replace'
})

export class ReplacePipe {
  transform(value: string, char: string, valueToReplace: string) {
    return value.replace(char, valueToReplace);
  }
}
