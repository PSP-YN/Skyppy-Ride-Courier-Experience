# QA and testing

## Current classification

Manual browser smoke testing only. The project remains an interactive concept prototype, not a production transport or courier service. There is no automated test suite, CI workflow, formal accessibility audit, or operational integration in this repository.

## Latest production smoke run — 2026-11-10

Environment: Chromium browser automation against the production Vercel alias. Desktop viewport 1440 × 1000 CSS px; mobile viewport 390 × 844 CSS px. Additional layout checks at 320 × 720, 768 × 900, and 1024 × 900 CSS px.

| Area | Result | Evidence / boundary |
|---|---|---|
| Main route and supporting pages | Pass | Main route, case study, privacy, terms, support, offline, design-system CSS, and app enhancement JS returned HTTP 200 |
| Desktop app presentation | Pass | Centered 430 px phone frame; 760 px scrollable app viewport; no document-wide horizontal overflow |
| Responsive presentation | Pass | 320, 390, 768, 1024, and 1440 px widths; no document-wide horizontal overflow; 5-tab navigation; sample-data disclosure visible at narrow mobile widths |
| Section navigation | Pass | Ride, Courier, Driver, Receiver, and Business views switch using the bottom navigation |
| Ride flow | Pass | Bike selection updates sample fare to ₹69; matching, driver assigned, trip in progress, demo payment, and rating states reached |
| Courier sender | Pass | Required declaration and pickup date accepted; local demo shipment timeline created; successful submission clears validation feedback |
| Driver flow | Pass | Incoming request → accepted → arrived → trip started → trip completed exercised across smoke runs |
| Receiver flow | Partial | Invalid/empty demo verification value is rejected. Successful handover/POD path has not been independently re-tested in this run |
| SMB dashboard | Pass | Sample row count increments from 4 to 5; status filter reduces visible rows |
| Browser errors | Pass for tested ride path | No uncaught page errors observed during the tested ride journey |
| Structural accessibility | Pass for inspected markup | All buttons have accessible names; all form controls have labels; no duplicate IDs; all images have alt attributes; visible keyboard focus outline detected. This is not a full WCAG audit |

## Figma Make companion prototype

The Figma Make preview reports 11 design pages and 244 named screens across Overview, Design System, Rider, Driver, Sender, Receiver, Business, System States, Profile & Legal, Prototype, and Accessibility. Its workspace history records successful production build and formatting checks. Figma Share displays “Anyone can view”; the “Copy preview link” option explicitly excludes AI chat history. This is a separate Figma Make project; it is not automatically synchronized with this static GitHub application.

## Remaining verification

- [ ] Successful receiver handover and proof-of-delivery path.
- [ ] Android Chrome on a physical device.
- [ ] iOS Safari on a physical device.
- [ ] Firefox desktop and mobile.
- [ ] 768 px tablet viewport and 200% zoom/reflow.
- [ ] Keyboard-only and screen-reader review.
- [ ] Contrast and touch-target audit.
- [ ] Native Kannada review by a fluent speaker.
- [ ] Moderated usability sessions with riders, drivers, senders, receivers, and SMB operators.

## Important limitations

- No real GPS, geocoding, routing, dispatch, driver/courier availability, live tracking, authentication, OTP, payment processing, SMS, remote push, backend persistence, or customer-support submission is connected.
- Fares, identities, locations, arrival estimates, shipment references, PINs, and business rows are fictional demo data.
- The current Vercel production release was created from source files after a Git-based deployment attempt failed. Automatic GitHub-to-Vercel deployment is not yet verified.

## Reporting

For every future run, record date, browser/device, viewport, steps, expected result, actual result, and pass/fail. Do not mark a check complete until it has actually been executed.
