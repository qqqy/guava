import App from "../App"
import ContextTesting from "../components/ContextTesting"


function stuff(){
  return 'hello'
}


describe('This is for stuff and junk' , () => {
  test("Should say 'hello'" , () => {
    expect(typeof stuff()).toBe("string")
  }),
  test("App is a function" , () => {
    expect(typeof App).toBe("function")
  }),
  test("ContextTesting is Class" , () => {
    expect(ContextTesting).toBeInstanceOf(Function)
  }),
  test("ContextTesting had Render Method" , () => {
    expect(new ContextTesting().render).toBeInstanceOf(Function)
    expect(new ContextTesting().render()).toBeInstanceOf(Object)
  })
})