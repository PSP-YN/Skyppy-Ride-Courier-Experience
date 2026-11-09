# QA and release closure

## Current classification

The project now has a repeatable Chromium Playwright smoke suite in GitHub Actions, plus manual browser smoke testing. It remains an interactive concept prototype, not a production transport or courier service. There is no formal accessibility audit or operational integration.

## Latest verified browser test — 2026-11-10

GitHub Actions run **42689230197** completed successfully on commit **d38e4ba0dfb105d8bec169e69f31b0d99a0f67b1**. Result: **7 passed** in Chromium.

| Automated check | Result | Evidence / boundary |
|---|---|---|
| Five primary journey tabs | Pass | Ride, Courier, Driver, Receiver and Business tabs open their corresponding views |
| Ride fare | Pass | Bike selection updates the sample total to ₹69 |
| Driver journey | Pass | Accept → arrived → trip started → trip completed |
| Receiver invalid PIN | Pass | Incorrect demo PIN is rejected and no receipt is shown |
| Receiver positive handover | Pass | Documented demo PIN 4821 plus checked handover and intact condition produces the local demo receipt |
| SMB dashboard | Pass | Sample row count increments from 4 to 5 |
| Narrow mobile layout | Pass | 320 px viewport has no document-wide horizontal overflow |

The receiver test verifies the **client-side demo flow only**. It does not prove a real parcel was delivered, nor does it validate a production server, one-time PIN service, secure evidence storage or carrier event.

## Latest production browser smoke run — 2026-11-10

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
| Receiver flow | Pass for demo | CI verified invalid PIN rejection and successful sample receipt; still no real delivery integration |
| SMB dashboard | Pass | Sample row count increments from 4 to 5; status filter reduces visible rows |
| Browser errors | Pass for tested ride path | No uncaught page errors observed during the tested ride journey |
| Structural accessibility | Pass for inspected markup | All buttons have accessible names; all form controls have labels; no duplicate IDs; all images have alt attributes; visible keyboard focus outline detected. This is not a full WCAG audit |

## Physical-device and accessibility test protocol

These checks require devices and human review that are not available to the browser automation session.

- [ ] Android Chrome on a physical Android phone: test at default font/display scaling and one enlarged setting; verify safe-area spacing, bottom navigation, scroll behaviour, keyboard overlays, date picker and form controls.
- [ ] iOS Safari on a physical iPhone: repeat the same checks, including safe areas and native input behaviour.
- [ ] Firefox desktop and mobile: test navigation, forms, downloads and responsive layout.
- [ ] 200% browser zoom/reflow: no clipped content or loss of functionality.
- [ ] Keyboard-only: logical focus order, visible focus, no traps, operable dialogs and all primary actions.
- [ ] Screen reader: meaningful landmarks, control names, status announcements, error associations and state changes.
- [ ] Contrast and target size: measure text/non-text contrast and verify practical touch targets; the existing structural scan is not a substitute.
- [ ] Kannada: review all translated strings and mixed-language states with a fluent native speaker.
- [ ] Moderated usability: observe at least one rider, driver, sender, receiver and SMB operator completing their primary task; record task success, errors, completion time and qualitative feedback.

## Figma Make companion and code parity

The Figma Make preview reports 11 design pages and 244 named screens across Overview, Design System, Rider, Driver, Sender, Receiver, Business, System States, Profile & Legal, Prototype, and Accessibility. Its workspace history records successful production build and formatting checks. Figma Share displays “Anyone can view”; the “Copy preview link” option explicitly excludes AI chat history.

The separate supplemental Figma Design file was inspected in the editor and currently shows three pages: **Design System**, **Rider App**, and **Project Hub**. It contains reusable component layers, but it is not a 244-screen mirror of the Make prototype.

Figma Make and the static web app are separate deliverables. The web app currently implements five interactive journey areas (Ride, Courier, Driver, Receiver and Business) with shared visual tokens and demo state. It does **not** implement all 244 Figma frames one-for-one. Treating every Figma frame as a separate web route would also be incorrect: many frames represent validation, loading, empty, error, and success variants of one user task. The correct synchronization unit is a traceable mapping from each design frame to a web component, route, or explicit state.

Current verified mapping:

| Figma area | Web implementation | Parity |
|---|---|---|
| Design System | `design-system.css` plus shared app styles | Visual direction and core tokens aligned; Figma variables/components not machine-synced |
| Rider | `#v-ride`, `#rideForm`, `#rideTrip` | Core ride-to-rating demo flow implemented |
| Driver | `#v-driver` | Core accept/decline/arrive/start/complete demo flow implemented |
| Sender | `#v-courier`, `#courierForm`, `#tracking` | Core parcel booking and sample timeline implemented |
| Receiver | `#v-receiver`, `#confirmReceipt`, `#podReceipt` | PIN, handover, condition and issue paths implemented; positive demo receipt verified in CI |
| Business | `#v-business` | Sample shipment list, filter and CSV preview implemented |
| System States, Profile & Legal, Notifications, full onboarding and extended settings | Supporting pages and selected demo states only | Not one-for-one; further implementation and frame-level mapping required |

Figma MCP editing was not completed in this closure pass because the connected Figma Starter plan returned a tool-call-limit/paywall error. No claim is made that the supplemental Figma Design file was modified or synchronized. The Make prototype remains separately viewable.

## Automatic deployment status

The existing Vercel project is **not linked to GitHub**. Its latest production deployment is READY, but a Git push has not been proven to trigger a new deployment. The project was previously deployed from source files after a Git-based deployment attempt failed. A secure Vercel sign-in flow has been opened; authentication remains pending. Do not create a duplicate Vercel project or move production domains as a workaround without reviewing the account state first.

## Important product limitations

- No real GPS, geocoding, routing, dispatch, driver/courier availability, live tracking, authentication, OTP, payment processing, SMS, remote push, backend persistence, or customer-support submission is connected.
- Fares, identities, locations, arrival estimates, shipment references, PINs, and business rows are fictional demo data.
- A demo receipt is not proof of an actual delivery and must never be represented as a real carrier event.

## Reporting

For every future run, record date, browser/device, viewport, steps, expected result, actual result, and pass/fail. Do not mark a check complete until it has actually been executed.
