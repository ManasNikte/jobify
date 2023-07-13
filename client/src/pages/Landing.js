import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return <Wrapper>
    <nav>
        <Logo />
    </nav>
    <div className="container page">
        {/* info */}
        <div className="info">
            <h1>job <span>tracking</span> app</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab vitae maxime voluptates iusto nulla quo dolores quaerat nisi molestiae. Dolore molestiae magnam mollitia. Aliquam nostrum consequatur harum soluta magnam laborum qui placeat aperiam voluptatum cupiditate rerum voluptatibus, vel quod omnis ipsa unde doloremque repellat ex, nulla consectetur dicta temporibus tenetur?</p>
            <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
    </div>
  </Wrapper>
}


export default Landing