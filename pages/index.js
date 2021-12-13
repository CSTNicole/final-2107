
import styles from '../src/styles/Home.module.css'
import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import sample from '../public/images/sample.png'
import Link from 'next/link'
//import TextField  from '@mui/material/TextField'

import Search from '../src/components/searchbar'


export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        
        <div className={styles.p1}>
        <p>
          <Link href='/firstpage'>
          UPLOAD
          </Link>
        </p>
        </div>

        <div className={styles.p2}>
        <p>
          <Link href='/secondpage'>
          SCARVES
          </Link>
        </p>
        </div>

        <div className={styles.p3}>
        <p>
          <Link href='/thirdpage'>
          ABOUT US
          </Link>
        </p>
        </div>
        
        <div className={styles.image}>

          <Image src={sample} alt='sample pic'/>

        </div>

        <div className={styles.login}>
            <p>
              <Link href='/loginpage'>
              Login
              </Link>
            </p>
        </div>

        <div className={styles.searchbar}>

          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined"/> */}
          <Search />
        </div>

        <div className={styles.footer}>
          
        </div>
      </div>
    </div>
  )
}
