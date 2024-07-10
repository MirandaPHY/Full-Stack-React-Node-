import { Container, Accordion, Button,Alert } from "react-bootstrap";

function Ajuda() {
    return(
        <main>
       <Container>
        <h1>Ajuda</h1>
        <hr />
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
                <Accordion.Body>
                    Este sistema foi desenvolvido para 
                    facilitar a vida de quem precisa de uma.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Sobre a empresa</Accordion.Header>
                <Accordion.Body>Esta empresa desenvolve soluções focadas em produtividade</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Como funciona?</Accordion.Header>
                <Accordion.Body>Para utilizar o sistema, basta cadastrar-se e escolher o plano </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Button className="mt-3 me-2">Entre em Contato</Button>
        <Button className="mt-3 me-2" variant="outline-danger">Denunciar</Button>
        <Alert className="mt-2" variant="warning">Atenção! estamos em manutenção.</Alert>
       </Container>
       </main>
    );
}

export default Ajuda;