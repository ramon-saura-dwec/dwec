import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="home">
            <div className="home-content">
                <div className="home-section text">
                    <h2>Associació d'amics de Futbol</h2>
                    <div>
                        <p>Ha entrat a l'aplicació de l'Associació de d'amics del Futbol.<br></br><br></br> Aqui es pot generar una Jornada tant de primera divisió masculina com femenina, un cop generada podras fer una aposta a una travessa.<br></br><br></br>A la travessa només podras fer una aposta, marcant a cada partit el resultat que estimes que es donarà.</p>
                        <br></br>
                        <p> · 1 si la victoria es per l'equip local</p>
                        <p> · X per representar l'empat</p>
                        <p> · 2 si la victoria es per l'equip visitant</p>
                        <br></br>
                        <p>A continuació es generaran els resultats de la jornada de forma aleatoria, i es pot veure quantes apostes has encertat.</p>
                    </div>
                </div>
                <Link to={'/jornada'} className="home-section jornada">
                    <img src="/img/logo-red.png" width={200} alt="" />
                    <h2>Crea una Jornada</h2>
                </Link>
                <Link to={'/quiniela'} className="home-section quiniela">
                    <img src="/img/quiniela.png" width={200} alt="" />
                </Link>
                <div className="home-section api">
                    <img src="/img/apilogo.png" width={200} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;