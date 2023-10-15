import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() { }
  getHello(): any {
    return 'hello word'
  }
}
