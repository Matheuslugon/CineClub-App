import React, { FC } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface CardProps {
    image: string
    title: string
    description: string
}

const Card: FC<CardProps> = ({title, description, image}) => {
    return(
    <IonCard>
      <img alt="Silhouette of mountains" src={image} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>Outro texto</IonCardSubtitle>
      </IonCardHeader>
  
      <IonCardContent>{description}</IonCardContent>
    </IonCard>
    )
   
}

export default Card; 