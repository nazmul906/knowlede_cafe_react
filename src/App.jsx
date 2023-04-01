import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import BlogPost from "./components/blogpost/BlogPost";
import Blog from "./components/blog/Blog";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <BlogPost></BlogPost>
      <Blog></Blog>
    </div>
  );
}

export default App;
