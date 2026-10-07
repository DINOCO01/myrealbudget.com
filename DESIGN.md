---
version: 1.2.0
name: My Real Budget Design System
description: An editorial fintech design language for My Real Budget — warm, trustworthy, approachable, and modern. Built on a warm off-white canvas (#FAF8F5) with pure white surfaces (#FFFFFF), deep navy/charcoal typography (#0F172A), and a refined botanical emerald green (#0E6E55) as the primary financial accent. Subtle warm borders (#E5E0D8) and light whisper shadows create authentic tactile depth. In dark mode, it transitions to a deep navy foundation (#0B1220) with slate surfaces (#111827), elevated modules (#172033), and an accessible emerald accent (#10B981).

colors:
  # LIGHT THEME (Editorial Fintech)
  primary: "#0e6e55"
  on-primary: "#ffffff"
  primary-hover: "#0a5240"
  primary-soft: "#e8f5f1"
  ink: "#0f172a"
  body: "#475569"
  mute: "#64748b"
  faint: "#94a3b8"
  hairline: "#e5e0d8"
  hairline-soft: "#ede9e1"
  canvas: "#faf8f5"
  canvas-elevated: "#ffffff"
  canvas-subtle: "#f4f0ea"
  accent-green: "#0e6e55"
  accent-green-soft: "#e8f5f1"
  accent-blue: "#2563eb"
  accent-blue-soft: "#eff6ff"
  link: "#2563eb"
  link-deep: "#1d4ed8"
  link-soft: "#eff6ff"
  error: "#dc2626"
  error-deep: "#b91c1c"
  error-soft: "#fef2f2"
  warning: "#d97706"
  warning-soft: "#fffbeb"
  warning-deep: "#b45309"
  success: "#0e6e55"
  success-soft: "#e8f5f1"
  success-deep: "#0a5240"

  # DARK THEME SPECIFICATION
  dark-canvas: "#0b1220"
  dark-surface: "#111827"
  dark-surface-elevated: "#172033"
  dark-surface-subtle: "#0e1626"
  dark-primary: "#10b981"
  dark-primary-soft: "rgba(16, 185, 129, 0.15)"
  dark-ink: "#f8fafc"
  dark-body: "#94a3b8"
  dark-mute: "#64748b"
  dark-border: "#1e293b"
  dark-border-subtle: "#141e30"
  dark-success: "#10b981"
  dark-success-soft: "rgba(16, 185, 129, 0.15)"
  dark-error: "#f87171"
  dark-error-soft: "rgba(248, 113, 113, 0.15)"
  dark-warning: "#fbbf24"
  dark-warning-soft: "rgba(251, 191, 36, 0.15)"

typography:
  display-xl:
    fontFamily: Newsreader, Lora, Georgia, serif
    fontSize: 48px
    fontWeight: 600
    lineHeight: 52px
    letterSpacing: -1.2px
  heading-lg:
    fontFamily: Newsreader, Lora, Georgia, serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -0.6px
  heading-md:
    fontFamily: Newsreader, Lora, Georgia, serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 30px
    letterSpacing: -0.3px
  heading-sm:
    fontFamily: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: -0.2px
  label-sm:
    fontFamily: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.15px
  mono-eyebrow:
    fontFamily: JetBrains Mono, Geist Mono, ui-monospace, Menlo, monospace
    fontSize: 11px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.8px
  body-lg:
    fontFamily: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0
  body-md:
    fontFamily: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0
  body-sm:
    fontFamily: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0
  button-lg:
    fontFamily: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0
  button-md:
    fontFamily: Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 13px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0
  code:
    fontFamily: JetBrains Mono, Geist Mono, ui-monospace, Menlo, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0

rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 14px
  pill-category: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 64px
  4xl: 96px
  section: 120px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "0px 18px"
  button-secondary:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "0px 18px"
  button-primary-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "0px 12px"
  button-ghost-sm:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "0px 10px"
  button-category-pill:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill-category}"
    padding: "0px 14px"
  button-icon-circular:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "0px"
  text-input:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  feature-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  feature-card-elevated:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  pricing-card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  code-block:
    backgroundColor: "{colors.canvas-subtle}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-md}"
    padding: "{spacing.xl} {spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.lg}"
  cta-band:
    backgroundColor: "{colors.canvas-subtle}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.3xl} {spacing.lg}"

---

## Overview

My Real Budget features a dual-theme architecture:

- **LIGHT THEME (Default)**: Warm off-white canvas (`#faf8f5`), pure white surfaces (`#ffffff`), refined botanical emerald primary actions (`#0e6e55`), pale sage washes (`#e8f5f1`), deep navy/charcoal text (`#0f172a`), subtle warm borders (`#e5e0d8`), and blue reserved strictly for secondary interactions/links (`#2563eb`).
- **DARK THEME (Optional)**: Deep navy background (`#0b1220`), dark slate surfaces (`#111827`), elevated card panels (`#172033`), accessible botanical emerald accents (`#10b981`), light near-white typography (`#f8fafc`), muted blue-gray secondary copy (`#94a3b8`), and dark slate borders (`#1e293b`).

## Color Systems

### Light Theme
- **Background**: Warm off-white (`#faf8f5`).
- **Surface**: Pure white (`#ffffff`).
- **Primary / Accent**: Refined botanical emerald (`#0e6e55`). Hover: `#0a5240`.
- **Primary-soft**: Pale sage wash (`#e8f5f1`).
- **Text Primary**: Deep navy/charcoal (`#0f172a`).
- **Text Secondary**: Muted slate (`#475569`).
- **Border**: Subtle warm border (`#e5e0d8`). Subtle: `#ede9e1`.
- **Secondary Link/Blue**: Royal blue (`#2563eb`). Deep: `#1d4ed8`.
- **Success**: Botanical green (`#0e6e55`). Soft wash: `#e8f5f1`.
- **Danger**: Red (`#dc2626`). Soft wash: `#fef2f2`.

### Dark Theme
- **Background**: Deep navy (`#0b1220`).
- **Surface**: Dark slate (`#111827`).
- **Elevated Surface**: Lifted card modules (`#172033`).
- **Primary / Accent**: Accessible botanical emerald (`#10b981`). Hover: `#34d399`.
- **Primary-soft**: Dark emerald tint (`rgba(16, 185, 129, 0.15)`).
- **Text Primary**: Near-white (`#f8fafc`).
- **Secondary Text**: Muted blue-gray (`#94a3b8`).
- **Border**: Dark slate (`#1e293b`).
- **Success**: Accessible emerald (`#10b981`). Tint: `rgba(16, 185, 129, 0.15)`.
- **Danger**: Accessible red (`#f87171`). Tint: `rgba(248, 113, 113, 0.15)`.
