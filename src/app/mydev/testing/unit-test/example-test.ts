/* base testing */
describe('myComponent', () => {
  // @ts-ignore
  let myComponent: MyComponent;

  beforeEach(() => { // вызывается перед каждый тестом it-ом
    // @ts-ignore
    component = new MyComponent();
  });
  beforeAll(() => {}); // вызывается перед всеми "it"
  afterEach(() => {}); // вызывается после завершения каждого "it"
  afterAll(() => {}); // вызывается после завершения всех "it"

  it('should ...', () => {
    const result = null;
    expect(result).toBe(1); // toBe - жёсткое соответствие
    expect(result).toContain(''); // toContain - частичное соответствие
    expect(result).toBeTruthy(); // toBeTruthy - если равно true
    expect(result).toBeFalsy(); // toBeFalsy - если равно false
  });
});
