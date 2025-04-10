import Styles from '@/components/codeRecipes/Balloon.module.scss'

export const Balloon = () => {
  return (
    <>
      <div className={Styles.balloon}>
        <p className={Styles.balloonText}>ここにテキスト</p>
      </div>
    </>
  )
}