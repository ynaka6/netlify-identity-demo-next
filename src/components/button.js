import styles from './button.module.css'

export default function Button(props) {
  const className = [styles.primary, props.className].join(" ");
  return (
    <button
      type="button"
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}