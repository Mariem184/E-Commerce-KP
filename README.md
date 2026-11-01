# E-Commerce-KP - Store Management System (نظام إدارة المتاجر)

This project is a modern Store Management System built with **Angular (v21)** using a strict **Feature-Based Architecture (Domain-Driven Design approach)** and **Lazy Loading**.

## Features Included:
- **Core Layer (`core/`)**: Singleton services, Auth state signals, HTTP Interceptors, Guards.
- **Shared Layer (`shared/`)**: Reusable UI components (Stat cards, tables), custom pipes, and role directives.
- **Layout Shell (`layout/`)**: Application shell with responsive Sidebar, Header, and separate Auth Layout.
- **Domains (`features/`)**:
  - `auth`: Authentication & Login
  - `dashboard`: Store KPIs, sales summaries, and stock alerts
  - `products`: Product catalog, pricing, and product forms
  - `inventory`: Stock management, min levels, and warehouse operations
  - `sales`: Sales invoices, payments, and order tracking
  - `pos`: Fast Point of Sale terminal with cart calculations and checkout
  - `purchases`: Purchase orders and supplier management
  - `customers`: Customer profiles, ledger balances, and loyalty points
  - `employees`: Staff accounts, role assignments, and shifts
  - `finance`: Cash drawer, revenue/expenses, and vouchers
  - `reports`: ZATCA VAT reports, cashier summaries, and analytics
  - `settings`: Store profile, tax registration, and receipt preferences

---

## Development Server

To start a local development server, run:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Production Build

To build the project run:

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory with each feature compiled as an independent lazy-loaded chunk.
