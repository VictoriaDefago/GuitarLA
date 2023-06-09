import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout title={'Nosotros'} description='Sobre Nosotros, Guitar LA, blog de música' >

      <main className='container'>
        <h1 className='heading'>Nosotros</h1>
        <div className={styles.content}>
          <Image src="/img/nosotros.jpg" alt='Imagen Nosotros Guitar LA' width={1000} height={800} />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero eros, pretium ac interdum ac, varius ac massa. Proin dictum aliquam blandit. Nulla facilisi. Maecenas dignissim cursus dui, sed ornare felis molestie et. In hac habitasse platea dictumst. Nulla turpis justo, egestas a velit et, hendrerit interdum ante. Vivamus quis nisi molestie, sagittis est sed, convallis magna. Nunc suscipit ultricies mollis.</p>
            <p>Praesent sollicitudin lacinia tortor, at rutrum diam pretium quis. Praesent ac dolor ante. Praesent eu velit auctor, maximus enim non, mattis ipsum. Vestibulum blandit ultrices diam, sit amet euismod sem maximus et. Morbi et posuere dui, sed gravida tellus. Nulla turpis justo, egestas a velit et, hendrerit interdum ante. sed ornare felis molestie et. In hac habitasse platea dictumst. Nulla turpis justo, egestas a velit et.</p>
          </div>
        </div>
      </main>

    </Layout>
  )
}
