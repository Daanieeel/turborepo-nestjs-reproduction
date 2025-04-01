import { Injectable } from '@nestjs/common';

// importing like this works
import { TestObject, TestType } from '../../../packages/types/src';

@Injectable()
export class AppService {
  getHello(): TestType {
    return TestObject;
  }
}
