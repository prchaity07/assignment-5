

## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById method selects a single element based on its unique id attribute. It's the most efficient method for selecting an element by its ID.

- getElementsByClassName method selects all elements that have a specific class name. It returns a live HTMLCollection, which updates automatically if elements with that class are added or removed.

- querySelector method selects the first element that matches a specified CSS selector. It's versatile because it can select elements by ID, class, or any other CSS selector.

- querySelectorAll method selects all elements that match a specified CSS selector. It returns a static NodeList, which doesn't update if the DOM changes.


## How do you create and insert a new element into the DOM?

- To create and insert a new element, first I need to create the element using document.createElement(), then add content or attributes to it, and finally insert it into a parent element in the DOM using a method like appendChild() or insertBefore(). 

## What is Event Bubbling and how does it work?
- Event bubbling is a process where an event, like a click, that happens on an element first triggers on that element, then "bubbles up" to its parent, then the grandparent, and so on, all the way up to the document's root. This means if I click on a button inside a div, the click event also fires on the div and the elements above it.


## What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique where I add a single event listener to a parent element instead of adding listeners to each of its child elements. This single listener then handles events for all its children as the events bubble up.

It is useful because it:

-  Improves performance: Only have one event listener, which uses less memory.

- Simplifies code: Don't need to write a loop to attach listeners to many elements.

- Works for dynamic content: It automatically works for elements that are added to the DOM after the page loads.

## What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() method stops the default action of an event.

- stopPropagation() method stops the event from bubbling up the DOM tree. It prevents the event from reaching the parent elements. The event will only fire on the element it was originally triggered on and will not propagate to its ancestors.