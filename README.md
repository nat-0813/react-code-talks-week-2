# react code talks week 2

To make both MyButton components display the same count and update together, you need to move the state from the individual buttons “upwards” to the closest component containing all of them.
Now when you click either button, the count in MyApp will change, which will change both of the counts in MyButton.

Allow stateful logic in functional components - Hooks like useState and useEffect let you manage state and side effects in function components. Previously this was only possible in class components.
Share logic between components - Custom Hooks allow you to extract reusable stateful logic and share it between components.
Simplified code - Hooks avoid the need for this keyword, binding event handlers, and connecting lifecycle methods in classes. The code tends to be more concise and easy to understand.
Flexible - Hooks fully cover all use cases for classes, but are more flexible.
No, Hooks cannot be used in class components. They were designed as an alternative to classes.

Some other widely used built-in hooks include:
useContext - For accessing React context
useReducer - Alternative to useState for more complex state logic
useCallback - Returns memoized callback functions
useMemo - Returns memoized values
useRef - Gives access to a mutable ref object
useImperativeHandle - Customize exposed instance value in useRef
useLayoutEffect - Fires synchronously after render
There are also many custom Hooks created for specific use cases like forms, animation, asynchronous calls, etc. The flexibility of hooks allows creating reusable logic.
