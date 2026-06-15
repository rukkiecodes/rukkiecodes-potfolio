## What it is

DocGrab is a browser tool that lets you keep the documentation you rely on. With one click it converts the page you're reading into well-structured Markdown or JSON and writes it directly into a folder you pick on your own machine. Point it at the root of a documentation site instead, and it follows every page beneath it and saves the whole thing — a complete, offline mirror of a docs set built in a single run. No copy-pasting, no broken formatting, no servers in the middle, and nothing to install beyond the extension itself.

What makes it work where simpler scrapers fail is that DocGrab reads the page your browser has **already rendered.** Modern documentation is full of JavaScript — interactive examples, lazy-loaded sections, tabbed code samples, collapsible details. If you can see the content in your tab, DocGrab can save it. It cleans the page as it goes, stripping the ads, cookie banners, and pop-ups that have nothing to do with the docs, so what lands on your disk reads like documentation and not like a billboard.

**At a glance:** save the current page as Markdown or JSON in one click · crawl an entire docs site into an offline mirror · write straight into a folder you choose (no "Downloads" dumping ground) · automatically strip ads, cookie banners, and overlays · captures JavaScript-rendered content (lazy sections, expanded details, hidden code tabs) · Markdown with front matter, structured JSON, or both · no servers, no command line, nothing extra to install.

## The purpose: why DocGrab exists

The documentation you depend on every day isn't yours. It lives on someone else's website, behind their uptime, their redesigns, and their decisions about what stays online. That's fine — until it isn't. You need a reference on a plane or in a tunnel with no signal. You're behind a corporate firewall that blocks the site. The page you bookmarked got rewritten or quietly deleted. A link rotted. Or you want to feed that documentation into a tool — a note system, a search index, an AI assistant — that expects clean local files, not a live URL. And in the meantime, "I'll just find it again later" has turned into twenty open tabs you'll never actually read.

DocGrab exists to **give you a clean, portable copy of the docs that matter to you — a library that's actually yours.** Its purpose is to turn documentation from something you merely *access* into something you *own*: files on your disk that are searchable offline, editable in any editor, diff-friendly under version control, and available whether or not the original site is still up. It removes the tedious, error-prone middle step — the copy-pasting, the formatting cleanup, the wrestling with scrapers that choke on modern sites — and replaces it with a single click.

Underneath that sits a more specific, increasingly important purpose: **making documentation usable by the tools and workflows people now build around it.** Markdown is the universal language of technical writing — plain-text readable, renderable everywhere, perfect for notes, wikis, and repositories. JSON turns the same content into structured data you can parse, index, and pipe into your own scripts and pipelines. In an era where developers feed documentation to AI assistants and build knowledge bases out of it, a clean local Markdown or JSON copy of the docs you care about is genuinely valuable raw material — and DocGrab is the fastest way to produce it from any site you can open.

## Who it's for

**Developers** who live in documentation and want it offline, searchable, and close at hand — in their editor, their notes, their repo — instead of scattered across browser tabs and at the mercy of a site's uptime.

**People who build with AI assistants.** Coding agents and chatbots work far better when you can hand them clean, local documentation as context. DocGrab lets you capture exactly the docs you need as Markdown or JSON and feed them straight into your AI workflow, instead of pasting messy, ad-littered page dumps.

**Technical writers and researchers** who need to reference, archive, compare, or repurpose documentation — and who benefit from clean, structured source files they can edit, track changes on, and keep permanently.

**Students and self-learners** building a personal, offline study library from the official docs of the things they're learning — readable anywhere, even with no connection.

**Anyone who reads a lot of docs** and is tired of losing them: to dead links, redesigns, paywalls, blocked networks, or simply the chaos of too many tabs. DocGrab is for the person who wants the reference they found today to still be there, exactly as they need it, tomorrow.

## What it gives you

**One-click capture of the page you're on.** Open any documentation page, click DocGrab, and it saves a faithful copy — scrolling to pull in lazy-loaded content, expanding collapsed sections so nothing is hidden, revealing tabbed code samples so multi-language examples come through, and stripping the noise — into your chosen folder.

**Whole-site mirroring.** Give it a documentation root and DocGrab crawls every page beneath it, saving each one, so you can build a complete offline copy of an entire docs set in a single run.

**Files that land exactly where you want them.** Instead of dumping into a generic Downloads folder, DocGrab writes directly into a real folder you choose — picked once and remembered — so your saved docs are organized the way you want from the start.

**Clean output, automatically.** Cookie banners, consent pop-ups, ad slots, and overlay modals are removed before conversion, so your saved files are the actual documentation — readable, distraction-free — and smart enough not to gut a page that's genuinely about ads or cookies.

**The format that fits the job.** Markdown (with front matter) for reading, note-taking, wikis, and version control; JSON for structured data you can index or feed into scripts and pipelines; or both at once.

**No friction, no plumbing.** Because it works inside the browser you already have, there's no Python, no headless-browser setup, no command line, and nothing extra to install. If you can open the page, you can save it.

## Why it stands out

Saving a web page isn't new, but most ways of doing it are bad in a specific way: a "Save As" gives you a tangle of HTML and assets, copy-paste destroys the formatting, and older scrapers can't even see content that JavaScript renders. DocGrab is built around three ideas that define its purpose:

1. **It captures what you actually see.** By reading the already-rendered page, it handles the modern, interactive documentation that defeats source-based tools.
2. **It gives you ownership, cleanly.** Real files, in a folder you choose, in formats made for reuse — Markdown and JSON — with the ads and noise stripped out.
3. **It scales from one page to a whole site.** A single click for the page in front of you, or one start URL for an entire offline mirror.

## The bigger idea

DocGrab is a small stand for a bigger principle: the knowledge you rely on should be portable and yours. The web made documentation universally accessible, but "accessible" and "owned" aren't the same thing — and the gap between them shows up every time a site goes down, a page changes, a network blocks it, or a tool needs a local file instead of a link.

Its larger purpose is to close that gap, and to do it in a way that fits how people work now. As more of our reading, writing, and building is mediated by tools — note systems, search indexes, and especially AI assistants that thrive on clean local context — turning the web's documentation into structured, portable, owned files isn't just convenient; it's foundational. DocGrab's aim is to make building that personal, AI-ready documentation library as easy as clicking a button on the page you're already reading.

## Outcomes

DocGrab is a working tool, shipped as a browser extension (with command-line companions for automation). For the people who use it, the value is concrete: the documentation they care about becomes clean, structured, offline files they own — searchable, editable, future-proof, and ready to feed into their notes, their repos, or their AI tools.

In short: **DocGrab's purpose is to let you keep the documentation you depend on — turning any page, or a whole docs site, into clean Markdown or JSON you own, offline, and can actually use.**

*Built as a browser extension that reads the rendered page, cleans it, and writes Markdown/JSON directly to a user-chosen folder; companion command-line tools support automated, large-scale crawling.*
