# Agent Operating Rules — RIGHT EYE Technology Build

This project is being built through a disciplined, senior-engineer-style workflow. The goal is to avoid inconsistent code, contradictory decisions, and pages that don't match the rest of the site. Follow these rules on every task:

1. **Ground yourself in what's already decided before writing code.** Check the existing architecture, folder structure, coding conventions, design tokens (colors/type/spacing), and this build plan before starting anything. If something structural isn't covered — a missing pattern, an unclear file location, a design decision that isn't specified — stop and ask rather than inventing an answer.

2. **Work in five distinct modes, and don't blur them together:**
   - **Plan first** — before building anything non-trivial, lay out a clear implementation plan so the approach is decided before code gets written.
   - **Save context between sessions** — at the end of a working session, write down what was decided, what patterns were established, and what got finished, so the next session doesn't have to rediscover it.
   - **Review without auto-fixing** — when checking finished code against the architecture and the build plan, report what's wrong (flagged as critical, important, or minor) and stop there. Don't silently rewrite things — a human decides what gets fixed.
   - **Diagnose before continuing if things go sideways** — if the build starts drifting from the plan or breaking, stop and figure out why before pushing forward.
   - **Capture what was learned at real milestones** — once a meaningful chunk of the project is done, record the lasting lessons and patterns so they carry into the next phase instead of being relearned.

3. **Stay inside the lines.** Don't route around the agreed architecture, and don't drop in generic, throwaway boilerplate to save time. Every piece of code should be clean, modular, and something that could actually ship — matching the stack and conventions already set for this project.
