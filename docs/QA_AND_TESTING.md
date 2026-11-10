# QA and release verification

## Release structure

The public root route is the Skyppy landing page. The application is a separate static experience at `/app/`. The previous single-page prototype is retained at `/app/legacy-demo.html`.

The app contains 46 navigable screen definitions across Rider (11), Driver (9), Sender (9), Receiver (4), Business (7), and shared account/utility screens (5), plus the welcome workspace chooser.

## Automated browser coverage

GitHub Actions workflow: `.github/workflows/browser-smoke.yml`.

The Chromium Playwright suite covers:
- Landing page title, hero, and application entry links.
- Separate app route and screen catalogue count (40+).
- Navigation between all five role workspaces.
- Rider booking flow from pickup through rating.
- Driver request, pickup, active trip and earnings.
- Receiver rejection of an incorrect demo PIN.
- Receiver positive demo receipt only after correct demo PIN and physical-handover acknowledgement.
- Receiver routing to issue reporting when parcel condition is damaged.
- Business shipment list, analytics and billing.
- 320 px viewport overflow on landing and app routes.

Automated results are recorded by the GitHub Actions run linked from the repository's Actions tab. Do not report a run as passing until its final status is completed successfully.

## Manual production smoke checklist

- [ ] Landing page opens at `/` and the primary CTA navigates to `/app/`.
- [ ] Application opens at `/app/` and all five workspace switches work.
- [ ] Each role's sidebar screen list and mobile bottom role navigation work.
- [ ] Deep links open the requested screen (for example `/app/?screen=sender-home`).
- [ ] Form controls, modals, toasts, keyboard focus and browser back/forward behave correctly.
- [ ] Landing and app layouts remain usable at 320, 390, 768, 1024 and 1440 CSS px.
- [ ] Offline fallback and cached app shell work after the service worker has installed.

## Accessibility and physical-device verification

The markup uses semantic headings, form labels, accessible names, visible focus styling, and reduced-motion CSS. These are implementation measures, not a WCAG conformance claim.

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

## Vercel and GitHub deployment

The existing Vercel project `skyppy-mobility-logistics` is linked to GitHub repository `PSP-YN/Skyppy-Ride-Courier-Experience`. The deployment context confirms this repository link. Pushes to `main` should trigger production deployments through the existing integration. Verify the latest deployment is READY after this release; do not create a duplicate project or move domains.

## Static-demo limitations

- No real GPS, routing, dispatch, driver availability, live tracking, authentication, OTP, payment processing, SMS, remote push, backend persistence, carrier API or customer-support submission.
- Fares, identities, routes, distances, ETAs, ratings, shipment IDs, PINs, timestamps, earnings and business metrics are illustrative.
- The receiver receipt is a client-side demo state, not legally valid proof of delivery.
- No live transaction or customer data is collected by the app.

## Release record

Record the commit SHA, GitHub Actions run, Vercel deployment ID/URL, viewport sizes and any failed checks for each release.
