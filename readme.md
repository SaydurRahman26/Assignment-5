1.getElementById("id") :Returns one element with the specified id.
getElementsByClassName("class") : Returns HTMLCollection of all elements with the specified class.
querySelector("selector") : Returns first element that matches the CSS selector.
querySelectorAll("selector") : Returns NodeList of all elements that match the CSS selector.

2.Use createElement() to create element.
Use appendChild() or append() to insert it into the DOM.

3.When an event happens on a child element, it propagates up to its parent elements automatically.
Example: Clicking a button inside a div triggers both button and div click events.

4.Adding an event listener to a parent element to handle events for its children.
Useful because:
Fewer event listeners needed.
Dynamically added child elements also handled automatically.

5.preventDefault() : Prevents the default action of an element (like form submission or link navigation).
stopPropagation()  : Stops the event from bubbling up to parent elements.