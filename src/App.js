import "./styles.css";
import Boxes from "./components/Boxes";

export default function App() {
  function handleClick() {
    alert("you click me!");
  }

  function handleMouseOver(event) {
    const element = event.target;
    element.textContent = "you are hovering above me";
  }

  function handleMouseOut(event) {
    const element = event.target;
    element.textContent = "Click Me!";
  }

  function handleAppClick(event) {
    const element = event.currentTarget;
    element.style.backgroundColor = "skyblue";
  }

  function handleLinkClick(event) {
    event.preventDefault();
    alert(event.target.href);
  }

  return (
    <div className="App" onClick={handleAppClick}>
      <p>this is a test project</p>
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Click me!
      </button>

      <Boxes />
      <a href="https://bcit.ca" target="_blank" onClick={handleLinkClick}>
        Bcit home
      </a>
    </div>
  );
}
