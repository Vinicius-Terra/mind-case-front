import React, { useEffect, useState, useContext } from "react";
import { Ambient, Top, Line } from "./style";
import { Box, Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import CourseBox  from "../CourseBox/index.js";
import { getAllCourses } from "../../services/api";
import { postIsLogado } from "../../services/api";
import CoursesContext from "../../contexts/CoursesContext";
import { useNavigate } from "react-router-dom";


export default function HomePage() {

const navigate = useNavigate();
const [islogado, setIslogado] = useState(false);
const [courses, setCourses] = useState([]);
const {coursesContext, setCoursesContext} = useContext(CoursesContext);

useEffect(() => {
  const fetchData = async () => {
    const aux = await getAllCourses();
    setCourses(aux.data);
    setCoursesContext(aux.data);
    const aux2 = await postIsLogado();
    if(aux2.status === 200){
      setIslogado(true);
    }
  };
  
  fetchData();
}, []);

function creatQuestionBoxs () {
  if(courses.length === 0){
    return LoadingFeed()
  }
  else{
    return (
      <React.Fragment>
        {courses.map((courses, index) => (
          <CourseBox key={courses.title} name={courses.name} description={courses.description} image={courses.image} category={courses.category.name} professor={courses.professor.name} id={courses.id}/>
        ))}
      </React.Fragment>
    );
  }
}

  const CallcreatQuestionBoxs = creatQuestionBoxs();

  return (
    <Ambient >
      <Top>
        <button onClick={() => navigate('/')}>
          <h2>Mind-Case</h2> 
        </button>
        <button onClick={() => navigate('/create')}>
          {islogado ? <h2>Criar um curso</h2> : null}
        </button>
        <button onClick={() => navigate('/login')}>
          {islogado ? <h2>Logado</h2> : <h2>Login</h2>}
        </button>
      </Top>
      <Line/>
      {CallcreatQuestionBoxs}
    </Ambient>
  );
}

function LoadingFeed() {
  return (
    <Box >
      <ThreeCircles
        height="100px"
        width="100px"
        outerCircleColor="#3F61D7"
        innerCircleColor="#6C8AE7"
        middleCircleColor="#8BA7F3"
      />
    </Box>
  );
}