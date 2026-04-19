import "./Comments.css";

function Comments() {
  const comments = [
    {
      name: "Sofía",
      text: "A mi hijo le encantó, no paró de jugar en toda la tarde 😍",
    },
    {
      name: "Martín",
      text: "Muy buena calidad, súper recomendado para regalar.",
    },
    {
      name: "Lucía",
      text: "Cada mes es una sorpresa distinta, está buenísimo.",
    },
  ];

  return (
    <section className="comments">
      <h2 className="comments-title">LO QUE DICEN LAS FAMILIAS</h2>

      <div className="comments-grid">
        {comments.map((c, i) => (
          <div key={i} className="comment-card">
            <p className="comment-text">“{c.text}”</p>
            <p className="comment-name">— {c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;