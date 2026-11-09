# Skyppy — Mobility & Intercity Logistics Experience

Independent, research-led UI/UX challenge concept for Skyppy ride booking and intercity courier journeys. Includes passenger, driver-partner, sender, receiver and SMB workflows.

> Scope: interactive design prototype only. It does not create real bookings, contact drivers, dispatch couriers, calculate live tariffs, use GPS/maps, process payments, send OTPs or persist shipment records to a backend.

## Submission profile
- Judge-ready summary and scope: [SUBMISSION.md](SUBMISSION.md)

## Live links
- Interactive prototype: https://skyppy-mobility-logistics-pspyn.vercel.app
- Research-led case study: https://skyppy-mobility-logistics-pspyn.vercel.app/case-study.html
- GitHub: https://github.com/PSP-YN/Skyppy-Ride-Courier-Experience
- Figma Make mobile prototype (11 design pages / 244 named screens; account permissions may apply): https://www.figma.com/make/0pxBazK2YFe23E9hz24u8Q/Complete-Skyppy-Mobile-App
- Supplemental Figma Design file (public permission not verified): https://www.figma.com/design/ZU7CeDZIHahNWvefp6ZMsS/Skyppy-Ride-Courier-Experience

## Included flows
- Ride: pickup/drop, schematic route, vehicle comparison, itemized sample fare, matching, driver details, trip state, share/SOS/support preview, demo payment and rating.
- Driver: incoming request, accept/decline, arrival, start and complete trip.
- Courier: sender/receiver details, package category, weight-based sample estimate, declared-value validation, dimensions/handling notes, pickup scheduling, shipment timeline and reschedule/return/support exception actions.
- Receiver: package-condition check, physical-handover acknowledgement, demo PIN confirmation, local proof-of-delivery preview and issue-reporting path.
- SMB: multi-shipment table, status filter, sample row addition, local CSV import (1 MB/100-row preview limit) and CSV export.
- Accessibility/resilience: responsive layout, semantic controls, keyboard focus, reduced motion, Side-by-side English/Kannada labels for key fields, partial language toggle and low-data mode.

## Skyppy public channel research
The official website (https://www.skyppy.app) links customers to Google Play package com.skyppylogistics.skyppyapp and drivers to a separate package com.skyppylogistics.driverpartner. No iOS App Store listing was verified in the public searches for this study; this is not proof that none exists. See case-study.html for research sources and caveats.

## Product utility and resilience pages\n- Notification centre: in-app history persisted in local browser storage; optional browser alerts require explicit permission. No remote push service is connected.\n- Support: creates a local-only support draft; it is not sent to Skyppy.\n- Privacy notice: `privacy.html`; Terms: `terms.html`; support explanation: `support.html`.\n- Recovery: branded `404.html`, offline fallback `offline.html`, and a conservative service worker for previously cached pages.\n- Offline mode and runtime errors surface clear status messages. Business-table actions open the relevant demo journey or a support draft.\n\nThese additions improve the interactive prototype; they do not create real dispatch, server-side accounts, payment, GPS, SMS, courier integrations or operational customer support.\n\n## Run locally
No package manager or build step is required.

    git clone https://github.com/PSP-YN/Skyppy-Ride-Courier-Experience.git
    cd Skyppy-Ride-Courier-Experience
    python3 -m http.server 4173

Open http://localhost:4173 and http://localhost:4173/case-study.html.

## Provisional design tokens
- Deep ink: #172522
- Warm paper: #F6F5EF
- Signal lime: #D9EE68

Replace these only after confirming Skyppy's approved logo and brand guidelines, then re-run contrast and accessibility checks.

## Accuracy and limitations
All fares, routes, arrival times, driver identities, PINs, shipment references and business rows are fictional demo content. The prototype does not connect to Skyppy's systems. Do not use it to arrange transport or send parcels.

## License and attribution
MIT License. This is an independent concept and does not imply endorsement, partnership or affiliation with Skyppy Logistics Pvt. Ltd. The Skyppy name and third-party marks remain the property of their respective owners.
