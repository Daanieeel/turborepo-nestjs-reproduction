import { Injectable } from '@nestjs/common';
import { TestObject } from '@repo/types';

// importing like this works

@Injectable()
export class AppService {
  getHello() {
    return TestObject;
  }
}
