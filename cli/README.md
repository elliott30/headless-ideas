# headless-ideas

Add a feedback widget to your app in 30 seconds.

## Install

```bash
npx headless-ideas init
```

That's it. The CLI creates an account, saves your credentials to `~/.headless-ideas/config.json`, and prints a snippet to paste into your app:

```html
<script src="https://headless-ideas.vercel.app/widget.js"
        data-account="acc_yourId" async></script>
<div id="hf-feedback"></div>
```

Drop those two lines anywhere in your app — the widget renders inline, lets users post feedback, and shows existing posts with upvote buttons.

## What it does

- Renders a textarea, submit button, and a list of submitted feedback
- Anonymous voting (one vote per browser via `localStorage`)
- No framework — works in any HTML page
- No build step, no config — one script tag

## Re-running

`npx headless-ideas init` is idempotent. If you've already registered, it reuses the same account ID and reprints the snippet. Your existing feedback board stays intact.

## Where credentials live

`~/.headless-ideas/config.json` — contains your `apiKey` and `accountId`. The `apiKey` is a write token for your account; keep it private.

## Source

[github.com/elliott30/headless-ideas](https://github.com/elliott30/headless-ideas)

## License

MIT
