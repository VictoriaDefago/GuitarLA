import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    isRouteErrorResponse,
    useRouteError,
    Link
} from '@remix-run/react'
import { useState, useEffect } from 'react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
    return [
      {charset: "utf-8"},
      {title: "Guitar LA"},
      {viewport: "width=device-width, initial-scale=1"} 
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
        },
        {
            rel: 'preconnect',
            href: "https://fonts.googleapis.com",
            
        },
        {
            rel: 'preconnect',
            href: "https://fonts.gstatic.com",
            crossOrigin: 'true',
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit&display=swap',
        },
        {
            rel: 'stylesheet',
            href: styles,
        },
    ]
}


export default function App() {

    const shoppingCartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('shoppingCart')) ?? [] : null
    const [shoppingCart, setShoppingCart] = useState(shoppingCartLS)

    useEffect( () => {
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
    }, [shoppingCart])

    const addShoppingCart = guitar => {
        if(shoppingCart.some(guitarState => guitarState.id === guitar.id)){
            const updatedShoppingCart = shoppingCart.map(guitarState => {
                if(guitarState.id === guitar.id){
                    guitarState.quantity = guitar.quantity
                }
                return guitarState
            })
            setShoppingCart(updatedShoppingCart)
        } else {
            setShoppingCart([...shoppingCart, guitar])
        }
    }

    const updateQuantity = guitar => {
        const updatedShoppingCart = shoppingCart.map(guitarState => {
            if(guitarState.id === guitar.id){
                guitarState.quantity = guitar.quantity
            }
            return guitarState
        })
        setShoppingCart(updatedShoppingCart)
    }

    const deleteGuitar = id => {
        setShoppingCart(shoppingCart.filter( guitarState => guitarState.id !== id))
    }
     
    return (
        <Document>
            <Outlet 
                context={{
                    addShoppingCart,
                    shoppingCart,
                    updateQuantity,
                    deleteGuitar
                }}
            />
        </Document>
    )
}


function Document({children}) {
    return(
        <html lang='es'>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}


/** Error Handling */

export function ErrorBoundary() {
    let error = useRouteError();
  
    if (isRouteErrorResponse(error)) {
      return (
        <div>
          <h1>{error.status} {error.statusText}</h1>
          <p>{error.data}</p>
          <Link className='error-link' to='/' >Volver a la página principal</Link>
        </div>
      );
    } else if (error instanceof Error) {
      return (
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
          <Link className='error-link' to='/' >Volver a la página principal</Link>
        </div>
      );
    } else {
      return <h1>Unknown Error</h1>;
    }
  }