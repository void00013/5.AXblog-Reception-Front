import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "../views/Home/Home"
import Layout from "@/layout/Layout"
import Blog from "../views/Blog/Blog"
import Works from "../views/Works/Works"
import Work from "@/views/Work/Work"
import Resume from "@/views/Resume/Resume"
import About from "@/views/About/About"
import Article from "@/views/Article/Article"

// todo: 1.组件懒加载
// todo: 2.添加404页面
// const Index = import('@/views/Home/Home')

export default function IndexRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="page" element={<Layout />}>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:path" element={<Blog />} />
          <Route path="works" element={<Works />} />
          <Route path="work" element={<Work />} />
          <Route path="resume" element={<Resume />} />
          <Route path="about" element={<About />} />
          <Route path="article" element={<Article />} />
        </Route>
        {/* <Route path="/blog">
          <Route path="" element={<Blog />} />
          <Route path=":path" element={<Blog />} />
        </Route>
        <Route path="/works" element={<Works />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} /> */}
      </Routes>
    </Router>
  )
}