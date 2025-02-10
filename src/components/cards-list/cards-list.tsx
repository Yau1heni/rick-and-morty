import {FC} from 'react';
import styles from './card-list.module.css'
import {Character} from "@/types";
import {Card} from "./card/card.tsx";
import dayjs from "dayjs";
import {BeatLoader} from "react-spinners";

type CardsListProps = {
  cards?: Character[]
  isLoading: boolean;
}

export const CardsList: FC<CardsListProps> = (props) => {
  const {cards, isLoading} = props

  if (isLoading) {
    return <BeatLoader className={styles.loader}/>
  }

  if (cards && cards.length === 0) {
    return null
  }

  return (
    <div className={styles.cardsList}>
      {cards?.map(({id, name, status, species, created}, i) => (
        <Card index={i} created={dayjs(created)} key={id} name={name} status={status} species={species}/>
      ))}
    </div>
  );
};

