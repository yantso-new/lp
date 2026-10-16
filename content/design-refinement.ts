import type { Article } from "@/sanity/lib/articles";
import { articleCovers } from "./article-covers";

function makeArticle(slug: string, title: string, excerpt: string, hour: string, sections: [string, string[]][]): Article {
  return {
    _id: `local-${slug}`,
    _updatedAt: `2026-10-16T${hour}:00:00.000Z`,
    publishedAt: `2026-10-16T${hour}:00:00.000Z`,
    slug, title, excerpt,
    author: { name: "Yaniv Tsoref" },
    categories: [{ _id: "design-process", title: "Design process" }],
    coverSrc: articleCovers[slug].src,
    coverAlt: articleCovers[slug].alt,
    body: sections.flatMap(([heading, paragraphs], index) => [
      ...(heading ? [{ _type: "block" as const, _key: `heading${index}`, style: "h2", markDefs: [], children: [{ _type: "span" as const, _key: `headingText${index}`, text: heading, marks: [] }] }] : []),
      ...paragraphs.map((text, paragraph) => ({ _type: "block" as const, _key: `section${index}paragraph${paragraph}`, style: "normal", markDefs: [], children: [{ _type: "span" as const, _key: `text${index}paragraph${paragraph}`, text, marks: [] }] })),
    ]),
  };
}

