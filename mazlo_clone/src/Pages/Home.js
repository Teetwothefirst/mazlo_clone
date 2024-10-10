import HomePage from "./HomePage";
import mazloImg from '../assets/mazloImg.jpg'
import '../App.css'

function Home(){
    return <>
    <header class="d-flex justify-content-between align-items-center px-5">
        <div class="d-flex gap-5 align-items-center">
            <div><img src={mazloImg} alt="Mazlo Image" width="120px" height="120px"/></div>
            <div class="d-flex gap-3"> <span class="inline_element">Pricing</span><span class="inline_element">About</span><span class="inline_element">Apply Now</span><span class="inline_element">Login</span>  </div>
        </div>
        <div><button class="btn btn-success">Schedule a demo </button></div>
    </header>
    <main>
        <HomePage></HomePage>
    </main>
    </>;
}

export default Home;