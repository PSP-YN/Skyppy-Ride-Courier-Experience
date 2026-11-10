# Skyppy — Mobility & Intercity Logistics Experience

An independent, research-led product concept for ride booking and intercity courier journeys. The public website introduces the product; the separate static application lets visitors explore **46 navigable screens** across five workspaces.

> **Scope:** This is a static UI/UX prototype. It does not create real bookings, contact drivers, dispatch couriers, calculate live tariffs, use GPS, process payments, send OTPs, or persist records to a backend.

## Live experience

- Public landing page: https://skyppy-mobility-logistics-pspyn.vercel.app/
- Static application: https://skyppy-mobility-logistics-pspyn.vercel.app/app/
- Screen deep links: use `/app/?screen=ride-home`, `/app/?screen=driver-dashboard`, `/app/?screen=sender-home`, `/app/?screen=receiver-home`, or `/app/?screen=business-dashboard`
- Research-led case study: https://skyppy-mobility-logistics-pspyn.vercel.app/case-study.html
- GitHub: https://github.com/PSP-YN/Skyppy-Ride-Courier-Experience
- Figma Make mobile prototype: https://www.figma.com/make/0pxBazK2YFe23E9hz24u8Q/Complete-Skyppy-Mobile-App
- Supplemental Figma Design file: https://www.figma.com/design/ZU7CeDZIHahNWvefp6ZMsS/Skyppy-Ride-Courier-Experience

The GitHub repository is linked to the existing Vercel project `skyppy-mobility-logistics`; pushes to `main` are configured to deploy through that integration.

## Product structure

### 1. Public landing page

The root route is a product-facing landing page with:
- Product positioning and primary app entry point.
- Five service/workspace summaries.
- Journey principles and workflow explanation.
- A responsive CSS-built mobile product preview.
- Clear independent-concept and static-demo disclosure.

### 2. Static application — 46 screens

The app lives in `/app/`. Its screen navigation is grouped by role and adapts to desktop and mobile.

| Workspace | Screens |
|---|---|
| Rider | Ride overview, ride options, fare review, matching, driver assigned, trip in progress, payment, rating, history, receipt, cancellation |
| Driver | Partner onboarding, document checklist, dashboard, incoming request, pickup navigation, active trip, earnings, trip history, partner profile |
| Sender | Courier overview, sender/receiver details, parcel details, pickup schedule, shipment review, created confirmation, tracking, exception handling, shipment history |
| Receiver | Incoming delivery, PIN and handover verification, demo receipt, issue reporting |
| Business | Overview, shipment list, create shipment, bulk dispatch, analytics, team access, billing |
| Shared | Notifications, profile, settings, help and accessibility |

Screen content uses illustrative Mysuru/Bengaluru sample routes, sample fares, demo shipment references, fictional profiles and explicit status labels. Forms and transitions demonstrate interface behaviour locally; no records are sent to a service.

### 3. Previous prototype archive

The earlier single-page interaction prototype is preserved at `/app/legacy-demo.html` so its original flow and markup are not lost.

## Design system

- Deep ink: `#172522`
- Warm paper: `#F6F5EF`
- Signal lime: `#D9EE68`
- Muted text: `#68746C`
- Borders: `#E2E7DE`
- Typography: Manrope display / DM Sans interface, with system fallbacks.

No framework or build step is required. The site is plain HTML, CSS and JavaScript.

## Run locally

```bash
git clone https://github.com/PSP-YN/Skyppy-Ride-Courier-Experience.git
cd Skyppy-Ride-Courier-Experience
python3 -m http.server 4173
```

Open:
- http://localhost:4173/
- http://localhost:4173/app/
- http://localhost:4173/case-study.html

## Automated tests

GitHub Actions runs the Chromium Playwright smoke suite on pushes and pull requests to `main`. It covers:
- Landing page and app entry point.
- 46-screen catalogue presence.
- Five role workspaces.
- Rider booking progression.
- Driver request-to-earnings flow.
- Receiver invalid PIN, valid demo handover and damaged-parcel issue routing.
- Business operations, analytics and billing.
- Narrow viewport overflow checks.

## Research and accuracy

The official Skyppy website and public app listings were reviewed for the accompanying case study. Public product research is not evidence of a partnership or integration. See `case-study.html` and `SUBMISSION.md` for sources, assumptions and limitations.

All fares, routes, arrival times, driver identities, PINs, shipment references, business records, ratings and earnings are fictional. The prototype is not to be used to arrange transport or send parcels.

## License and attribution

MIT License. This is an independent concept and does not imply endorsement, partnership or affiliation with Skyppy Logistics Pvt. Ltd. The Skyppy name and third-party marks remain the property of their respective owners.
