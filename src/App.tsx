
import styled from "styled-components"
import { Header } from './Header'
import { IconMain } from './IconsMain'
import { CgScreen } from 'react-icons/cg';
import { GoStack } from 'react-icons/go'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { ContentMain } from "./ContentMain";
import Image1 from "./img/smart.jpg"
import { DivMain } from "./ContentMain/styled";
import { Imgteste } from "./ContentMainImg/styled";

const DivPrincipal = styled.div`

display: flex;
align-items: center;
justify-content: space-evenly;
padding: 50px;
`;

const DivContent = styled.div`

display: flex;
align-items: center;
justify-content: space-evenly;
`;

function App() {

  return (<>
    <Header padding="125px" fontSize="25px">
      <h1>Minha primeira página com React</h1>
    </Header>
    <DivPrincipal>
      <IconMain icon={<CgScreen />} title="Somente para desktop" description="Vamos aprender como utilizar um framework" />
      <IconMain icon={<GoStack />} title="Criado com componentes" description="Utilizamos o styled components." />
      <IconMain icon={<AiOutlineCheckCircle />} title="Criado com componentes" description="Utilizamos o styled components." />
    </DivPrincipal>

    <DivContent>
      <DivMain>
        <ContentMain title="Lorem Ipsum" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rerum at aperiam assumenda velit accusamus molestias nostrum enim quibusdam repudiandae voluptates non similique fuga officiis consequatur culpa quidem nihil, deserunt architecto! Voluptates, unde alias earum reiciendis a odit ab cumque minima dicta ad inventore recusandae? Incidunt aspernatur corporis totam quae recusandae! Dolor ea quis veritatis in repudiandae, fuga sequi velit molestias fugit suscipit aliquam neque sed aspernatur. Similique obcaecati, esse molestias commodi consequuntur quis beatae hic assumenda iste porro harum corrupti dolores? Ut, ea ipsa porro mollitia tenetur voluptates corporis molestias, cupiditate quia repudiandae necessitatibus recusandae minima ullam cum quae eum ducimus culpa esse possimus molestiae, nisi natus ad. Ipsa, numquam rerum debitis vitae nulla eos dolorum fugit tempore fuga tenetur sequi aspernatur, tempora quo eius mollitia cupiditate molestiae accusantium iusto? Dolor, fuga tempore. Voluptates, nesciunt? Similique dolore cum voluptatum omnis corrupti maiores provident quibusdam officiis magnam veritatis facilis laboriosam, nobis, aut dicta expedita distinctio, aspernatur nulla vero! Omnis rerum corporis vel facilis ipsam facere exercitationem magni cumque ullam eaque, possimus quam accusantium placeat culpa. Expedita tenetur, nam quo adipisci, eligendi repellendus amet esse in fugit similique perspiciatis dicta ipsam laudantium aspernatur quidem tempore architecto consectetur mollitia vero debitis? Placeat!" />
      </DivMain>
      <Imgteste src={Image1} alt="" />
    </DivContent>

    <DivContent>
      <Imgteste src={Image1} alt="" />

      <DivMain>
        <ContentMain title="Lorem Ipsum" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rerum at aperiam assumenda velit accusamus molestias nostrum enim quibusdam repudiandae voluptates non similique fuga officiis consequatur culpa quidem nihil, deserunt architecto! Voluptates, unde alias earum reiciendis a odit ab cumque minima dicta ad inventore recusandae? Incidunt aspernatur corporis totam quae recusandae! Dolor ea quis veritatis in repudiandae, fuga sequi velit molestias fugit suscipit aliquam neque sed aspernatur. Similique obcaecati, esse molestias commodi consequuntur quis beatae hic assumenda iste porro harum corrupti dolores? Ut, ea ipsa porro mollitia tenetur voluptates corporis molestias, cupiditate quia repudiandae necessitatibus recusandae minima ullam cum quae eum ducimus culpa esse possimus molestiae, nisi natus ad. Ipsa, numquam rerum debitis vitae nulla eos dolorum fugit tempore fuga tenetur sequi aspernatur, tempora quo eius mollitia cupiditate molestiae accusantium iusto? Dolor, fuga tempore. Voluptates, nesciunt? Similique dolore cum voluptatum omnis corrupti maiores provident quibusdam officiis magnam veritatis facilis laboriosam, nobis, aut dicta expedita distinctio, aspernatur nulla vero! Omnis rerum corporis vel facilis ipsam facere exercitationem magni cumque ullam eaque, possimus quam accusantium placeat culpa. Expedita tenetur, nam quo adipisci, eligendi repellendus amet esse in fugit similique perspiciatis dicta ipsam laudantium aspernatur quidem tempore architecto consectetur mollitia vero debitis? Placeat!" />
      </DivMain>
    </DivContent>

    <DivContent>
      <DivMain>
        <ContentMain title="Lorem Ipsum" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rerum at aperiam assumenda velit accusamus molestias nostrum enim quibusdam repudiandae voluptates non similique fuga officiis consequatur culpa quidem nihil, deserunt architecto! Voluptates, unde alias earum reiciendis a odit ab cumque minima dicta ad inventore recusandae? Incidunt aspernatur corporis totam quae recusandae! Dolor ea quis veritatis in repudiandae, fuga sequi velit molestias fugit suscipit aliquam neque sed aspernatur. Similique obcaecati, esse molestias commodi consequuntur quis beatae hic assumenda iste porro harum corrupti dolores? Ut, ea ipsa porro mollitia tenetur voluptates corporis molestias, cupiditate quia repudiandae necessitatibus recusandae minima ullam cum quae eum ducimus culpa esse possimus molestiae, nisi natus ad. Ipsa, numquam rerum debitis vitae nulla eos dolorum fugit tempore fuga tenetur sequi aspernatur, tempora quo eius mollitia cupiditate molestiae accusantium iusto? Dolor, fuga tempore. Voluptates, nesciunt? Similique dolore cum voluptatum omnis corrupti maiores provident quibusdam officiis magnam veritatis facilis laboriosam, nobis, aut dicta expedita distinctio, aspernatur nulla vero! Omnis rerum corporis vel facilis ipsam facere exercitationem magni cumque ullam eaque, possimus quam accusantium placeat culpa. Expedita tenetur, nam quo adipisci, eligendi repellendus amet esse in fugit similique perspiciatis dicta ipsam laudantium aspernatur quidem tempore architecto consectetur mollitia vero debitis? Placeat!" />
      </DivMain>
      <Imgteste src={Image1} alt="" />
    </DivContent>

    <Header padding="80px" fontSize="18px">
      <h1>Contato</h1>
    </Header>

    <footer>
      
    </footer>
  </>
  )
}

export default App
