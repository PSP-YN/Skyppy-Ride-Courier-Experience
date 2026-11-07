# QA and testing

## Current test status

The project has been manually exercised as a browser prototype. There is no automated test suite, CI workflow, or formal accessibility audit in this repository. Do not interpret manual smoke checks as production certification.

## Manual smoke checklist

### Homepage and navigation
- [ ] Homepage loads at `/`.
- [ ] Header links navigate to the ride, courier, business, and case-study sections.
- [ ] Primary CTA scrolls to the interactive prototype.
- [ ] Case-study link opens `/case-study.html`.

### Ride prototype
- [ ] Ride mode is selected by default.
- [ ] Pickup and drop fields can be edited.
- [ ] Auto, bike, and cab controls update the selected state.
- [ ] Selecting a ride updates the illustrative fare.
- [ ] Review action displays the selected ride and entered route.
- [ ] Empty pickup or drop displays a validation message.
- [ ] Summary clearly says no driver request or booking was created.

### Courier prototype
- [ ] Courier tab switches to the parcel form.
- [ ] Origin and destination can be edited.
- [ ] Package category can be changed.
- [ ] Estimate changes with package category.
- [ ] Review action displays the entered route and sample estimate.
- [ ] Empty origin or destination displays a validation message.
- [ ] Summary clearly says no courier booking was created and estimate is not a live tariff.

### Responsive layout
- [ ] Inspect at 360–390 CSS px.
- [ ] Inspect at 768 CSS px.
- [ ] Inspect at 1280 CSS px or wider.
- [ ] Confirm no unintended horizontal overflow.
- [ ] Confirm buttons and inputs remain usable at narrow widths.

### Case study
- [ ] Case study route loads.
- [ ] Content remains readable at mobile and desktop widths.
- [ ] Prototype link returns to the homepage.

## Recommended browser matrix

At minimum, validate current stable versions of:
- Chrome on Android.
- Firefox on Android.
- Safari on iOS.
- Chrome or Firefox on desktop.

## Accessibility checks to add

- Keyboard-only navigation and visible focus.
- Screen-reader labels and dynamic status announcements.
- Contrast checks for text, controls, borders, and focus.
- Touch-target measurement.
- Zoom/reflow at 200%.
- Reduced motion behavior if animation is introduced.
- Kannada localization and text expansion.
- Manual review with users who have relevant access needs.

## Reporting

For each test run, record date, browser/device, viewport, steps, expected result, actual result, and pass/fail. A check should only be marked complete after it has actually been executed.
