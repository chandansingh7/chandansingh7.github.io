# Enterprise Project Portfolio Report

| Field | Value |
|-------|-------|
| **Document title** | Open-Source Portfolio — Technical & Architecture Report |
| **Author** | Chandan Singh |
| **Role** | Senior Full Stack Engineer |
| **Version** | 2.0 |
| **Date** | June 2026 |
| **Classification** | Internal / Leadership Review — Public GitHub Repositories Only |
| **Distribution** | Engineering leadership, architecture review board, hiring panel |
| **GitHub profile** | [github.com/chandansingh7](https://github.com/chandansingh7) |
| **FigJam diagram board** | [Portfolio Project Diagrams](https://www.figma.com/board/Uh4oBZt4uBFdOwmySKv8FQ) |

---

## Table of contents

1. [Executive summary](#1-executive-summary)
2. [Purpose, scope, and assumptions](#2-purpose-scope-and-assumptions)
3. [Portfolio overview](#3-portfolio-overview)
4. [Cross-portfolio architecture principles](#4-cross-portfolio-architecture-principles)
5. [Project 1 — Brightrail (Angular component library)](#5-project-1--brightrail-angular-component-library)
6. [Project 2 — POS Mono (full-stack retail platform)](#6-project-2--pos-mono-full-stack-retail-platform)
7. [Project 3 — Micro-URL (URL shortener microservice)](#7-project-3--micro-url-url-shortener-microservice)
8. [Project 4 — E-Commerce API & UI](#8-project-4--e-commerce-api--ui)
9. [Project 5 — BrightBubbles (educational game)](#9-project-5--brightbubbles-educational-game)
10. [Project 6 — Kubernetes & Istio automation scripts](#10-project-6--kubernetes--istio-automation-scripts)
11. [Security and compliance posture](#11-security-and-compliance-posture)
12. [Operational readiness summary](#12-operational-readiness-summary)
13. [Risk register](#13-risk-register)
14. [Recommendations and roadmap](#14-recommendations-and-roadmap)
15. [Appendices](#15-appendices)

---

## 1. Executive summary

This report presents a structured technical review of six open-source projects maintained by Chandan Singh. The portfolio demonstrates end-to-end capability across **enterprise UI libraries**, **full-stack transactional systems**, **microservices**, **e-commerce patterns**, **mobile/PWA client engineering**, and **cloud-native platform automation**.

### Leadership highlights

| Dimension | Assessment |
|-----------|------------|
| **Breadth** | Front-end (Angular 16–21), back-end (Spring Boot 3), data (PostgreSQL/MySQL), DevOps (K8s/Istio) |
| **Depth** | POS Mono alone spans API, PWA, desktop (Tauri), RBAC, offline sync, and 15+ domain entities |
| **Documentation maturity** | Architecture, ER, sequence, use-case, and deployment diagrams per project |
| **Reusability** | Brightrail library and POS patterns applicable to product teams building internal platforms |
| **Production patterns** | JWT security, layered APIs, structured error handling, role-based access, blob storage integration |

### Portfolio at a glance

| # | Project | Category | Business value | Maturity |
|---|---------|----------|----------------|----------|
| 1 | Brightrail | UI platform | Accelerates Angular delivery with reusable components | Production-ready library |
| 2 | POS Mono | Enterprise application | End-to-end retail operations (catalog → checkout → reporting) | Production-grade reference |
| 3 | Micro-URL | Microservice | Lightweight link management and redirect analytics | Demonstration / extensible |
| 4 | E-Commerce | Full-stack demo | Standard commerce flows with clean API/UI separation | Reference implementation |
| 5 | BrightBubbles | Consumer app | Offline educational product without backend dependency | Shippable PWA/mobile |
| 6 | K8s/Istio scripts | Platform tooling | Repeatable mesh and cluster operations | DevOps reference |

### Recommended leadership actions

1. **Treat POS Mono and Brightrail as flagship demonstrations** of full-stack and platform UI engineering.
2. **Use this report and embedded diagrams** as the standard documentation package for architecture reviews and stakeholder walkthroughs.
3. **Prioritize README and deployment guide completion** on flagship repos to reduce onboarding friction for evaluators.
4. **Maintain confidentiality boundary** — all public artifacts describe open-source work only; no employer or client identifiers.

---

## 2. Purpose, scope, and assumptions

### 2.1 Purpose

Provide leadership and architecture stakeholders with a **single authoritative document** describing:

- Business problems addressed by each project  
- Technical solutions and design rationale  
- Architecture, data models, and integration boundaries  
- Security, scalability, and operational considerations  
- Diagram inventory and traceability to implementation  
- Risks, gaps, and recommended next steps  

### 2.2 In scope

- All public repositories under [github.com/chandansingh7](https://github.com/chandansingh7) referenced in this portfolio  
- Architecture diagrams (FigJam source + exported assets on portfolio site)  
- Documented API domains, entities, use cases, and sequences  

### 2.3 Out of scope

- Proprietary employer systems, client names, or internal codenames  
- Production deployment SLAs for third-party environments  
- Financial projections or licensing negotiations  

### 2.4 Assumptions

- Reviewers have access to the portfolio site Projects tab for **click-to-expand diagram viewing**  
- PostgreSQL/MySQL and Kubernetes clusters are available for local or staging validation  
- Diagram exports remain synchronized with FigJam source board  

### 2.5 Confidentiality statement

This document describes **public GitHub repositories only**. No employer names, client names, proprietary system codenames, or confidential metrics are included. This aligns with the portfolio public content policy.

---

## 3. Portfolio overview

### 3.1 Strategic themes

```text
┌─────────────────────────────────────────────────────────────────┐
│                    PORTFOLIO STRATEGIC THEMES                    │
├─────────────────┬─────────────────┬─────────────────────────────┤
│  UI Excellence  │  Transactional  │  Cloud-Native Operations    │
│  (Brightrail)   │  Systems        │  (K8s/Istio)                │
│                 │  (POS, E-Comm)  │                             │
├─────────────────┼─────────────────┼─────────────────────────────┤
│  Microservices  │  Client-Only    │  Documentation & Diagrams   │
│  (Micro-URL)    │  Products       │  (All projects)             │
│                 │  (BrightBubbles)│                             │
└─────────────────┴─────────────────┴─────────────────────────────┘
```

### 3.2 Technology stack summary

| Layer | Technologies used across portfolio |
|-------|-------------------------------------|
| **Front-end** | Angular 16–21, TypeScript, SCSS, RxJS, Material, Phaser 3, Capacitor, PWA |
| **Back-end** | Java 17+, Spring Boot 3, Spring Security, JWT, Spring Data JPA |
| **Data** | PostgreSQL (POS Mono), MySQL (Micro-URL), JPA relational models (E-Commerce) |
| **Storage** | Azure Blob Storage (POS product images) |
| **Desktop** | Tauri + Angular (POS Mono desktop) |
| **Platform** | Kubernetes, Istio, kubectl, YAML manifests, shell automation |

### 3.3 Documentation deliverables per project

| Project | Architecture | ER / Data | Sequence | Use case | Deployment |
|---------|:------------:|:---------:|:--------:|:--------:|:----------:|
| Brightrail | ✅ | N/A | ✅ | ✅ | ✅ |
| POS Mono | ✅ | ✅ | ✅ | ✅ | ✅ |
| Micro-URL | ✅ | ✅ | ✅ | — | ✅ |
| E-Commerce | ✅ | ✅ | ✅ | ✅ | — |
| BrightBubbles | ✅ | N/A | ✅ | ✅ | ✅ |
| K8s/Istio | ✅ | N/A | ✅ | ✅ | ✅ |

---

## 4. Cross-portfolio architecture principles

The following design principles appear consistently across projects and represent reusable engineering standards.

| Principle | Implementation | Projects |
|-----------|----------------|----------|
| **API-first design** | REST boundaries before UI; shared DTO/response wrappers | POS Mono, E-Commerce, Micro-URL |
| **Layered architecture** | Controller → Service → Repository separation | All Spring Boot projects |
| **Role-based access control** | JWT + role guards (`ADMIN`, `MANAGER`, `CASHIER`) | POS Mono |
| **Structured error handling** | `ApiResponse<T>` + enumerated `ErrorCode` | POS Mono |
| **Standalone Angular components** | Tree-shakable, importable UI modules | Brightrail, POS UI, E-Commerce UI |
| **Offline resilience** | IndexedDB + service worker sync | POS Mono PWA, BrightBubbles |
| **Container-ready services** | Stateless API tiers, externalized config | Micro-URL, POS API |
| **Documentation-driven delivery** | FigJam + inline portfolio diagrams | All |

---

## 5. Project 1 — Brightrail (Angular component library)

### 5.1 Executive summary

Brightrail is a **publishable Angular 21 component library** with two consumer verification apps: **Funfair** (developer playground) and **Midway** (npm-shaped integration proof). It demonstrates platform UI engineering suitable for design-system initiatives.

### 5.2 Business problem

Product teams repeatedly rebuild tables, cards, selects, and layout primitives. Without a shared library, UI inconsistency increases accessibility risk, slows delivery, and raises maintenance cost.

### 5.3 Solution overview

| Component | Purpose |
|-----------|---------|
| `brightrail` library | Reusable standalone Angular components packaged for npm |
| Funfair (port 4200) | Live playground with source-mapped library development |
| Midway (port 4201) | Consumer app verifying real npm-style installation |

### 5.4 Architecture

```text
Funfair (4200) ──source paths──► brightrail library ──dist/──► Midway (4201)
                                        │
                                        └──► External consumer applications
```

**Diagram asset:** `/assets/diagrams/brightrail-architecture.svg`

### 5.5 Key use cases

| Actor | Use case |
|-------|----------|
| Library author | Build components, run Funfair, publish to `dist/brightrail` |
| Application developer | Install package, import standalone components |
| Reviewer / stakeholder | Browse GitHub Pages Funfair demo without local setup |

### 5.6 Integration sequence — consumer onboarding

1. Run `npm run build:lib` to produce distributable package  
2. Add `brightrail` dependency to consumer Angular 21 application  
3. Import standalone components into feature routes  
4. Validate theming, accessibility, and bundle impact  
5. Run `npm run verify:package` in monorepo for CI-style proof  

### 5.7 Non-functional requirements

| NFR | Target |
|-----|--------|
| Angular compatibility | Peer dependency `>=21.0.0 <22.0.0` |
| Accessibility | WCAG-minded component patterns |
| Theming | SCSS token-friendly styling |
| Node runtime | Node 24.x for build toolchain |

### 5.8 Risks and mitigations

| Risk | Mitigation |
|------|------------|
| Breaking changes across Angular major versions | Pin peer range; maintain Midway verification app |
| Incomplete component catalog docs | Expand Funfair examples per component |

### 5.9 Repository references

- **Repository:** [github.com/chandansingh7/brightrail](https://github.com/chandansingh7/brightrail)  
- **Live demo:** [chandansingh7.github.io/brightrail](https://chandansingh7.github.io/brightrail/)

---

## 6. Project 2 — POS Mono (full-stack retail platform)

### 6.1 Executive summary

POS Mono (CicdPOS) is a **production-grade, single-tenant retail platform** comprising Spring Boot 3 API, Angular Material PWA, optional Tauri desktop client, PostgreSQL persistence, Azure Blob image storage, and JWT role-based security. It is the **most comprehensive project in the portfolio** and best demonstrates enterprise full-stack leadership.

### 6.2 Business problem

Retail operators require a unified system for:

- Product catalog and category management  
- Inventory tracking and low-stock alerts  
- Point-of-sale checkout with barcode support  
- Shift management and cash drawer accountability  
- Refunds, reports, and administrative controls  
- Web and desktop client access with offline tolerance  

Fragmented tools increase training cost, data inconsistency, and audit risk.

### 6.3 Solution overview

| Deliverable | Repository | Role |
|-------------|------------|------|
| REST API | [pos-mono-api](https://github.com/chandansingh7/pos-mono-api) | Business logic, security, persistence |
| Web UI | [pos-mono-ui](https://github.com/chandansingh7/pos-mono-ui) | Angular PWA for staff workflows |
| Desktop | [pos-mono-desktop](https://github.com/chandansingh7/pos-mono-desktop) | Tauri shell for dedicated POS terminals |

### 6.4 Architecture

```text
Angular Web UI ──┐
                 ├── HTTPS REST + JWT ──► Spring Boot API ──► PostgreSQL
Tauri Desktop ───┘                              │
                                                └──► Azure Blob (product images)
```

**Diagram assets (portfolio site — click to expand):**

| # | Diagram | Asset path |
|---|---------|------------|
| 1 | System Architecture | `/assets/diagrams/pos-mono/01-system-architecture.png` |
| 2 | User Flow & Use Cases | `/assets/diagrams/pos-mono/02-user-flow-use-cases.png` |
| 3 | Authentication Sequence | `/assets/diagrams/pos-mono/03-auth-sequence.png` |
| 4 | Role / Use Case Model | `/assets/diagrams/pos-mono/04-er-diagram.png` |
| 5 | Sales Flowchart | `/assets/diagrams/pos-mono/05-sales-flowchart.png` |
| 6 | Order Processing Sequence | `/assets/diagrams/pos-mono/06-order-sequence.png` |
| 7 | Deployment Topology | `/assets/diagrams/pos-mono/07-deployment.png` |
| 8 | Component Diagram | `/assets/diagrams/pos-mono/08-component-diagram.png` |

### 6.5 Entity model (data architecture)

| Entity | Business purpose |
|--------|------------------|
| `Company` | Store/tenant configuration |
| `User` | Staff accounts with roles |
| `Product`, `Category` | Sellable catalog |
| `Inventory` | Stock levels per product |
| `Customer` | Loyalty / member identification |
| `Order`, `OrderItem` | Sales transactions |
| `Payment`, `Refund`, `RefundItem` | Financial movements |
| `Shift` | Cash drawer sessions |
| `Label` | Pre-print product labels |
| `TaxRule` | Tax configuration |
| `AccessLog`, `UserAllowedIp`, `UserBlockedIp` | Security audit and access control |

### 6.6 Role-based use cases

| Role | Authorized capabilities |
|------|-------------------------|
| **ADMIN** | Users, settings, billing, backup, IP allow/block lists, access logs |
| **MANAGER** | Catalog, inventory, reports, shifts, labels, rewards |
| **CASHIER** | POS checkout, customer lookup, orders, refunds, own shift |

### 6.7 Critical sequence — POS checkout

1. Cashier authenticates → JWT issued with role claims  
2. Shift opened (if business rules require active shift)  
3. Products added via barcode scan or search → cart assembled  
4. Customer, discounts, and tax rules applied  
5. `POST /api/orders` persists order, line items, inventory adjustments  
6. Receipt generated (print and/or email)  

### 6.8 API domain map

| Prefix | Capabilities |
|--------|--------------|
| `/api/auth` | Registration, login, password change |
| `/api/products` | CRUD, search, barcode lookup, bulk upload, images |
| `/api/categories` | Category management |
| `/api/inventory` | Stock levels, low-stock queries |
| `/api/orders` | Create, list, cancel, refund, receipt |
| `/api/shifts` | Open, close, force-close |
| `/api/offline-orders` | Batch synchronization when connectivity restored |
| `/api/customers` | CRUD, member cards |
| `/api/labels` | Label printing workflows |

### 6.9 UI route map

| Route | Roles | Function |
|-------|-------|----------|
| `/app/pos` | Cashier+ | Point-of-sale terminal |
| `/app/dashboard` | Admin, Manager | KPI dashboard |
| `/app/products` | Manager+ | Catalog administration |
| `/app/orders` | Cashier+ | Order history and refunds |
| `/app/reports` | Cashier+ | Sales reporting |
| `/app/settings` | Admin | Company and POS configuration |

### 6.10 Non-functional requirements

| NFR | Implementation |
|-----|----------------|
| **Availability** | PWA offline mode with IndexedDB queue |
| **Security** | JWT, `@PreAuthorize`, IP allow/block lists, access logs |
| **Usability** | HCI standards — compact tables, 40px touch targets |
| **Scalability** | Stateless API; PostgreSQL as system of record |
| **Media** | Azure Blob for product image assets |

### 6.11 Operational considerations

- API requires PostgreSQL and configured blob storage credentials  
- UI served via `ng serve` or static hosting against API base URL  
- Desktop client wraps same UI in Tauri for dedicated hardware  
- Offline orders sync via `/api/offline-orders` when network returns  

### 6.12 Risks and mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Offline sync conflicts | Duplicate or inconsistent orders | Idempotent sync endpoints; conflict resolution in service layer |
| JWT compromise | Unauthorized access | Short-lived tokens; IP restrictions for admin roles |
| Single-tenant model | Multi-store expansion requires refactor | Document tenant boundary; plan schema extension |

---

## 7. Project 3 — Micro-URL (URL shortener microservice)

### 7.1 Executive summary

Micro-URL is a **focused Spring Boot microservice** providing URL shortening, HTTP redirect resolution, and click analytics. It demonstrates clean microservice boundaries suitable for container deployment.

### 7.2 Business problem

Long URLs reduce shareability and tracking visibility. Teams need a lightweight service that separates **link creation** from **redirect resolution** for independent scaling.

### 7.3 Solution overview

```text
API clients ──► UrlMappingController ──► MySQL
Browsers    ──► RedirectController   ──► 302 to original URL + ClickEvent log
```

**Diagram assets:**

- Architecture: `/assets/diagrams/micro-url-architecture.svg`  
- ER model: `/assets/diagrams/micro-url-er.svg`  

### 7.4 Entity model

| Entity | Purpose |
|--------|---------|
| `User` | Optional authenticated API user |
| `UrlMapping` | Maps `shortCode` → `originalUrl` |
| `ClickEvent` | Timestamped analytics per redirect |

### 7.5 Redirect sequence

1. Client submits long URL → API persists `UrlMapping`  
2. API returns shortened URL  
3. Visitor requests short code  
4. `RedirectController` resolves mapping  
5. `ClickEvent` recorded  
6. HTTP 302 redirect to original destination  

### 7.6 Non-functional requirements

| NFR | Approach |
|-----|----------|
| Horizontal scale | Stateless API tier behind load balancer |
| Deployment | Docker/Kubernetes compatible |
| Integration | CORS configured for SPA clients |

### 7.7 Repository reference

- [github.com/chandansingh7/micro-url](https://github.com/chandansingh7/micro-url)

---

## 8. Project 4 — E-Commerce API & UI

### 8.1 Executive summary

A **classic three-tier e-commerce reference** with separated Spring Boot API and Angular storefront. Demonstrates catalog browsing, cart management, and checkout persistence.

### 8.2 Business problem

Teams onboarding to full-stack commerce need a **maintainable reference** showing proper API/UI separation and relational order modeling.

### 8.3 Solution overview

```text
Angular Storefront ── REST ──► Spring Boot API ──► Relational Database
```

**Diagram assets:**

- Architecture: `/assets/diagrams/ecommerce-architecture.svg`  
- ER model: `/assets/diagrams/ecommerce-er.svg`  

### 8.4 Entity model

| Entity | Relationships |
|--------|---------------|
| `Product` | Belongs to `ProductCategory` |
| `Customer` | Has one or more `Address` records |
| `Order` | Contains many `OrderItem` rows |
| `OrderItem` | References `Product` |
| `Address` | Located in `State` → `Country` |

### 8.5 Checkout sequence

1. UI loads product catalog from API  
2. Shopper builds cart client-side  
3. Checkout payload posted to `CheckoutController`  
4. API creates `Order` and `OrderItem` records transactionally  
5. UI displays order confirmation  

### 8.6 Repository references

- API: [github.com/chandansingh7/Ecommerce-Api](https://github.com/chandansingh7/Ecommerce-Api)  
- UI: [github.com/chandansingh7/ecommerce-ui](https://github.com/chandansingh7/ecommerce-ui)

---

## 9. Project 5 — BrightBubbles (educational game)

### 9.1 Executive summary

BrightBubbles is an **offline-first educational game** combining Angular application shell, Phaser 3 game engine, and Capacitor mobile packaging. No backend or user accounts — suitable for privacy-sensitive consumer contexts.

### 9.2 Business problem

Children's learning apps often require accounts, ads, or constant connectivity. Parents and educators need engaging, age-appropriate content that works offline without data collection.

### 9.3 Solution overview

```text
Angular App (routing, services)
        │
        ├── Phaser 3 game scenes (src/game/)
        ├── Local storage (progress, stars, stickers)
        └── Capacitor (Android / iOS builds)
```

**Diagram asset:** `/assets/diagrams/brightbubbles-use-cases.svg`

### 9.4 Product design

| Dimension | Specification |
|-----------|---------------|
| Levels | 20 levels across world map |
| Age modes | Tiny Learner, Explorer, Smart Challenger |
| Rewards | Stars, stickers, procedural audio |
| Connectivity | Offline-first PWA; no server dependency |

### 9.5 Use cases

| Actor | Journey |
|-------|---------|
| **Child** | Splash → age selection → world map → Balloon Pop level → earn stars |
| **Parent** | Parent zone for oversight and settings |
| **System** | Persist progress locally; no account provisioning |

### 9.6 Repository reference

- [github.com/chandansingh7/BrightBubbles](https://github.com/chandansingh7/BrightBubbles)

---

## 10. Project 6 — Kubernetes & Istio automation scripts

### 10.1 Executive summary

A **DevOps reference collection** for Kubernetes cluster operations and Istio service mesh configuration. Supports platform engineering learning and repeatable staging workflows.

### 10.2 Business problem

Platform teams spend significant time on undocumentated, ad-hoc cluster operations. Scripted, reviewable automation reduces operational risk and accelerates onboarding.

### 10.3 Solution overview

```text
Platform Engineer
       │
       ▼
Automation Scripts (repository)
       ├──► kubectl / Kubernetes API
       └──► Istio control plane
                 │
                 ▼
           Workloads with sidecar injection
```

**Diagram asset:** `/assets/diagrams/k8s-istio-architecture.svg`

### 10.4 Operational workflow

1. Engineer clones repository and selects target script  
2. Validates kubectl context and Istio version compatibility  
3. Executes install/configure/validate script against non-production cluster  
4. Verifies mesh health and sidecar injection  
5. Documents results for runbook inclusion  

### 10.5 Repository reference

- [github.com/chandansingh7/kubernetes-istio-scripts](https://github.com/chandansingh7/kubernetes-istio-scripts)

---

## 11. Security and compliance posture

| Control area | Portfolio implementation |
|--------------|-------------------------|
| **Authentication** | JWT-based auth (POS Mono); optional auth (Micro-URL) |
| **Authorization** | Role-based endpoint and UI guards (POS Mono) |
| **Audit logging** | Access logs, IP allow/block lists (POS Mono) |
| **Data minimization** | No backend for BrightBubbles — local-only state |
| **Public content policy** | No employer/client identifiers in any public artifact |
| **Secret management** | Environment variables for DB and blob credentials — never committed |

---

## 12. Operational readiness summary

| Project | Local run | CI/CD | Hosted demo | Production notes |
|---------|:---------:|:-----:|:-----------:|------------------|
| Brightrail | ✅ | Partial | ✅ GitHub Pages | npm package build verified via Midway |
| POS Mono | ✅ | Varies by repo | — | Requires PostgreSQL + Azure Blob config |
| Micro-URL | ✅ | — | — | MySQL database provisioning required |
| E-Commerce | ✅ | — | — | API must start before UI |
| BrightBubbles | ✅ | — | — | Capacitor sync for mobile builds |
| K8s/Istio | ✅ | — | — | Non-prod cluster recommended |

---

## 13. Risk register

| ID | Risk | Likelihood | Impact | Mitigation |
|----|------|------------|--------|------------|
| R1 | Diagram assets drift from FigJam source | Medium | Medium | Version FigJam board; re-export on architecture changes |
| R2 | Incomplete README on flagship repos | Medium | High | Prioritize POS Mono and Brightrail documentation sprint |
| R3 | Offline sync edge cases (POS) | Low | High | Integration tests for offline order batch upload |
| R4 | Angular major version churn | Medium | Medium | Peer dependency ranges; consumer verification apps |
| R5 | Istio/K8s version skew in scripts | Medium | Medium | Document compatible versions per script folder |

---

## 14. Recommendations and roadmap

### 14.1 Immediate (0–30 days)

1. Publish this report alongside portfolio Projects tab with click-to-expand diagrams  
2. Add architecture README sections to POS Mono API and Brightrail repos  
3. Link FigJam board from each repository README  

### 14.2 Short-term (30–90 days)

1. Add automated tests for POS Mono checkout and offline sync paths  
2. Containerize Micro-URL and POS API with sample Docker Compose  
3. Expand Brightrail component catalog documentation in Funfair  

### 14.3 Medium-term (90+ days)

1. Evaluate multi-tenant extension for POS Mono if commercialization pursued  
2. Add observability stack examples (metrics/tracing) to K8s/Istio scripts  
3. BrightBubbles app store packaging and accessibility audit  

---

## 15. Appendices

### Appendix A — Diagram asset index

| Project | File | Type |
|---------|------|------|
| Brightrail | `brightrail-architecture.svg` | Architecture |
| POS Mono | `pos-mono/01-system-architecture.png` | Architecture |
| POS Mono | `pos-mono/02-user-flow-use-cases.png` | Use case / flow |
| POS Mono | `pos-mono/03-auth-sequence.png` | Sequence |
| POS Mono | `pos-mono/04-er-diagram.png` | Use case / RBAC |
| POS Mono | `pos-mono/05-sales-flowchart.png` | Flow |
| POS Mono | `pos-mono/06-order-sequence.png` | Sequence |
| POS Mono | `pos-mono/07-deployment.png` | Deployment |
| POS Mono | `pos-mono/08-component-diagram.png` | Component |
| Micro-URL | `micro-url-architecture.svg` | Architecture |
| Micro-URL | `micro-url-er.svg` | ER |
| E-Commerce | `ecommerce-architecture.svg` | Architecture |
| E-Commerce | `ecommerce-er.svg` | ER |
| BrightBubbles | `brightbubbles-use-cases.svg` | Use case |
| K8s/Istio | `k8s-istio-architecture.svg` | Architecture |

*All paths relative to portfolio site `/assets/diagrams/`.*

### Appendix B — Related documentation

| Document | Location |
|----------|----------|
| Per-project technical docs | `docs/projects/*.md` |
| Public content policy | `docs/PUBLIC_CONTENT_POLICY.md` |
| Portfolio implementation plan | `docs/PORTFOLIO_IMPLEMENTATION_PLAN.md` |

### Appendix C — Glossary

| Term | Definition |
|------|------------|
| **PWA** | Progressive Web App — installable web app with offline capabilities |
| **RBAC** | Role-Based Access Control |
| **JWT** | JSON Web Token for stateless authentication |
| **ER** | Entity-Relationship data model diagram |
| **Istio** | Service mesh for Kubernetes traffic management |
| **Tauri** | Framework for building desktop apps with web front-ends |

### Appendix D — Document revision history

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | June 2026 | Chandan Singh | Initial portfolio project report |
| 2.0 | June 2026 | Chandan Singh | Enterprise leadership format; diagram index; risk register; roadmap |

---

**End of report**

*Prepared for leadership and architecture review. Public GitHub repositories only.*
