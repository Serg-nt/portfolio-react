import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactsForm}>
                    <input className={style.input} />
                    <input className={style.input} />
                    <textarea className={style.input} />
                </form>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    );
}