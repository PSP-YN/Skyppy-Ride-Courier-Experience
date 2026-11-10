# QA and release verification

## Release structure

The public root route is the Skyppy landing page. The application is a separate static experience at `/app/`. The previous single-page prototype is retained at `/app/legacy-demo.html`.

The app contains **46 navigable screen definitions**: 11 Rider, 9 Driver, 9 Sender, 4 Receiver, 7 Business, 5 shared account/utility screens, and the welcome workspace chooser. The role sidebars expose all 45 non-welcome screens; shared utility screens are available in each workspace.

## Latest automated test result — 2026-11-10

GitHub Actions run **42868388528** completed successfully on commit **01ad1ffe60ea3b2120f9d43116a20f26a3d5a3e1**.

- Chromium Playwright: **11 passed**
- No failed tests.
- The run tested the committed landing page, separate app route, workspace switching, rider and driver flows, receiver PIN validation and issue routing, business screens, and 320 px layouts.

Run: https://github.com/PSP-YN/Skyppy-Ride-Courier-Experience/actions/runs/42868388528

## Production deployment — 2026-11-10

The Vercel Git deployment is **READY**.

- Project: `skyppy-mobility-logistics`
- Git repository: `PSP-YN/Skyppy-Ride-Courier-Experience`
- Branch: `main`
- Deployed commit: `01ad1ffe60ea3b2120f9d43116a20f26a3d5a3e1`
- Deployment: `dpl_7mcTV5rVs4KTae7NynfPLadkBu4u`
- Production URL: https://skyppy-mobility-logistics-pspyn.vercel.app/

Vercel deployment metadata reports source `git` and the GitHub repository/commit metadata. This confirms the existing project is Git-connected and the commit was deployed through that integration.

## Production browser verification

Chromium verification against the production alias confirmed:

- Landing page title, hero and primary app entry links render.
- `/app/` opens the application separately from the landing page.
- The application exposes a screen-count marker of **46**.
- All five workspace selectors render the expected workspace and navigation.
- All 65 sidebar navigation entries across the five workspaces were visited; every one rendered a screen heading. This represents 46 unique screen definitions with shared screens repeated in each workspace.
- A direct link such as `/app/?screen=sender-home` opens the requested screen.
- Receiver flow rejects an incorrect demo PIN and accepts the documented demo PIN only after handover acknowledgement, producing the sample receipt.
- No uncaught page errors were observed during the all-screen navigation pass.
- At a 320 px viewport, the app document measured 305 px content width against a 305 px viewport; no horizontal overflow was observed. The GitHub Actions suite independently checks 320 px overflow on both landing and app routes.

## Screen inventory

| Workspace | Screens |
|---|---|
| Rider | Ride overview, ride options, fare review, matching, driver assigned, trip in progress, payment, rating, history, receipt, cancellation |
| Driver | Partner onboarding, document checklist, dashboard, incoming request, pickup navigation, active trip, earnings, trip history, partner profile |
| Sender | Courier overview, sender/receiver details, parcel details, pickup schedule, shipment review, created confirmation, tracking, exception handling, shipment history |
| Receiver | Incoming delivery, PIN and handover verification, demo receipt, issue reporting |
| Business | Overview, shipment list, create shipment, bulk dispatch, analytics, team access, billing |
| Shared | Notifications, profile, settings, help and accessibility |

## Accessibility and physical-device verification

The implementation uses semantic headings, labels for generated form controls, descriptive action text, visible focus styling, and reduced-motion CSS. This is not a formal WCAG conformance claim.

Still requires physical devices and/or human review:
- [ ] Android Chrome on a physical Android phone, including enlarged display/font settings, safe areas and keyboard overlays.
- [ ] iOS Safari on a physical iPhone.
- [ ] Firefox desktop/mobile.
- [ ] 200% zoom and reflow.
- [ ] Keyboard-only completion of all primary journeys.
- [ ] Screen-reader review of landmarks, controls, status updates and errors.
- [ ] Contrast and touch-target measurement.
- [ ] Native Kannada language review.
- [ ] Moderated usability sessions with rider, driver, sender, receiver and SMB participants.

## Figma parity

The Figma Make companion reports 11 design pages and 244 named screens. The supplemental Figma Design file contains three pages: Design System, Rider App and Project Hub. The new static website is an independently implemented screen library with 46 navigable screen definitions; it is not a one-for-one import of all 244 Make frames. Design references and web implementation are separate deliverables.

Figma MCP editing was not completed because the connected Starter plan reached its tool-call allowance. No claim is made that the Figma files were modified or synchronized.

## Static-demo limitations

- No real GPS, routing, dispatch, driver availability, live tracking, authentication, OTP, payment processing, SMS, remote push, backend persistence, carrier API or customer-support submission.
- Fares, identities, routes, distances, ETAs, ratings, shipment IDs, PINs, timestamps, earnings and business metrics are illustrative.
- The receiver receipt is a client-side demo state, not legally valid proof of delivery.
- No live transaction or customer data is collected by the app.

## Release record

Record the commit SHA, GitHub Actions run, Vercel deployment ID/URL, viewport sizes and any failed checks for each release.
