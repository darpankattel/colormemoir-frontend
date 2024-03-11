import React from "react";
import Link from 'next/link'
import styles from './button.module.css'
import { RiImageAddLine } from "react-icons/ri";

const Button =({text, url, onClick, className, icon})=>
{
    return (<>
            {url ?     
                <Link href={url}>
                    <button className={`${styles.container} ${className}`}>
                        {icon && <RiImageAddLine />} {text}
                    </button>
                </Link>
            : 
                <button className={`${styles.container} ${className}`} onClick={onClick}>
                   {icon && <RiImageAddLine />} {text}
                </button>
        }
        </>
    )
}

export default Button