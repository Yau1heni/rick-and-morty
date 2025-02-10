import {ChangeEvent, FC, useEffect, useRef} from "react";
import {getSignature} from "@/utils";
import styles from "./search-field.module.css";

type SearchFieldProps = {
  value: string
  onChange: (value: string) => void;
  quantity?: number;
}

export const SearchField: FC<SearchFieldProps> = (props) => {
  const {onChange, value, quantity = 0} = props
  const inputRef = useRef<HTMLInputElement>(null)
  const text = getSignature(quantity)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={styles.searchField}>
      <input placeholder={'Search characters...'}
             type="text"
             value={value}
             className={styles.input}
             onChange={onChangeHandler}
             ref={inputRef}/>
      {quantity !== 0 && <span className={styles.bottomSignature}>{text}</span>}
    </div>
  );
};
