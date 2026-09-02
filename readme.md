# Assignment
Create a one page application following the LO-FIs given in this assignment.

We have provided the base code to get you started.

## LO-FI
Remember these are LO-FI and should only be treated as such.
![lofi](https://github.com/vroomvroomeddy-dev/react/blob/main/lofi.png)

## Spec
These are the only functional requirements for your implementation:

### Navigation
- Click on burger icon shows menu
- Click on back shows register card form 

## Commits
Please commit frequently to communicate your thoughts while working on this assignment.

## What is valued
- Unit tests
- Clean Code
- State Management
- Design (Responsive)
- Accessibility

## Duration
Use roughly around an hour on this assignment. Ensure you complete the basic requirements of this assignment but you are welcome to showcase more if you wish.


# Tools & Tech
You can use any tools, plugins and technologies as required for you to complete this assignment on top of what is provided but we expect that you create the UI components without the use of existing component libraries

-	React
-	Typescript
-	SCSS

# Submitting Assignment
Feel free to create a public GitHub repo or private GitHub repo where it's accessible to the assessor

# Implementation notes
- Used semantic colour variables rather than literal names, so the palette can change without touching component styles.
- Added ARIA attributes to make the components screen-reader friendly and accessible.
- Wrote a small Proxy-based mock for SCSS modules in Jest, so components using `styles.x` class names can render without errors during tests.

# Next steps
- Add a hook to mock fetching the user's data, returning loading/error states.
- Auto-format the expiry date field as the user types (MM/YY)
- Restrict the card number field to numeric input only
- Add validation and error states to the form fields
- Add a focus trap for the menu (move focus in on open, return to trigger on close)