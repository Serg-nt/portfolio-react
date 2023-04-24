import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill'

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Скиллы</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'JS description'}/>
                    <Skill title={'CSS'}  description={'CSS description'}/>
                    <Skill title={'React'}  description={'React description'}/>
                </div>
            </div>
        </div>
    );
}