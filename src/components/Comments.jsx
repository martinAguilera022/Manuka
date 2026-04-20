import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import "./Comments.css"
// ⭐ Estrellas dinámicas
const ReviewStars = ({ rating = 5 }) => {
  return (
    <div className="flex gap-1 mt-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? "text-[var(--color-accent)]"
              : "text-gray-300"
          }
        >
          ★
        </span>
      ))}
    </div>
  )
}

// 🧠 Reviews
const reviews = [
  {
    name: "Sofía",
    username: "Mamá de Tomi",
    body: "A mi hijo le encantó 😍. Estuvo toda la tarde creando y súper concentrado.",
    img: "https://avatar.vercel.sh/sofia",
    rating: 5,
  },
  {
    name: "Martín",
    username: "Papá de Juli",
    body: "Muy buena calidad, se nota que está pensado para chicos. Lo volvería a comprar.",
    img: "https://avatar.vercel.sh/martin",
    rating: 4,
  },
  {
    name: "Lucía",
    username: "Mamá de Emma",
    body: "No dejó de jugar en todo el día, y encima desarrolla su creatividad 🙌",
    img: "https://avatar.vercel.sh/lucia",
    rating: 5,
  },
]

const ReviewCard = ({ img, name, username, body, rating }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative w-[300px]  testimonials p-8 mx-auto",
        "shadow-[0_15px_40px_rgba(0,0,0,0.08)]",
        "",
        "text-center",
        "transition-all duration-300 hover:scale-[1.03]"
      )}
    >
      {/* AVATAR */}
      <div className="flex justify-center -mt-14">
        <img
          src={img}
          alt={name}
          className="w-2 h-2 rounded-full  border-white shadow-md"
        />
      </div>

      {/* NAME */}
      <h3 className="mt-4 text-sm font-semibold text-gray-900">
        {name}
      </h3>

      <p className="text-xs text-gray-500">{username}</p>

      
      {/* BODY */}
      <p className="text-sm text-gray-600 leading-relaxed -mt-6 px-2">
        {body}
      </p>

    

      {/* STARS */}
      <div className="flex justify-center gap-1 mt-4 text-[var(--color-accent)]">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>
    </motion.figure>
  )
}

// 🎞️ Marquee vertical simple
function HorizontalMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      
      {/* TRACK */}
      <div className="flex track w-max gap-6 animate-scroll-x">
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>

      {/* GRADIENTS LATERALES */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white" />

      {/* ANIMACIÓN */}
      <style>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-x {
          animation: scroll-x 25s linear infinite;
        }

        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
// 🧩 Sección
function Comments() {
  return (
    <section className="py-20 bg-[var(--color-bg)] flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-[var(--color-primary)]">
        Lo que dicen las familias 💬
      </h2>

      <div className="w-full max-w-md overflow-y-hidden px-4">
        <HorizontalMarquee />
      </div>
    </section>
  )
}

export default Comments