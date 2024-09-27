
// Componentes

import { Avatar } from './Avatar'

// Estilos

import styles from './Comment.module.css'

// Bibliotecas

import { useState } from 'react';
import { ThumbsUp, Trash } from '@phosphor-icons/react'


export function Comment({ content, onDeleteComment }) {

    const [ likeCount, setLikeCount ] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/D1ng0ls.png" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo Santos</strong>
                            <time title="20 de Setembro às 14:54h" dateTime="2024-09-20 14:53:25">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar o comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}