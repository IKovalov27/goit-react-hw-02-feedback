import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.list}>
            {options.map(option => (
                <li className={css.item} key={option}>
                    <button className={css.button} type="button" name={option} onClick={onLeaveFeedback}> {option} </button>
                </li>
            ))}
        </ul>
    );
}