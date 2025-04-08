export default function TypographySection() {
  return (
    <section className="bg-black bg-opacity-70 text-white p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 className="font-heading text-2xl uppercase">Butler Medium Uppercase</h2>
        <p className="text-gray-400 mt-2">Heading 1</p>
      </div>
      <div>
        <h2 className="font-heading text-2xl">Butler Medium</h2>
        <p className="font-body text-sm text-gray-300 mt-2">
          Open Sans Regular. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  )
}
