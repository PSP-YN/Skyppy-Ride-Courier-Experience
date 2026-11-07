# Skyppy — Ride & Courier Experience

An independent UI/UX challenge concept exploring two connected mobility journeys: local ride booking and intercity courier/logistics. The prototype focuses on understandable choices, upfront *illustrative* estimates, clear next steps, and a consistent experience across mobile and desktop.

> **Prototype status:** This repository contains a static, interactive design prototype. It is not a live Skyppy service and does not create bookings, contact drivers or couriers, process payments, calculate live tariffs, use live maps, or track parcels.

## Live project

- **Interactive prototype:** https://skyppy-mobility-logistics-pspyn.vercel.app
- **UX case study:** https://skyppy-mobility-logistics-pspyn.vercel.app/case-study.html
- **Figma design file:** https://www.figma.com/design/ZU7CeDZIHahNWvefp6ZMsS/Skyppy-Ride-Courier-Experience

## What is included

### Ride booking concept
- Pickup and destination entry, prefilled with a sample Mysuru journey.
- Auto, bike, and cab comparison with illustrative arrival times and fares.
- A review summary that explicitly confirms no booking has been placed.
- Design rationale for route review, driver information, trip sharing, safety, support, and feedback.

### Intercity courier concept
- Pickup and destination city/area entry.
- Standard, fragile, high-value/signature, and document package categories.
- Illustrative estimate changes by package category.
- Review summary that explicitly confirms no courier booking has been placed.
- Design rationale for pickup scheduling, event-based tracking, exceptions, receiver confirmation, and proof of delivery.

### Business logistics concept
- A desktop-oriented concept for bulk shipment visibility, exceptions, proof of delivery, and spend review.
- Any dashboard metrics shown in the linked Figma concept are illustrative, not operational data.

## Repository structure

```text
.
├── index.html                 # Interactive ride + courier prototype
├── case-study.html            # Challenge case study
├── LICENSE                    # MIT License
├── CONTRIBUTING.md            # Contribution workflow and standards
├── CODE_OF_CONDUCT.md         # Community expectations
├── SECURITY.md                # Security reporting policy
├── CHANGELOG.md               # Project history
├── CITATION.cff               # Citation metadata
├── docs/
│   ├── ARCHITECTURE.md         # Current implementation architecture
│   ├── PRODUCT_OVERVIEW.md     # Problem, users, goals, scope
│   ├── UX_DECISIONS.md         # Interaction and design decisions
│   ├── QA_AND_TESTING.md       # Manual verification checklist
│   └── PRODUCTION_READINESS.md # Gaps before any real service launch
└── .github/
    ├── PULL_REQUEST_TEMPLATE.md
    └── ISSUE_TEMPLATE/
        ├── bug_report.md
        └── feature_request.md
```

## Run locally

No build step, package manager, API key, or framework is required.

1. Clone the repository:
   ```bash
   git clone https://github.com/PSP-YN/Skyppy-Ride-Courier-Experience.git
   cd Skyppy-Ride-Courier-Experience
   ```
2. Start a local static server:
   ```bash
   python3 -m http.server 4173
   ```
3. Open:
   - http://localhost:4173/
   - http://localhost:4173/case-study.html

You can also open `index.html` directly in a modern browser, although using a local server more closely matches deployment behavior.

## Technology

- Semantic HTML
- CSS (responsive layouts and custom properties)
- Vanilla JavaScript
- No runtime dependencies
- Static hosting compatible (for example, Vercel, GitHub Pages, or any static web server)

## Design direction

The interface uses a warm orange accent (`#f65320`), dark ink, soft neutral surfaces, restrained green status accents, clear hierarchy, and responsive layouts. The intent is to make transport and delivery decisions legible rather than add decorative complexity.

## Data and accuracy notes

All prices, arrival times, sample routes, and example journey details in the prototype are illustrative UI content. They are not verified Skyppy tariffs, service availability, route calculations, ETAs, or business metrics. The sample ride starts in Mysuru and is editable. No user data is sent to a backend or persisted.

## Documentation

- [Product overview](docs/PRODUCT_OVERVIEW.md)
- [UX decisions](docs/UX_DECISIONS.md)
- [Architecture](docs/ARCHITECTURE.md)
- [QA and testing](docs/QA_AND_TESTING.md)
- [Production readiness gaps](docs/PRODUCTION_READINESS.md)
- [Contributing](CONTRIBUTING.md)
- [Security policy](SECURITY.md)

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request. Please preserve the prototype's honest scope disclosures and never represent sample estimates as live service data.

## License

Released under the [MIT License](LICENSE). See the license text for permissions and conditions.

## Attribution and project status

This is an independent design-challenge concept and is not an official Skyppy product or service. The Skyppy name and any third-party marks remain the property of their respective owners. This repository does not imply endorsement, partnership, or affiliation.
