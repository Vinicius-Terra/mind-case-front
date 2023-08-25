import React, { useState, useEffect } from "react";
import { Box } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import PencilIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import CustomModal from "../CustomModal/CustomModal"; // Adjust the import path
import { postIsLogado, deleteCourse } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function CourseBox(props) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [islogado, setIslogado] = useState(false);
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

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    try {
      deleteCourse(props.id);
      // refresh the page
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Erro ao deletar curso");
    }

    closeDeleteModal();
  };

  const { name, description, image, category, professor, id } = props;

  const handleClickSend = () => {
    navigate(`/course/${id}`);
  };

  return (
    <Box key={id}>
      <div className="image-box">
        <img src={image} alt="Course Image" />
        {(islogado) ? <div className="delete-icon-container">
          <IconButton className="delete-icon" onClick={openDeleteModal}>
            <DeleteIcon color="error" />
          </IconButton>
          <div className="pencil-icon-container">
          <IconButton className="pencil-icon" onClick={handleClickSend}>
            <PencilIcon color="" />
          </IconButton>
          </div>
        </div> : null}
      </div>
      <div className="name-category">
        <h1>{name}</h1>
        <div>
          <div className="category-box">
            <h2>{category}</h2>
          </div>
          <div className="category-box"><h2>Professor:</h2><h2>{professor.name}</h2></div>
        </div>
      </div>
      <p>{description}</p>
      { (islogado) ? <CustomModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
      /> : null}
      
    </Box>
  );
}