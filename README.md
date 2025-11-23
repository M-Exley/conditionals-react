# Conditional Sentences Constructor - 6th October 2025

Re-developing a simple Vanilla JS app from earlier this year (31st May 2025) with React.

## Project Plan

This time around I have been thinking more about the logical consequences of jumping into scaling up the app quickly. I made the decision to build a strong and robust foundation that will:

- confirm to the user if the question is correct or not.
- keep track of the sentences that were incorrectly answered and display them at the end. I did this during development and it visually helped significantly.
- offer an optional explanation that shows/highlights the key word or structure. This one is done to a degree but using a simple conditional trigger hint: <ins>on condition that</ins>

## Issues

- resetting answered to undefined - resolved :white_check_mark:
- only having one chance to select an option - resolved with React's conditional rendering :white_check_mark:
- => remove buttons onClick - rerender on 'new sentence' - same resolution as above :white_check_mark:

## To Improve

- do not use useEffect so much
- utilise components instead of just relying on the app file
- have the sentences in a backend server. I am currently learning backend (Nov 25)
- block 'Next Sentence' option when current question not answered

## Successful Parts

- minimal CSS
- more simplified logic compared to Vanilla project
- scalability has been considered and works nicely on this small project

Link to V1 with Vanilla JS:
Link to V2 with React:

## Screenshots

### Initial Desktop

![What the client would first see when they visit the site on desktop.](/src/screenshots/screenshot-initial.png)

### Initial Mobile

![What the client would first see when they visit the site on mobile.](/src/screenshots/screenshot-mobile.png)

### Question Hint

![What the client would first see when they ask for a hint.](/src/screenshots/screenshot-hint.png)

### Correct

![What the client would first see when they answer correctly.](/src/screenshots/screenshot-correct.png)

### Incorrect

![What the client would first see when they answer incorrectly.](/src/screenshots/screenshot-incorrect.png)

### Finished

![What the client would first see when they have finished.](/src/screenshots/screenshot-mobile.png)
