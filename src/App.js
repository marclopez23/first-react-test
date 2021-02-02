import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  const title = "Prueba en React";
  const listaBody = ["elemento body 1", "elemento body 2", "elemento body 3"];
  const listaFooter = [
    "elemento footer 1",
    "elemento footer 2",
    "elemento footer 3",
  ];
  const descripcion =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt purus et quam dignissim ultrices. Integer at hendrerit felis, et congue eros. Nulla ultricies aliquam ante, at varius erat sagittis et. Praesent sodales turpis nec nulla elementum, eget lacinia urna fermentum. Maecenas eget felis sed nulla imperdiet posuere sit amet eget justo. Duis semper orci ut eros posuere convallis. Mauris ut felis luctus, faucibus ipsum eget, bibendum leo. Phasellus quis pretium massa, nec elementum ex. Sed pretium orci metus, vel tincidunt tortor semper non. Vestibulum est massa, convallis vitae venenatis at, commodo euismod ligula. Proin a porttitor dui, eu malesuada neque. Nunc ut blandit augue. Quisque auctor tortor pretium ultrices luctus. ";
  return (
    <div id="content">
      <Header title={title} />
      <body>
        <Body lista={listaBody} descripcion={descripcion} />
      </body>
      <Footer lista={listaFooter} />
    </div>
  );
}

export default App;
