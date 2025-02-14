import clsx from 'clsx'
import styles from './buttons.module.scss'

function Button({className, primary, ...props}) {
  return (
    <button type='button' 
    className={clsx(
      styles.button,
      className,  
      primary && styles.button_primary
    )} 
    {...props} />  

)
}

export { Button as default, Button }


