import "../styles/cv.css";

function Cv({name}) {
  return <div className="cv-body">
        <div className="cv-sheet">
            <h1>{name}</h1>
        </div>        
  </div>;
}

export default Cv;
