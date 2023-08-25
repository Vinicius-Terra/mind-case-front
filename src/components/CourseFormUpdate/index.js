import React, { useState, useEffect } from "react";
import { getAllProfessors, getAllCategories } from "../../services/api";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CustomButton } from "./style";
import { updateCourse } from "../../services/api";


function CourseFormUpdate( {courseId} ) {
  const [professors, setProfessors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseDescription, setNewCourseDescription] = useState("");
  const [newCourseImage, setNewCourseImage] = useState("");

  useEffect(() => {
    const fetchProfessorsAndCategories = async () => {
      const professorsResponse = await getAllProfessors();
      const categoriesResponse = await getAllCategories();
      setProfessors(professorsResponse.data);
      setCategories(categoriesResponse.data);
    };

    fetchProfessorsAndCategories();
  }, []);

  const handleProfessorChange = (event, newProfessor) => {
    setSelectedProfessor(newProfessor);
  };

  const handleCategoryChange = (event, newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleUpdateCourse = () => {
    try{
        const response = updateCourse(courseId, newCourseName, newCourseDescription, newCourseImage, selectedCategory, selectedProfessor );
        window.location.reload();
    }
    catch(error){
        alert("Erro ao atualizar curso");
        console.log(error.response.data);
    }

    
  };

  return (
    <div>
      <h2>Atualize o Curso</h2>
      <div>
        <h3>Professores</h3>
      <ToggleButtonGroup
        value={selectedProfessor}
        exclusive
        onChange={handleProfessorChange}
      >
        {professors.map((professor) => (
          <ToggleButton key={professor.id} value={professor.name}>
            {professor.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      </div>
      <h3>Categorias</h3>
      <ToggleButtonGroup
        value={selectedCategory}
        exclusive
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <ToggleButton key={category.id} value={category.name}>
            {category.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <CustomButton>
      <TextField label="Course Name" fullWidth value={newCourseName} onChange={(e) => setNewCourseName(e.target.value)}/>
      </CustomButton>
      <CustomButton>
      <TextField label="Description" fullWidth value={newCourseDescription}
        onChange={(e) => setNewCourseDescription(e.target.value)} multiline />
      </CustomButton>
      <CustomButton>
      <TextField label="ImageURL" fullWidth value={newCourseImage}
        onChange={(e) => setNewCourseImage(e.target.value)} multiline />
      </CustomButton>
      <CustomButton>
      <Button variant="contained" color="primary" onClick={handleUpdateCourse}>
        Update Course
      </Button>
      </CustomButton>
    </div>
  );
}

export default CourseFormUpdate;