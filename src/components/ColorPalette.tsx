const colors = [
  { hex: '#F3A446', name: 'primary' },
  { hex: '#A06235', name: 'secondary' },
  { hex: '#141313', name: 'dark1' },
  { hex: '#1D1D1D', name: 'dark2' },
  { hex: '#EFEFEF', name: 'light' },
]

export default function ColorPalette() {
  return (
    <section className="bg-black bg-opacity-70 p-10 text-white">
      <h2 className="text-xl mb-6 font-heading text-center">Colors Palette</h2>
      <div className="flex gap-4 justify-center">
        {colors.map((c) => (
          <div key={c.hex} className="flex flex-col items-center">
            <div
              className="w-30 h-30 rounded-lg"
              style={{ backgroundColor: c.hex }}
            />
            <span className="text-sm mt-2">{c.hex}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
