import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import VideoCard from "../components/VideoCard";
import "./home.css";

const Home = () => {
  const [videos, setVideos] = useState([
    {
      id: uuid(),
      title: "¿Qué es React?",
      description: "Introducción a React.",
      category: "Front End",
    },
    {
      id: uuid(),
      title: "Spring Framework",
      description: "Fundamentos de Spring para back end.",
      category: "Back End",
    },
  ]);

  const [newVideo, setNewVideo] = useState({ title: "", description: "", category: "" });

  // Función para eliminar un video por ID
  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };



  return (
    <div className="home">
      <h2 className="home-title">Lista de Videos</h2>

      {/* Formulario para agregar un nuevo video */}
      <div className="add-video-form">
        <input
          type="text"
          placeholder="Título"
          value={newVideo.title}
          onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newVideo.description}
          onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Categoría"
          value={newVideo.category}
          onChange={(e) => setNewVideo({ ...newVideo, category: e.target.value })}
        />
        <button >Agregar Video</button>
      </div>

      {/* Lista de videos */}
      <div className="video-list">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
