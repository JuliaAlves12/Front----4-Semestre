import { useState } from "react";
import "./Card.css";
import { comidas as listaInicial } from "../../comidas.js";

export default function Card() {
  const [comidas, setComidas] = useState(listaInicial);

  const alternarFavorito = (id) => {
    setComidas(
      comidas.map((comida) =>
        comida.id === id
          ? { ...comida, favorited: !comida.favorited }
          : comida
      )
    );
  };

  return (
    <main className="catalogo">
      <h1 className="titulo">Comidas Favoritas do Grupo</h1>

      <div className="grade">
        {comidas.map((comida) => (
          <article className="cartao" key={comida.id}>
            <img 
              src={comida.img} 
              alt={`Foto de ${comida.title}`} 
              className="imagem"
            />
            <div className="conteudo">
              <h2 className="nome">{comida.title}</h2>
              <p className="descricao">{comida.description}</p>
              
              <button 
                className={`botao-favorito ${comida.favorited ? "favoritado" : ""}`}
                onClick={() => alternarFavorito(comida.id)}
              >
                {comida.favorited ? "Favoritado" : "Favoritar"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}