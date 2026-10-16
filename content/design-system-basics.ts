import type { Article } from "@/sanity/lib/articles";

const paragraph = (key: string, text: string, style = "normal"): Article["body"][number] => ({
  _type: "block", _key: key, style, markDefs: [],
  children: [{ _type: "span", _key: `${key}-text`, text, marks: [] }],
});

// An authored, version-controlled article. A published CMS article with the same slug takes precedence.
export const designSystemBasics: Article = {
  _id: "local-design-system-basics",
  _updatedAt: "2026-10-16T09:00:00.000Z",
  title: "Build a design system. Start with the basics.",
  slug: "how-to-create-a-design-system",
  excerpt: "A practical guide to turning a few good design decisions into a consistent system, with an LLM as your thinking partner.",
  publishedAt: "2026-10-16T09:00:00.000Z",
  coverSrc: "/blog/design-system-basics.png",
  coverAlt: "Ivory paper specimens, neutral swatches and modular graphite blocks arranged on a charcoal tabletop.",
  author: { name: "Yaniv Tsoref" },
  categories: [{ _id: "design-systems", title: "Design systems" }, { _id: "basics", title: "The basics" }],
  body: [
    paragraph("intro", "A design system is a shared set of decisions about how a product looks and behaves. It connects principles, reusable components, and clear guidance so that the next screen feels like part of the same product. You do not need a huge component library to begin. You need a small set of decisions that holds up in real use."),
    paragraph("start-with-product", "01. Start with the product, not the palette", "h2"),
    paragraph("product", "Before choosing colors or building buttons, write down who the product is for, what they need to do, and how the experience should feel. Pick three useful principles, such as clear, calm, and direct. Make them specific: ‘clear’ might mean one primary action per screen and labels that explain the outcome."),
    paragraph("audit", "Look at a few real screens. Collect the text styles, colors, spacing, controls, and recurring interactions. Where are you repeating yourself? Where are similar things behaving differently? Start with the patterns you already need, rather than designing every component you might someday use."),
    paragraph("define-foundations", "02. Define a small set of foundations", "h2"),
    paragraph("foundations", "Foundations are the raw ingredients: color, type, spacing, shape, and motion. Keep the first version small. A body style, a few heading sizes, a spacing scale based on four pixels, and a limited set of surface and text colors are enough to start testing."),
    paragraph("tokens", "Give values names that describe their role. A token called ‘secondary text’ is more useful in a component than ‘gray 500’: it explains why that color exists. Separate the base value from its purpose, so that you can change a theme without rewriting every component."),
    paragraph("example", "For example, define ‘spacing step four’ as 16px, ‘control radius’ as 8px, and ‘primary text color’ as your main reading color. Then use those names consistently in both your design file and your code. These are starting points, not universal rules."),
    paragraph("build-components", "03. Build components around real needs", "h2"),
    paragraph("components", "Start with the elements your product uses most: a button, a text input, a link, and perhaps a simple panel. Give each one a clear job. A primary button commits the main action; a secondary button supports it. Variants should express purpose, not every possible visual preference."),
    paragraph("states", "Design the less glamorous states too: hover, keyboard focus, disabled, loading, error, and success where relevant. An input is not complete until someone can understand its label, enter information, spot an error, and recover from it. Check contrast, readable text, and generous touch targets early."),
    paragraph("llm-partner", "04. Use an LLM as a thinking partner", "h2"),
    paragraph("llm", "Use the language model you already have access to. The important part is the context you provide: your product brief, existing tokens, component examples, and constraints. Ask it to find inconsistencies, suggest names, or draft documentation. Review the output against the actual product before adopting it."),
    paragraph("prompt-intro", "Here is a starter prompt you can adapt:"),
    paragraph("prompt", "Act as a design system reviewer. I am building [product] for [audience]. Our principles are [three principles]. Here are our current tokens and components: [paste examples]. Identify inconsistencies, propose the smallest useful set of semantic tokens, and list the states each component needs. Reuse existing decisions where possible. Explain each recommendation and flag assumptions. Do not invent components we do not need.", "blockquote"),
    paragraph("review", "Work in small passes. First review the foundations, then one component, then a real screen. Ask the model to explain tradeoffs instead of simply producing more options. Treat generated code and accessibility claims as proposals to inspect and test, rather than proof that something works."),
    paragraph("document-decisions", "05. Document the decisions people need", "h2"),
    paragraph("docs", "For each component, show what it does, when to use it, when to choose something else, and which variants and states exist. Add a real example with realistic content. A short explanation beside a working example is often more useful than a long specification nobody opens."),
    paragraph("source", "Keep a source of truth. That might be a design system page in your app, a shared design library, and a concise document linking the two. When a decision changes, update the token or component first, then its examples and guidance. Avoid fixing each screen independently."),
    paragraph("test-real-screen", "06. Test it on one real screen", "h2"),
    paragraph("test", "Use only your foundations and components to build a representative screen. Try it on a narrow mobile viewport and a large display. Navigate with a keyboard. Increase text size. Replace short labels with longer ones. These checks reveal whether the system supports real content or only a carefully arranged demo."),
    paragraph("iterate", "If you need an exception, ask whether it belongs in the system or only in that particular feature. Add a new variant when there is a recurring need. Keep a brief change log so collaborators understand what changed and why."),
    paragraph("takeaway", "Start small. Make it useful.", "h2"),
    paragraph("closing", "Your first design system can be a page of principles, a handful of tokens, four well-considered components, and one working screen. The goal is to make good decisions easier to repeat. Use an LLM to help you think and document, then use real people, real content, and real interactions to find out whether those decisions hold up."),
  ],
};
