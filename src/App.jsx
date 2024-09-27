
// Componentes 

import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

// Estilos

import './global.css';
import styles from './App.module.css'

// author { avatarUrl: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/boninii.png',
      name: 'Pedro Bonini',
      role: 'Web Developer'      
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-09-24 11:27:41'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/D1ng0ls.png',
      name: 'Eduardo Santos',
      role: 'Web Developer'      
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-09-23 11:27:41'),
  },
]

export function App() {
  return  (
    <div>

      <Header />

      <div className={styles.wrapper}>
  
          <Sidebar />

          <main>
  
              { posts.map(post => {
                return (
                  <Post 
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  /> 
                )
              }) }

          </main>

      </div>

    </div>
  )
}
