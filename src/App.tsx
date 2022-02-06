import "./App.css";
import "animate.css";

export default function App() {
  return (
    <main>
      <div className="about animate__animated animate__fadeIn">
        <h1 className="animate__animated animate__fadeInUp less-margin">
          <b>Hi.</b>
        </h1>
        <h1 className="animate__animated animate__fadeInUp animate__delay-1s less-margin">
          <span>I'm Huzaifah</span>
          <span className="animate__animated animate__fadeInRight animate__delay-2s">.</span>
        </h1>
        <span className="animate__animated animate__fadeIn animate__delay-2s">Thanks for dropping by</span>
      </div>
    </main>
  );
}
