import { searchOutline, filterCircleOutline } from "ionicons/icons";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FC } from "react";

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader collapse="fade">
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon size="large" icon={filterCircleOutline}></IonIcon>
          </IonButton>
          <IonButton>
            <IonIcon size="large" icon={searchOutline}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
