import React, { useEffect, useState, useContext } from "react";
import { Ambient, Top, Line, Box } from "./style";
import { Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { getAllCourses, postIsLogado, deleteCourse } from "../../services/api";
import CoursesContext from "../../contexts/CoursesContext";
import { useNavigate } from "react-router-dom";
import CourseFormUpdate from "../CourseFormUpdate";

export default function CoursePage() {
    const [response, setResponse] = useState("");
    const [inputText, setInputText] = useState("");
    const [islogado, setIslogado] = useState(false);
    const {courseId} = useParams();
    const {coursesContext, setCoursesContext} = useContext(CoursesContext);
    const UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
          const aux2 = await postIsLogado();
          if(aux2.status === 200){
            setIslogado(true);
          }
        };
        
        fetchData();
      }, []);

    async function  handleClickSend  (inputText) {
        //const newResponse = await ;
    }

    function  findCourse  () {
        if(coursesContext.length !== 0){
            console.log(coursesContext[0].id == courseId);
        }
        const course = coursesContext.find(course => course.id === parseInt(courseId));
        return course;
    }

    if(coursesContext.length === 0){
        const fetchData = async () => {
            const aux = await getAllCourses();
            setCoursesContext(aux.data);
          };
        
          fetchData(); 
    }

    const  course =  findCourse();
    if(course === undefined){
        return (
            <Ambient >
                <Top>
                    <button onClick={() => navigate('/')}>
                    <h2>Mind-Case</h2> 
                    </button>
                    <button onClick={() => navigate('/login')}>
                    {islogado ? <h2>Logado</h2> : <h2>Login</h2>}
                    </button>
                </Top>
            <Line/>
            <Box >
                <h1>Course not found</h1>
            </Box>
            
        </Ambient>
        );
    }
    else{       
        const {image, description, name, category, professor} = course;  
        return (
            <Ambient >
                <Top>
                    <button onClick={() => navigate('/')}>
                    <h2>Mind-Case</h2> 
                    </button>
                    <button onClick={() => navigate('/login')}>
                    {islogado ? <h2>Logado</h2> : <h2>Login</h2>}
                    </button>
                </Top>
                <Line/>
                <Box >
                <div className="image-box">
                    <img src={image} alt="Course Image" />
                </div>
                <div className="text-box">
                    <div className="name-category">
                        <h1>{name}</h1>
                        <div>
                            <div className="category-box"><h2>{category.name}</h2></div>
                            <div className="category-box"><h2>Professor:</h2><h2>{professor.name}</h2></div>
                        </div>
                    </div>
                    <p>{description}</p>
                    <button onClick={() => handleClickSend(inputText)}>Send</button>
                </div>
                </Box>
                <CourseFormUpdate courseId={courseId} name={name} description={description} image={image} category={category.name} professor={professor.name}/>
            </Ambient>
        );
    }        
}