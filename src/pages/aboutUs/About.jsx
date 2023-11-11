import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import imgAdil from './../../assest/images/adel.png';

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <h1 className="about__title">What do you want to know about us?</h1>
      <p className="about__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum optio
        eveniet dignissimos distinctio voluptates. Id deserunt suscipit debitis
        recusandae nesciunt, iure inventore cumque qui corrupti veritatis
        provident accusantium? Numquam, unde! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sed maxime explicabo velit hic, odit
        dolore, animi rem incidunt inventore vero debitis amet? Libero,
        architecto veritatis ducimus facilis aliquid molestias eius Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Neque consequatur totam
        architecto maiores dicta vitae pariatur numquam. Voluptatum eos omnis,
        consequuntur ratione debitis inventore consectetur. Aliquid consectetur
        similique velit labore?
      </p>

      <img src={imgAdil} alt="Adil Abde" />

      <Footer />
    </div>
  );
}
