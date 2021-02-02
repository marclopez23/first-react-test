import List from "./List";
function Footer({ lista }) {
  return (
    <footer className="footer">
      <List items={lista} />
    </footer>
  );
}

export default Footer;
