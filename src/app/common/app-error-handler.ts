import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler
{
  public handleError(error: any): void {
      alert('An unexpected error occurred.');
      console.log(error);
  }

}
