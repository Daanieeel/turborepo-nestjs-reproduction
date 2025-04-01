import { Injectable } from '@nestjs/common';
import { TestObject } from '@repo/types';

@Injectable()
export class AppService {
  getHello() {
    return TestObject;
  }
}
