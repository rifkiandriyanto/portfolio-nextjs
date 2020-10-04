import Navbar from './components/Nav/Navbar';
import Head from 'next/head';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />
      
      <section className='hero'>
        <div className='container'>
          <div className='text-wrapper w-full'>
            <h1 className='title'>Portfolio</h1>

            <div className='portfolio-wrapper portfolio-flex'>
              <div className='portfolio-item'>
                <img
                  src='/commerce.png'
                  className='portfolio-image'
                  alt='Ecommerce App React Native'
                />

                <h4 className='portfolio-name'>Ecommerce App</h4>
                <div className='portfolio-category'>
                  Ecommerce App React Native
                </div>
              </div>
              <div className='portfolio-item'>
                <img
                  src='/pos.png'
                  className='portfolio-image'
                  alt='Pos React Website'
                />

                <h4 className='portfolio-name'>Pos App</h4>
                <div className='portfolio-category'>Pos React Website</div>
              </div>
            </div>
            <br />

            <div className='portfolio-wrapper portfolio-flex'>
              <div className='portfolio-item'>
                <img
                  src='/chat.png'
                  className='portfolio-image'
                  alt='Chat App React Native'
                />

                <h4 className='portfolio-name'>Chat App React Native</h4>
                <div className='portfolio-category'>Mobile Apps</div>
              </div>
              <div className='portfolio-item'>
                <img
                  src='/graphql.png'
                  className='portfolio-image'
                  alt='Website React-Graphql'
                />

                <h4 className='portfolio-name'>Album list</h4>
                <div className='portfolio-category'>Website React-Graphql</div>
              </div>
            </div>
            <div className='footer'>
              {' '}
              Development using Next js made with ❤️ in Jakarta
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
