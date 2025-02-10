import {FC} from 'react';
import {CharacterStatus, DateFormat, VariantPrefix} from "@/types";
import {getStyleVariant} from "@/utils";
import clsx from 'clsx';
import {Dayjs} from "dayjs";
import styles from './card.module.css'

type CardProps = {
  index: number;
  name: string,
  status: CharacterStatus;
  species: string;
  created: Dayjs;
}

export const Card: FC<CardProps> = (props) => {
  const {species, status, name, index, created} = props
  const cardStyles = clsx(styles.card, styles[getStyleVariant(index, VariantPrefix.Item)])
  const titleStyles = clsx(styles[getStyleVariant(index, VariantPrefix.Title)])
  const textStatusStyles = clsx(styles.text, styles[status.toLowerCase()])
  const formattedDate = created.format(DateFormat.DOT_FORMAT);

  return (
    <div className={cardStyles}>
      <h2 className={titleStyles}>{name} - {species}</h2>
      <div className={styles.cardFooter}>
        <div className={styles.statusContainer}>
          <h3 className={clsx(styles.text, styles.textGray)}>
            Status: <span className={textStatusStyles}>{status}</span>
          </h3>
        </div>
        <h3 className={clsx(styles.text, styles.textGray)}>Created: {formattedDate}</h3>
      </div>
    </div>
  );
};
