
import styles from '../src/styles/Home.module.css'
import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import sample from '../public/images/sample.png'
import TextField  from '@mui/material/TextField'


export default function Home() {
  
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        
        <div className={styles.p1}>
        <p>
          UPLOAD  
        </p>
        </div>

        <div className={styles.p2}>
        <p>
          SCARVES  
        </p>
        </div>

        <div className={styles.p3}>
        <p>
          ABOUT US  
        </p>
        </div>
        
        <div className={styles.image}>

          <Image src={sample} alt='sample pic'/>

        </div>

        <div className={styles.searchbar}>

          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>

        </div>

        <div className={styles.footer}>
          
             
    
        </div>
      </div>
    </div>
  )
}
