- [ ] Why would you use class component over function components (removing hooks from the question)?

A lot of legacy code was built on class components

- [ ] Name three lifecycle methods and their purposes.

constructor: Allows you to set State data

render: used to tell react to return something piece of DOM then the virtual DOM willl handle the steps to mount those DOM pieces

componentDidMount
Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

- [ ] What is the purpose of a custom hook?

to apply non visual behavior and stateful logic throughout the component.  You create them to be reusable in many areas to make your code DRY

- [ ] Why is it important to test our apps?
Surfaces bugs faster.
Reduces the risk of regressions.
Allows us to trust the code.
Makes us think about the edge cases.
Acts as a safety net when making changes or refactoring.
Acts as documentation for the code.
Encourages us to write more testable (better!) code.
