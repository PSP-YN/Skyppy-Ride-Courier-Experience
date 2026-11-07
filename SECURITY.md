# Security Policy

## Scope

This repository is a static front-end UX prototype. It currently has no application server, authentication, database, payment processing, dispatch integration, or user account system.

## Supported versions

Security fixes are intended for the latest state of the default branch. No separate release branches are currently maintained.

## Reporting a vulnerability

Please do not publish exploitable details in a public issue.

- Use GitHub's **Report a vulnerability** / private vulnerability reporting flow for this repository if it is enabled.
- If private reporting is unavailable, contact the repository owner privately through https://github.com/PSP-YN.

Include a concise description, affected file or URL, reproduction steps, impact, and a suggested mitigation if known. Avoid sending real credentials, personal data, or customer information.

The maintainer will review the report and coordinate a fix and disclosure. No response-time SLA is currently promised.

## Security expectations for contributions

- Never commit API keys, access tokens, passwords, private keys, or production credentials.
- Do not add third-party scripts, analytics, or external dependencies without explaining their purpose and privacy impact.
- Validate and safely render any future user-controlled input.
- Treat any future integration with payments, location, identity, or shipment data as a security-sensitive feature requiring threat modelling and review.
