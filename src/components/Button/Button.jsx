import React from "react";
import Link from 'next/link'
import styles from './button.module.css'

const Button =({text, url, onClick, className})=>
{
    return (<>
            {url ?     
            <Link href={url}>
                <button className={`${styles.container} ${className}`}> {text} </button>
            </Link>
            : 
                <button className={`${styles.container} ${className}`} onClick={onClick}>
                    {text}
                </button>
        }
        </>
    )
}

export default Button