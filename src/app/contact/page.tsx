export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Contact OuroLoop</h1>
      <p className="mt-3 text-brand-muted">Share your programme scope and we will respond with a tailored rollout plan.</p>
      <form action="/api/leads" method="post" className="mt-8 grid gap-3">
        <input name="name" required className="rounded-xl border bg-white p-3" placeholder="Name" />
        <input name="email" required type="email" className="rounded-xl border bg-white p-3" placeholder="Email" />
        <textarea name="message" className="rounded-xl border bg-white p-3" placeholder="Message" />
        <button className="rounded-full bg-brand-primary px-5 py-2 font-semibold text-white">Submit</button>
      </form>
    </main>
  );
}
