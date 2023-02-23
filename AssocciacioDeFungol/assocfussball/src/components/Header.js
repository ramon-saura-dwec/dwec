import primeraM from '../data/primeraM';
import primeraF from '../data/primeraF';
import MenuNavigation from './Menu-navigation';

function Header() {

    return(
        <div className="header">
            <div>
                {primeraM.map((team)=> (
                    <img width={50} height={50} src={team['src']} alt={"escudo " + team['club']} />
                    ))}
            </div>
            <div className="logo">
                <div className='line'></div>
                <img src='img/logo.png' alt="logo" />
            </div>
            <div>
                {primeraF.map((team)=> (
                    <img width={50} height={50} src={team['src']} alt={"escudo " + team['club']} />
                    ))}
            </div>
            <MenuNavigation></MenuNavigation>
        </div>
    )
}

export default Header;