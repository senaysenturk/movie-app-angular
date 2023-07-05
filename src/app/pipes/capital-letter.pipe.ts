import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetter',
})
export class CapitalLetterPipe implements PipeTransform {
  transform(word: string): unknown {
    if (!word) return word;
    return word[0].toUpperCase() + word.substring(1);
  }
}
