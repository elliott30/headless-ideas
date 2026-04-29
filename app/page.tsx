import Script from "next/script";

export default function Home() {
  const installPrompt = `npx headless-ideas init`;
  const snippet = `<script src="https://headless-ideas.vercel.app/widget.js"
        data-account="YOUR_ACCOUNT_ID" async></script>
<div id="hf-feedback"></div>`;

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans flex flex-col">
      <div className="max-w-2xl mx-auto px-6 pb-24 pt-24 flex-1 w-full">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Headless Ideas</h1>
        <p className="text-xl text-zinc-500 mb-12">
          A drop-in feedback widget for web apps. Add it in 30 seconds.
        </p>

        <section className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            Install
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Ask Claude Code, or run it yourself:
          </p>
          <pre className="bg-zinc-950 dark:bg-zinc-900 text-green-400 rounded-lg px-5 py-4 text-sm overflow-x-auto">
            {installPrompt}
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            Add the widget
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Paste this snippet anywhere in your app. The CLI prints your account ID.
          </p>
          <pre className="bg-zinc-950 dark:bg-zinc-900 text-zinc-300 rounded-lg px-5 py-4 text-sm overflow-x-auto whitespace-pre-wrap">
            {snippet}
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            Try it — leave feedback for this site
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            This is the actual widget, running on its own marketing page.
          </p>
          <div id="hf-feedback" className="border border-zinc-200 dark:border-zinc-800 rounded-lg" />
          <Script
            src="https://headless-ideas.vercel.app/widget.js"
            data-account="acc_lsxg1jqlvtow"
            strategy="afterInteractive"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            That&apos;s it
          </h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-[15px]">
            <li>No account setup — the CLI handles it.</li>
            <li>No dashboard — your widget is your dashboard.</li>
            <li>No configuration — one script tag.</li>
          </ul>
        </section>

        <p className="text-zinc-500 dark:text-zinc-400 text-[15px]">
          Open source on{" "}
          <a
            href="https://github.com/elliott30/headless-ideas"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <footer className="px-6 py-6 text-center">
        <a
          href="https://elliott30.github.io/legal.html"
          className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          Privacy Policy & Terms
        </a>
      </footer>
    </main>
  );
}
