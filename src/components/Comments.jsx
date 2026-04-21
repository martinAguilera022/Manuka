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
    img: "/img/user-Icon1.png",
    rating: 5,
  },
  {
    name: "Martín",
    username: "Papá de Juli",
    body: "Muy buena calidad, se nota que está pensado para chicos. Lo volvería a comprar.",
    img: "/img/user-Icon2.png",
    rating: 4,
  },
  {
    name: "Lucía",
    username: "Mamá de Emma",
    body: "No dejó de jugar en todo el día, y encima desarrolla su creatividad 🙌",
    img: "/img/user-Icon3.png",
    rating: 5,
  },
  {
    name: "Luis",
    username: "Papá de Luisa",
    body: "Muy buena calidad, se nota que está pensado para chicos. Lo volvería a comprar.",
    img: "/img/user-Icon4.png",
    rating: 4,
  },
  {
    name: "Pablo",
    username: "Papá de Pablo",
    body: "Muy buena la calidad, se nota que está pensado para chicos. Lo volvería a comprar.",
    img: "/img/user-Icon5.png",
    rating: 4,
  }
]

const ReviewCard = ({ img, name, username, body, rating }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative min-w-[260px] max-w-[320px] w-[80%] sm:w-[280px] md:w-[300px] testimonials p-6 mx-auto flex-shrink-0",
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
import { useEffect, useRef, useState } from "react"

function HorizontalMarquee() {
  const scrollRef = useRef(null)
  const animationRef = useRef(null)

  const [isInteracting, setIsInteracting] = useState(false)

  // 👉 Auto scroll infinito
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const speed = 0.5 // 🔥 ajustá velocidad

    const animate = () => {
      if (!isInteracting) {
        el.scrollLeft += speed

        // loop infinito suave
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationRef.current)
  }, [isInteracting])

  // 🖱️ Drag desktop
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e) => {
    isDown.current = true
    setIsInteracting(true)

    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const handleMouseLeave = () => {
    isDown.current = false
    setIsInteracting(false)
  }

  const handleMouseUp = () => {
    isDown.current = false
    setIsInteracting(false)
  }

  const handleMouseMove = (e) => {
    if (!isDown.current) return
    e.preventDefault()

    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  // 📱 Touch mobile
  const handleTouchStart = () => setIsInteracting(true)
  const handleTouchEnd = () => setIsInteracting(false)

  return (
    <div className="relative  w-full py-6">
      <div
        ref={scrollRef}
        className="flex gap-6 track overflow-x-auto overflow-y-hidden scrollbar-hide px-4 touch-pan-x"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* 🔁 duplicamos para loop infinito */}
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>

    
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

      <div className="w-full h-full">
        <HorizontalMarquee />
      </div>
    </section>
  )
}

export default Comments