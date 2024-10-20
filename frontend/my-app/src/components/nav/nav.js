import '../../App.css'
import './nav.css'
import SearchBar from './search_bar'

export default function Nav() {

    return (
        <div className='nav-holder'>
            <div className='nav-main'>
                <div className="nav-left">
                    Left Side
                </div>
                <div>
                    Food Frenzy Logo
                </div>
                <div className="nav-right">
                    <input
                        type="text"
                        value="Search"
                    >

                    </input>

                    Right side
                </div>
            </div>
        </div>
    );
}



