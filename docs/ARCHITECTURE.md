# Architecture

## Current implementation

The deployed prototype is intentionally small and static.

- `index.html`: all homepage markup, CSS, and vanilla JavaScript.
- `case-study.html`: standalone case study page with inline styles.
- No package manager or build pipeline is required.
- No server-side code or API calls are present.
- No database, authentication, cookies, local storage, or user-data persistence is implemented.

## Interaction model

The homepage JavaScript:
- Selects ride or courier mode.
- Toggles the corresponding form.
- Updates the ride category selection and sample fare.
- Updates the sample courier estimate when package type changes.
- Builds an in-page review summary from the entered fields.
- Explicitly tells the user that no booking or courier request was created.

The interaction is local to the browser page. Refreshing the page resets values to the HTML defaults.

## Deployment

The prototype is compatible with static hosting. The current public deployment is:

https://skyppy-mobility-logistics-pspyn.vercel.app

The case study is available at:

https://skyppy-mobility-logistics-pspyn.vercel.app/case-study.html

A future deployment should connect the hosting project to this GitHub repository and configure production deployments from the default branch. The repository currently does not require environment variables.

## Suggested future architecture (not implemented)

A production system would need a separately designed and reviewed architecture. One possible high-level decomposition:

- Client applications: rider/sender, driver/courier, receiver, and business operations.
- Identity: secure authentication, role-based authorization, account recovery, and consent.
- Core services: booking, pricing, dispatch, shipment lifecycle, notifications, and support.
- Data: transactional storage, audit events, retention controls, and backup/restore.
- Integrations: maps/geocoding, payment provider, messaging, and verified operational systems.
- Observability: structured logs, metrics, tracing, alerting, and incident response.

No particular vendor, API, or service has been selected or integrated by this repository. Production architecture requires discovery, threat modelling, data-protection review, and operational validation.
