import Styles from '@/components/codeRecipes/Nav.module.scss'


export const Nav = () => {
  return(
    <>
      <ul className={Styles.navList}>
        <li className={Styles.navItem}><a href="#" data-hover="トップ">とっぷ</a></li>
        <li className={Styles.navItem}><a href="#" data-hover="ニュース">にゅーす</a></li>
        <li className={Styles.navItem}><a href="#" data-hover="アバウト">あばうと</a></li>
      </ul>
    
    </>
  )
}