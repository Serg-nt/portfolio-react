import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {MyWork} from "./work/MyWork";

export const MyWorks = () => {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.myWorks}>
                    <MyWork image={'Картинка'} title={'Название проекта'} description={'Краткое описание'} />
                    <MyWork image={'Картинка'} title={'Название проекта'} description={'Краткое описание'} />
                </div>
            </div>
        </div>
    );
}