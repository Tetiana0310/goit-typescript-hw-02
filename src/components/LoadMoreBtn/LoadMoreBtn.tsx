import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnView {
  loadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnView> = ({ loadMore }) => {
  return (
    <button className={css.btn} onClick={loadMore}>
      Load more
    </button>
  );
}
export default LoadMoreBtn;