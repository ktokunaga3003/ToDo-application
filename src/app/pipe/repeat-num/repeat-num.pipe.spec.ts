import { RepeatNumPipe } from './repeat-num.pipe';
import { pipe } from 'rxjs';

describe('RepeatNumPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatNumPipe();
    expect(pipe).toBeTruthy();
  });

  it('引数で指定した数値の長さのArrayが返ってきているかどうか', () => {
    const pipe = new RepeatNumPipe();
    const testArray = pipe.transform(1);
    expect(testArray.length).toEqual(1);
  });
});
