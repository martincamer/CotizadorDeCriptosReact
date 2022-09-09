import styled from "@emotion/styled";

const Resultados = styled.div`
  color: #fff;
  font-size: 22px;
  background-color: #7a7dfe;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Texto = styled.p`
  font-size: 18px;
`;

const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
    color: #000158;
    border-bottom: 2px solid;
  }
`;

const ImagenCrypto = styled.img`
  width: 50%;
  height: 200px;
  text-align: center;
`;

const ContentCryptos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  gap: 5px;
  background-color: #c0c0c055;
  padding: 20px;
`;

const ContentCryptosImg = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
`;

export const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Resultados>
      <ContentCryptosImg>
        <ImagenCrypto
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="IMAGEN CRIPTO"
        />
      </ContentCryptosImg>
      <ContentCryptos>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>

        <Texto>
          El precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>

        <Texto>
          Variacion ultimas 24hrs: <span>{CHANGEPCT24HOUR}</span>
        </Texto>

        <Texto>
          Ultima actualizacion <span>{LASTUPDATE}</span>
        </Texto>
      </ContentCryptos>
    </Resultados>
  );
};
