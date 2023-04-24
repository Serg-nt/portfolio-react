import style from './MyWork.module.css';

export const MyWork = (props) => {
    return (
        <div className={style.myWork}>
            <div className={style.backgroundImg}>
                <button className={style.button}>Смотреть</button>
            </div>
            <div className={style.descriptionBlock}>
                <span className={style.title}>{props.title}</span>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}