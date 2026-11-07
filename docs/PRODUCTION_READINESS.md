# Production-readiness gaps

## Current classification

**Status: interactive design prototype only. Not production-ready for real bookings, courier operations, payments, or customer data.**

The current site is static HTML/CSS/JavaScript. It has no backend, accounts, operational integrations, persistent data, or live service logic.

## Required work before a real launch

### Product and operations
- Validate service areas, hours, vehicle classes, package restrictions, and operating model.
- Define rider, sender, receiver, driver/courier, support, and business workflows.
- Define cancellations, refunds, failed pickup/delivery, dispute, and escalation procedures.
- Confirm legal terms, insurance, safety, and customer support obligations.

### Pricing and availability
- Replace hard-coded sample prices and arrival times with approved pricing/availability APIs.
- Define fare calculation, taxes, fees, surge/discount rules, quote expiry, and price-change handling.
- Validate package dimensions, weight bands, restricted goods, declared value, and handling surcharges.

### Maps, dispatch, and tracking
- Integrate a verified maps/geocoding provider and route calculation.
- Build driver/courier availability, matching, assignment, and cancellation flows.
- Implement authenticated event ingestion and a shipment/trip state machine.
- Define stale location behavior, offline states, retries, and exception resolution.
- Store proof of delivery securely with appropriate retention and access controls.

### Identity, security, and privacy
- Implement authentication and role-based access control.
- Threat-model account takeover, location exposure, fraud, abuse, and unauthorized shipment access.
- Minimize collection of personal/location data and document retention/deletion.
- Encrypt data in transit and at rest; manage secrets outside source control.
- Add audit logs, rate limits, abuse detection, backups, and incident response.

### Payments and notifications
- Integrate a compliant payment provider; do not store raw card details.
- Implement payment state reconciliation, refunds, receipts, and failure recovery.
- Add reliable notifications with user preferences and delivery status deduplication.

### Quality and operations
- Add unit, integration, end-to-end, and regression tests.
- Complete accessibility and localization audits.
- Test low-end Android devices, weak networks, and interrupted sessions.
- Add monitoring, alerting, error reporting, performance budgets, and release rollback.
- Conduct operational pilots and customer-support readiness reviews.

## Release gate

A real service must not be launched until the responsible product, engineering, operations, security, legal, and support owners have reviewed and signed off on the above areas. The current prototype's sample values must never be used to fulfil customer orders.
