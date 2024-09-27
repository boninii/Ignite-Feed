
// Componentes

import { Avatar } from './Avatar'

// Estilos

import styles from './Sidebar.module.css'

// Bibliotecas 

import { PencilLine } from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            
            <img 
                src="https://media.licdn.com/dms/image/v2/D4E16AQGcVhdHGSGh8g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1726419650235?e=1732147200&v=beta&t=hHDsru7HzaAGw9CdyH2usb2s0mD-SO-s8CUhLPPDxYI"
                className={styles.cover}
            />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/boninii.png" />
                <strong>Pedro H. Bonini</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil.
                </a>
            </footer>

        </aside>
    )
}