import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class NotifyService {
  constructor(private toastr: ToastrService) {}

  notify(type: boolean = true, title: string = "", message: string = "") {
    if (type) {
      this.toastr.success(message, title);
    } else {
      this.toastr.error(message, title);
    }
  }
}
