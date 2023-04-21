# React Minute Details - TextUtilsApp

1. What does "import A, {B, C} from 'module_name' means?

- It basically means that A is something that is being exported as default from the module_name. And {B,C} are exported in the same way they are being imported from the module_name.
- You can export only one variable as default while unlimited variables as non-default. Further we can also import default export with different name. But for {B,C} we need to use {B as But, C}

<br />

2. Some errors are shown in console while others are shown in terminals. So check both of them!

<br />

3. Using let and var has a different. If I say, let a = "mehul" then I wont be able to say let a = "Kuck" in some other line of the javascript file (gives error). But with var it is possible as it overrides the value created in the previous line. This means if we say, var a = "mehul" and then var a = "Kuck", now 'a' will have the value "Kuck" and no error is shown.

<br />

4. Whenever we need to use Javascript inside JSX, we WILL REQUIRE the use of curly braces or {}. So it is not randomly coming anywhere as I used to think before. Using javascript inside JSX requires the use of {}. Further, if we need to write an object in JSX like in case of styling, then we write it as {{color: 'red'}} because outer curly braces are for javascript and inner curly braces are for the styling object.

<br />

5. We may also use template literals inside JSX by using backticks and then ${}. ```For ex: className={`bg-dark text-${theme}`}```. Here we again used curly braces (the outer ones) since the inner part is javascript.

<br />

6. For props, we can define the propTypes and also the defaultProps by using the module 'prop-types'

<br />

7. Whenever you use onClick or onChange inside html element, always do `"onClick={handleClearClick}"` or `"onChange={handleClearChange}"`.
   Another way is `"onClick={() => handleClearClick()}"` or `"onChange={() => handleClearChange()}"`, this means on clicking the element we are invoking a function which calls the particular user defined functions. Wrong way of doing it is "onClick={handleClearClick()}" as the function then becomes recursive and so react gives an error

<br />

8. One particular logic used in React community is: "props.type && <HTML_Element>"
   If in case the props.type is null then HTML_Element will not render. But in case, props.type has some value then our HTML_Element will render. Remember to not put props.type inside curly braces.

<br />

9. In "react-router-dom" package, make sure of these things:

- The entire app must compulsorily be wrapped in `<BrowserRouter>`, this can be done by importing it in index.js file and wrapping `<App />` in it.
- `<Routes>` component can only and only have <Route> components as its children. `<Navbar>` or any other component inside it will raise an error. Other components can be inside `<BrowserRoute>` (obviously) but should be outside of `<Routes>` component.
- `<Route element={<Component/>} path="/about" />` should be used like this.
