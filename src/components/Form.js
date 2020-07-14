import React from 'react';
import styles from './Form.module.css';
import useSelect from './hooks/useSelect';

const Form = ({setCategory}) => {

    const options = [
        { value: 'world', label: 'World'},
        { value: 'nation', label: 'Nation'},
        { value: 'business', label: 'Business'},
        { value: 'technology', label: 'Technology'},
        { value: 'entertainment', label: 'Entertainment'},
        { value: 'sports', label: 'Sports'},
        { value: 'science', label: 'Science'},
        { value: 'health', label: 'Health'}
    ]

    const [category, SelectNews] = useSelect('general', options);

    const searchNews = e => {
        e.preventDefault();
        
        setCategory(category)
    }

    return ( 
        <div className={`${styles.searcher} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Find news by category</h2>
                    <SelectNews />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Search"
                        />
                    </div>
                </form>

            </div>
        </div>

     );
}
 
export default Form;