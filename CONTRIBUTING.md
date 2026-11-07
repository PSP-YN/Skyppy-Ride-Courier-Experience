# Contributing

Thank you for considering a contribution to the Skyppy ride and courier experience concept.

## Before you start

- Read the [README](README.md) and the relevant documents in [docs/](docs/).
- Check existing issues and pull requests before starting duplicate work.
- For substantial changes, open an issue first to discuss the user problem and proposed solution.
- Keep the work aligned with the project's scope: this is a static UX prototype, not an operational transport or logistics platform.

## Development setup

The project has no build system or external runtime dependencies.

```bash
git clone https://github.com/PSP-YN/Skyppy-Ride-Courier-Experience.git
cd Skyppy-Ride-Courier-Experience
python3 -m http.server 4173
```

Visit http://localhost:4173 and http://localhost:4173/case-study.html.

## Contribution workflow

1. Fork the repository.
2. Create a focused branch, for example `feat/courier-exception-state` or `fix/mobile-form-overflow`.
3. Make the smallest coherent change that solves the stated problem.
4. Verify the affected flows using the checklist in [QA_AND_TESTING.md](docs/QA_AND_TESTING.md).
5. Update documentation when behavior, scope, or setup changes.
6. Commit with a clear message, such as `feat: clarify courier package handling`.
7. Push your branch and open a pull request using the repository template.

## Quality expectations

- Preserve responsive behavior at narrow mobile widths and larger desktop widths.
- Prefer semantic HTML, accessible names, keyboard-operable controls, and visible focus indicators.
- Use plain language and clear validation/error feedback.
- Do not rely on color alone to communicate status.
- Avoid unnecessary dependencies, tracking scripts, and external network calls.
- Do not add secrets, API keys, personal data, or credentials.
- Keep sample data clearly labelled as illustrative.
- Do not claim a booking, payment, delivery, ETA, or live tracking event occurred unless a real, verified integration is implemented and documented.
- Avoid unrelated redesigns and large formatting-only diffs.

## Reporting changes

A pull request should explain:
- The user problem being addressed.
- The behavior before and after the change.
- Screens or routes affected.
- How the change was tested, including viewport sizes.
- Any known limitations or follow-up work.

For UI changes, include screenshots or a short screen recording where practical. Do not include real customer or personal data.

## Tests

There is currently no automated test suite. Run the manual checks in [docs/QA_AND_TESTING.md](docs/QA_AND_TESTING.md), and report exactly what you verified. Do not describe unrun tests as passing.

## License

By submitting a contribution, you agree that your contribution is provided under the repository's [MIT License](LICENSE). You retain copyright in your contribution while granting the permissions described by that license.
