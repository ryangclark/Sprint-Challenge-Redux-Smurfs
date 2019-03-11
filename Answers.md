1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`Array.map()`, `Array.filter()`, and `Array.concat()`  all allow working with immutable arrays and objects.

`Object.assign({}, newObj)` creates a copy of `newObj` with all of its properties.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The `store` is the single, centralized state that different components in different parts of the application tree can access using `redux` or `react-redux` functions that connect them to the `store`.

Components trigger `actions` as the user interacts with the program. `actions` are, well, actions. They *do* things.

`actions` then dispatch to `reducer`s, which take the result of the `action` and amend the `store` as needed.

We keep `action`s and `reducer`s separate to prevent problems.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is available to the entire application, so data that is required by different parts of the application should be held at a high level and in a single place. Component state only needs to be accessed by a single component, so it can be held that that lower level. A general practice should be to keep state as low as possible – that will lead to simpler code, and it'll likely be faster, too.

1.  What is middleware?

Middleware is code that runs between your `react` code and the `redux` code. For example, it takes in an `action`, runs some code, then returns the `action` to another function. It is a middleman.

Think of it like TSA at the airport. When I go to the airport, my goal is to get on a flight, but I need to go through TSA security first. They check my boarding pass when I get there (much like a middleware function knows there's another function to pass me to). Then they check out my stuff, and pass me onto the next thing, which is going to the gate, then I board. But if I forgot to empty my water bottle before going through security, TSA will flag me and carry out some function. After that, I can then move on again. But if I do something really bad, they'll stop me entirely, which a middleware function can do, too.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is middleware that will pass in `dispatch` to a function within a function, which is called a `thunk`. That feature allows us to perform asyncronous functions using `.then()`, etc.

1.  Which `react-redux` method links up our `components` with our `redux store`?

`connect()`