import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainBlockContainer}`}>
                <div className={style.text}>
                    <span>Привет!</span>
                    <span>Меня зовут Иван Иванов.</span>
                    <span>Я front-end разработчик</span>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}
