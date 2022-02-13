export default function Index() {
  return (
    <>
      <div className="p-10 prose">
        <h1>CSS Counter Styles</h1>
        <p>
          The CSS Typed Object Model API simplifies CSS property manipulation by
          exposing CSS values as typed JavaScript objects rather than strings.
          This not only simplifies CSS manipulation, but also lessens the
          negative impact on performance as compared to HTMLElement.style.
          Generally, CSS values can be read and written in JavaScript as
          strings, which can be slow and cumbersome. CSS Typed Object Model API
          provides interfaces to interact with underlying values, by
          representing them with specialized JS objects that can be manipulated
          and understood more easily and more reliably than string parsing and
          concatenation. This is easier for authors (for example, numeric values
          are reflected with actual JS numbers, and have unit-aware mathematical
          operations defined for them). It is also generally faster, as values
          can be directly manipulated and then cheaply translated back into
          underlying values without having to both build and parse strings of
          CSS. CSS Typed OM both allows for the performant manipulation of
          values assigned to CSS properties while enabling maintainable code
          that is both more understandable and easier to write.
        </p>
      </div>
    </>
  );
}
