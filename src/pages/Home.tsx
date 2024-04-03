import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { searchOutline, filterCircleOutline } from "ionicons/icons";
import { Header } from "../components/Header";
import Card from "../components/Card";
import { useEffect, useState } from "react";

interface MovieProps {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

const Home: React.FC = () => {
  const [popular, setPopular] = useState<MovieProps[]>([])

  // const data = fetch("https://api.themoviedb.org/3/movie/popular?api_key=1f54bd990f1cdfb230adb312546d765d").then((response) => {
  //   setPopular(response.json())
  // })

  useEffect(() => {
    (async () => {
      await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=1f54bd990f1cdfb230adb312546d765d"
      )
        .then(async (response) => {
          const data = await response.json();
          setPopular(data.results);
        })
    })();
  }, []);

  return (
    <IonPage >
      <Header title="CINE CLUB" />
      <IonContent fullscreen={true} className="ion-padding">
        <IonGrid>
          <IonRow>
            {popular.map((item) => (
              <IonCol key={item.title} size="12" sizeMd="2" sizeLg="3">
                <Card
                  image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  title={item.title}
                  description={item.overview}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
