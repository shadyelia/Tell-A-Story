import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatDate"
})
export class FormatDatePipe implements PipeTransform {
  transform(joined: string) {
    return new Date(joined).toDateString();
  }
}
