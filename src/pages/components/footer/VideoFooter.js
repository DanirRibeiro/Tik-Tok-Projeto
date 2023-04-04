import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function videoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      {/*criando uma div para acoplar todos os textos do video*/}
      <div className="videoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
      {/*criando uma div para acoplar todos os textos do video em relação a descrição de audio*/}
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoFooterMusic__text">
            <p>{music}</p>
          </div>

        </div>
      </div>
      <img 
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/vinil.png?alt=media&token=95dd7b93-7976-446f-944b-5ea6a4fb85c9"
      />
    </div>
  );
}

export default videoFooter;

/*extenção rcfe cria tudo isso automático*/
