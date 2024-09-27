
// Componentes

import { Comment } from './Comment'
import { Avatar } from './Avatar'

// Estilos

import styles from './Post.module.css'

// Bibliotecas

import { format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Post( { author, publishedAt, content } ) {

    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(publishedAt)

    // estado = valor de variáveis que eu quero que sejam monitoradas

    // setComments função de monitoramento do próprio react

    // event.target = mostra o elemento que esta recebendo o evento

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState([ 
        'Post joia, hein!'
    ]);

    const [newCommentText, setNewCommentText] = useState('')

    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment() {
        event.preventDefault();

        const newCommentText = event.target.comment.value;

        // Imutabildiade (... = spread operator, copia os valores passados)
        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        
        // imbutabilidade -> as variáveis nao sofrem mutação, nós criamos um novo valo ( um novo espaço na memória )
        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={ styles.post }>

            <header>
                <div className={ styles.author }>
                    <Avatar src={ author.avatarUrl }/>
                    <div className={ styles.authorInfo }>
                        <strong>{ author.name }</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>

                <time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() } >{ publishedDateRelativeToNow }</time>
            </header>

            <div className={styles.content}>
                { content.map(line => {
                    if ( line.type === 'paragraph' ) {
                        return <p key={line.content}>{ line.content }</p>
                    }
                    else if ( line.type === 'link' ) {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment" 
                    placeholder="Deixe um comentário!" 
                    value={newCommentText}
                    onChange={handleNewCommentChange}    
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                { comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                }) }
            </div>


        </article>
    )
}