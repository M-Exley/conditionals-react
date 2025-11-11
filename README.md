# Conditional Sentences Constructor - 6th October 2025

Re-developing a simple Vanilla JS app from earlier this year (31st May 2025) with React.

## Project Plan

This time around I have been thinking more about the logical consequences of jumping into scaling up the app quickly. I made the decision to build a strong and robust foundation that will:

- confirm to the user if the question is correct or not
- keep track of the sentences that were incorrectly answered and display them at the end
- offer an optional explanation that shows/highlights the key word or structure

## Issues

- resetting answered to undefined - resolved
- only having one chance to select an option
- => remove buttons onClick - rerender on 'new sentence'
