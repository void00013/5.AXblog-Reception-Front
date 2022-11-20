import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "../views/Index/Index"
import Blog from "../views/Blog/Blog"
import Works from "../views/Works/Works"
import Work from "@/views/Work/Work"
import Resume from "@/views/Resume/Resume"
import About from "@/views/About/About"

export default function IndexRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/works" element={<Works />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}