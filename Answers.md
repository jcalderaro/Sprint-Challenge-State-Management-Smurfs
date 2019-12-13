/* ------------------------------------------------------------------------------- */

1. What problem does the context API help solve?

> It helps to solve the problem of passing created global variables around in a React app. 
> This is because you can bypass having to do Prop Drilling (passing props down through each file). 
> Overall it works to secure a cleaner work State.

1. In your own words, (p1) describe `actions`, `reducers` and the `store` and their role in Redux. 
(p2) What does each piece do? (p3) Why is the store known as a 'single source of truth' in a redux application?

> Actions- p1. They hold information that sends data from the application to the store.
> Actions- p2. It performs a feature, like - Add, Remove, Toggle. 
> Actions- p3. Its role: contain properties related to some action that happens inside App.

> Reducers- p1. They take the previous state and action, and generally return the next state.
> Reducers- p2. It's kind of like packaging like items together. 
> Reducers- p3. Takes in 2 arguments, the current State and Action, then returns new updated objects on both arguments.

> Store- p1. This is the storage unit for our application state.
> Store- p2. In general it stores data. 
> Store- p3. A Single Javascript object. Containing our state for the entire application.

1. What is the (p1) difference between Application state and Component state? When (p2) would be a good time to use one over the other?

> The Application State : It contains the entire App contents, and can access all of the components. 
> The Component State   : Only has the contents of its components. It can also only access itself. 
> You would choose one over the other based on how many files are needing to be accessed. 

1. Describe `redux-thunk`, (p1) what does it allow us to do? (p2) How does it change our `action-creators`?

> Redux-Thunk is (p1) A Node-Package that can make the flow asynchornous. 
> We are able to perform API calls from action creators. While returning a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

> I'm still kind of torn as to what qualifies as a state management system, as well as any potential other ones out there.
> However, I am partial to using React-Redux because I find it easier to understand and follow. 
> The ability to keep states organized, especially in big projects, is something I think is super valued.

/* ------------------------------------------------------------------------------- */