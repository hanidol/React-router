import "./App.css";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Trailer from "./Pages/Trailer";
import Footer from "./Layout/Footer";

const movies = [
  {
    title: "Thor: Love and Thunder",
    language: "en",
    release_date: "2022-07-06",
    description:
      "Alors que Thor est en pleine introspection et en quête de sérénité, sa retraite est interrompue par un tueur galactique connu sous le nom de Gorr, qui s’est donné pour mission d’exterminer tous les dieux. Pour affronter cette menace, Thor demande l’aide de Valkyrie, de Korg et de son ex-petite amie Jane Foster, qui, à sa grande surprise, manie inexplicablement son puissant marteau, le Mjolnir. Ensemble, ils se lancent dans une dangereuse aventure cosmique pour comprendre les motivations qui poussent Gorr à la vengeance et l’arrêter avant qu’il ne soit trop tard.. ",
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kSMarEm3ESOOr11dzsep2RZ1ClD.jpg",
    rating: 1,
    id: 1,
    trailer: "https://www.youtube.com/embed/ACROHRyWVmc",
  },

  {
    title: "Beast (2022)",
    language: "en",
    description:
      "Le Dr. Nate Daniels, revient en Afrique du Sud, où il a autrefois rencontré sa femme aujourd’hui décédée, pour y passer des vacances prévues de longue date avec ses deux filles dans une réserve naturelle, tenue par Martin Battles, un vieil ami de la famille, biologiste spécialiste de la vie sauvage. Mais ce repos salvateur va se transformer en épreuve de survie quand un lion assoiffé de vengeance, unique rescapé de la traque sanguinaire d’ignobles braconniers, se met à dévorer tout humain sur sa route et prend en chasse le docteur et sa famille. ",
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kmWpbWYu4gT7wIV4amP0gMDjNHj.jpg",
    rating: 3,
    id: 2,
    trailer: "https://www.youtube.com/embed/EQyqS3eRkjo",
  },
  {
    title: "Pinocchio (2022)",
    language: "en",
    description:
      "La célèbre histoire de ce pantin de bois, Pinocchio, bien décidé à vivre la plus palpitante des aventures pour devenir un vrai petit garçon. ",
    rating: 4,
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nch8NTH45TBH4JyPuugttPzoxau.jpg",
    id: 3,
    trailer: "https://www.youtube.com/embed/6nzUT2IZ6zk",
    release_date: "2022-08-08",
  },

  {
    title: "Krypto et les Super-Animaux (2022)",
    language: "en",
    description:
      "Krypto, le super-chien de Superman, se trouve face à un défi immense : sauver son maître, enlevé par Lex Luthor et son maléfique cochon d’inde Lulu. Pour cela, il devra faire équipe avec une bande d’animaux au grand cœur mais plutôt maladroits. ",
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9Nf7UH8uExdV2Ta4UupmnYjCkYc.jpg",
    rating: 3,
    id: 4,
    trailer: "https://www.youtube.com/embed/6I9P0cNeDNQ",
  },
  {
    title: "Wanted : Choisis ton destin (2008)",
    language: "en",
    description:
      "Wesley Gibson a toutes les raisons du monde d'être malheureux. Tyrannisé par son patron, trompé et humilié par sa petite amie, ce jeune loser, victime d'angoisses récurrentes, ne survit qu'à coup de tranquillisants et de plateaux repas macrobiotiques. C'est alors qu'une fille de rêve fait irruption dans sa triste vie. Fox est une tueuse d'élite, affiliée à une société secrète : la Fraternité, dont les membres se sont érigés en instruments du Destin. L'heure est venue pour Wes de prendre la suite de son père et de découvrir en lui-même des ressources, une soif de violence, des réflexes et des aptitudes insoupçonnés. Sous la tutelle de Sloan et de Fox, Wes commence un entraînement rigoureux qui va faire de lui le meilleur assassin de la Fraternité... ",
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/j0YQlXsfcYm5WQJS7i1XZWI5amk.jpg",
    rating: 5,
    id: 5,
    trailer: "https://www.youtube.com/embed/QEPhAGd9cvU",
  },
];

function App() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  //const filtrage = (text) => {};

  const add = (newMovie) => {
    movies.push(newMovie);

    console.log(movies);
    console.log(newMovie);
  };
  console.log(movies);
  return (
    <div className="App">
      <div className="header"></div>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                text={text}
                setText={setText}
                rating={rating}
                setRating={setRating}
                movies={movies}
              />
            }
          />
        </Routes>
      </div>
      <div className="trailer">
        <Routes>
          <Route path="/trailler/:id" element={<Trailer movies={movies} />} />
        </Routes>
      </div>
      <AddMovie add={add} />
      <Footer></Footer>
    </div>
  );
}

export default App;
