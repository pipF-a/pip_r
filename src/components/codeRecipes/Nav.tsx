import Styles from '@/components/codeRecipes/Nav.module.scss'


export const Nav = () => {
  return(
    <>
      <ul className={Styles.navList}>
        <li className={Styles.navItem}><a href="#" data-hover="トップ">Top</a></li>
        <li className={Styles.navItem}><a href="#" data-hover="ニュース">News</a></li>
        <li className={Styles.navItem}><a href="#" data-hover="知る">About</a></li>
      </ul>
    
    </>
  )
}