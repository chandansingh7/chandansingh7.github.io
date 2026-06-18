# Chandan Singh — Portfolio

Senior Full Stack Engineer portfolio built with **Angular 21**, standalone components, lazy routing, Angular Material, and dark/light theme support.

**Live site:** [https://chandansingh7.github.io/](https://chandansingh7.github.io/)

## Highlights

- 7 pages: Home, About, Skills, Experience, Projects, Resume, Contact
- Per-project reports with requirements, diagrams, architecture, and risks
- One-click resume PDF download (print-optimized, confidentiality-safe)
- Open Graph + JSON-LD SEO for recruiter and LinkedIn sharing
- GitHub Actions deploy to root GitHub Pages URL

## Quick start

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Deploy (first time)

```bash
# From this folder — create repo and push (requires GitHub CLI)
gh repo create chandansingh7.github.io --public --source=. --remote=origin --push

# Enable GitHub Pages: Settings → Pages → Source: GitHub Actions
```

Subsequent pushes to `main` auto-deploy via `.github/workflows/deploy.yml`.

## Tests

```bash
npm test
npm run build
```

## Confidentiality

Public content follows `../docs/PUBLIC_CONTENT_POLICY.md`. No employer or client names in `public/assets/data/`.
