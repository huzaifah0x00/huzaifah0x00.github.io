export function Footer() {
  return (
    <footer
      style={{ marginTop: "0.1rem", borderTop: "1px solid #90909080" }}
      className="animate__animated animate__fadeInUp animate__delay-3s"
    >
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          fontWeight: "bold",
        }}
      >
        <a target="_blank" rel="noreferrer" href="https://Linkedin.com/in/huzaifah-asif">
          LinkedIn
        </a>
        |
        <a target="_blank" rel="noreferrer" href="https://github.com/huzaifah0x00">
          Github
        </a>
      </div>
    </footer>
  );
}
