//定义（路由）组件
import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import Message from "@/views/Message";
import BlogDetail from "@/views/Blog/Detail";

//定义路由 

const routes= [
  { path: '/',name:'home',component: Home },
  { path: '/about',name:'about',component: About },
  { path: '/blog',name:'blog',component: Blog },
  { name: "CategoryBlog", path: "/blog/cate/:categoryId", component: Blog },
  { name: "BlogDetail", path: "/blog/:id", component: BlogDetail },
  { path: '/project',name:'project',component: Project },
  { path: '/message',name:'message',component: Message },
];

export default routes;
