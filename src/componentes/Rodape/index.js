import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul className="redeSociais">
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src="./imagens/fb.png" alt="fecebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src="./imagens/ig.png" alt="instagran" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src="./imagens/tw.png" alt="tiwtter" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <p>
          <a href="https://prwm.vercel.app" target="_blank" rel="noreferrer">
            Desenvolvido por Renan W. Montanari - T6 ONE Alura
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Rodape;
