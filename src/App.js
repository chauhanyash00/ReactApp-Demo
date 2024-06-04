import './App.css';
import image from './Images/car.jpg';

function App() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Seler</li>
          <li>Cares</li>
          <li></li>
        </ul>  
      </nav>  

      <section>
          <div className="lorem-p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, optio. Eos consequatur rem accusantium et similique exercitationem iure porro veritatis itaque natus neque odit minus ratione iusto, nam optio minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem deserunt maiores sed saepe accusantium, quas neque sequi cum optio laborum repellat beatae velit molestias aperiam voluptas est nisi quo. Molestiae!
          </div>

          
          <img src="https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg" alt="" />
          <img src={image} alt="" className="img1"/>
      </section>
    </header> 
    </>
  );
}

export default App;
