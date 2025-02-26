import {FC} from 'react';
import styles from './card-list.module.css'
import {Character} from "@/types";
import {Card} from "./card/card.tsx";
import dayjs from "dayjs";
import {BeatLoader} from "react-spinners";
import {EmptyCardList} from "./empty-card-list/empty-card-list.tsx";

type CardsListProps = {
  cards?: Character[]
  isLoading: boolean;
  isValidSearchTerms: boolean
}

export const CardsList: FC<CardsListProps> = (props) => {
  const {cards, isLoading, isValidSearchTerms} = props

  if (isLoading) {
    return <BeatLoader className={styles.loader}/>
  }

  if (isValidSearchTerms && cards?.length === 0) {
    return <EmptyCardList/>
  }

  return (
    <div className={styles.cardsList}>
      {cards?.map(({id, name, status, species, created, url}, i) => (
        <Card index={i} created={dayjs(created)} key={id} name={name} status={status} species={species} url={url}/>
      ))}
    </div>
  );
};

