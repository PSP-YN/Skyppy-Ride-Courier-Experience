# UX decisions

## Visual system

The current prototype uses:
- Primary accent: Skyppy-inspired orange `#f65320`.
- Main text: deep ink `#172124`.
- Secondary text: muted grey-green `#687477`.
- Page surface: warm off-white `#f7f8f5`.
- Borders: soft neutral `#e5e9e7`.
- Positive/status accent: green `#1e7654`.
- Typography: system UI stack with Inter preferred when available.
- Rounded controls and surfaces with restrained shadows.

The design intentionally avoids relying on decorative gradients or dense card grids to communicate core tasks.

## Ride journey

The prototype presents pickup and drop fields, a small set of ride categories, an indicative estimate, and a review action. The review summary repeats the selected category and route, then states that no driver request or booking was created.

The broader design direction recommends the following real-product sequence:
1. Enter pickup and destination.
2. Confirm the pickup point and route.
3. Compare vehicle class, arrival estimate, and fare together.
4. Review the ride and relevant terms.
5. Request a ride and show a truthful matching state.
6. Show driver/vehicle details and trip safety tools.
7. Track the trip, complete payment, and collect feedback.

Only a simplified subset is interactive in this repository. Matching, tracking, payment, and feedback are not implemented.

## Courier journey

The prototype collects origin, destination, and package category, updates an illustrative estimate, and displays a review summary that states no courier booking was created.

A real product flow should additionally collect and validate:
- Package dimensions and weight.
- Declared value and prohibited-item declarations.
- Fragile/high-value handling needs.
- Pickup date/time window and contact details.
- Delivery contact and address.
- Service availability and delivery estimate from verified operational systems.
- Consent, terms, and payment before booking.

## Tracking and exceptions

A future tracking experience should use explicit event states such as:
- Booking confirmed
- Pickup scheduled
- Picked up
- In transit
- Out for delivery
- Delivered
- Delivery exception / action required

Each exception should explain what happened, what the user can do, and when the next update is expected. Do not use color as the only state indicator.

## Accessibility and inclusion

Design requirements to validate:
- Keyboard access to every control.
- Visible focus indicators.
- Programmatic labels and meaningful names.
- Sufficient text and control contrast.
- Large touch targets and spacing.
- Text alternatives for non-text visuals.
- Screen-reader announcements for dynamic summaries.
- Plain-language copy and localization review, including Kannada.
- Avoidance of color-only status cues.
- Usable layouts on low-end Android devices and narrow screens.

These are requirements and validation targets; the prototype has not undergone a formal accessibility audit.

## Localization

English is used in the current HTML. Kannada and other regional language support are product requirements for future research and implementation, not currently available translations.

## Estimates and sample content

Displayed prices, arrival times, and routes are sample values used to demonstrate hierarchy and interaction. They are not real tariffs, live ETAs, quotes, or service promises. Any production integration must source values from approved pricing and dispatch systems.
