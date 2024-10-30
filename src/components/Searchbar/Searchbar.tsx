import toast from "react-hot-toast";
import css from "../Searchbar/Searchbar.module.css"

interface SearchBarView {
  onSubmit: (value: string) => void;
}

const SearchBar: React.FC<SearchBarView> = ({ onSubmit }) => {
     const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;;
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
export default SearchBar