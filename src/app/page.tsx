export default function Home() {
  return (
    <main>
      <h1 className="hidden">Results Summary</h1>
      <section>
        <h2 className="capitalize">your result</h2>
        <div>
          <span>76</span>
          <span>of 100</span>
        </div>
        <div>
          <span>Great</span>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </section>
      <section>
        <h2>Summary</h2>
        <button>Continue</button>
      </section>
    </main>
  );
}
