import { PAGE_STYLE, PageHeader, STORY_PARAMS } from './_storyShell'

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    docs: {
      description: {
        component:
          'Typography styles for the design system. Includes font families, font weights, the type scale, and utility classes. All values are sourced from the Figma Design System and configured in design-tokens.css.',
      },
    },
  },
}

export default meta

const sampleText = 'Almost before we knew it, we had left the ground.'
const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'

// =============================================================================
// Fonts
// =============================================================================
export const FontFamilies = () => (
  <div style={PAGE_STYLE} className="space-y-10">
    <PageHeader
      title="Font Families"
      description="Three font families used across the design system. Open Sans covers headings and body text; Geist and Geist Mono handle system and code."
    />

    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-base-border text-left">
          <th className="py-3 px-4 text-sm font-bold text-foreground w-45">
            Name
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground w-45">
            Font Family
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground w-40">
            Tailwind Class
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground">
            Sample
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-semibold text-foreground">
            font-geist
          </td>
          <td className="py-4 px-4 text-muted-foreground">Geist</td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            font-geist
          </td>
          <td
            className="py-4 px-4 font-geist text-foreground"
            style={{
              fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif",
            }}
          >
            {sampleText}
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-semibold text-foreground">
            font-geist-mono
          </td>
          <td className="py-4 px-4 text-muted-foreground">Geist Mono</td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            font-geist-mono
          </td>
          <td
            className="py-4 px-4 font-geist-mono text-foreground"
            style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
          >
            {sampleText}
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-semibold text-foreground">
            font-opensans
          </td>
          <td className="py-4 px-4 text-muted-foreground">Open Sans</td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            font-opensans
          </td>
          <td className="py-4 px-4 font-opensans text-foreground">
            {sampleText}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

// =============================================================================
// Font Weights
// =============================================================================
export const FontWeights = () => (
  <div style={PAGE_STYLE} className="space-y-10">
    <PageHeader
      title="Font Weights"
      description="Available font weights from the design system. Weight values map directly to CSS font-weight."
    />

    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-base-border text-left">
          <th className="py-3 px-4 text-sm font-bold text-foreground w-45">
            Name
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground w-25">
            Value
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground w-40">
            Tailwind Class
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground">
            Sample
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-base-border">
          <td
            className="py-4 px-4 text-foreground"
            style={{ fontWeight: 300 }}
          >
            light
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            300
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            font-light
          </td>
          <td className="py-4 px-4 font-opensans font-light text-foreground">
            {sampleText}
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td
            className="py-4 px-4 text-foreground"
            style={{ fontWeight: 400 }}
          >
            normal
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            400
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            font-normal
          </td>
          <td className="py-4 px-4 font-opensans font-normal text-foreground">
            {sampleText}
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td
            className="py-4 px-4 text-foreground"
            style={{ fontWeight: 500 }}
          >
            medium
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            500
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            font-medium
          </td>
          <td className="py-4 px-4 font-opensans font-medium text-foreground">
            {sampleText}
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td
            className="py-4 px-4 text-foreground"
            style={{ fontWeight: 600 }}
          >
            semibold
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            600
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            font-semibold
          </td>
          <td className="py-4 px-4 font-opensans font-semibold text-foreground">
            {sampleText}
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td
            className="py-4 px-4 text-foreground"
            style={{ fontWeight: 700 }}
          >
            bold
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            700
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            font-bold
          </td>
          <td className="py-4 px-4 font-opensans font-bold text-foreground">
            {sampleText}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

FontFamilies.parameters = STORY_PARAMS
FontWeights.parameters = STORY_PARAMS

// =============================================================================
// Type Scale
// =============================================================================
export const TypeScale = () => (
  <div style={PAGE_STYLE} className="space-y-10">
    <PageHeader
      title="Type Scale"
      description="Full typography scale from the Figma design system. All sizes render in Open Sans. Headings (9xl–xl) use larger sizes and heavier weights; body sizes (lg–xs) use lighter weights."
    />

    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-base-border text-left">
          <th className="py-3 px-4 text-sm font-bold text-foreground w-25">
            Size
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground w-25">
            Font Size
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground w-28">
            Line Height
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground w-28">
            Font
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground w-44">
            Weight
          </th>
          <th className="py-3 px-4 text-sm font-bold text-foreground">
            Sample
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            9xl
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            128px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            160px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td
            className="py-4 px-4 font-opensans font-semibold text-foreground"
            style={{
              fontSize: '128px',
              lineHeight: '160px',
            }}
          >
            Aa
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            8xl
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            96px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            120px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td
            className="py-4 px-4 font-opensans font-semibold text-foreground"
            style={{
              fontSize: '96px',
              lineHeight: '120px',
            }}
          >
            Aa
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            7xl
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            72px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            90px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td
            className="py-4 px-4 font-opensans font-semibold text-foreground"
            style={{
              fontSize: '72px',
              lineHeight: '90px',
            }}
          >
            Aa
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            6xl
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            60px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            72px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td
            className="py-4 px-4 font-opensans font-semibold text-foreground"
            style={{
              fontSize: '60px',
              lineHeight: '72px',
            }}
          >
            Aa
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            5xl
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            48px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            60px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td
            className="py-4 px-4 font-opensans font-semibold text-foreground"
            style={{
              fontSize: '48px',
              lineHeight: '60px',
            }}
          >
            Aa
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            4xl
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            40px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            52px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td
            className="py-4 px-4 font-opensans font-semibold text-foreground"
            style={{
              fontSize: '40px',
              lineHeight: '52px',
            }}
          >
            Aa
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            3xl
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            30px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            40px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td
            className="py-4 px-4 font-opensans font-semibold text-foreground"
            style={{
              fontSize: '30px',
              lineHeight: '40px',
            }}
          >
            Aa
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            2xl
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            24px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            32px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td className="py-4 px-4 font-opensans font-semibold text-2xl text-foreground">
            Aa
          </td>
        </tr>
        <tr className="border-b border-base-border">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            xl
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            20px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            28px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td className="py-4 px-4 font-opensans font-semibold text-xl text-foreground">
            Aa
          </td>
        </tr>
        <tr className="border-b border-base-border bg-base-muted/50">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            lg
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            18px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            28px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Semibold (600)
          </td>
          <td className="py-4 px-4 font-opensans font-semibold text-lg text-foreground">
            {sampleText}
          </td>
        </tr>
        <tr className="border-b border-base-border bg-base-muted/50">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            base
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            16px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            24px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Normal (400)
          </td>
          <td className="py-4 px-4 font-opensans font-normal text-base text-foreground">
            {sampleText}
          </td>
        </tr>
        <tr className="border-b border-base-border bg-base-muted/50">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            sm
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            14px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            20px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Normal (400)
          </td>
          <td className="py-4 px-4 font-opensans font-normal text-sm text-foreground">
            {sampleText}
          </td>
        </tr>
        <tr className="border-b border-base-border bg-base-muted/50">
          <td className="py-4 px-4 font-mono text-sm font-semibold text-foreground">
            xs
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            12px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            16px
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Open Sans
          </td>
          <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
            Normal (400)
          </td>
          <td className="py-4 px-4 font-opensans font-normal text-xs text-foreground">
            {sampleText}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

TypeScale.parameters = STORY_PARAMS

// =============================================================================
// Headings
// =============================================================================
export const Headings = () => (
  <div style={PAGE_STYLE} className="space-y-10">
    <PageHeader
      title="Headings"
      description="Semantic heading elements h1–h6, styled using Open Sans. Use these for page titles, section headers, and content hierarchy."
    />
    <div className="space-y-6">
      <div>
        <code className="text-xs text-muted">h1 · 48px · Bold · Open Sans</code>
        <h1
          className="text-foreground"
          style={{
            fontSize: 48,
            fontWeight: 700,
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          Heading Level 1
        </h1>
      </div>
      <div>
        <code className="text-xs text-muted">h2 · 36px · Bold · Open Sans</code>
        <h2
          className="text-foreground"
          style={{
            fontSize: 36,
            fontWeight: 700,
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          Heading Level 2
        </h2>
      </div>
      <div>
        <code className="text-xs text-muted">
          h3 · 30px · Semibold · Open Sans
        </code>
        <h3
          className="text-foreground"
          style={{
            fontSize: 30,
            fontWeight: 600,
            lineHeight: 1.375,
            margin: 0,
          }}
        >
          Heading Level 3
        </h3>
      </div>
      <div>
        <code className="text-xs text-muted">
          h4 · 24px · Semibold · Open Sans
        </code>
        <h4
          className="text-foreground"
          style={{
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 1.375,
            margin: 0,
          }}
        >
          Heading Level 4
        </h4>
      </div>
      <div>
        <code className="text-xs text-muted">
          h5 · 20px · Medium · Open Sans
        </code>
        <h5
          className="text-foreground"
          style={{
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Heading Level 5
        </h5>
      </div>
      <div>
        <code className="text-xs text-muted">
          h6 · 18px · Medium · Open Sans
        </code>
        <h6
          className="text-foreground"
          style={{
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Heading Level 6
        </h6>
      </div>
    </div>
  </div>
)

Headings.parameters = STORY_PARAMS

export const BodyText = () => (
  <div style={PAGE_STYLE} className="space-y-10">
    <PageHeader
      title="Body Text"
      description="Paragraph and body text styles for prose content. Uses Open Sans across all sizes."
    />
    <div className="space-y-6 max-w-prose">
      <div>
        <code className="text-xs text-muted">.text-lead · 20px · Regular</code>
        <p className="text-lead">{longText}</p>
      </div>
      <div>
        <code className="text-xs text-muted">.text-large · 18px</code>
        <p className="text-large text-foreground">{longText}</p>
      </div>
      <div>
        <code className="text-xs text-muted">p · 16px · Medium</code>
        <p className="text-foreground">{longText}</p>
      </div>
      <div>
        <code className="text-xs text-muted">.text-small · 14px</code>
        <p className="text-small text-foreground">{longText}</p>
      </div>
      <div>
        <code className="text-xs text-muted">.text-muted</code>
        <p className="text-muted">{longText}</p>
      </div>
    </div>
  </div>
)

BodyText.parameters = STORY_PARAMS
