import React, { useEffect, useState } from "react";
import Project from "../Components/Project";
import '../static/project.css';
import Loading from "../Components/Loading";
const Projects=()=>{
    const [loading,setLoading]=useState(true);
    const projects=[
        {
            name:"Web Crawler",
            desc:"I had created an app in java using we can extract the links either from webpage or whole website",
            imageLink:"https://www.brittsoft.com/wp-content/uploads/2021/10/Java.jpg",
            technologyUsed:"Java, Jsoup Library"
        },
        {
            name:"E-New Website",
            desc:"I had created an online E-NEWS Website On which user can register himself create news and read news online he can also comment on posts.",
            imageLink:"https://blog.logrocket.com/wp-content/uploads/2019/07/ES-modules-ESM-node.png",
            technologyUsed:"Node, MongoDB, Mongoose, EJS, HTML, CSS and JS"
        },
        {
            name:"Anime Search APP",
            desc:"I had created a react anime search app using which user can find the details of any anime like when anime was aired,how many episodes it contains etc..",
            imageLink:"https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/0e6ff/React.jpg",
            technologyUsed:"React Js, HTML&CSS, javascript"
        }
        ,{
            name:"Product Management System",
            desc:"I had created a web app for maintaining the product details like prouduct type, status and price etc..",
            imageLink:"https://blog.logrocket.com/wp-content/uploads/2020/10/laravel.png",
            technologyUsed:"PHP, Larvel, MYSQL, HTML, CSS , Javascipt"
        } 
    ];
    useEffect(()=>{
        setLoading(false);
    },[])
    return (
<div className="project-flex">
{loading ? <Loading/>: 
projects.map((data,index) => (
        <Project project={data} key={index}/>
      ))}
</div>
    );
}

export default Projects;