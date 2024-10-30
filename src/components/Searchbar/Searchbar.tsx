import toast from "react-hot-toast";
import css from "../Searchbar/Searchbar.module.css"

export default function Searchbar({ onSubmit }) {
    const onSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const value = form.query.value;
    if (!value) {
      toast.error("Please, enter your query", {
        style: {
          color: "#ffffff",
          backgroundColor: "#ff6b6b",
        },
      });
      return;
    }
    onSubmit(value);
    form.reset();
  };
    return (<header className={css.header}>
  <form className= {css.form} onSubmit={onSearch}>
    <input className={css.input}
  name="query"
  type="text"
  autoComplete="off"
  autoFocus
  placeholder="Search images and photos"
/>
    <button type="submit" className={css.button}>Search</button>
  </form>
</header>) 
}