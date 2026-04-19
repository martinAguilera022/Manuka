import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Sofía",
    username: "@sofia",
    body: "A mi hijo le encantó 😍",
    img: "https://avatar.vercel.sh/sofia",
  },
  {
    name: "Martín",
    username: "@martin",
    body: "Muy buena calidad, súper recomendado",
    img: "https://avatar.vercel.sh/martin",
  },
  {
    name: "Lucía",
    username: "@lucia",
    body: "No dejó de jugar en todo el día",
    img: "https://avatar.vercel.sh/lucia",
  },
]

const repeated = [...reviews, ...reviews, ...reviews]

const firstRow = repeated.slice(0, repeated.length / 2)
const secondRow = repeated.slice(repeated.length / 2)

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-[200px] cursor-pointer overflow-hidden rounded-3xl bg-white p-5",
        " backdrop-blur-md",
        "border",
        "shadow-lg shadow-black/5",
        "transition-all duration-300",
        "hover:scale-105 hover:shadow-xl"
      )}
    >
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <img
          className="rounded-full border-2 border-[var(--primary)]"
          width="40"
          height="40"
          src={img}
        />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-500">{username}</p>
        </div>
      </div>

      {/* ⭐ ESTRELLAS */}
      <div className="mt-2 text-yellow-400 text-sm">
        ⭐⭐⭐⭐⭐
      </div>

      {/* TEXTO */}
      <blockquote className="mt-2 text-sm text-gray-700 leading-snug">
        {body}
      </blockquote>
    </figure>
  )
}

function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[320px] w-full overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:18s]">
        {firstRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover vertical className="[--duration:18s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>

      {/* fades arriba y abajo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white"></div>
    </div>
  )
}

function Comments() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        Lo que dicen las familias 💬
      </h2>

      <MarqueeDemoVertical />
    </section>
  )
}

export default Comments