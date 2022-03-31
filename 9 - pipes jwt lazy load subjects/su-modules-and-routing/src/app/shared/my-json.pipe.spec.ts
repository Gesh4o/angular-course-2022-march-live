import { MyJsonPipe } from './my-json.pipe';

describe('MyJsonPipe', () => {
  it('create an instance', () => {
    const pipe = new MyJsonPipe();
    expect(pipe).toBeTruthy();
  });
});
