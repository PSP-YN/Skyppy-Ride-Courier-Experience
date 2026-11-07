# Product overview

## Summary

Skyppy is represented here as a unified experience concept for local ride booking and intercity courier/logistics. The design explores how one service ecosystem might make two different journeys easier to understand and manage.

This repository is an independent UI/UX challenge prototype. It does not represent a live Skyppy service or confirm that the proposed service features are operational.

## Problem framing

Transport and parcel delivery both involve a chain of decisions and status changes. Users can lose confidence when:
- Pickup and destination details are unclear.
- Price is shown late or without enough context.
- Package handling requirements are not explicit.
- Status labels do not explain what happened or what to do next.
- Exceptions, delays, and support paths are difficult to find.
- Business users must inspect shipments individually to understand overall operations.

## User groups

### Everyday rider
Needs a low-friction way to enter a route, compare ride options, understand an estimate, review details, and locate safety/support affordances.

### Sender
Needs to describe a parcel, select handling, provide pickup and destination information, understand an estimate, and know the next step.

### Receiver
Needs understandable delivery updates, a confirmation path, and an escalation route when delivery cannot be completed.

### Small-business operator
Needs to inspect many shipments, identify exceptions, review delivery proof, and understand charges without repeatedly opening individual records.

### Driver/courier (future scope)
Would need a separate operational experience for accepting work, navigation, status updates, proof capture, and support. This is not implemented in the current prototype.

## Product principles

1. **Clarity before commitment:** make route, package, and estimate information visible before a user confirms.
2. **One primary decision at a time:** avoid presenting every possible choice in one dense form.
3. **Explain state changes:** use meaningful status labels and pair exceptions with a next action.
4. **Trust is functional:** show relevant safety, support, and confirmation affordances at the point of need.
5. **Resilience is a baseline:** design for low-end devices, weak networks, and interrupted sessions.
6. **Honest system feedback:** never imply a real booking or transaction occurred when the interface is only a prototype.

## Current prototype scope

Implemented:
- Static responsive landing page.
- Ride/courier mode switch.
- Editable sample pickup and destination fields.
- Selectable ride category and illustrative fare.
- Selectable parcel category and illustrative estimate.
- Local summary feedback that explicitly says no booking is created.
- Case study and business logistics concept section.

Not implemented:
- Accounts, authentication, or user profiles.
- Real maps, geocoding, route distance, or navigation.
- Live pricing, availability, or ETA.
- Driver/courier matching or dispatch.
- Payments, refunds, invoices, or wallet.
- Live shipment tracking or notifications.
- Proof-of-delivery capture/storage.
- Admin, driver, receiver, or business portal workflows.
- Backend, database, analytics, or persistent user data.

## Success measures for future research

These are proposed research metrics, not measured results:
- Task completion rate for ride and parcel flows.
- Time to complete a first booking attempt.
- Fare/estimate comprehension.
- Pickup/destination correction rate.
- Correct interpretation of shipment states.
- Exception recovery success.
- Accessibility task completion with assistive technology.
- Completion and error rates on low-end Android devices and weak networks.
