import styles from '../styles/Home.module.css'

const Search = () => (
    <div className={styles.search}>
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden"></span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search"
                name="s" 
            />
            {/* <button type="submit">Search</button> */}
        </form>
    </div>    
)
export default Search;