export const designRefinementArticles: Article[] = [
  makeArticle(
    "how-to-fix-ai-slop-in-web-design",
    "How to Fix AI Slop in Web Design",
    "Your AI draft got you moving. Now treat it like a sculpture: establish the foundations, refine the shape, and work toward a page worth launching.",
    "12",
    [
      ["", [
        "The page has a hero, a row of cards, a testimonial, and a big button. Everything is there. But when you put it beside another AI generated website, you could swap the logos and barely notice.",
        "Starting with an LLM can be a good way to explore. You get something on the screen quickly and discover what you want by reacting to it. The trouble starts when that first draft becomes the final direction.",
        "Treat the draft like a sculpture. You have material to work with. Now you need to shape it, remove what does not belong, and make the remaining pieces work together.",
      ]],
      ["First, gather the pieces", [
        "Open the page and collect every heading, text style, button, input, card, and repeated layout. Put them together on one page. The inconsistencies become much harder to ignore when three versions of the same button sit beside each other.",
        "Whether you began with a design system or skipped it entirely, this is the first repair: establish a small, reliable foundation. You need a shared set of decisions that every element follows.",
        "Choose the heading sizes and weights, body text, spacing, colors, borders, and corner radii. Give each a clear role. If two styles do the same job, decide which one stays.",
      ]],
      ["Turn the collection into a system", [
        "A page of attractive examples is only useful if the real website uses the same components. Connect each specimen to the component and token that controls it. Otherwise you will tidy the reference page while the actual site keeps drifting.",
        "Build repeated interface elements from reusable components. Use a shared button for actions, a shared text field for inputs, and shared typography rules for headings and body copy. Keep meaningful page sections flexible so the whole site does not become one repeated template.",
        "Define primary and secondary action variants. Then show the states each component needs: default, hover, keyboard focus, pressed, disabled, loading, error, and success where relevant. Primary and secondary describe purpose. States describe what happens during use.",
        "A UI library gives you a starting structure. Without one, you will need to define more of the behavior and usage rules yourself. Either way, inspect what you actually have. A library cannot decide whether your page has a convincing hierarchy.",
      ]],
      ["Change the system before polishing the sections", [
        "Suppose you like another website's typography and the way its story unfolds. Name those qualities. Perhaps the headings are compact, the paragraphs are short, and each section answers the question raised by the previous one.",
        "Use those observations to guide specific changes. Adjust the shared typography styles. Reconsider the section order. If the color feels wrong, change its semantic token and review every place it appears. Consistent foundations let you explore without repairing the same decision in six places.",
        "Borrow a principle you understand and adapt it to your own content. A different font alone will not give the page a point of view.",
      ]],
      ["Shape the story, one section at a time", [
        "Write the job of each section in a sentence. The opening explains the offer. The next section makes it credible. Another shows the result. The final action tells someone how to proceed. If two sections have the same job, consider combining them.",
        "Sketch the sequence with boxes, diagrams, or plain text before generating another polished screen. A rough diagram can show that your proof arrives too late. It does not need to look like a website to help you make a better one.",
        "Then refine one section at a time. Check the relationship between its heading, copy, image, spacing, and action. Keep the strongest version and move forward. Changing the entire page with every prompt makes it hard to tell what improved.",
      ]],
      ["Give AI a precise correction", [
        "‘This looks bad’ describes your reaction. A useful instruction describes what should change and how you will judge it.",
        "Try: ‘Refine the opening section using our existing components. Make the offer clear in the heading, shorten the supporting copy, and give the primary action more emphasis than the secondary link. Keep the approved type scale and colors. Show the static layout first.’",
        "If you cannot identify the problem, get a professional audit. Ask for findings tied to specific sections, with a priority and a reason. Feed those findings to AI one at a time, then compare the result with the original issue. A clear diagnosis is much more useful than another request to make it premium.",
      ]],
      ["Save motion for the next phase", [
        "Get to a static landing page you like before exploring scroll effects and decorative transitions. Review the layout, typography, content, and mobile composition while they are standing still.",
        "Keep essential behavior working throughout. Links, forms, keyboard focus, and navigation still need to function. The work you are postponing is the extra choreography. Motion introduces questions about timing, feedback, and attention that deserve their own pass.",
      ]],
      ["The last part takes attention", [
        "AI can make a page feel almost finished very quickly. The familiar 80 percent and 20 percent idea is a useful metaphor here, rather than a measurable rule: the first draft arrives fast, while refinement can take much longer than expected.",
        "That refinement happens in small decisions. One heading becomes clearer. One repeated component becomes consistent. One unnecessary section disappears. Review the page again after each meaningful change.",
        "Start by putting your elements on one page. Connect them to real components. Set the foundations. Then shape the story, section by section, until the page says something worth launching.",
      ]],
    ],
  ),
  makeArticle(
    "turn-a-website-into-a-mini-design-system",
    "Turn Your Website Into a Mini Design System",
    "A practical inventory for bringing scattered styles, components, and states into one dependable foundation.",
    "11",
    [
      ["", [
        "Three buttons look almost identical. One has a different radius. Another uses a slightly smaller label. Changing the page means hunting down each version and hoping you found them all.",
        "This is a useful moment to build a mini design system. Start with the website you already have and collect the decisions it repeats.",
      ]],
      ["Make the inventory visible", [
        "Create a reference page containing the existing headings, paragraphs, links, buttons, inputs, navigation items, and repeated content patterns. Use actual components wherever they exist. Include long labels and realistic text so the examples reveal the awkward cases.",
        "For each item, record where it appears and what job it does. A large heading might introduce a page. A smaller one might introduce a section. If two styles serve the same purpose, choose a default rather than keeping both out of habit.",
      ]],
      ["Give shared decisions a home", [
        "Define a compact type scale and a spacing scale. Name colors by purpose, such as primary text, secondary text, page background, and border. Record the radius used by controls and media. The names should help someone choose a value without studying the whole website.",
        "Connect these decisions to your code. A typography specimen should use the same style as the real heading. A button specimen should render the button the product uses. Editing the reference page must not create a separate version of reality.",
      ]],
      ["Separate variants from states", [
        "A primary action and a secondary action have different levels of emphasis. A loading button is the same action while work is happening. Document those two ideas separately so you do not end up with a confusing collection of unrelated button designs.",
        "Show default, hover, focus, pressed, disabled, and loading states where they apply. For fields, include labels, help text, validation errors, and successful completion where useful. Explain what triggers each state and how someone recovers from an error.",
        "If a UI library supplies these behaviors, verify the result after applying your theme. If you build your own components, include keyboard use and accessibility in the component contract from the beginning.",
      ]],
      ["Write the rule beside the example", [
        "A button label might say ‘Book a call’. The rule beside it can say: use the primary variant for the main action in this section; use a secondary variant when the action supports that goal. That explanation makes the example reusable.",
        "Keep the guidance short. Describe when to use a component, which variants are supported, and what should happen with long content or a narrow viewport. Add a new option when the product needs it, rather than trying to anticipate every future screen.",
      ]],
      ["Prove it with a real section", [
        "Rebuild one existing section using the documented pieces. If you need a new text size or spacing value for every element, the foundation still needs work. If the section fits comfortably, apply the same approach to the next one.",
        "The useful test is simple: change one shared decision and inspect the real website. The related elements should update together. When they do, you have a foundation that makes the next round of design work easier.",
      ]],
    ],
  ),
  makeArticle(
    "give-ai-better-design-feedback",
    "How to Give AI Design Feedback That Leads Somewhere",
    "Turn vague reactions into specific instructions, then use sketches and references to make the next revision easier to judge.",
    "10",
    [
      ["", [
        "You ask AI to make a page feel more premium. It changes the font, adds more space, and redraws the cards. You still dislike it, but now several unrelated things have changed.",
        "A better revision starts with a smaller instruction. Describe the problem you can see, the outcome you want, and the decisions the model should preserve.",
      ]],
      ["Translate the reaction into a problem", [
        "‘The hero feels weak’ might mean the offer is unclear, the heading competes with the image, or the main action disappears among several links. Those are different problems. Pick the one that matters most before asking for a redesign.",
        "For example: ‘The heading describes our attitude but never says what we sell. Rewrite it so a new visitor can identify the service. Keep the approved typography and layout while we evaluate the copy.’ You can now judge whether the next version solves the issue.",
      ]],
      ["Use references with a reason", [
        "A reference becomes useful when you explain what you want from it. Name the compact heading, the relationship between image and text, or the way proof appears immediately after the offer.",
        "Ask the model to apply that principle to your existing components and content. Copying an entire page brings along decisions that may have nothing to do with your audience. A specific observation gives you something to adapt and discuss.",
      ]],
      ["Draw the idea before polishing it", [
        "If the structure is the problem, sketch the structure. Four boxes labelled offer, proof, process, and action may explain your intention more clearly than a full website reference.",
        "Try: ‘Propose two section sequences in plain text. For each section, give its job and the question it answers. Use the existing content. Wait until we choose the sequence before adjusting the visual design.’ This keeps the conversation focused on the decision that is still open.",
      ]],
      ["Give each revision a boundary", [
        "Name the section, the problem, the desired outcome, and the constraints. Then add a simple acceptance check. For example: the primary action should be easy to identify, the supporting paragraph should answer one question, and the mobile layout should preserve the same reading order.",
        "Ask for a short account of what changed. Compare it with the previous version at the same viewport size. Keep the revision if it solves the stated problem, and record the decision before moving on.",
      ]],
      ["Bring in a diagnosis when you need one", [
        "Sometimes you know a page feels wrong but cannot explain why. A professional review can give you the missing diagnosis. Ask the reviewer to identify the affected section, describe the problem, explain its effect, and propose a direction for improvement.",
        "Turn each finding into a separate task for AI. Review the result against that finding before tackling the next one. The point is to get closer to an experience you can explain, evaluate, and confidently launch.",
      ]],
    ],
  ),
  makeArticle(
    "finish-your-landing-page-before-adding-motion",
    "Finish Your Landing Page Before Adding Motion",
    "Get the story, hierarchy, and static layout right, then give interactions a focused design pass of their own.",
    "09",
    [
      ["", [
        "Pause every animation on your landing page. Can you still understand the offer, follow the story, and find the next action? If the page loses its appeal when it stops moving, inspect the layout before adding another effect.",
        "Motion adds another layer of decisions. Give the static page enough attention that you know what the movement is meant to improve.",
      ]],
      ["Make the story work standing still", [
        "Read the headings in order without reading the paragraphs. They should give a visitor a useful outline: what you offer, who it helps, why it is credible, and how to proceed. Fix gaps or repetition before choreographing how those sections enter the screen.",
        "Then read each paragraph beneath its heading. Cut copy that repeats the same claim without adding detail. Put supporting evidence close to the claim it supports. Check that the image helps explain something specific.",
      ]],
      ["Review the relationships", [
        "Look at heading size, line length, image weight, spacing, and action emphasis together. A button may feel too quiet because a nearby illustration dominates the section. Increasing its size alone may create another imbalance.",
        "Work through one section at a time, then review the whole page. Use shared components and tokens for repeated decisions so local improvements do not gradually pull the site apart.",
      ]],
      ["Keep essential behavior in the first pass", [
        "Navigation, links, forms, focus states, and useful feedback belong in the working page from the start. Someone must be able to use the site while you refine its visual design.",
        "Postpone decorative scroll effects and elaborate transitions. This distinction lets you finish a usable static experience while leaving room to explore motion deliberately later.",
      ]],
      ["Set a clear review gate", [
        "Before beginning the motion pass, inspect the page at mobile and desktop widths. Check the reading order, wrapping headings, realistic content, contrast, keyboard navigation, and the main action. Resolve the structural problems you can already see.",
        "Keep a short list of open issues. Separate items that prevent someone from understanding or using the page from refinements you can make later. That gives you a concrete way to decide whether the static design is ready.",
      ]],
      ["Give every movement a job", [
        "When the foundation holds, decide what an interaction should communicate. A transition might preserve context between two states. A loading indicator might explain that an action is in progress. A small entrance effect might guide attention to a newly revealed element.",
        "Design timing, interruption, keyboard behavior, and a reduced motion experience together. Review whether the effect helps someone use the page. If it only delays the content or distracts from the action, simplify it.",
        "The final refinements often take longer than the first draft suggests. Work through them deliberately: a clearer section, a better relationship, a more useful response. That steady attention gives the finished page its character.",
      ]],
    ],
  ),
];
