import Navbar from './components/Nav/Navbar';
import Head from 'next/head';
function HomeScreen() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
        <meta name='description' content='Rifki Andriyanto' />
      </Head>

      <Navbar />

      <section className='hero'>
        <div className='container container-flex'>
          <div className='text-wrapper '>
            <h1 className='title'>Hi there 👋 I'm Rifki</h1>
            <p className='description'>
              I'm a full stack developer. I am always learning new things by
              exploring and improving my skills and abilities in application
              development and optimization.
            </p>
            <p className='description'>
              I open sourced some side projects on{' '}
              <a href='http://github.com/rifkiandriyanto'>github</a>
            </p>
          </div>
          <div className='image-wrapper-sketsa main '>
            <img src='icons/dark-sketsa.svg' alt='Self-Portrait' />
          </div>
        </div>
        <div className='container container-flex'>
          <div className='footer'>
            Development using Next js made with ❤️ in Jakarta
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
