import React from "react";
import './AllTreatments.css'
import Card from 'react-bootstrap/Card';
import treatment1 from '../../assets/img/treatment1.jpg'
import treatment2 from '../../assets/img/treatment2.jpg'
import treatment3 from '../../assets/img/treatment3.jpg'
import treatment4 from '../../assets/img/treatment4.jpg'
import treatment5 from '../../assets/img/treatment5.jpg'
import treatment6 from '../../assets/img/treatment6.jpg'


export const AllTreatments = () => {

    return (
        <div className="allTreatmentsDesign">
            <Card className="treatmentCard">
                <Card.Img variant="top" src={treatment1} className="treatmentImage" />
                <Card.Body>
                    <Card.Title className="treatmentTitle">Consulta general</Card.Title>
                    <Card.Text>
                    En nuestra consulta general, ofrecemos un examen completo de tu salud bucal para detectar y prevenir problemas dentales, brindándote recomendaciones personalizadas para cuidar tu sonrisa.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="treatmentCard">
                <Card.Img variant="top" src={treatment2} className="treatmentImage"/>
                <Card.Body>
                    <Card.Title className="treatmentTitle">Empastes y reconstrucciones</Card.Title>
                    <Card.Text>
                    Reparamos tus dientes dañados o con caries utilizando empastes y reconstrucciones duraderas y estéticas, restaurando su funcionalidad y belleza natural
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="treatmentCard">
                <Card.Img variant="top" src={treatment3} className="treatmentImage"/>
                <Card.Body>
                    <Card.Title className="treatmentTitle">Blanqueamiento dental</Card.Title>
                    <Card.Text>
                    Con nuestro tratamiento de blanqueamiento dental, podemos aclarar el tono de tus dientes y brindarte una sonrisa más brillante y atractiva, eliminando manchas y decoloraciones.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="treatmentCard">
                <Card.Img variant="top" src={treatment4} className="treatmentImage"/>
                <Card.Body>
                    <Card.Title className="treatmentTitle">Ortodoncia</Card.Title>
                    <Card.Text>
                    Mediante la ortodoncia, corregimos la posición de los dientes y la mandíbula para mejorar la estética y la funcionalidad de tu sonrisa, utilizando aparatos como brackets o alineadores transparentes.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="treatmentCard">
                <Card.Img variant="top" src={treatment5} className="treatmentImage"/>
                <Card.Body>
                    <Card.Title className="treatmentTitle">Implantes y prótesis</Card.Title>
                    <Card.Text>
                    Mediante implantes dentales y prótesis, restauramos dientes perdidos, brindándote una solución duradera y estética que mejora la función y la apariencia de tu sonrisa.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="treatmentCard">
                <Card.Img variant="top" src={treatment6} className="treatmentImage" />
                <Card.Body>
                    <Card.Title className="treatmentTitle">Odontopediatría</Card.Title>
                    <Card.Text>
                    Nuestro equipo especializado en odontopediatría se encarga de cuidar la salud dental de tus hijos, proporcionando tratamientos preventivos, educación y un ambiente cómodo y amigable.
                    </Card.Text>
                </Card.Body>
            </Card>
           
        </div>
    )
}




