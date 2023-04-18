import NavBar from "./NavBar";
import me from '../imgs/me.jpg';
import downArrow from '../imgs/down-arrow.png';
import { animateScroll } from 'react-scroll';

const HomePage = (props) => {
    return (
        <section className="homepage h-screen flex flex-col">
            <NavBar />
            <div className="flex grow h-90 justify-around">
                <div className="flex flex-col  justify-center">
                    <h1 className="text-slate-50 text-6xl text-left">Hello,</h1>
                    <h1 className="text-slate-50 text-6xl text-left">I'm Amy Skaletzky</h1>
                </div>
                <div className="h-full flex flex-col justify-center">
                    <div className="rounded-full rounded-b-lg p-1 ">
                        <div className="rounded-full rounded-b-lg p-1.5 bg-gradient-to-l from-purple-400 via-pink-300 to-orange-200">
                            <img className="img-me  rounded-full rounded-b-lg" src={me} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex animate-bounce justify-center">
                <button onClick={() => animateScroll.scrollTo(500, 'about-id')}>
                    <img className="w-12 rounded-full" src={downArrow} />
                </button>
            </div>
        </section>
    )
}

export default HomePage;