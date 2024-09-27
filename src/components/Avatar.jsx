
// Estilos

import styles from './Avatar.module.css'

export function Avatar( { hasBorder = true, src } ) { // desestruturação de objeto js
    // export function Avatar(props) {
    // const hasBorder = props.hasBorder != false; // Se não for enviada, também é diferente de false

    return (
        <img 
            src={src} 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        />
    )
}